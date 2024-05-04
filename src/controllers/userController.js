import userService from '../services/userService'


// let handleCreateUser = async (req, res) => {
//     try {
//         let users = await userService.handleCreateUser(req.body);
//         console.log(req.body)
//         return res.status(200).json(users)



//     } catch (e) {
//         console.log(e)
//         return res.status(200).json({
//             errCode: -1,
//             errMessage: 'server error'
//         })


//     }
// }
let handleLoginUsers = async (req, res) => {
    try {
        let users = await userService.handleLoginUsers(req.body);
        await res.cookie("jwt", users.token1, { httpOnly: true })
        console.log("giá trị đăng nhập", req.body)

        return res.status(200).json(users)



    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'server error'
        })


    }
}

let handleSignup = async (req, res) => {
    try {
        let users = await userService.handleSignup(req.body);
        return res.status(200).json(users)



    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'server error'
        })


    }
}

let handleLogout = async (req, res) => {
    try {
        let users = await userService.handleLogout();
        await res.cookie("jwt", "dang-xuat", { httpOnly: true })
        return res.status(200).json(users)



    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'server error'
        })


    }
}

let handleGetOneUser = async (req, res) => {
    try {
        let users = await userService.handleGetOneUser(req.query);

        return res.status(200).json(users)



    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'server error'
        })


    }
}

let handleEditOneUser = async (req, res) => {
    try {
        let users = await userService.handleEditOneUser(req.body);

        return res.status(200).json(users)



    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'server error'
        })


    }
}

let handleCreatePosts = async (req, res) => {
    try {
        let users = await userService.handleCreatePosts(req.body);
        console.log(req.body)
        return res.status(200).json(users)



    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'server error'
        })


    }
}

let handleGetPosts = async (req, res) => {
    try {
        let users = await userService.handleGetPosts(req.body);

        return res.status(200).json(users)



    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'server error'
        })


    }
}

let handleCreateComment1 = async (req, res) => {
    try {
        let users = await userService.handleCreateComment1(req.body);
        console.log(req.body)
        return res.status(200).json(users)



    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'server error'
        })


    }
}

let handleCreateComment2 = async (req, res) => {
    try {
        let users = await userService.handleCreateComment2(req.body);
        console.log(req.body)
        return res.status(200).json(users)



    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'server error'
        })


    }
}

let handleEditPosts = async (req, res) => {
    try {
        let users = await userService.handleEditPosts(req.body);
        console.log(req.body)
        return res.status(200).json(users)



    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'server error'
        })


    }
}

let handleAllGetPosts = async (req, res) => {
    try {
        let users = await userService.handleAllGetPosts();
        console.log(req.body)
        return res.status(200).json(users)



    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'server error'
        })


    }
}

let handleGetPostsById = async (req, res) => {
    try {
        let users = await userService.handleGetPostsById(req.body);
        console.log(req.body)
        return res.status(200).json(users)



    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'server error'
        })


    }
}

let handleGetPostsLike = async (req, res) => {
    try {
        let users = await userService.handleGetPostsLike();

        return res.status(200).json(users)



    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'server error'
        })


    }
}

let handleGetPostsTextSearch = async (req, res) => {
    try {
        let users = await userService.handleGetPostsTextSearch(req.body);
        console.log(req.body)
        return res.status(200).json(users)



    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'server error'
        })


    }
}

let handleDeletePosts = async (req, res) => {
    try {
        let users = await userService.handleDeletePosts(req.body);
        console.log(req.body)
        return res.status(200).json(users)



    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'server error'
        })


    }
}





module.exports = {
    // handleCreateUser,
    handleLoginUsers, handleSignup, handleLogout, handleGetOneUser, handleEditOneUser,
    handleCreatePosts, handleGetPosts, handleCreateComment1, handleCreateComment2,
    handleEditPosts, handleAllGetPosts, handleGetPostsById, handleGetPostsLike,
    handleGetPostsTextSearch, handleDeletePosts
}