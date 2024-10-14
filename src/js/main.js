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
        window.location.href = '../src/html/login.html';
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
    window.location.href = '../src/html/userInformation.html';
}