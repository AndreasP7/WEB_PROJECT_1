
const serverUrl = 'http://localhost:8080';

const form = document.getElementById("log_in_form");
const form_container = document.getElementsByClassName("log_in_container");
const user_container = document.getElementsByClassName("connected_user_container");
const connected_user = document.getElementsByClassName("user");
console.log("Found element:", connected_user);

let connected = false;
let user;

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
    
    
    console.log(adId)
    if (connected){
      console.log("AFS")
      let username = user.username;
      let sessionId = user.sessionId;
      let ad_code = document.getElementById(adId);
      let ad_image = document.getElementById("image" + adId).src;
      let ad_title = document.getElementById("title"+ adId).textContent;
      let ad_cost = document.getElementById("cost"+ adId).textContent;
      let ad_desc = document.getElementById("desc"+ adId).textContent;;

      
    }
    else{
      alert("Please log-in to add to favourites")
      return;
    }

}

