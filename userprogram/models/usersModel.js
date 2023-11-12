const axios = require('axios');

let userData = [];

const getUsers = async (page = 1, perPage = 6) => {
    try {
        const response = await axios.get(`https://reqres.in/api/users?page=${page}&per_page=${perPage}`);
        userData = response.data; // Extract user data from the API response
        return userData; // Return the fetched data
    } catch (error) {
        throw error;
    }
};

const getUserById = (userId = 1) => {
    return userData.data.find(user => user.id === userId);
}

const createUser = async (user) => {
    try {
        const response = await axios.post('https://reqres.in/api/users', user);
        const newUser = response.data;
        userData.push(newUser);
        return newUser;
    } catch (error) {
        throw error;
    }
};

const updateUser = async (userId, updatedUser) => {
    try {
        const response = await axios.put(`https://reqres.in/api/users/${userId}`, updatedUser);
        const updatedUserData = response.data;
        // Update the user in the local data
        userData = userData.map(user => (user.id === userId ? updatedUserData : user));
        return updatedUserData;
    } catch (error) {
        throw error;
    }
};

const deleteUser = async (userId) => {
    try {
        await axios.delete(`https://reqres.in/api/users/${userId}`);
        // Remove the user from the local data
        userData = userData.filter(user => user.id !== userId);
    } catch (error) {
        throw error;
    }
};

module.exports = { getUsers, getUserById, createUser, updateUser, deleteUser, userData };