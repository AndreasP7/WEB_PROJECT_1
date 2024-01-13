
const serverUrl = 'http://localhost:8080';

const form = document.getElementById("log_in_form");
const form_container = document.getElementsByClassName("log_in_container");
const user_container = document.getElementsByClassName("connected_user_container");
const connected_user = document.getElementsByClassName("user");
const user_fav_link=document.getElementsByClassName("userfav");
const ads=document.getElementsByClassName("ad-container")
let connected = false;
let user = {
  username: null,
  password: null
};

function connect(event){
    let username = document.getElementById('uname').value;
    let password = document.getElementById('psw').value;
    
    var formData = {
        username: username,
        password: password
    };
    var formStr = JSON.stringify(formData);
   

    console.log(formStr)
    fetch(serverUrl + '/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body:formStr
      })
      .then(response => {
        if (response.status === 200) {
            return response.json(); 
        } else if (response.status === 401) {
            user = {};
            alert("Wrong Username or Password")
            throw new Error('Unauthorized');
            
        } else {
            user = {};
            throw new Error('Unexpected status code: ' + response.status);
        }
      })
      .then(data => {
        console.log(data);
        form_container[0].style.display = "none";
        user_container[0].style.display = "block";
        if(connected_user){
          connected_user[0].textContent = username
          user_fav_link[0].href="favorite-ads.html?username="+username+"&sessionId="+data.sessionId
        }
        connected = true;
        
        user.username = username;
        user.password = password;
        user.sessionId = data.sessionId;  
        

      })
      .catch(error => console.error('Error:', error.message));
    
      event.preventDefault();
}

function add_to_favourites(adId){
    
    let heart = document.getElementById("heart_icon"+adId);
    
    console.log(adId)
    if (connected){
      console.log("AFS")
      
      
      let adData = {
        username: user.username,
        sessionId: user.sessionId,
        ad_code: adId,
        ad_image: document.getElementById("image" + adId).src,
        ad_title: document.getElementById("title" + adId).textContent,
        ad_cost: document.getElementById("cost" + adId).textContent,
        ad_desc: document.getElementById("desc" + adId).textContent
      };

      let adStr = JSON.stringify(adData);

      fetch(serverUrl + '/add_favourite', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body:adStr
      })
      .then(response => {
        if (response.status === 200) {
            heart.classList.add("active_heart");
        } else if (response.status === 401) {
            
            alert("Please log-in to add to favourites")
            throw new Error('Unauthorized');
        }
      })
      .catch(error => console.error('Error:', error.message));

    }
    else{
      alert("Please log-in to add to favourites")
      return;
    }

}

function remove_from_favourites(adId){
    
  let heart = document.getElementById("heart_icon"+adId);  
  console.log(adId)
  if (connected){
    console.log("RFS")
    
    
    let adData = {
      username: user.username,
      sessionId: user.sessionId,
      ad_code: adId,
      ad_image: document.getElementById("image" + adId).src,
      ad_title: document.getElementById("title" + adId).textContent,
      ad_cost: document.getElementById("cost" + adId).textContent,
      ad_desc: document.getElementById("desc" + adId).textContent
    };

    let adStr = JSON.stringify(adData);

    fetch(serverUrl + '/remove_favourite', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body:adStr
    })
    .then(response => {
      if (response.status === 200) {
          heart.classList.remove("active_heart")
      } else if (response.status === 401) {
          
          alert("Please log-in to remove from favourites")
          throw new Error('Unauthorized');
      }
    })
    .catch(error => console.error('Error:', error.message));

  }
}
function toggleFavourite(adId) {
  var button = document.querySelector('#heart_icon'+adId);
  if(connected){
    button.classList.toggle('active_heart');
    if (button.classList.contains('active_heart')) {
      // The button is now active, add to favorites or perform other actions
      add_to_favourites(adId);
    } 
    else {
      remove_from_favourites(adId);
    }
  }
  else{
    alert("Please log-in to add to favourites")
    return;
  }
}

function getFav(username,sessionId){
  let adData = {
    username: username,
    sessionId: sessionId,
  };
  let adStr = JSON.stringify(adData);
  fetch(serverUrl + '/get_favourites', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body:adStr
  })
  .then(response => {
    if (response.status === 200) {
        return response.json(); 
    } 
    else if (response.status === 401) {
      alert("Please log-in to view favourites")
      throw new Error('Unauthorized');
    }
  })
  .then(data => {
    let favs=JSON.parse(data)
    console.log(favs)
    document.getElementById("prod_main").innerHTML=adFavs(favs) 
  })
  .catch(error => console.error('Error:', error.message));
}
function subs(event){
  let btns = document.querySelectorAll('input[type="radio"]')
  let check_id
  for(let btn of btns){
    if (btn.checked){
      check_id=btn.id
      break;
    }
  }
  if(check_id=="all"){
    for(ad of ads){
      ad.style.display="block"
    }
  }
  else{
    if(check_id.slice(-2,-1)=="b"){
      for(ad of ads){
        if(check_id.slice(-1)!=ad.id.slice(-1)){
          ad.style.display="none"
        }
        else{
          ad.style.display="block"
        }
      }
    }
    else{
      for(ad of ads){
        if(check_id.slice(-2)!=ad.id.slice(-2)){
          ad.style.display="none"
        }
        else{
          ad.style.display="block"
        }
      }
    }
  }
}
