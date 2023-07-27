const User = require('./model');

async function getUserList() {
    const users = await User.findAll();
    return users;
}

async function addUser(user) {
    await User.create(user);
}

async function findUser(name, password) {
    const user = await User.findAll({
        where: {
            name: name,
            password: password
        }
    });
    return user.length > 0;
}

async function updateUser(user) {
    await User.update(user, {
        where: {
            name: user.name,
            password: user.password
        }
    });
}

async function deleteUser(name, password) {
    await User.destroy({
        where: {
            name: name,
            password: password
        }
    });
}

module.exports = {
    add: addUser,
    list: getUserList,
    find: findUser,
    update: updateUser,
    delete: deleteUser
}