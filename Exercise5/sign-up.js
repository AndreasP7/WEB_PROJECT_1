window.onload=function(){//validation function run once page has loaded
    buttons()
    checkTel()
    checkpass()
    checkDate()
}
function validateForm(){//func for validating the form (for checkbox elements)
    let cat=document.getElementById("cat")
    var checked=cat.querySelectorAll('input[type="checkbox"]:checked').length//find checkboxes that are checked 
    if(checked>3){//if they are more than 3 then deny submit=
        alert("Please select up to 3 categories");
        return false;
    }
    alert("Succesfully submited")
    return true;
}
function buttons(){//function for questionaire buttons
    var post_buy=document.getElementById("butt1")//post or buy 
    var prev_use=document.getElementById("butt2")//reference
    var btns1=post_buy.getElementsByClassName("basic_paragraph")//2 choices
    var btns2=prev_use.getElementsByClassName("basic_paragraph")//2 choices
    for(var i=0;i<btns1.length;i++){//find buttons-choices
            btns1[i].addEventListener("click", function() {//event listener
            current = post_buy.getElementsByClassName("active");//get buttons that already active so they can be replaced
            if(current.length>0){
                current[0].className = current[0].className.replace("active", "basic_paragraph");//make other buttons inactive
            }
            this.className="active";//button was clicked, so make it active
        });
    }
    for(var i=0;i<btns2.length;i++){//copy from top
        btns2[i].addEventListener("click", function() {
        current = prev_use.getElementsByClassName("active");
        if(current.length>0){
            current[0].className = current[0].className.replace("active", "basic_paragraph");
        }
        this.className="active";
        });
    }
}
function checkTel(){//function to check if the mobile phone number is valid (has 10 digits)
    let tel=document.getElementById('cellnum')
    tel.onchange=function(){
        if(!(tel.value>6900000000&&tel.value<6999999999)){
            tel.setCustomValidity("Enter a valid telephone number")
        }
        else{
            tel.setCustomValidity('')
        }
    }
}
function checkpass(){//function to check if passwords match and if the password is 8 characters long
    let pass=document.getElementById("password")
    let passc=document.getElementById("passwordc")
    pass.onchange=function(){
        if(pass.value.length<8){//check length
            pass.setCustomValidity("Password must be at least 8 characters long")
        }
        else{
            pass.setCustomValidity('')
        }
    }
    passc.onchange=function(){
        if(!(pass.value==passc.value)){//check similarity
            passc.setCustomValidity("Passwords dont match")
        }
        else{
            passc.setCustomValidity('')
        }
    }
}
function checkDate(){//func to check if user is over 18 years old 
    var today=new Date()
    let dob=document.getElementById("dob")
    dob.onchange=function(){
        var year=dob.value.substring(0,4)//extract year from string 
        
        var month=dob.value.substring(5,7)//extract month from string 
        
        var day=dob.value.substring(8,10)//extract day from string 
        
        var dateob=new Date(year,month,day)
        var yearsold=Math.floor((today - dateob) / 31556952000)//convert to years
        if(yearsold<18){
            dob.setCustomValidity("Sorry, you can not be under 18 years old")
        }
        else{
            dob.setCustomValidity('')
        }
    }
}

//Used to copy mail and phone to clipboard
function copyToClipboard(id) {
    // Find right element (phone or email)
    var text = document.getElementById(id+"-text").textContent;

    // Copy the selected text to the clipboard
    navigator.clipboard.writeText(text);

    // Optionally, provide some visual feedback to the user
    alert("Copied: " + text);
  }