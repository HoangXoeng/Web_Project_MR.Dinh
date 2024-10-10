const goToLoginPage = () => {
    var isLogin = localStorage.getItem('isLogin');
    if (isLogin){

    }else{
        window.location.href = '../src/html/login.html';
    }
}