
class UserDAO{
    constructor(){
        this.users = []
    }

    authenticate(username,password){
        const user = this.users.find((u) => u.username === username && u.password === password);
        const { v4: uuidv4 } = require('uuid');
        user.uuid = uuidv4();
        this.refreshSession(user.uuid, user.username);
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

    refreshSession(newSessionId, username){
        const userIndex = this.users.findIndex(user => user.username === username);

 
        if (userIndex !== -1) {
        
        this.users[userIndex].sessionId = newSessionId;
        console.log(`Session ID updated for ${username}: ${newSessionId}`);
        } 
        else {
        console.log(`User ${username} not found`);
    }

    }
}

class User{

    constructor(username,password){
        this.username = username;
        this.password = password;
    }


}

module.exports = UserDAO;