const repository = require('./repository');
const response = require('../../network/response')

async function getUsers(req, res) {
    const users = await repository.list();
    response.success(req, res, users, 200);
}

async function newUser(req, res) {
    const { name, password, email, phone, role } = req.body;
    if (!name) response.error(req, res, 'Name needed', 400, 'Controller error');
    else if (!password) response.error(req, res, 'Password needed', 400, 'Controller error');
    else if (!email) response.error(req, res, 'Email needed', 400, 'Controller error');
    else if (!phone) response.error(req, res, 'Phone needed', 400, 'Controller error');
    else {
        if (!await repository.find(name, password)) {
            let newUser = {
                name: name,
                password: password,
                email: email,
                phone: phone,
                role: role
            }

            await repository.add(newUser);
            response.success(req, res, newUser, 200);
        }
        else response.error(req, res, 'User already exists', 400, 'Controller error')
    }
}

async function upadteUser(req, res) {
    const { name, password, email, phone, role } = req.body;
    let updatedUser = {
        name: name,
        password: password,
        email: email,
        phone: phone,
        role: role
    }
    await repository.update(upadteUser);
    response.success(req, res, upadteUser, 200);
}

module.exports = {
    getUsers,
    newUser,
    upadteUser
}