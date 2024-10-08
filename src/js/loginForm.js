const signInSection = () => {
  var createAccoutForm = document.querySelector(".create--acc-section");
  var signInForm = document.querySelector(".log--in--section");
  var form = document.querySelector(".form");
  createAccoutForm.style.display = "none";
  signInForm.style.display = "block";
  // form.style.marginTop = "80px";
};
const createAccSection = () => {
  var createAccoutForm = document.querySelector(".create--acc-section");
  var signInForm = document.querySelector(".log--in--section");
  var form = document.querySelector(".form");
  createAccoutForm.style.display = "block";
  signInForm.style.display = "none";
  // form.style.marginTop = "20px";
};

var isValid = true;
var isHaveEmail = false;
var isOTPTrue = false;
var otpGen;
var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000); // Mã OTP 6 chữ số
};
document.querySelector(".email").onchange = function () {
  var email = document.querySelector(".email").value;
  if (!email.trim() === "") {
    isHaveEmail = true;
  }
  if (emailRegex.test(email)) {
    isHaveEmail = true;
  }
  console.log(isHaveEmail);
  return isHaveEmail;
};

const sendOTPbtn = () => {
  var userName = document.querySelector(".userName").value;
  console.log(userName)
  getUserNameInJsonSeverAlreadyExist(userName).then((user) => {
    if (!user) {
      alert("ten tai khoan da toi tai");
      setError("userName-error", "Tên đăng nhập đã tồn tại");
      isValid = false;
    } else {
      clearError("userName-error");
      if (isHaveEmail) {
        var btn = document.querySelector(".sendOTP");
        btn.style.color = "#333";
        btn.style.margin = "0px 130px 0px";
        btn.innerHTML = "Đã gửi mã OTP";
        var email = document.querySelector(".email").value;
        var otp = generateOTP();
        otpGen = otp;
        var templateParams = {
          to_name: "Guy",
          from_name: "WowBox",
          message_html: `Chào mừng bạn đến với WowBox! Mã OTP của bạn là: ${otp}`,
          from_email: "wowbox@gmail.com",
          subject: "Xác nhận đăng ký tài khoản WowBox",
          reply_to: "wowbox@gmail.com",
          to_email: email,
          otp: otp,
        };
        emailjs.send("service_3q0nrq9", "template_9cu3h6o", templateParams).then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
            alert("Mã xác nhận đã được gửi!");
          },
          function (error) {
            console.log("FAILED...", error);
            alert("Gửi mã xác nhận thất bại!");
          }
        );
      }
    }
  });
  
};

var getUserNameInJsonSeverAlreadyExist = (userName) => {
  return axios
    .get(`http://localhost:3000/accounts?userName=${userName}`)
    .then((response) => {
      if (response.data.length > 0) {
        return response.data[0]; // Trả về phần tử đầu tiên nếu tìm thấy
      } else {
        console.error("User not found");
        return null;
      }
    })
    .catch((error) => {
      console.error("Error fetching user:", error);
    });
};

var clearErrors = function() {
  var errorElements = document.querySelectorAll(".error-message");
  errorElements.forEach(function (element) {
    element.textContent = "";
  });
  var errorInputs = document.querySelectorAll(".error");
  errorInputs.forEach(function (element) {
    element.classList.remove("error");
  });
};



function createAccount() {
  var userName = document.querySelector(".userName").value;
  var email = document.querySelector(".email").value;
  var phoneNum = document.querySelector(".phoneNum").value;
  var password = document.querySelector(".password").value;
  
  opt = {
    url: "http://localhost:3000/accounts",
    method: "post",
    data: {
      userName: userName,
      email: email,
      phoneNum: phoneNum,
      password: password,
      role: "user",
    },
  };
  axios(opt)
    .then(function (data_res) {
      console.log(data_res);
      if (data_res.status == 201) alert("Created successfully");
      window.location.href = "http://localhost:3000/";
    })
    .catch(function (ex) {
      console.log(ex);
    });
}

function validateForm() {
  // Get form values
  var userName = document.querySelector(".userName").value;
  var email = document.querySelector(".email").value;
  var phoneNum = document.querySelector(".phoneNum").value;
  var password = document.querySelector(".password").value;
  var confirmPassword = document.querySelector(".confirmPassword").value;
  var otp = document.querySelector(".OTP").value;
  var checkbox = document.querySelector(".verify--checkBox").checked;

  // Regular expressions for validation
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var phoneRegex = /^[0-9]{10}$/;
  // Clear previous errors
  clearErrors();
  // Validate each field
  if (userName.trim() === "") {
    setError("userName-error", "Tên đăng nhập không được để trống");
    isValid = false;
  }
  if (email.trim() === "") {
    isValid = false;
    isHaveEmail = false;
  }
  if (!emailRegex.test(email)) {
    setError("email-error", "Email không hợp lệ");
    isValid = false;
    isHaveEmail = false;
  }
  if (!phoneRegex.test(phoneNum)) {
    setError(
      "phoneNum-error",
      "Số điện thoại không hợp lệ (phải gồm 10 chữ số)"
    );
    isValid = false;
  }
  if (password.length < 6) {
    setError("password-error", "Mật khẩu phải có ít nhất 6 ký tự");
    isValid = false;
  }
  if (password !== confirmPassword) {
    setError("confirmPassword-error", "Mật khẩu nhập lại không khớp");
    isValid = false;
  }
  if (!checkbox) {
    setErrorCheckbox(
      "checkbox-error",
      "Bạn phải đồng ý với điều khoản dịch vụ"
    );
    isValid = false;
  }
  if (otp === "") {
    setError("otp-error", "Vui lòng nhập mã OTP");
    isValid = false;
  }
  if (otp == otpGen) {
    isOTPTrue = true;
  }
  if (isValid) {
    if (isOTPTrue) {
      createAccount();
    } else {
      console.log(otpGen);
      console.log(otp);
      alert("Mã OTP không đúng");
    }
  }
}


var setError = function(elementId, message){
  var element = document.getElementById(elementId);
  element.placeholder = message;
  document
    .querySelector(`input[name="${elementId.replace("-error", "")}"]`)
    .classList.add("error");
};



var setErrorCheckbox = function(elementId, message){
  var element = document.getElementById(elementId);
  element.textContent = message;
  document
    .querySelector(`input[name="${elementId.replace("-error", "")}"]`)
    .classList.add("error");
}; 




function signIn() {
  var userName = document.querySelector(".userName-login").value;
  var password = document.querySelector(".password-login").value;
  var rememberMe = document.querySelector(".verify--checkBox").checked;
  getUserNameInJsonSeverAlreadyExist(userName).then((user) => {
    if (user) {
      if (user.password == password) {
        alert("Login successfully");
        if (rememberMe) {
          localStorage.setItem("email", user.email);
          localStorage.setItem("password", user.password);
        } else {
          localStorage.removeItem("email");
          localStorage.removeItem("password");
        }
        window.location.href = "http://localhost:3000/";
        document.querySelector(".userName-login").value = "";
        document.querySelector(".password-login").value = "";
      } else {
        document.querySelector(".wrong--pass").style.display = "block";
        console.log(user.password);
        console.log("pass" + password);
      }
    } else {
      clearError("userName-error");
    }
  });
}
