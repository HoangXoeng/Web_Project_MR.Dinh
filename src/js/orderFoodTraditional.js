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
      });}




      var productDrinksAdmin = function () {
        // Call the getListProductByType function and process the data
        getListProductByType("foods", "basicSalad")
          .then((listproduct) => {
            console.log(listproduct)
            // Check if products were retrieved
            if (!listproduct || listproduct.length === 0) {
              console.log("No products found");
              return;
            }
      
            // Generate the HTML for the product list using map
            var htmlInDrinks = listproduct
              .map((data) => {
                return `<div class="food_item">
                  <div>
                    <img class="salad_img" src="${data.img_url}" alt="tamtieu">
                    <div class="salad_name">
                      <h3>${data.name}</h3>
                    </div>
                    <div style="display: flex; margin-top: 100px;">
                      <div class="salad1">
                        <div class="salad_parents">
                          <div class="mb_1">
                            <div class="salad_price">    
                              <span class="price-vnd">${data.price_1}d</span>
                              <span>- ${data.enegy_1} Cal</span>
                            </div>
                            <div class="salad_price">      
                              <span class="price-vnd">${data.price_2}d</span>
                              <span> - ${data.enegy_2} Cal</span>
                            </div>
                          </div>      
                        </div>  
                      </div> 
                      <div class="item">
                        <h4>Nguyên liệu: </h4>
                        ${data.ingredient.map((data_item)=>{
                            return` <span>${data_item}</span>`
                        }).join("")}
                      </div>
                      <div class="note">
                        <h4>Ghi chú:</h4>
                        <button class="button button-note">VD: ít muối</button>
                      </div>
                    </div> 
                    <div class="button-action">
                      <button class="button button-add-item">THÊM VÀO GIỎ HÀNG</button>
                      <button class="button button-buy-item">MUA NGAY</button>
                    </div>     
                  </div>
                </div>`;
              })
              .join(""); // Join the array into a single string
      
            // Insert the generated HTML into a DOM element
            document.querySelector('.food_items').innerHTML = htmlInDrinks;
          })
          .catch((error) => {
            console.error("Error fetching product list:", error);
          });
      
        // Assuming this is another function you want to call
      };
      productDrinksAdmin()