
import db from '../models/index'
const _ = require('lodash');
const mongoose = require('mongoose');
import { createJWT } from '../middleware/JWTAction';
import modelsMongo from '../modelsMongo/modelsMongo';

const ObjectId = mongoose.Types.ObjectId;



// let handleCreateUser = (data) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             if (!data.firstName || !data.lastName || !data.email ||
//                 !data.password || !data.address || !data.roleId || !data.gender ||
//                 !data.phonenumber
//             ) {
//                 resolve({
//                     errCode: 1,
//                     errMessage: 'Missing paramater'
//                 })



//             } else {
//                 await db.Users.create({

//                     firstName: data.firstName,
//                     lastName: data.lastName,
//                     email: data.email,
//                     password: data.password,
//                     address: data.address,
//                     roleId: data.roleId,
//                     gender: data.gender,
//                     image: data.image,
//                     phonenumber: data.phonenumber,

//                 })
//                 resolve({
//                     errCode: 0,
//                     errMessage: 'create success',

//                 });
//             }

//         } catch (e) {
//             reject(e)


//         }
//     })
// }

let handleLoginUsers = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.email || !data.password) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing parameter'
                })

            } else {

                // let users = await db.Users.findOne({
                //     where: {
                //         email: data.email,
                //         password: data.password,

                //     }
                // })

                let users = await modelsMongo.Users.find({
                    email: data.email,
                    password: data.password,

                })

                console.log("gia trị dang nhap", users)


                if (!_.isEmpty(users)) {
                    let token = createJWT({
                        email: data.email,
                        password: data.password,

                        expiresIn: '1h'
                    });


                    resolve({
                        errCode: 0,
                        errMessage: 'successful login',
                        data: users[0]._id,
                        token1: token

                    });
                }
                else {
                    resolve({
                        errCode: 2,
                        errMessage: 'Wrong account or password, the account has not been confirmed',

                    });
                }

            }

        } catch (e) {
            reject(e)


        }
    })
}

let handleSignup = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.email || !data.password
            ) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing paramater'
                })



            } else {
                // await db.Users.create({
                //     email: data.email,
                //     password: data.password,
                //     firstName: data.firstName,
                //     lastName: data.lastName,
                //     address: data.address,
                //     gender: data.gender,
                //     roleId: data.roleId,
                //     phonenumber: data.phoneNumber
                // })

                await modelsMongo.Users.create({
                    email: data.email,
                    password: data.password,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    address: data.address,
                    gender: data.gender,
                    roleId: data.roleId,
                    phonenumber: data.phoneNumber

                })
                resolve({
                    errCode: 0,
                    errMessage: 'create success',

                });
            }

        } catch (e) {
            reject(e)


        }
    })
}

let handleLogout = () => {
    return new Promise(async (resolve, reject) => {
        try {

            resolve({
                errCode: 0,
                errMessage: 'Successfully logged out'
            })




        } catch (e) {
            reject(e)


        }
    })
}

let handleGetOneUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.id
            ) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing paramater'
                })



            } else {
                // let users = await db.Users.findOne({
                //     where: {
                //         id: data.id

                //     },
                //     raw: true,
                //     attributes: [
                //         'id', 'firstName',
                //         'lastName', 'email',
                //         'password', 'address',
                //         'roleId', 'gender',
                //         'image', 'status',
                //         'phonenumber', 'token',
                //         'createdAt', 'updatedAt', 'background'
                //     ]

                // })

                console.log("gia trị tham số", data.id, JSON.parse(data.id))

                let users = await modelsMongo.Users.findOne({
                    //JSON.parse(data.id) loại bỏ dấu ngoặc của chuỗi
                    _id: ObjectId(JSON.parse(data.id))
                })
                console.log('gia tri hiện tại', users)
                if (!_.isEmpty(users)) {

                    resolve({
                        errCode: 0,
                        errMessage: 'Get success',
                        data: users


                    });
                } else {
                    resolve({
                        errCode: 2,
                        errMessage: 'Id does not exist',


                    });
                }

            }

        } catch (e) {
            reject(e)


        }
    })
}

let handleEditOneUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (
                !data.id || !data.email || !data.password


            ) {

                resolve({
                    errCode: 1,
                    errMessage: 'Missing parameter'
                })



            } else {



                // let users = await db.Users.findOne({
                //     where: { id: data.id, email: data.email, password: data.password }


                // })

                let users = await modelsMongo.Users.find({
                    _id: ObjectId(JSON.parse(data.id)),
                    email: data.email,
                    password: data.password,

                })



                if (!_.isEmpty(users)) {
                    console.log('edit user', users)
                    // users.address = data.address;
                    // // users.email = data.email;
                    // users.firstName = data.firstName;

                    // users.lastName = data.lastName;

                    // users.password = data.password;
                    // users.phonenumber = data.phonenumber;
                    // users.roleId = data.roleId;

                    // users.gender = data.gender;
                    // users.image = data.image;
                    // users.background = data.background;



                    // await users.save();


                    await modelsMongo.Users.update({

                        address: users[0].address,
                        firstName: users[0].firstName,
                        lastName: users[0].lastName,
                        password: users[0].password,
                        phonenumber: users[0].phonenumber,
                        roleId: users[0].roleId,
                        gender: users[0].gender,

                        image: users[0].image,
                        background: users[0].background



                    },
                        {


                            address: data.address,
                            firstName: data.firstName,
                            lastName: data.lastName,
                            password: data.password,
                            phonenumber: data.phonenumber,
                            roleId: data.roleId,
                            gender: data.gender,

                            image: data.image,
                            background: data.background



                        })

                    resolve({
                        errCode: 0,
                        errMessage: 'edit success',
                    })
                } else (


                    resolve({
                        errCode: 2,
                        errMessage: 'user does not exist',
                    })
                )
            }


        } catch (e) {
            reject(e)


        }
    })

}



let handleCreatePosts = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.firstName || !data.lastName

            ) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing paramater'
                })



            } else {


                await modelsMongo.Posts.create({
                    firstName: data.firstName,
                    lastName: data.lastName,
                    idUser: data.id,
                    avatar: data.avatar,
                    email: data.email,
                    postName: data.postName,
                    postContent: data.postContent,
                    like: data.like,
                    comment: data.comment,
                    Comment1: data.Comment1,
                    time: new Date(),

                })



                resolve({
                    errCode: 0,
                    errMessage: 'create success',

                });
            }

        } catch (e) {
            reject(e)


        }
    })
}

let handleGetPosts = (data) => {

    return new Promise(async (resolve, reject) => {
        try {

            if (!data.id

            ) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing paramater'
                })



            } else {
                let users = await modelsMongo.Posts.find({
                    idUser: data.id

                })
                    .populate('Comment1')
                // .populate({
                //     path: 'Comment1',
                //     populate: { path: 'Comment2' }
                // })
                console.log('gia trị cần tìm', users)

                if (!_.isEmpty(users)) {
                    resolve({
                        errCode: 0,
                        errMessage: 'success',
                        data: users
                    })
                } else {
                    resolve({
                        errCode: 3,
                        errMessage: 'Not found',

                    })
                }
            }





        } catch (e) {
            reject(e)


        }
    })
}

let handleCreateComment1 = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.firstName || !data.lastName

            ) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing paramater'
                })



            } else {

                let users1 = await modelsMongo.Comment1.create({
                    idPosts: data.idPosts,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    email: data.email,
                    avatar: data.avatar,
                    content: data.content,

                    like: data.like,
                    comment: data.comment,

                })
                if (users1) {

                    let users = await modelsMongo.Posts.find({
                        _id: data.idPosts,

                    })
                    console.log('gt users la', users)
                    console.log('gt users la [0]', users[0])
                    if (!_.isEmpty(users[0])) {

                        let abc = await modelsMongo.Posts.update({
                            Comment1: users[0].Comment1,
                            comment: users[0].comment,

                        },
                            {

                                $push: { Comment1: users1._id },
                                comment: users[0].Comment1.length


                            })
                        console.log('gia trị cập nhập là', abc)

                    }

                    resolve({
                        errCode: 0,
                        errMessage: 'create success',

                    });
                }








            }

        } catch (e) {
            reject(e)


        }
    })
}

