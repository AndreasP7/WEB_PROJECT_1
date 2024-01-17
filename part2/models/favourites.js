class FavouritesDAO{
    constructor(){
        this.favourites = []
    }

    addUser(sessionId, username) {
    
        this.favourites.push({username:username, sessionId:sessionId, favs:[]})
        return {username:username, sessionId:sessionId};
    }

    addFavourite(username,sessionId, fav){
        const user = this.favourites.findIndex(f => f.username === username && f.sessionId === sessionId);
        
        if (user != -1) {
            const favourite = this.favourites[user].favs.find(f => f.ad_code === fav.ad_code);
            
            if (!favourite) {
                
                this.favourites[user].favs.push(new Favourite(fav));
                console.log(`Added ${fav.ad_code} to ${username}'s favorites.`);
                return 200;
            } else {
                console.log(`${fav.ad_code} is already in ${username}'s favorites.`);
                return 0;
            }
        } else {
            
            console.log(`Invalid username or session ID for ${username}.`);
            return 401;
        }

    }

    removeFavourite(username,sessionId,fav){

        const user = this.favourites.findIndex(f => f.username === username && f.sessionId === sessionId);
        if (user != -1){
            var index = this.favourites[user].favs.findIndex(function(item) {
                return item.ad_code === fav.ad_code;
              });

            if (index !== -1) {
            
                this.favourites[user].favs.splice(index, 1);
                console.log(`Removed favourite ${fav.ad_code} of user ${username}.`);
            } else {
                console.error('Not found: ');
            }  
              
        }
        else{
           
            console.log(`Invalid username or session ID for ${username}.`);
            return 401;
        }
        
        
    }
    getFavorites(username,sessionId){
        const user = this.favourites.findIndex(f => f.username === username && f.sessionId === sessionId);
        if (user != -1) {

            const fav = this.favourites[user].favs;
            
            if (!fav) {
                return("No favorites")
            } else {
                return fav;
            }
        } else {
            
            console.log(`Invalid username or session ID for ${username}.`);
            return 401;
        }
    }
}

class Favourite{
    constructor(ad){

        this.username = ad.username;
        this.sessionId = ad.sessionId;
        this.ad_title = ad.ad_title;
        this.ad_code = ad.ad_code;
        this.ad_cost = ad.ad_cost;
        this.ad_desc = ad.ad_desc;
        this.ad_image = ad.ad_image;


    }
}

module.exports = {
    FavouritesDAO:FavouritesDAO,
    Favourite: Favourite
};

