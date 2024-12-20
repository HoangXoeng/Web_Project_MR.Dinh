var getListProductByType = (link, type) => {
  return axios
    .get(`http://localhost:3000/${link}?type=${type}`)
    .then((response) => {
      if (response.data.length > 0) {
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

var showSalad = function (type) {
  document.querySelectorAll(".linkSalad").forEach(function (element) {
    element.style.color = "green";
  });
  document.querySelector(`.${type}`).style.color = "#157BC5";
  if (type == "basicSalad") {
    document
      .querySelector(".dia_tren")
      .setAttribute("src", "../img/traditionalSaladSlider.png");
  } else if (type == "dailySalad") {
    document
      .querySelector(".dia_tren")
      .setAttribute("src", "../img/dailySaladSlider.png");
  } else if (type == "ingredient") {
    document
      .querySelector(".dia_tren")
      .setAttribute("src", "../img/saladTuChonSlider.png");
  } else if (type == "featureSalad") {
    document
      .querySelector(".dia_tren")
      .setAttribute("src", "../img/saladDacTrungSlider.png");
  } else {
    document
      .querySelector(".dia_tren")
      .setAttribute("src", "../img/vipSalad.png");
  }

  if (type != "ingredient") {
    getListProductByType("foods", type)
      .then((listproduct) => {
        console.log(listproduct);
        // Check if products were retrieved
        if (!listproduct || listproduct.length === 0) {
          console.log("No products found");
          return;
        }
        document.querySelector(".food").innerHTML = "";

        // Generate the HTML for the product list using map
        var htmlInDrinks = listproduct
          .map((data) => {
            return `<div class="food_item">
                  <div>
                    <img class="salad_img" src="${data.img_url}" alt="tamtieu">
                    <div class="salad_name">
                      <h2>${data.name}</h2>
                    </div>
                    <div style="display: flex; margin-top: 100px;">
                      <div class="salad1">
                        <div class="salad_parents">
                          <div class="mb_1">
                            <div class="salad_price salad-price1-${
                              data.id
                            }" onclick="price1(${data.id})">    
                              <span class="price-vnd">${data.price_1}d</span>
                              <span>- ${data.enegy_1} Cal</span>
                            </div>
                            <div class="salad_price salad-price2-${
                              data.id
                            }" onclick="price2(${data.id})">      
                              <span class="price-vnd">${data.price_2}d</span>
                              <span> - ${data.enegy_2} Cal</span>
                            </div>
                          </div>      
                        </div>  
                      </div> 
                      <div class="item">
                        <h4>Nguyên liệu: </h4>
                        ${data.ingredient
                          .map((data_item) => {
                            return ` <span>${data_item}</span>`;
                          })
                          .join("")}
                      </div>
                      <div class="note">
                        <h4>Ghi chú:</h4>
                        <input class="button button-note" placeholder="..."></input>
                      </div>
                    </div> 
                    <div class="button-action">
                      <button class="button button-add-item" onclick="addToCart(${
                        data.id
                      })">THÊM VÀO GIỎ HÀNG</button>
                      <button class="button button-buy-item"onclick="buyNow(${
                        data.id
                      })">MUA NGAY</button>
                    </div>     
                  </div>
                </div>`;
          })
          .join(""); // Join the array into a single string

        // Insert the generated HTML into a DOM element
        document.querySelector(".food_items").innerHTML = htmlInDrinks;
      })
      .catch((error) => {
        console.error("Error fetching product list:", error);
      });
  } else if (type == "ingredient") {
    document.querySelector(".food_items").innerHTML = "";
    var text =
      " <div class='itemIngredient'>   <h1 class='title'>Các loại hạt</h1> <div class='content1'>";
    // var finale
    var htmlInDrinks;
    getListProductByType("ingredients", "Cereal").then((listproduct) => {
      // Sử dụng map để tạo ra các hàng (rows) HTML cho sản phẩm

      htmlInDrinks = listproduct
        .map((data) => {
          return `
            <div class="box">
                <div class="name">${data.name}</div>
                <div class="imgIngredient"><img src="${data.img_url}" alt=""></div>
                <div class="content">
                    <h5 class="price">${data.price}vnd</h5>
                    <div class="proInfo">${data.unit} - ${data.enegy} kcal</div>
                </div>
                <div class="fun"></div>
                <div class="addsession">
                <button class="quantity-btn decrease-btn">-</button>
                <span class="quantity-display">0</span>
                <button class="quantity-btn increase-btn">+</button>
                </div>
                
            </div>
                            `;
        })
        .join("");
      text = text + htmlInDrinks + "</div>  </div> </div>";
    });
    getListProductByType("ingredients", "Starch").then((listproduct) => {
      // Sử dụng map để tạo ra các hàng (rows) HTML cho sản phẩm
      htmlInDrinks1 = listproduct
        .map((data) => {
          return `
            <div class="box">
                <div class="name">${data.name}</div>
                <div class="imgIngredient"><img src="${data.img_url}" alt=""></div>
                <div class="content">
                    <h5 class="price">${data.price}vnd</h5>
                    <div class="proInfo">${data.unit} - ${data.enegy} kcal</div>
                </div>
                <div class="fun"></div>
                <div class="addsession">
                    <button class="quantity-btn decrease-btn">-</button>
                <span class="quantity-display">0</span>
                <button class="quantity-btn increase-btn">+</button>
                </div>
                
            </div>`;
        })
        .join("");

      text =
        text +
        " <div class='itemIngredient'><h1 class='title'>Tinh Bột</h1><div class='content1'>" +
        htmlInDrinks1 +
        "</div> </div>";
    });
    getListProductByType("ingredients", "cheese").then((listproduct) => {
      // Sử dụng map để tạo ra các hàng (rows) HTML cho sản phẩm
      htmlInDrinks2 = listproduct
        .map((data) => {
          return `
            <div class="box">
                <div class="name">${data.name}</div>
                <div class="imgIngredient"><img src="${data.img_url}" alt=""></div>
                <div class="content">
                    <h5 class="price">${data.price}vnd</h5>
                    <div class="proInfo">${data.unit} - ${data.enegy} kcal</div>
                </div>
                <div class="fun"></div>
                <div class="addsession">
                    <button class="quantity-btn decrease-btn">-</button>
                <span class="quantity-display">0</span>
                <button class="quantity-btn increase-btn">+</button>
                </div>
                
            </div>`;
        })
        .join("");
      text =
        text +
        " <div class='itemIngredient'><h1 class='title'>Phô Mai</h1><div class='content1'>" +
        htmlInDrinks2 +
        "</div> </div>";
    });
    getListProductByType("ingredients", "protein").then((listproduct) => {
      // Sử dụng map để tạo ra các hàng (rows) HTML cho sản phẩm
      htmlInDrinks3 = listproduct
        .map((data) => {
          return `
            <div class="box">
                <div class="name">${data.name}</div>
                <div class="imgIngredient"><img src="${data.img_url}" alt=""></div>
                <div class="content">
                    <h5 class="price">${data.price}vnd</h5>
                    <div class="proInfo">${data.unit} - ${data.enegy} kcal</div>
                </div>
                <div class="fun"></div>
                <div class="addsession">
                    <button class="quantity-btn decrease-btn">-</button>
                <span class="quantity-display">0</span>
                <button class="quantity-btn increase-btn">+</button>
                </div>
                
            </div>`;
        })
        .join("");
      text =
        text +
        " <div class='itemIngredient'><h1 class='title'>Protein</h1><div class='content1'>" +
        htmlInDrinks3 +
        "</div> </div>";
    });
    getListProductByType("ingredients", "vegestable").then((listproduct) => {
      // Sử dụng map để tạo ra các hàng (rows) HTML cho sản phẩm
      htmlInDrinks4 = listproduct
        .map((data) => {
          return `
            <div class="box">
                <div class="name">${data.name}</div>
                <div class="imgIngredient"><img src="${data.img_url}" alt=""></div>
                <div class="content">
                    <h5 class="price">${data.price}vnd</h5>
                    <div class="proInfo">${data.unit} - ${data.enegy} kcal</div>
                </div>
                <div class="fun"></div>
                <div class="addsession">
                    <button class="quantity-btn decrease-btn">-</button>
                <span class="quantity-display">0</span>
                <button class="quantity-btn increase-btn">+</button>
                </div>
                
            </div>`;
        })
        .join("");
      text =
        text +
        " <div class='itemIngredient'><h1 class='title'>Rau củ</h1><div class='content1'>" +
        htmlInDrinks4 +
        "</div> </div>";
    });
    getListProductByType("ingredients", "sauce").then((listproduct) => {
      // Sử dụng map để tạo ra các hàng (rows) HTML cho sản phẩm
      htmlInDrinks5 = listproduct
        .map((data) => {
          return `
            <div class="box">
                <div class="name">${data.name}</div>
                <div class="imgIngredient"><img src="${data.img_url}" alt=""></div>
                <div class="content">
                    <h5 class="price">${data.price}vnd</h5>
                    <div class="proInfo">${data.unit} - ${data.enegy} kcal</div>
                </div>
                <div class="fun"></div>
                <div class="addsession">
                    <button class="quantity-btn decrease-btn">-</button>
                <span class="quantity-display">0</span>
                <button class="quantity-btn increase-btn">+</button>
                </div>
                
            </div>`;
        })
        .join("");
      text =
        text +
        " <div class='itemIngredient'> <h1 class='title'>Nước Sốt</h1><div class='content1'>" +
        htmlInDrinks5 +
        "</div> </div>";
      document.querySelector(".food").innerHTML = text;
    });
  }
};
var buyNow = function (id) {
  window.location.href =
    "http://127.0.0.1:5500/src/html/pay.html?product_id=" + id;
};

var price1 = function (id) {
  document.querySelector(`.salad-price1-${id}`).style.backgroundColor = "green";
  document.querySelector(`.salad-price2-${id}`).style.backgroundColor = "white";
};
var price2 = function (id) {
  document.querySelector(`.salad-price1-${id}`).style.backgroundColor = "white";
  document.querySelector(`.salad-price2-${id}`).style.backgroundColor = "green";
};
var addToCart = function (id) {
  var user = localStorage.getItem("userName");
  var a = document.querySelector(`.salad-price1-${id}`).style.backgroundColor;
  var b = document.querySelector(`.salad-price2-${id}`).style.backgroundColor;
  if (b == "green") {
    var cartData = localStorage.getItem("cart");
    var cart = cartData ? JSON.parse(cartData) : [];
    var existingItem = cart.find(
      (item) =>
        item.id == id &&
        item.user === user &&
        item.type == "foods" &&
        item.price == 2
    );
    if (existingItem) {
      existingItem.quantity += 1; // Nếu đã có trong giỏ hàng, tăng số lượng
    } else {
      var newItem = {
        type: "foods",
        user: user,
        id: id,
        price: 2,
        quantity: 1,
      };
      cart.push(newItem);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  } else {
    var cartData = localStorage.getItem("cart");
    var cart = cartData ? JSON.parse(cartData) : [];
    var existingItem = cart.find(
      (item) =>
        item.id == id &&
        item.user === user &&
        item.type == "foods" &&
        item.price == 1
    );
    if (existingItem) {
      existingItem.quantity += 1; // Nếu đã có trong giỏ hàng, tăng số lượng
    } else {
      var newItem = {
        type: "foods",
        user: user,
        id: id,
        price: 1,
        quantity: 1,
      };
      cart.push(newItem);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  console.log(JSON.parse(localStorage.getItem("cart")));
};
// localStorage.removeItem("cart");
showSalad("basicSalad");

const goToLoginPage = () => {
  var isLogin = localStorage.getItem("isLogin");
  console.log("isLogin", isLogin);
  if (isLogin == "true") {
    if (document.querySelector(".user--option").style.display == "block") {
      document.querySelector(".user--option").style.display = "none";
    } else {
      document.querySelector(".user--option").style.display = "block";
    }
  } else if (isLogin == "false") {
    alert("log in");
    window.location.href = "http://127.0.0.1:5500/src/html/login.html";
  }
};
const funyFunc = () => {
  document.querySelector(".user--option").style.display = "none";
};

const logOut = () => {
  localStorage.setItem("isLogin", "false");
  localStorage.setItem("role", "null");
  localStorage.removeItem("userName");
  location.reload();
};

const userInformation = () => {
  document.querySelector(".user--option").style.display = "none";
  var role = localStorage.getItem("role");
  if (role == "user") {
    window.location.href =
      "http://127.0.0.1:5500/src/html/userInformation.html";
  } else if (role == "admin") {
    window.location.href = "http://127.0.0.1:5500/src/html/admin.html";
  }
};



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