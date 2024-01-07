class FavouritesDAO{
    constructor(){
        this.favourites = []
    }

    addUser(sessionId, username) {
        const user = {
          username,
          sessionId,
        };

        this.favourites.push({user, favs:[]});
        return user;
    }
}