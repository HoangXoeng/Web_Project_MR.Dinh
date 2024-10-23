var getListProductByType = (type, id) => {
  return axios
    .get(`http://localhost:3000/${type}/${id}`)
    .then((response) => {
      if (response.data) {
        // Kiểm tra nếu có dữ liệu
        return response.data;
      } else {
        console.error("Product not found");
        return null;
      }
    })
    .catch((error) => {
      console.error("Error fetching product:", error);
      return null; // Trả về null trong trường hợp lỗi
    });
};

var renderCartItem = function () {
  var isLogin = localStorage.getItem("isLogin");
  var cartData = localStorage.getItem("cart");

  // console.log(isLogin)
  if (!cartData || cartData == null  || isLogin != 'true' ) {
    window.location.href = "http://127.0.0.1:5500/src/html/shopping_cart.html";
  } else {
    var user = localStorage.getItem("userName");
    var cart = JSON.parse(cartData);
    // Tạo một mảng Promise cho tất cả sản phẩm trong giỏ hàng
    cart = cart.filter((element) => {
        return (element.user === user);
      });
    var promises = cart.map((data) => {
      return getListProductByType(data.type, data.id).then((item) => {
        if (!item) {
          return ""; // Trả về chuỗi rỗng nếu không tìm thấy sản phẩm
        }

        var itemPrice, itemKcal;
        if (data.price == 1) {
          itemPrice = item.price_1;
          itemKcal = item.enegy_1;
        } else {
          itemPrice = item.price_2;
          itemKcal = item.enegy_2;
        }

        return `
            <li>
              <input type="checkbox" id="${data.id}">
              <div class="product--item">
                <div class="product--item--img">
                  <div class="product--item--img--box">
                    <img src="${
                      item.img_url
                    }" alt="" class="product--item--img--img">
                  </div>
                </div>
                <div class="product--item--des">
                  <div class="product--item--name">${item.name}</div>
                  <div class="product--item--price">${itemPrice} vnd - (${itemKcal} Kcal)</div>
                </div>
                <div class="total--money">
                  <div class="addsession">
                   <div class="addsession">
  <button class="quantity-btn decrease-btn" onclick="dec('${data.type}', ${
          data.id
        },${data.price})">-</button>
  <span class="quantity-display ${data.type}-${data.id}" >${
          data.quantity
        }</span>
  <button class="quantity-btn increase-btn" onclick="inc('${data.type}', ${
          data.id
        },${data.price})">+</button>
</div>

                  </div>
                  <div class="money">
                    <div class="money--title">Tổng tiền:</div>
                    <div class="money--total total-${data.type}-${data.id}">${
                      data.quantity * itemPrice * 1000
                    } vnd</div>
                  </div>
                </div>
               <div class="delete--btn--box"> 
                            <button class="detele--btn"onclick="deleteProduct('${data.type}', ${
          data.id
        },${data.price})">XÓA</button> 
                        </div>
              </div>
            </li>
          `;
      });
    });

    // Đợi tất cả các Promise hoàn thành
    Promise.all(promises)
      .then((htmlArray) => {
        var html = htmlArray.join("");
        document.querySelector(".list--product-list").innerHTML = html;
      })
      .catch((error) => {
        console.error("Error rendering cart items:", error);
      });
  }
};
var getTotalMoney = function() {
    var user = localStorage.getItem("userName");
    var cartData = localStorage.getItem("cart");
    if (!cartData) {
        return Promise.resolve(0); 
    } else {
        var cart = JSON.parse(cartData);
        cart = cart.filter((element) => element.user === user);     
        var totalMoney = 0;
        var promises = cart.map((data) => {
            return getListProductByType(data.type, data.id).then((item) => {
                var itemPrice;
                if (data.price == 1) {
                    itemPrice = item.price_1;
                } else {
                    itemPrice = item.price_2;
                }
                totalMoney += data.quantity * itemPrice * 1000; // Tính tổng tiền
            }).catch((error) => {
                console.error("Error fetching product data:", error);
            });
        });
        return Promise.all(promises).then(() => {
            return totalMoney; // Trả về tổng tiền sau khi hoàn thành
        });
    }
};

