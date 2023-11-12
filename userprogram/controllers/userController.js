// controllers/userController.js
const userModel = require('../models/usersModel');

const userController = {
    renderIndex: async (req, res) => {
        const page = req.query.page || 1;
        const perPage = req.query.perPage || 6;

        try {

            usersData = await userModel.getUsers(page, perPage);
            console.log(usersData);
            if (usersData) {
                res.render('index', { usersData });
            }
        } catch (error) {
            console.error('Error fetching users:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    renderUserDetail: async (req, res) => {
        const userId = req.params.id;

        try {
            // Fetch user details by ID from the model
            const userDetail = await userModel.getUserById(userId);
            console.log(userDetail);
            if (userDetail) {
                // Render the user-detail page with user details
                // res.render('user-detail', { userDetail });
            } else {
                // Handle case when user is not found
                res.status(404).json({ error: 'User not found' });
            }
        } catch (error) {
            console.error('Error fetching user details:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    createUser: async (req, res) => {
        const newUser = req.body;

        try {
            const createdUser = await userModel.createUser(newUser);
            res.status(201).json(createdUser);
        } catch (error) {
            console.error('Error creating user:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    updateUser: async (req, res) => {
        const userId = req.params.id;
        const updatedUser = req.body;

        try {
            const updatedUserData = await userModel.updateUser(userId, updatedUser);
            res.json(updatedUserData);
        } catch (error) {
            console.error('Error updating user:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    deleteUser: async (req, res) => {
        const userId = req.params.id;

        try {
            await userModel.deleteUser(userId);
            res.json({ message: 'User deleted successfully' });
        } catch (error) {
            console.error('Error deleting user:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
};

module.exports = userController;