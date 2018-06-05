document.getElementById('btn').addEventListener('click', function(){
    
    var err_elems = document.querySelectorAll('div[id^="div_err"]');
    var len = err_elems.length;
    
    if(err_elems.length !== 0){
        for(var i=0; i<len; i++) {
            err_elems[i].remove();
        }
    }
    
    var uname = document.getElementById('uname').innerHTML;
    console.log(uname.length);
    if(uname){
            document.getElementById('uname').insertAdjacentHTML('afterend','<div id="div_err" style="color: red;"}>Please enter a valid username</div>');
    }else{
        console.log('Hi');
    }
     
    var pswd = document.getElementById('pwd').innerHTML;
    if(pswd.length === 0){
        document.getElementById('pwd').insertAdjacentHTML('afterend','<div id="div_err" style="color: red;"}>Please enter a valid password</div>');
    }
    
    var email = document.getElementById('email').innerHTML;
    if(email.length === 0){
        document.getElementById('email').insertAdjacentHTML('afterend','<div id="div_err" style="color: red;"}>Please enter a valid email id</div>');
    }
    
    var loc = document.getElementById('loc').innerHTML;
    if(loc.length === 0){
        document.getElementById('loc').insertAdjacentHTML('afterend','<div id="div_err" style="color: red;"}>Please enter a valid location</div>');
    }
    
    var comp = document.getElementById('comp').innerHTML;
    if(comp.length === 0){
        document.getElementById('comp').insertAdjacentHTML('afterend','<div id="div_err" style="color: red;"}>Please enter a valid company</div>');
    }
})