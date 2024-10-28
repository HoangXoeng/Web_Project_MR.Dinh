function toggleChat() {
    const chatBox = document.getElementById('hid');
    if (chatBox.style.display === 'none' || chatBox.style.display === '') {
        chatBox.style.display = 'block';
    } else {
        chatBox.style.display = 'none';
    }
}
document.addEventListener('click', function(event) {
    const chatBox = document.getElementById('hid');
    const chatIcon = document.querySelector('.fa-message');
    if (!chatBox.contains(event.target) && !chatIcon.contains(event.target)) {
        chatBox.style.display = 'none';
    }
});

function validateField(input, errorMessageId) {
    if (input.value.trim() === '') {
        input.classList.add('error');
        document.getElementById(errorMessageId).style.display = 'block';
    } else {
        input.classList.remove('error');
        document.getElementById(errorMessageId).style.display = 'none';
    }
}


function validatePhone(input, errorMessageId) {
    const phonePattern = /^[0-9]{10,11}$/; // Giả sử số điện thoại từ 10 đến 11 số
    if (!phonePattern.test(input.value.trim())) {
        input.classList.add('error');
        document.getElementById(errorMessageId).style.display = 'block';
    } else {
        input.classList.remove('error');
        document.getElementById(errorMessageId).style.display = 'none';
    }
}


const nameInput = document.getElementById('name');
const addressInput = document.getElementById('address');
const districtInput = document.getElementById('district');
const cityInput = document.getElementById('city');
const phoneInput = document.getElementById('phone');


nameInput.addEventListener('blur', () => validateField(nameInput, 'nameError'));
addressInput.addEventListener('blur', () => validateField(addressInput, 'addressError'));
districtInput.addEventListener('blur', () => validateField(districtInput, 'districtError'));
cityInput.addEventListener('blur', () => validateField(cityInput, 'cityError'));
phoneInput.addEventListener('blur', () => validatePhone(phoneInput, 'phoneError'));


nameInput.addEventListener('input', () => {
    nameInput.classList.remove('error');
    document.getElementById('nameError').style.display = 'none';
});
addressInput.addEventListener('input', () => {
    addressInput.classList.remove('error');
    document.getElementById('addressError').style.display = 'none';
});
districtInput.addEventListener('input', () => {
    districtInput.classList.remove('error');
    document.getElementById('districtError').style.display = 'none';
});
cityInput.addEventListener('input', () => {
    cityInput.classList.remove('error');
    document.getElementById('cityError').style.display = 'none';
});
phoneInput.addEventListener('input', () => {
    phoneInput.classList.remove('error');
    document.getElementById('phoneError').style.display = 'none';
});


