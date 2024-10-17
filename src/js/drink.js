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
                          <button class="size">Size: M - ${data.price_1} VND - ${data.enegy_1} Cal</button>
                          <button class="size">Size: L - ${data.price_2} VND - ${data.enegy_2} Cal</button>
                      </div>
                  </div>
                  <form class="right-section">
                      <h2>${data.name}</h2>
                      <p>Không Đá + 10.000 VND</p>
                      <p><b>Ghi chú:</b></p>
                      <input type="text" name="VD:">
                      <div class="quantity-selection">
                          <button>-</button>
                          <input type="text" value="0">
                          <button>+</button>
                      </div>
                      <button class="buy-button">MUA NGAY</button>
                      <button class="add-button">THÊM VÀO GIỎ HÀNG</button>
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
                        <button class="size">Size: M - ${data.price_1} - ${data.enegy_1} Cal</button>
                        <button class="size">Size: L - ${data.price_2} - ${data.enegy_2} Cal</button>
                    </div>
                </div>
                <form class="right-section">
                    <h2>${data.name}</h2>
                    <p><b>Nguyên liệu:</b></p>
                    <p>${data.ingredient}</p>
                    <p><b>Ghi chú:</b></p>
                    <input type="text" name="VD:">
                    <div class="quantity-selection">
                        <button>-</button>
                        <input type="text" value="0">
                        <button>+</button>
                    </div>
                    <button class="buy-button">MUA NGAY</button>
                    <button class="add-button">THÊM VÀO GIỎ HÀNG</button>
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
                <button class="price">${data.price} VNĐ</button>
                <div class="quantity">
                    <button>-</button>
                    <input type="text" value="0">
                    <button>+</button>
                </div>
                <button class="buy-button">MUA NGAY</button>
                <button class="add-button">THÊM VÀO GIỎ HÀNG</button>
            </div>`;
    }).join("");

    document.querySelector('.item3').innerHTML = htmlInCoke;
  }).catch((error) => {
    console.error("Error fetching product list:", error);
  });
}

renderDrinkCoke();