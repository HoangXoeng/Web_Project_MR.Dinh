var getListProductByType = (link, type) => {
    return axios
        .get(`http://localhost:3000/${link}?type=${type}`)
        .then((response) => {
            if (response.data.length > 0) {
                return response.data;
            } else {
                console.error("Products not found");
                return null;
            }
        })
        .catch((error) => {
            console.error("Error fetching products:", error);
            return null;
        });
};
var renderExtraFood = function () {
    getListProductByType("foods", "fastFood")
        .then((listproduct) => {
            if (!listproduct) {
                document.querySelector("main-content").innerHTML = "<p>No products found</p>";
                return;
            }
            console.log(listproduct);
            var htmlInExtraFood = listproduct
                .map((data) => {
                    return `<div class="menu-content">
                        <div class="menu-item">
                            <img src="${data.img_url}" alt="${data.name}">
                            <p><strong>${data.price_1}đ - ${data.enegy_1} Cal</strong></p>
                            <div class="buttons">
                                <button class="Add-button" onclick="addToCart(${data.id})" type="button">THÊM VÀO GIỎ HÀNG</button>
                                <button class="Buy-button"onclick="buyNow(${data.id})">MUA NGAY</button>
                            </div>
                        </div>
                        <div class="item-info">
                            <h2>${data.name}</h2>
                            <div class="description">${data.description}</div>
                            <p>Ghi chú:</p>
                            <input type="text" placeholder="...">
                        </div>
                    </div>`;
                })
                .join("");
            document.querySelector(".main-content").innerHTML = htmlInExtraFood;
        })
        .catch((error) => {
            console.error("Error rendering products:", error);
            document.querySelector(".main-content").innerHTML = "<p>Error loading products</p>";
        });
};
renderExtraFood();
var buyNow = function(id) {
    window.location.href = "http://127.0.0.1:5500/src/html/pay.html?extraFoodId=" + id;
}

var addToCart = function(id) {

    var user = localStorage.getItem("userName");
    var cartData = localStorage.getItem("cart");
    var cart = cartData ? JSON.parse(cartData) : [];
  
    // Kiểm tra xem item đã tồn tại trong giỏ hàng chưa
    var existingItem = cart.find(item => item.id == id && item.user === user && item.type =='foods');
  
    if (existingItem) {
      existingItem.quantity += 1; // Nếu đã có trong giỏ hàng, tăng số lượng
    } else {
      // Nếu chưa có, thêm sản phẩm mới
      var newItem = {
        type: 'foods',
        user: user,
        id: id,
        price: 1,  // Giá mặc định
        quantity: 1 // Số lượng mặc định là 1
      };
      cart.push(newItem);
    }
  
    // Lưu giỏ hàng lại vào localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log("Item added to cart:", newItem);
    console.log(JSON.parse(localStorage.getItem("cart")))
  }

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