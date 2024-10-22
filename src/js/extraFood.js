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