let handleCreateComment2 = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.firstName || !data.lastName

            ) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing paramater'
                })



            } else {


                await modelsMongo.Comment2.create({
                    firstName: data.firstName,
                    lastName: data.lastName,
                    email: data.email,
                    avatar: data.avatar,
                    content: data.content,

                    like: data.like,
                    comment: data.comment,

                })



                resolve({
                    errCode: 0,
                    errMessage: 'create success',

                });
            }

        } catch (e) {
            reject(e)


        }
    })
}

let handleEditPosts = (data) => {
    return new Promise(async (resolve, reject) => {
        try {

            if (!data.idPosts

            ) {
                console.log('thiếu tham so', data)

                resolve({
                    errCode: 1,
                    errMessage: 'Missing parameter'
                })



            } else {


                console.log('gia tri tham so', data.idPosts)

                let users = await modelsMongo.Posts.find({
                    _id: data.idPosts,

                })
                console.log('gt users la', users)
                console.log('gt users la [0]', users[0])
                if (!_.isEmpty(users[0])) {

                    await modelsMongo.Posts.update({
                        like: users[0].like,
                        isLike: users[0].isLike,


                    },
                        {
                            like: data.like,
                            isLike: data.isLike,




                        })
                    resolve({
                        errCode: 0,
                        errMessage: 'edit success',
                    })
                }


            }

        } catch (e) {
            reject(e)


        }
    })
}

let handleAllGetPosts = () => {

    return new Promise(async (resolve, reject) => {
        try {

            if (false

            ) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing paramater'
                })



            } else {
                let users = await modelsMongo.Posts.find({


                })
                    .populate('Comment1')
                    .limit(3)
                // .populate({
                //     path: 'Comment1',
                //     populate: { path: 'Comment2' }
                // })
                console.log('gia trị cần tìm', users)

                if (!_.isEmpty(users)) {
                    resolve({
                        errCode: 0,
                        errMessage: 'success',
                        data: users
                    })
                } else {
                    resolve({
                        errCode: 3,
                        errMessage: 'Not found',

                    })
                }
            }





        } catch (e) {
            reject(e)


        }
    })
}

let handleGetPostsById = (data) => {

    return new Promise(async (resolve, reject) => {
        try {

            if (!data.id

            ) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing paramater'
                })



            } else {
                let users = await modelsMongo.Posts.find({
                    _id: data.id

                })
                    .populate('Comment1')
                // .populate({
                //     path: 'Comment1',
                //     populate: { path: 'Comment2' }
                // })
                console.log('gia trị cần tìm', users)

                if (!_.isEmpty(users)) {
                    resolve({
                        errCode: 0,
                        errMessage: 'success',
                        data: users
                    })
                } else {
                    resolve({
                        errCode: 3,
                        errMessage: 'Not found',

                    })
                }
            }





        } catch (e) {
            reject(e)


        }
    })
}

let handleGetPostsLike = () => {

    return new Promise(async (resolve, reject) => {
        try {

            if (false

            ) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing paramater'
                })



            } else {
                let users = await modelsMongo.Posts.find({
                })
                    .sort({ time: -1 })
                    .limit(3)
                console.log('gia trị cần tìm', users)

                if (!_.isEmpty(users)) {
                    resolve({
                        errCode: 0,
                        errMessage: 'success',
                        data: users
                    })
                } else {
                    resolve({
                        errCode: 3,
                        errMessage: 'Not found',

                    })
                }
            }





        } catch (e) {
            reject(e)


        }
    })
}


