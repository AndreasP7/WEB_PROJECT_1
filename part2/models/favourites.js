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
                
                this.favourites.push(new Favourite(fav));
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

        const user = this.users.find(u => u.username === username && u.sessionId === sessionId);
        if (user){
            var index = this.favourites.findIndex(function(item) {
                return item.username === fav.username && item.sessionId === fav. sessionId && item.ad_code === fav.ad_code;
              });

            if (index !== -1) {
            
            this.favourites.splice(index, 1);
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
        const user = this.users.find(u => u.username === username && u.sessionId === sessionId);
        if (user) {

            const fav = this.favourites.filter(item => item.username === username && item.sessionId === sessionId);
            
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

