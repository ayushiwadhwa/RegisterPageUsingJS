var users = [];
if(localStorage.a_users) {
    users = JSON.parse(localStorage.a_users);
    
}

document.addEventListener('DOMContentLoaded', function(){
    if(localStorage.a_users){
       displayUsers(users); 
    }
});


document.getElementById('btn').addEventListener('click', function(){
    
    var err_elems = document.querySelectorAll('div[id^="div_err"]');
    var check = false;
    
    if(err_elems.length !== 0){
        for(var i=0; i<len; i++) {
            err_elems[i].remove();
        }
    }
    
    var uname = document.getElementById('uname').value;
    if(uname === ""){
            check = false;
            document.getElementById('uname').insertAdjacentHTML('afterend','<div id="div_err" style="color: red;"}>Please enter a valid username</div>');
    }else{
        check = true;
    }
     
    var pswd = document.getElementById('pwd').value;
    if(pswd === ""){
        check = false;
        document.getElementById('pwd').insertAdjacentHTML('afterend','<div id="div_err" style="color: red;"}>Please enter a valid password</div>');
    }else{
        check = true;
    }
    
    var email = document.getElementById('email').value;
    if(email === ""){
        check = false;
        document.getElementById('email').insertAdjacentHTML('afterend','<div id="div_err" style="color: red;"}>Please enter a valid email id</div>');
    }else{
        check = true;
    }
    
    var loc = document.getElementById('loc').value;
    if(loc === ""){
        check = false;
        document.getElementById('loc').insertAdjacentHTML('afterend','<div id="div_err" style="color: red;"}>Please enter a valid location</div>');
    }else{
        check = true;
    }
    
    var comp = document.getElementById('comp').value;
    if(comp === ""){
        check = false;
        document.getElementById('comp').insertAdjacentHTML('afterend','<div id="div_err" style="color: red;"}>Please enter a valid company</div>');
    }else{
        check = true;
    }
    
    if(!(document.getElementById('rdMale').checked) && !(document.getElementById('rdFemale').checked)) {
        check = false;
        document.getElementById('hid').insertAdjacentHTML('afterend','<div id="div_err" style="color: red;"}>Please select a gender</div>');
    }else{
        check = true;
        var gender;
        if (document.getElementById('rdMale').checked) {
           gender = document.getElementById('rdMale').value;
        }else{
            gender = document.getElementById('rdFemale').value;
        }
    }
    
    if(check){
            
            var user = {
                'username':uname,
                'password':pswd,
                'email':email,
                'location':loc,
                'company':comp,
                'gender':gender
            };
            users.push(user);
            localStorage.a_users = JSON.stringify(users);
            addUser(user);
            //localStorage.a_users.clear();
    }
    
    document.getElementById('uname').value = "";
    document.getElementById('pwd').value = "";
    document.getElementById('email').value="";
    document.getElementById('loc').value = "";
    document.getElementById('comp').value ="";
    document.getElementById('rdMale').checked = false;
    document.getElementById('rdFemale').checked = false;
})


function displayUsers(users){
    var usrTable=document.getElementById('usrTable');
    var body = usrTable.tBodies[0];
    var rows = body.rows;
    //console.log(rows.length);
    
    for(var user of users){
        rows[rows.length - 1].insertAdjacentHTML('afterend', "<tr><td>"+user.username+"</td><td>"+user.email+"</td><td>"+user.location+"</td><td>"+user.company+"</td><td>"+user.gender+"</td></tr>");
    }
}

function addUser(user){
    var usrTable=document.getElementById('usrTable');
    var body = usrTable.tBodies[0];
    var rows = body.rows;
    
    rows[rows.length - 1].insertAdjacentHTML('afterend', "<tr><td>"+user.username+"</td><td>"+user.email+"</td><td>"+user.location+"</td><td>"+user.company+"</td><td>"+user.gender+"</td></tr>");
}