// get data
var getListProductByType = (link, type) => {
  return axios
    .get(`http://localhost:3000/${link}?type=${type}`)
    .then((response) => {
      if (response.data.length > 0) {
        return response.data;
      } else {
        console.error("Drink not found");
        return [];
      }
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
      return [];
    });
};

var renderDrinkJuice = function () {
  getListProductByType("drinks", "juice")
    .then((listproduct) => {
      if (!listproduct || listproduct.length === 0) {
        console.error("No juices available");
        return;
      }

      var htmlInJuice = listproduct
        .map((data) => {
          return `<div class="container">
                  <div class="left-section">
                      <div class="box"></div>
                      <img src="${data.img_url}" alt="${data.name}">
                      <div class="price-options">
                          <button class="size size1-${data.id}"onclick="price1(${data.id})">Size: M - ${data.price_1} VND - ${data.enegy_1} Cal</button>
                          <button class="size size2-${data.id}"onclick="price2(${data.id})">Size: L - ${data.price_2} VND - ${data.enegy_2} Cal</button>
                      </div>
                  </div>
                  <form class="right-section">
                      <h2>${data.name}</h2>
                      <p>Không Đá + 10.000 VND</p>
                      <p><b>Ghi chú:</b></p>
                      <input type="text" placeholder="...">
                      <div class="quantity-selection">
                          <button onclick="dec(${data.id})" type="button">-</button>
                          <input type="text" value="0" class="quantity-${data.id}">
                          <button onclick="inc(${data.id})" type="button" >+</button>
                      </div>
                      <button class="buy-button" onclick="buyNowDrink(${data.id})" type="button" >MUA NGAY</button>
                      <button class="add-button"onclick="addToCart(${data.id})"type="button">THÊM VÀO GIỎ HÀNG</button>
                  </form>
              </div>`;
        })
        .join("");

      document.querySelector(".item").innerHTML = htmlInJuice;
    })
    .catch((error) => {
      console.error("Error processing product list:", error);
    });
};

renderDrinkJuice();

var getListProductByType = (link, type) => {
  return axios
    .get(`http://localhost:3000/${link}?type=${type}`)
    .then((response) => {
      if (response.data.length > 0) {
        return response.data;
      } else {
        console.error("Smoothie not found");
        return [];
      }
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
      return [];
    });
};

var renderDrinkSmoothie = function () {
  getListProductByType("drinks", "smoothie")
    .then((listproduct) => {
      if (!listproduct) {
        console.error("No smoothies available");
        return;
      }

      var htmlInSmoothie = listproduct
        .map((data) => {
          return `<div class="container">
                <div class="left-section">
                    <div class="box"></div>
                    <img src="${data.img_url}" alt="${data.name}">
                    <div class="price-options">
                        <button class="size size1-${data.id}"onclick="price1(${data.id})">Size: M - ${data.price_1} - ${data.enegy_1} Cal</button>
                        <button class="size size2-${data.id}"onclick="price2(${data.id})">Size: L - ${data.price_2} - ${data.enegy_2} Cal</button>
                    </div>
                </div>
                <form class="right-section">
                    <h2>${data.name}</h2>
                    <p><b>Nguyên liệu:</b></p>
                    <p>${data.ingredient}</p>
                    <p><b>Ghi chú:</b></p>
                    <input type="text" placeholder="...">
                    <div class="quantity-selection">
                        <button onclick="dec(${data.id})" type="button">-</button>
                        <input type="text" value="0" class="quantity-${data.id}">
                        <button onclick="inc(${data.id})" type="button">+</button>
                    </div>
                    <button class="buy-button" onclick="buyNowDrink(${data.id})" type="button" >MUA NGAY</button>
                    <button class="add-button"onclick="addToCart(${data.id})"type="button">THÊM VÀO GIỎ HÀNG</button>
                </form>
            </div>`;
        })
        .join("");

      document.querySelector(".item2").innerHTML = htmlInSmoothie;
    })
    .catch((error) => {
      console.error("Error fetching product list:", error);
    });
};

renderDrinkSmoothie();

var getListProductByType = (link, type) => {
  return axios
    .get(`http://localhost:3000/${link}?type=${type}`)
    .then((response) => {
      if (response.data.length > 0) {
        return response.data;
      } else {
        console.error("Coke not found");
        return [];
      }
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
      return [];
    });
};

