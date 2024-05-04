import express from "express"
import userController from '../controllers/userController'
import homeController from '../controllers/homeController'
import { checkUserJWT } from '../middleware/JWTAction'




let router = express.Router();

const webRoutes = (app) => {
    router.get('/', homeController.getAboutPage);
    // router.post('/crud-create-users', userController.handleCreateUser)

    router.post('/api/login', userController.handleLoginUsers);
    router.post('/api/sign-up', userController.handleSignup);
    router.get('/api/logout', userController.handleLogout);
    router.get('/api/get-one-user', checkUserJWT, userController.handleGetOneUser);
    router.post('/api/edit-one-user', userController.handleEditOneUser);

    router.post('/api/create-posts', userController.handleCreatePosts);
    router.post('/api/get-posts', userController.handleGetPosts);
    router.get('/api/get-posts-like', userController.handleGetPostsLike);
    router.post('/api/get-posts-by-id', userController.handleGetPostsById);
    router.get('/api/get-all-posts', userController.handleAllGetPosts);
    router.post('/api/edit-posts', userController.handleEditPosts);
    router.post('/api/delete-posts', userController.handleDeletePosts);

    router.post('/api/create-comment1', userController.handleCreateComment1);
    router.post('/api/create-comment2', userController.handleCreateComment2);

    router.post('/api/get-posts-text-search', userController.handleGetPostsTextSearch);
    router.post('/api/create-update-like-posts', userController.handleCreateUpdatePosts);
    router.post('/api/get-isLikePosts', userController.handleGetIsLikePosts);




    return app.use("/", router)
}

module.exports = webRoutes;