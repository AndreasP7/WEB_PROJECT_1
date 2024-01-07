
class UserDAO{
    constructor(){
        this.users = []
    }

    authenticate(username,password){
        const user = this.users.find((u) => u.username === username && u.password === password);
        const { v4: uuidv4 } = require('uuid');
        user.uuid = uuidv4();
        return user || null;
    }

    registerUser(username, password) {
        const user = {
          username,
          password,
        };

        this.users.push(user);
        return user;
    }
}

class User{
    
}

module.exports = UserDAO;