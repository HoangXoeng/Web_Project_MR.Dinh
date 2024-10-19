const goToLoginPage = () => {
    var isLogin = localStorage.getItem('isLogin');
    console.log('isLogin', isLogin);
    if(isLogin == 'true') {
        if(document.querySelector('.user--option').style.display == 'block' ){
            document.querySelector('.user--option').style.display = 'none';
        }
        else{
            document.querySelector('.user--option').style.display = 'block'; 
        }
    }else if (isLogin == 'false'){
        alert('log in')
        window.location.href = 'http://127.0.0.1:5500/src/html/login.html';
    }
}
 
const funyFunc = () => {
    document.querySelector('.user--option').style.display = 'none'; 
}

const logOut = () => {
    localStorage.setItem("isLogin", 'false');
    localStorage.setItem("role", "null");
    localStorage.removeItem("userName");
    location.reload();
}

const userInformation = () => {
    document.querySelector('.user--option').style.display = 'none';
    var role = localStorage.getItem('role');
    if (role =='user'){
    window.location.href = 'http://127.0.0.1:5500/src/html/userInformation.html';
    }
    else if (role == 'admin'){
        window.location.href = 'http://127.0.0.1:5500/src/html/admin.html'
    }
}