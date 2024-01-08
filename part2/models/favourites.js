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

    addFavourite(username,sessionId, fav){
        const user = this.favourites.find(f => f.user.username === username && f.user.sessionId === sessionId);


        if (user) {
            if (!user.favs.includes(fav)) {
                // Add the newFavorite to the favorites array
                user.favs.push(fav);
                console.log(`Added ${fav} to ${username}'s favorites.`);
            } else {
                console.log(`${fav} is already in ${username}'s favorites.`);
            }
        } else {
            // If the user is not found or the session ID doesn't match, you can handle this accordingly
            console.log(`Invalid username or session ID for ${username}.`);
        }

    }
}

class Favourite{
    constructor(username,sessionId, title, code, cost, desc, image){
        this.username = username;
        this.sessionId = sessionId;
        this.title = title;
        this.code = code;
        this.cost = cost;
        this.desc = desc;
        this.image = image;

    }
}

module.exports = {
    FavouritesDAO:FavouritesDAO,
    Favourite: Favourite
};

