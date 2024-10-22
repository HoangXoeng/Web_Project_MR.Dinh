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
    getListProductByType("drinks", "juice").then((listproduct) => {
      if (!listproduct || listproduct.length === 0) {
        console.error("No juices available");
        return;
      }
  
      var htmlInJuice = listproduct.map((data) => {
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
      }).join("");
  
      document.querySelector('.item').innerHTML = htmlInJuice;
    }).catch((error) => {
      console.error("Error processing product list:", error);
    });
  }
  
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
  getListProductByType("drinks", "smoothie").then((listproduct) => {
    if (!listproduct) {
      console.error("No smoothies available");
      return;
    }

    var htmlInSmoothie = listproduct.map((data) => {
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
    }).join("");

    document.querySelector('.item2').innerHTML = htmlInSmoothie;
  }).catch((error) => {
    console.error("Error fetching product list:", error);
  });
}

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
  getListProductByType("drinks", "coke").then((listproduct) => {
    if (!listproduct) {
      console.error("No coke available");
      return;
    }

    var htmlInCoke = listproduct.map((data) => {
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
                <button class="add-button">THÊM VÀO GIỎ HÀNG</button>
            </div>`;
    }).join("");

    document.querySelector('.item3').innerHTML = htmlInCoke;
  }).catch((error) => {
    console.error("Error fetching product list:", error);
  });
}

var buyNowDrink = function(id) {
  window.location.href = "http://127.0.0.1:5500/src/html/pay.html?drinkId=" + id;
}
var price1 = function(id){
  document.querySelector(`.size1-${id}`).style.backgroundColor = 'green';
  document.querySelector(`.size2-${id}`).style.backgroundColor = 'black';
}
var price2 = function(id){
  document.querySelector(`.size1-${id}`).style.backgroundColor = 'black';
  document.querySelector(`.size2-${id}`).style.backgroundColor = 'green';
}
var addToCart = function(id){
  var a =  document.querySelector(`.size1-${id}`).style.backgroundColor;
  var b  = document.querySelector(`.size2-${id}`).style.backgroundColor;
  var user = localStorage.getItem("userName");

  if (b == 'green'){
    var quantity = document.querySelector(`.quantity-${id}`).value;
    if (quantity == 0){
      quantity = 1
    }
    var cartData = localStorage.getItem("cart");
    var cart = cartData ? JSON.parse(cartData) : [];
    var newItem = {
      type:'drinks',
      user : user,
      id: id,
      price: 2,
      quantily:quantity
    };
    cart.push(newItem);
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  else{
    var quantity = document.querySelector(`.quantity-${id}`).value;
    if (quantity == '0'){
      quantity = 1
    }
    var cartData = localStorage.getItem("cart");
    var cart = cartData ? JSON.parse(cartData) : [];
    var newItem = {
      type:'drinks',
      user : user,
      id: id,
      price: 1,
      quantily:quantity
    };
    cart.push(newItem);
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  console.log(JSON.parse(localStorage.getItem("cart")))
}
var dec = function(id) {
  var input = document.querySelector(`.quantity-${id}`);
  var value = parseInt(input.value);
  if (value > 0) {
    value--;
    input.value = value;
  }
}

var inc = function(id) {
  var input = document.querySelector(`.quantity-${id}`);
  var value = parseInt(input.value);
  value++;
  input.value = value;
}

renderDrinkCoke();