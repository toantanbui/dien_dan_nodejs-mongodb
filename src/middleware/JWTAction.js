require("dotenv").config();
import jwt from "jsonwebtoken";

const createJWT = (payload) => {
    // let payload = { name: 'Eric', address: 'Ha Noi' };
    let key = process.env.JWT_SECRET;
    let options = { expiresIn: '1h' };
    let token = null;
    try {
        token = jwt.sign(payload, key);
    } catch (err) {
        console.log(err)
    }

    console.log('Gia trị token: ', token)
    return token;
}


const verifyToken = (token) => {
    let key = process.env.JWT_SECRET;
    let decoded = null;
    try {
        decoded = jwt.verify(token, key);

    } catch (err) {
        console.log(err);
    }
    return decoded;
}

// const checkUserJWT = (req, res, next) => {
//     let cookies = req.cookies;
//     if (cookies && cookies.jwt) {
//         let token = cookies.jwt;
//         console.log("token", token)
//         let decoded = verifyToken(token);
//         if (decoded) {
//             req.user = decoded;
//             next();
//         } else {
//             return res.status(401).json({
//                 EC: -1,
//                 DT: '',
//                 EM: 'Not authenticated the user'
//             })
//         }

//     } else {
//         return res.status(401).json({
//             EC: -1,
//             DT: '',
//             EM: 'Not authenticated the user'
//         })
//     }

// }

const checkUserJWT = async (req, res, next) => {

    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        let token = req.headers.authorization.split(' ')[1];

        console.log('gia tri token', JSON.parse(token))
        let decoded = verifyToken(JSON.parse(token));
        console.log('decoded', decoded)
        if (decoded) {
            req.user = decoded;
            next();
        } else {
            return res.status(401).json({
                EC: -1,
                DT: '',
                EM: 'Not authenticated the user'
            })
        }

    } else {
        return res.status(401).json({
            EC: -1,
            DT: '',
            EM: 'Not authenticated the user'
        })
    }

}

module.exports = {
    createJWT, verifyToken, checkUserJWT
}