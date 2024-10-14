var getUser = () => {
    var userName = localStorage.getItem('userName');
    return axios
      .get(`http://localhost:3000/accounts?userName=${userName}`)
      .then((response) => {
        if (response.data.length > 0) {
            console.log(response.data)
          return response.data;
        } else {
          console.error("User not found");
          return null;
        }
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
      });
  };

const showChangePassForm = () => {
    document.querySelector('.changePassForm').style.display = 'block';
}
const hideChangePassForm = () =>{
    document.querySelector('.changePassForm').style.display = 'none';

}
const userFunc = () =>{
    // localStorage.setItem("userName", 'baky123');

    getUser().then((user) => {
      if(user){
        document.querySelector('#username').innerHTML = user[0].userName
        document.querySelector('#email').innerHTML = user[0].email
        document.querySelector('#phoneNum').innerHTML = user[0].phoneNum
      } else {
        console.log("User not found");
      }
    });
}
const changePass = () => {
    const currentPass = document.querySelector('#currentPass').value;
    const newPass = document.querySelector('#newPass').value;
    const confirmPass = document.querySelector('#confirmPass').value;

    // Fetch user data
    getUser().then((user) => {
        if (!user || user.length === 0) {
            alert("User not found.");
            return;
        }

        // Check if the current password is correct
        if (currentPass !== user[0].password) {
            alert("Current password is incorrect.");
            return;
        }

        // Check if new password and confirm password match
        if (newPass !== confirmPass) {
            alert("New password and confirmation do not match.");
            return;
        }



        // use axios to change password
        axios.put(`http://localhost:3000/accounts/${user[0].id}`, {
           
            userName: user[0].userName,
            email: user[0].email,
            phoneNum: user[0].phoneNum,
            password: newPass,
            role: user[0].role    
        })
        .then(response => {
            alert("Password changed successfully.");
            
        })
        .catch(error => {
            console.error("Error updating password:", error);
            alert("An error occurred while changing the password. Please try again.");
        });
    }).catch(err => {
        console.error("Error fetching user data:", err);
        alert("An error occurred while retrieving user data. Please try again.");
    });
};



userFunc()