var renderDrinkCoke = function () {
  getListProductByType("drinks", "coke")
    .then((listproduct) => {
      if (!listproduct) {
        console.error("No coke available");
        return;
      }

      var htmlInCoke = listproduct
        .map((data) => {
          return `<div class="drink">
                <h2>${data.name}</h2>
                <div id="box"></div>
                <img src="${data.img_url}" alt="" width="230px" height="330px">
                <button class="price">${data.price_1} VNĐ</button>
                <div class="quantity">
                    <button onclick="dec(${data.id})" type="button">-</button>
                    <input type="text" value="0" class="quantity-${data.id}">
                    <button onclick="inc(${data.id})" type="button">+</button>
                </div>
                <button class="buy-button" onclick="buyNowDrink(${data.id})" type="button">MUA NGAY</button>
                <button class="add-button"onclick="addToCart(${data.id})"type="button">THÊM VÀO GIỎ HÀNG</button>
            </div>`;
        })
        .join("");

      document.querySelector(".item3").innerHTML = htmlInCoke;
    })
    .catch((error) => {
      console.error("Error fetching product list:", error);
    });
};

var buyNowDrink = function (id) {
  window.location.href =
    "http://127.0.0.1:5500/src/html/pay.html?drinkId=" + id;
};
var price1 = function (id) {
  document.querySelector(`.size1-${id}`).style.backgroundColor = "green";
  document.querySelector(`.size2-${id}`).style.backgroundColor = "black";
};
var price2 = function (id) {
  document.querySelector(`.size1-${id}`).style.backgroundColor = "black";
  document.querySelector(`.size2-${id}`).style.backgroundColor = "green";
};

var addToCart = function (id) {
  if (document.querySelector(`.size1-${id}`)) {
    var a = document.querySelector(`.size1-${id}`).style.backgroundColor;
    var b = document.querySelector(`.size2-${id}`).style.backgroundColor;
  } else {
    var b = "white";
  }
  var user = localStorage.getItem("userName");

  if (b == "green") {
    var quantity = parseInt(document.querySelector(`.quantity-${id}`).value);
    if (quantity == 0 || quantity == null) {
      quantity = 1;
    }
    var cartData = localStorage.getItem("cart");
    var cart = cartData ? JSON.parse(cartData) : [];
    // Kiểm tra xem item đã tồn tại trong giỏ hàng chưa
    var existingItem = cart.find(
      (item) =>
        item.id == id &&
        item.user === user &&
        item.type == "drinks" &&
        item.price == 2
    );

    if (existingItem) {
      existingItem.quantity += quantity; // Nếu đã có trong giỏ hàng, tăng số lượng
    } else {
      var newItem = {
        type: "drinks",
        user: user,
        id: id,
        price: 2,
        quantity: quantity,
      };
      cart.push(newItem);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  } else {
    var quantity = parseInt(document.querySelector(`.quantity-${id}`).value);
    if (quantity == "0" || quantity == null) {
      quantity = 1;
    }
    var cartData = localStorage.getItem("cart");
    var cart = cartData ? JSON.parse(cartData) : [];
    // Kiểm tra xem item đã tồn tại trong giỏ hàng chưa
    var existingItem = cart.find(
      (item) =>
        item.id == id &&
        item.user === user &&
        item.type == "drinks" &&
        item.price == 1
    );

    if (existingItem) {
      existingItem.quantity += quantity; // Nếu đã có trong giỏ hàng, tăng số lượng
    } else {
      var newItem = {
        type: "drinks",
        user: user,
        id: id,
        price: 1,
        quantity: quantity,
      };
      cart.push(newItem);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  console.log(JSON.parse(localStorage.getItem("cart")));
};

var dec = function (id) {
  var input = document.querySelector(`.quantity-${id}`);
  var value = parseInt(input.value);
  if (value > 0) {
    value--;
    input.value = value;
  }
};

var inc = function (id) {
  var input = document.querySelector(`.quantity-${id}`);
  var value = parseInt(input.value);
  value++;
  input.value = value;
};

renderDrinkCoke();


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




// -----chat
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

// ----click chat
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


