let users = [{username: 'user', password:'1234'},
                {username: 'admin', password:'admin'}]

function checkUsernameAndPassword(username, password) {
    for (const i in users) {
        const user = users[i];
        if (user.username === username && user.password === password) {
            return true;
        }
    }
    return false;
}

function addNewUser(username, password) {
    if (checkUserExist(username)) {
        return null;
    }

    let newUser = {username: username, password: password}
    users.push(newUser);

    return newUser;
}

function checkUserExist(username) {
    for (const i in users) {
        const user = users[i];
        if (user.username === username) {
            return true;
        }
    }
    return false;
}

export {
    checkUsernameAndPassword,
    addNewUser
}