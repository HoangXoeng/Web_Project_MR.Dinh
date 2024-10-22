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
}
}