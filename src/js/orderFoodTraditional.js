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




      var showSalad = function (type) {

        document.querySelectorAll('.linkSalad').forEach(function(element) {
          element.style.color = "green";
      });
        document.querySelector(`.${type}`).style.color = "#157BC5";
        if (type == "basicSalad") {
          document.querySelector('.dia_tren').setAttribute("src","../img/traditionalSaladSlider.png");
        }else if (type == "dailySalad"){
          document.querySelector('.dia_tren').setAttribute("src","../img/dailySaladSlider.png");
        }else if (type == "ingredient"){
          document.querySelector('.dia_tren').setAttribute("src","../img/saladTuChonSlider.png");
        }else if (type == "featureSalad"){
          document.querySelector('.dia_tren').setAttribute("src","../img/saladDacTrungSlider.png");
        }else{
          document.querySelector('.dia_tren').setAttribute("src","../img/vipSalad.png");
        }
       
        if(type != 'ingredient'){
          getListProductByType("foods",type)
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
        }
        else if(type =='ingredient'){
            var htmlInDrinks;
            getListProductByType("ingredients", "Cereal").then((listproduct) => {
              // Sử dụng map để tạo ra các hàng (rows) HTML cho sản phẩm
              htmlInDrinks = listproduct
              htmlInDrinks += "<h1 class='title'>Ngũ cốc</h1>"
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
              htmlInDrinks = htmlInDrinks + htmlInDrinks1;
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
              htmlInDrinks = htmlInDrinks + htmlInDrinks2;
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
              htmlInDrinks = htmlInDrinks + htmlInDrinks3;
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
              htmlInDrinks = htmlInDrinks + htmlInDrinks4;
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
              htmlInDrinks = htmlInDrinks + htmlInDrinks5;
              document.querySelector('.food_items').innerHTML = htmlInDrinks;
            });
          };
      };
      showSalad('basicSalad')