let handleGetPostsTextSearch = (data) => {

    return new Promise(async (resolve, reject) => {
        try {

            if (!data.text

            ) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing paramater'
                })



            } else {
                console.log('giá trị của text là: ', data.text)

                // await modelsMongo.schema1.index({ parameterName: "text" });

                // let bb = await modelsMongo.ListVideo.createIndexes([
                //     { key: { movieName: "text" } }
                // ])
                // console.log('danh sách la', bb)


                const aa = await modelsMongo.Posts.listIndexes()
                console.log('danh sách la', aa)

                let users = await modelsMongo.Posts.find({
                    $text: { $search: data.text }
                    // duration: data.text

                })

                console.log('gia trị cần tìm', users)

                if (!_.isEmpty(users)) {
                    resolve({
                        errCode: 0,
                        errMessage: 'success',
                        data: users
                    })
                } else {
                    resolve({
                        errCode: 3,
                        errMessage: 'Not found',

                    })
                }
            }





        } catch (e) {
            reject(e)


        }
    })
}

let handleDeletePosts = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.id) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing parameter'
                })

            } else {
                await modelsMongo.Posts.deleteOne({
                    _id: data.id
                })

                resolve({
                    errCode: 0,
                    errMessage: 'successful delete',

                })



            }




        } catch (e) {
            reject(e)


        }
    })
}

let handleCreateUpdatePosts = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.idUser || !data.idPosts) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing parameter'
                })

            } else {
                if (!_.isEmpty(data.id)) {
                    let users = await modelsMongo.IsLikePosts.find({
                        _id: data.id
                    })

                    console.log('gia trị cần tìm', users)
                    if (!_.isEmpty(users)) {

                        await modelsMongo.IsLikePosts.update({

                            isLike: users[0].isLike,


                        },
                            {

                                isLike: data.isLike,

                            })



                    }

                } else {
                    await modelsMongo.IsLikePosts.create({
                        idUser: data.idUser,
                        idPosts: data.idPosts,
                        isLike: data.isLike,


                    })
                }





                let dataUpdate = await modelsMongo.Posts.find({
                    _id: data.idPosts,

                })
                console.log('đã tới công đoạn nay', dataUpdate)
                if (data.isLike) {


                    console.log('đã tới công đoạn nay +1')

                    await modelsMongo.Posts.updateOne({
                        like: dataUpdate[0].like,



                    },
                        {
                            like: dataUpdate[0].like + 1,


                        })


                } else {
                    console.log('đã tới công đoạn nay -1')
                    await modelsMongo.Posts.updateOne({
                        like: dataUpdate[0].like,



                    },
                        {
                            like: dataUpdate[0].like - 1,


                        })

                }



                resolve({
                    errCode: 0,
                    errMessage: 'success',

                })

            }




        } catch (e) {
            reject(e)


        }
    })
}

let handleGetIsLikePosts = (data) => {

    return new Promise(async (resolve, reject) => {
        try {

            if (!data.idPosts || !data.idUser

            ) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing paramater'
                })



            } else {
                let users = await modelsMongo.IsLikePosts.find({
                    idPosts: data.idPosts,
                    idUser: data.idUser

                })

                console.log('gia trị cần tìm', users)

                if (!_.isEmpty(users)) {
                    resolve({
                        errCode: 0,
                        errMessage: 'success',
                        data: users
                    })
                } else {
                    resolve({
                        errCode: 3,
                        errMessage: 'Not found',

                    })
                }
            }





        } catch (e) {
            reject(e)


        }
    })
}







module.exports = {
    handleLoginUsers, handleSignup, handleLogout, handleGetOneUser, handleEditOneUser,
    handleCreatePosts, handleGetPosts, handleCreateComment1, handleCreateComment2,
    handleEditPosts, handleAllGetPosts, handleGetPostsById, handleGetPostsLike,
    handleGetPostsTextSearch, handleDeletePosts, handleCreateUpdatePosts, handleGetIsLikePosts
}