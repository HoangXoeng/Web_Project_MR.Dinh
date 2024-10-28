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
        if (productId){
            productId=String(productId)
            getListProductByType('foods',productId).then((data) => {
                productName = data.name
                console.log(productId)
                console.log(data.name)
                let price = Number(data.price_1) * 1000;
                document.querySelector('.tongTienThanhToan').innerHTML = price + " VND"
        

        
                // Tính tổng tiền phải trả (gồm giá sản phẩm + phí ship)
                let totalPrice = price + shipMethodValue;
                console.log(shipMethodValue);
                document.querySelector('.tongTienPhaiTra').innerHTML = totalPrice + " VND"
            })
        }
        if (drinkId){
            drinkId=String(drinkId)
            getListProductByType('drinks',drinkId).then((data) => {
                productName = data.name
                console.log(drinkId)
                console.log(data.name)
                let price = Number(data.price_1) * 1000;
                document.querySelector('.tongTienThanhToan').innerHTML = data.price_1 + " VND"
        
        
        
                // Tính tổng tiền phải trả (gồm giá sản phẩm + phí ship)
                let totalPrice = price + shipMethodValue;
                console.log(shipMethodValue);
                document.querySelector('.tongTienPhaiTra').innerHTML = totalPrice + " VND"
            })
        }
        if (extraFoodId){
            extraFoodId=String(extraFoodId)
            getListProductByType('foods',extraFoodId).then((data) => {
                productName = data.name
                console.log(extraFoodId)
                console.log(data.name)
                let price = Number(data.price) * 1000;
                document.querySelector('.tongTienThanhToan').innerHTML = price + " VND"
                let totalPrice = price + shipMethodValue;
                console.log(shipMethodValue);
                document.querySelector('.tongTienPhaiTra').innerHTML = totalPrice + " VND"
            })
        }
        
        
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
        if (productId){
            productId=String(productId)
            getListProductByType('foods',productId).then((data) => {
                productName = data.name
                console.log(productId)
                console.log(data.name)
                let price = Number(data.price_1) * 1000;
                document.querySelector('.tongTienThanhToan').innerHTML = price + " VND"
        

        
                // Tính tổng tiền phải trả (gồm giá sản phẩm + phí ship)
                let totalPrice = price + shipMethodValue;
                console.log(shipMethodValue);
                document.querySelector('.tongTienPhaiTra').innerHTML = totalPrice + " VND"
            })
        }
        if (drinkId){
            drinkId=String(drinkId)
            getListProductByType('drinks',drinkId).then((data) => {
                productName = data.name
                console.log(drinkId)
                console.log(data.name)
                let price = Number(data.price_1) * 1000;
                document.querySelector('.tongTienThanhToan').innerHTML = data.price_1 + " VND"
        
        
        
                // Tính tổng tiền phải trả (gồm giá sản phẩm + phí ship)
                let totalPrice = price + shipMethodValue;
                console.log(shipMethodValue);
                document.querySelector('.tongTienPhaiTra').innerHTML = totalPrice + " VND"
            })
        }
        if (extraFoodId){
            extraFoodId=String(extraFoodId)
            getListProductByType('foods',extraFoodId).then((data) => {
                productName = data.name
                console.log(extraFoodId)
                console.log(data.name)
                let price = Number(data.price) * 1000;
                document.querySelector('.tongTienThanhToan').innerHTML = price + " VND"
                let totalPrice = price + shipMethodValue;
                console.log(shipMethodValue);
                document.querySelector('.tongTienPhaiTra').innerHTML = totalPrice + " VND"
            })
        }
        
        
    }
}
var getListProductByType = (link, type) => {
    return axios
      .get(`http://localhost:3000/${link}/${type}`) // Truyền id trực tiếp vào URL
      .then((response) => {
        if (response.data) { // Kiểm tra đối tượng trả về
          return response.data; // Trả về đối tượng dữ liệu
        } else {
          console.error("Product not found");
          return null;
        }
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  };
  

console.log(productId)
console.log(drinkId)

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
    var method = shipMethodValue;  // shipMethodValue phải được tính đúng trước đó
    console.log(method);
    
    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var district = document.getElementById("district").value;
    var city = document.getElementById("city").value;
    var phone = document.getElementById("phone").value;
    var paymentMethod = document.querySelector('input[name="paymentMethod"]:checked');
    
    // Kiểm tra xem đã chọn phương thức thanh toán chưa
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
        id - String(id)
        let order = {
            id: id,  // Sử dụng giá trị từ getId
            userName: localStorage.getItem("userName"),
            productName: productName, 
            totalPrice: document.querySelector('.tongTienPhaiTra').innerHTML,
            paymentMethod: paymentMethod.value, 
            shippingPrice: method,
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
            alert('Đặt hàng thành công');
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