document.getElementById('shippingForm').addEventListener('submit', function (event) {
    validateField(nameInput, 'nameError');
    validateField(addressInput, 'addressError');
    validateField(districtInput, 'districtError');
    validateField(cityInput, 'cityError');
    validatePhone(phoneInput, 'phoneError');    

    if (document.querySelector('.error')) {
        event.preventDefault(); // Ngăn không cho submit nếu có lỗi
    }
});
var urlParams = new URLSearchParams(window.location.search);
var productId = urlParams.get('product_id');
var drinkId = urlParams.get('drinkId');
var extraFoodId = urlParams.get('extraFoodId');
var shipMethodValue = 10000;
var productName;
var inforData = localStorage.getItem("payInfor");
var infor = JSON.parse(inforData);
console.log(infor)
var shipMethod = function(place){
    if (place == 'atHome'){
        shipMethodValue = 10000;
        document.querySelector('.giaoDen').style.backgroundColor = 'green';
        document.querySelector('.tieude1').style.color = 'white';
        document.querySelector('.gia1').style.color = 'white';     
        document.querySelector('.tieude').style.color = '';
        document.querySelector('.gia').style.color = '';     
        document.querySelector('.tuNhan').style.backgroundColor = '';
        document.querySelector('.atHome').style.display = 'block';
        document.querySelector('.atCafe').style.display = 'none';
        document.querySelector('.phiShip').innerHTML = '10.000 VND'  
        document.querySelector('.totalProduct').innerHTML =   infor.total ;  
        document.querySelector('.tongTienThanhToan').innerHTML =   infor.totalPrice ;
        document.querySelector('.tongTienPhaiTra').innerHTML =   infor.totalPrice + 10000 ;
             
    }else{
        shipMethodValue = 0;
        document.querySelector('.giaoDen').style.backgroundColor = '';
        document.querySelector('.tuNhan').style.backgroundColor = 'green';
        document.querySelector('.tieude').style.color = 'white';
        document.querySelector('.gia').style.color = 'white';
        document.querySelector('.tieude1').style.color = '';
        document.querySelector('.gia1').style.color = '';
        document.querySelector('.atHome').style.display = 'none';
        document.querySelector('.atCafe').style.display = 'block';
        document.querySelector('.phiShip').innerHTML = '0VND'
        document.querySelector('.totalProduct').innerHTML =   infor.total ;
        document.querySelector('.tongTienThanhToan').innerHTML =   infor.totalPrice ;
        document.querySelector('.tongTienPhaiTra').innerHTML =   infor.totalPrice ;


}
}
var getId = (link) => {
    return axios
      .get(`http://localhost:3000/${link}`)
      .then((response) => {
        if (response.data.length > 0) {
          //  console.log(response.data.length);
          //  console.log(typeof response.data.length);
  
          return String(response.data.length + 1);
        } else {
          console.error("No data found");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        return null;
      });
  };
var paymentRequest = function(){
    var method = shipMethodValue;     
    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var district = document.getElementById("district").value;
    var city = document.getElementById("city").value;
    var phone = document.getElementById("phone").value;
    var paymentMethod = document.querySelector('input[name="paymentMethod"]:checked');
    if (!paymentMethod) {
        alert("Vui lòng chọn phương thức thanh toán.");
        return;
    }
    if (method > 0){
        if (!name || !address || !district || !city || !phone) {
            alert("Vui lòng điền đầy đủ thông tin giao hàng.");
            return;
        }
    }

    getId('orders').then((id) => {
        var inforData = localStorage.getItem("payInfor");
        var infor = JSON.parse(inforData);
        id - String(id)
        let order = {
            id: id,  // Sử dụng giá trị từ getId
            userName: localStorage.getItem("userName"),
            productName: productName, 
            totalPrice: document.querySelector('.tongTienPhaiTra').innerHTML,
            paymentMethod: paymentMethod.value,
            shippingPrice: method,
            infor:infor,
            shippingAddress: {
                name: name,
                address: address,
                district: district,
                city: city,
                phone: phone
            }
        };

        axios.post('http://localhost:3000/orders', order)
        .then(response => {
            console.log(response);
            window.location.href = 'http://127.0.0.1:5500/src/html/SuccessPayment.html'
        })
        .catch(error => {
            console.error("Đặt hàng thất bại:", error);
            alert('Đặt hàng thất bại');
        });
    });
};


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
    }else{
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


//   ----chat----
addChatMessage('Chào mừng bạn đến với WOWBOX SALAD. <br> Chúng tôi có thể giúp gì cho bạn?')
function sendMessage() {
    const inputField = document.querySelector('.chat-footer input');
    const messageText = inputField.value.trim();

    if (messageText !== "") {
        addChatMessage('Bạn', messageText);
        setTimeout(() => {
            addChatMessage('WOWBOX SALAD', 'Cảm ơn bạn đã liên hệ! Chúng tôi sẽ hỗ trợ bạn ngay.');
        }, 1000);

        inputField.value = ''; 
    }
}
function addChatMessage(sender, message) {
    const chatBody = document.querySelector('.chat-body');
    const newMessage = document.createElement('div');
    newMessage.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatBody.appendChild(newMessage);
    setTimeout(() => {
        newMessage.classList.add('show');
    }, 100);
}

document.querySelector('.chat-footer button').addEventListener('click', sendMessage);

document.querySelector('.chat-footer input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const inputField = document.querySelector('.chat-footer input');
    const messageText = inputField.value.trim();

    if (messageText !== "") {
        addChatMessage('Bạn', messageText);
        setTimeout(() => {
            addChatMessage('WOWBOX SALAD', 'Cảm ơn bạn đã liên hệ! Chúng tôi sẽ hỗ trợ bạn ngay.');
        }, 1000);

        inputField.value = ''; 
    }
}
function addChatMessage(sender, message) {
    const chatBody = document.querySelector('.chat-body');
    const newMessage = document.createElement('div');
    newMessage.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatBody.appendChild(newMessage);
    setTimeout(() => {
        newMessage.classList.add('show');
    }, 100);
}

document.querySelector('.chat-footer button').addEventListener('click', sendMessage);

document.querySelector('.chat-footer input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// -------click chat-----
      function toggleChat() {
    const chatBox = document.getElementById('hid');
    if (chatBox.style.display === 'none' || chatBox.style.display === '') {
        chatBox.style.display = 'block';
    } else {
        chatBox.style.display = 'none';
    }
}

// Ẩn chat box khi click ra ngoài
document.addEventListener('click', function (event) {
    const chatBox = document.getElementById('hid');
    const messIcon = document.querySelector('.mess img');

    // Nếu click bên ngoài chat box và không phải là icon
    if (!chatBox.contains(event.target) && event.target !== messIcon) {
        chatBox.style.display = 'none';
    }
});