var showInfor = function() {
    var user = localStorage.getItem("userName");

    var cartData = localStorage.getItem("cart");
    if (!cartData) {
        document.querySelector('.total--product--number').innerHTML = "0 Món";
        document.querySelector('.total--price--number').innerHTML = "0 VND";
        return;
    }

    var cart = JSON.parse(cartData);
    cart = cart.filter((element) => element.user === user);  
    document.querySelector('.total--product--number').innerHTML = cart.length + " Món";

    // Gọi hàm getTotalMoney và chờ kết quả
    getTotalMoney().then((totalMoney) => {
        document.querySelector('.total--price--number').innerHTML = totalMoney + " VND";
        document.querySelector('.total--money--pay--number').innerHTML = totalMoney + " VND"
    }).catch((error) => {
        console.error("Error getting total money:", error);
        document.querySelector('.total--price--number').innerHTML = "0 VND";
        document.querySelector('.total--money--pay--number').innerHTML = "0 VND"; // Hiển thị 0 nếu có lỗi
    });
};


renderCartItem();
showInfor();


var dec = function (type, id, price) {
    var displayElement = document.querySelector(`.${type}-${id}`);
    var value = parseInt(displayElement.innerHTML);
    if (value > 0) {
      value--;
      displayElement.innerHTML = value;
    }
  
    var user = localStorage.getItem("userName");
    var cartData = localStorage.getItem("cart");
    var cart = JSON.parse(cartData); 
    cart = cart.filter((element) => {
        return (element.user === user);
      });
  
    cart.forEach((element) => {
      if (element.user === user && element.type === type && element.id === id && element.price === price) {
        element.quantity = element.quantity - 1; 
      }
    });
  
    localStorage.setItem("cart", JSON.stringify(cart)); 
    onloadd(type, id); 
    showInfor();

  };
  

var inc = function (type, id,price) {
  var displayElement = document.querySelector(`.${type}-${id}`);
  var value = parseInt(displayElement.innerHTML);
  value++;
  displayElement.innerHTML = value;
  var user = localStorage.getItem("userName");
  var cartData = localStorage.getItem("cart");
  var cart = JSON.parse(cartData); 
  cart = cart.filter((element) => {
    return (element.user === user);
  });

  cart.forEach((element) => {
    if (element.user === user && element.type === type && element.id === id && element.price === price) {
      element.quantity = element.quantity + 1; 
    }
  });

  localStorage.setItem("cart", JSON.stringify(cart)); 
  onloadd(type, id); 
  showInfor();

};

var onloadd = function (type, id) {
  getListProductByType(type, id)
    .then((item) => {
      var itemPrice, itemKcal;

      if (item.price_1) {
        itemPrice = item.price_1 * 1000;
        itemKcal = item.enegy_1;
      } else {
        itemPrice = item.price_2 * 1000;
        itemKcal = item.enegy_2;
      }

      var displayElement = document.querySelector(`.${type}-${id}`);
      var value = parseInt(displayElement.innerHTML);

      document.querySelector(`.total-${type}-${id}`).innerHTML = value * itemPrice + "  vnd";
    })
    .catch((error) => {
      console.error("Error fetching product data:", error);
    });
    showInfor();
    
};

var deleteProduct = function(type, id, price) {
    var user = localStorage.getItem("userName");
    var cartData = localStorage.getItem("cart");
    var cart = JSON.parse(cartData);   
    cart = cart.filter((element) => {
        return (element.user === user);
      });
    cart = cart.filter((element) => {
      return !(element.user === user && element.type === type && element.id === id && element.price === price);
    });
    localStorage.setItem("cart", JSON.stringify(cart)); 
    renderCartItem();
    showInfor();
  };
  

var goToPayy = function() {
    var cartData = localStorage.getItem("cart");
    var user = localStorage.getItem("userName"); // Lấy tên người dùng từ localStorage

    if (!cartData || !user) {
        document.querySelector('.total--product--number').innerHTML = "0 Món";
        document.querySelector('.total--price--number').innerHTML = "0 VND";
        return;
    }

    var cart = JSON.parse(cartData);
    cart = cart.filter((element) => element.user === user);  
    
    // Gọi getTotalMoney và chờ kết quả
    getTotalMoney().then((totalPrice) => {
        var newItem = {
            total: cart.length,
            user: user,
            totalPrice: totalPrice, // Sử dụng giá trị đã lấy từ getTotalMoney
            infor: cart
        };
        localStorage.setItem("payInfor", JSON.stringify(newItem));
        window.location.href = "http://127.0.0.1:5500/src/html/pay-vjp.html"; // Chuyển hướng tới trang thanh toán
    }).catch((error) => {
        console.error("Error getting total money for payment:", error);
        // Xử lý lỗi nếu cần
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