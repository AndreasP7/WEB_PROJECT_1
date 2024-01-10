
class UserDAO{
    constructor(){
        this.users = []
    }

    authenticate(username,password){
        const user = this.users.find((u) => u.username === username && u.password === password);
        const { v4: uuidv4 } = require('uuid');
        user.uuid = uuidv4();
        
        this.refreshSession(user.uuid, user);
        return user || null;
    }

    registerUser(username, password) {
        const user = new User(username,password)

        this.users.push(user);
        return user;
    }

    refreshSession(newSessionId, user){
        
        const userIndex = this.users.findIndex(u => u.username === user.username);

        
        if (userIndex !== -1) {
        
        this.users[userIndex].sessionId = newSessionId;
        console.log(`Session ID updated for ${user.username}: ${newSessionId}`);
        } 
        else {
        console.log(`User ${user.username} not found`);
        }

    }

    findUser(username){
        const user = this.users.find((u) => u.username === username)
        return user || null;
    }
}

class User{

    constructor(username,password){
        this.username = username;
        this.password = password;
    }


}

module.exports = UserDAO;