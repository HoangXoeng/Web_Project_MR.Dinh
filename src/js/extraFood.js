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
                            <p><strong>${data.price}đ - ${data.enegy} Cal</strong></p>
                            <div class="buttons">
                                <button class="Add-button">THÊM VÀO GIỎ HÀNG</button>
                                <button class="Buy-button">MUA NGAY</button>
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
