window.onload=function(){
    buttons()
    checkTel()
    checkpass()
    checkDate()
}
function validateForm(){
    let cat=document.getElementById("cat")
    var checked=cat.querySelectorAll('input[type="checkbox"]:checked').length
    if(checked>3){
        alert("Please select up to 3 categories");
        return false;
    }
    alert("Succesfully submited")
    return true;
}
function buttons(){
    var post_buy=document.getElementById("butt1")
    var prev_use=document.getElementById("butt2")
    var btns1=post_buy.getElementsByClassName("basic_paragraph")
    var btns2=prev_use.getElementsByClassName("basic_paragraph")
    for(var i=0;i<btns1.length;i++){
            btns1[i].addEventListener("click", function() {
            current = post_buy.getElementsByClassName("active");
            if(current.length>0){
                current[0].className = current[0].className.replace("active", "basic_paragraph");
            }
            this.className="active";
        });
    }
    for(var i=0;i<btns2.length;i++){
        btns2[i].addEventListener("click", function() {
        current = prev_use.getElementsByClassName("active");
        if(current.length>0){
            current[0].className = current[0].className.replace("active", "basic_paragraph");
        }
        this.className="active";
        });
    }
}
function checkTel(){
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
function checkpass(){
    let pass=document.getElementById("password")
    let passc=document.getElementById("passwordc")
    pass.onchange=function(){
        if(pass.value.length<8){
            pass.setCustomValidity("Password must be at least 8 characters long")
        }
        else{
            pass.setCustomValidity('')
        }
    }
    passc.onchange=function(){
        if(!(pass.value==passc.value)){
            passc.setCustomValidity("Passwords dont match")
        }
        else{
            passc.setCustomValidity('')
        }
    }
}
function checkDate(){
    var today=new Date()
    let dob=document.getElementById("dob")
    dob.onchange=function(){
        var year=dob.value.substring(0,4)
        
        var month=dob.value.substring(5,7)
        
        var day=dob.value.substring(8,10)
        
        var dateob=new Date(year,month,day)
        var yearsold=Math.floor((today - dateob) / 31556952000)
        if(yearsold<18){
            dob.setCustomValidity("Sorry, you can not be under 18 years old")
        }
        else{
            dob.setCustomValidity('')
        }
    }
}