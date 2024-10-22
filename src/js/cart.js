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
  var cartData = localStorage.getItem("cart");
  if (!cartData) {
    window.location.href = "http://127.0.0.1:5500/src/html/shopping_cart.html";
  } else {
    var cart = JSON.parse(cartData);

    // Tạo một mảng Promise cho tất cả sản phẩm trong giỏ hàng
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
        })">-</button>
  <span class="quantity-display ${data.type}-${data.id}" >${
          data.quantity
        }</span>
  <button class="quantity-btn increase-btn" onclick="inc('${data.type}', ${
          data.id
        })">+</button>
</div>

                  </div>
                  <div class="money">
                    <div class="money--title">Tổng tiền:</div>
                    <div class="money--total">${
                      data.quantity * itemPrice
                    } vnd</div>
                  </div>
                </div>
               <div class="delete--btn--box"> 
                            <button class="detele--btn">XÓA</button> 
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

renderCartItem();
var dec = function (type, id) {
  var displayElement = document.querySelector(`.${type}-${id}`);
  var value = parseInt(displayElement.innerHTML);
  if (value > 0) {
    value--;
    displayElement.innerHTML = value;
  }
};

var inc = function (type, id) {
  var displayElement = document.querySelector(`.${type}-${id}`);
  var value = parseInt(displayElement.innerHTML);
  value++;
  displayElement.innerHTML = value;
};
