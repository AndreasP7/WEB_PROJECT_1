class FavouritesDAO{
    constructor(){
        this.favourites = []
        this.users =[]
    }

    addUser(sessionId, username) {
        const user = {
          username,
          sessionId,
        };

        this.users.push(user);
        return user;
    }

    addFavourite(username,sessionId, fav){
        const user = this.users.find(u => u.username === username && u.sessionId === sessionId);
        
        if (user) {
            const favourite = this.favourites.find(f => f.sessionId === sessionId && f.ad_code === fav.ad_code);
            
            if (!favourite) {
                // Add the newFavorite to the favorites array
                this.favourites.push(fav);
                console.log(`Added ${fav.ad_code} to ${username}'s favorites.`);
                return 200;
            } else {
                console.log(`${fav.ad_code} is already in ${username}'s favorites.`);
                return 0;
            }
        } else {
            // If the user is not found or the session ID doesn't match, you can handle this accordingly
            console.log(`Invalid username or session ID for ${username}.`);
            return 401;
        }

    }

    removeFavourite(username,sessionId,fav){

        const user = this.users.find(u => u.username === username && u.sessionId === sessionId);
        if (user){
            var index = this.favourites.findIndex(function(item) {
                return item.username === fav.username && item.sessionId === fav. sessionId && item.ad_code === fav.ad_code;
              });

            if (index !== -1) {
            // Remove the item at the found index
            this.favourites.splice(index, 1);
            console.log('Item removed at index ' + index);
            } else {
            console.error('Item not found: ');
            }  
              
        }
        else{
            // If the user is not found or the session ID doesn't match, you can handle this accordingly
            console.log(`Invalid username or session ID for ${username}.`);
            return 401;
        }
        
        
    }
    getFavorites(username,sessionId){
        const user = this.users.find(u => u.username === username && u.sessionId === sessionId);
        if (user) {

            const fav = this.favourites.filter(item => item.username === username && item.sessionId === sessionId);
            
            if (!fav) {
                return("No favorites")
            } else {
                return fav;
            }
        } else {
            // If the user is not found or the session ID doesn't match, you can handle this accordingly
            console.log(`Invalid username or session ID for ${username}.`);
            return 401;
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

