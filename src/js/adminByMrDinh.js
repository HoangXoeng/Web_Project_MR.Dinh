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

var getId = (link) => {
  return axios
    .get(`http://localhost:3000/${link}`)
    .then((response) => {
      if (response.data.length > 0) {
       console.log(response.data.length);
       console.log(typeof response.data.length);

        return response.data.length;
      } else {
        console.error("No data found");
        return 1;
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      return null;
    });
};

// getListProductByType('basicSalad').then((listproduct) =>console.log(listproduct))

var productSaladAdmin = function () {
  var htmlInSalad;
  getListProductByType("foods", "basicSalad").then((listproduct) => {
    // Sử dụng map để tạo ra các hàng (rows) HTML cho sản phẩm
    htmlInSalad = listproduct
      .map((data) => {
        return `<tr>
                        <td>${data.id}</td>
                        <td>${data.name}</td>
                        <td><img src="../img/${data.img}" alt="error update" style="width: 50px;"></td>
                        <td>${data.type}</td>
                        <td>${data.enegy_1} kcal</td>
                        <td>${data.price_1} đ</td>
                        <td>${data.enegy_2} kcal</td>
                        <td>${data.price_2} đ</td>
                        <td>
                            <button onclick="updateProduct('food',${data.id})" class="btn btn-outline-danger" data-toggle="modal" data-target="#updateProduct">
                                <i class="fas fa-cogs"></i>
                            </button>                       
                            <button onclick="deleteProduct('food',${data.id})" class="btn ml-1 btn-outline-warning">
                                <i class="fas fa-trash"></i>
                            </button>
                             <button onclick="detailProduct('food',${data.id})" class="btn ml-1 btn-outline-success">
                                <i class="fas fa-dots"></i>
                            </button>
                        </td>
                    </tr>`;
      })
      .join("");
  });

  getListProductByType("foods", "dailySalad").then((listproduct) => {
    // Sử dụng map để tạo ra các hàng (rows) HTML cho sản phẩm
    var htmlInSalad1 = listproduct
      .map((data) => {
        return `<tr>
                      <td>${data.id}</td>
                      <td>${data.name}</td>
                      <td><img src="../img/${data.img}" alt="error update" style="width: 50px;"></td>
                      <td>${data.type}</td>
                      <td>${data.enegy_1} kcal</td>
                      <td>${data.price_1} đ</td>
                      <td>${data.enegy_2} kcal</td>
                      <td>${data.price_2} đ</td>
                      <td>
                          <button onclick="updateProduct('food',${data.id})" class="btn btn-outline-danger" data-toggle="modal" data-target="#updateProduct">
                              <i class="fas fa-cogs"></i>
                          </button>                       
                          <button onclick="deleteProduct('food',${data.id})" class="btn ml-1 btn-outline-warning">
                              <i class="fas fa-trash"></i>
                          </button>
                           <button onclick="detailProduct('food',${data.id})" class="btn ml-1 btn-outline-success">
                              <i class="fas fa-dots"></i>
                          </button>
                      </td>
                  </tr>`;
      })
      .join("");
    // Gán nội dung HTML đã tạo vào bảng
    htmlInSalad = htmlInSalad + htmlInSalad1;
  });

  getListProductByType("foods", "featureSalad").then((listproduct) => {
    // Sử dụng map để tạo ra các hàng (rows) HTML cho sản phẩm
    var htmlInSalad2 = listproduct
      .map((data) => {
        return `<tr>
                    <td>${data.id}</td>
                    <td>${data.name}</td>
                    <td><img src="../img/${data.img}" alt="error update" style="width: 50px;"></td>
                    <td>${data.type}</td>
                    <td>${data.enegy_1} kcal</td>
                    <td>${data.price_1} đ</td>
                    <td>${data.enegy_2} kcal</td>
                    <td>${data.price_2} đ</td>
                    <td>
                        <button onclick="updateProduct('food',${data.id})" class="btn btn-outline-danger" data-toggle="modal" data-target="#updateProduct">
                            <i class="fas fa-cogs"></i>
                        </button>                       
                        <button onclick="deleteProduct('food',${data.id})" class="btn ml-1 btn-outline-warning">
                            <i class="fas fa-trash"></i>
                        </button>
                         <button onclick="detailProduct('food',${data.id})" class="btn ml-1 btn-outline-success">
                            <i class="fas fa-dots"></i>
                        </button>
                    </td>
                </tr>`;
      })
      .join("");
    // Gán nội dung HTML đã tạo vào bảng
    htmlInSalad = htmlInSalad + htmlInSalad2;
  });

  getListProductByType("foods", "vipSalad").then((listproduct) => {
    // Sử dụng map để tạo ra các hàng (rows) HTML cho sản phẩm
    var htmlInSalad3 = listproduct
      .map((data) => {
        return `<tr>
                  <td>${data.id}</td>
                  <td>${data.name}</td>
                  <td><img src="../img/${data.img}" alt="error update" style="width: 50px;"></td>
                  <td>${data.type}</td>
                  <td>${data.enegy_1} kcal</td>
                  <td>${data.price_1} đ</td>
                  <td>${data.enegy_2} kcal</td>
                  <td>${data.price_2} đ</td>
                  <td>
                      <button onclick="updateProduct('food',${data.id})" class="btn btn-outline-danger" data-toggle="modal" data-target="#updateProduct">
                          <i class="fas fa-cogs"></i>
                      </button>                       
                      <button onclick="deleteProduct('food',${data.id})" class="btn ml-1 btn-outline-warning">
                          <i class="fas fa-trash"></i>
                      </button>
                       <button onclick="detailProduct('food',${data.id})" class="btn ml-1 btn-outline-success">
                          <i class="fas fa-dots"></i>
                      </button>
                  </td>
              </tr>`;
      })
      .join("");
    // Gán nội dung HTML đã tạo vào bảng
    htmlInSalad = htmlInSalad + htmlInSalad3;
    document.querySelector("#product-salad-admin").innerHTML = htmlInSalad;
  });
};

var productFastFoodAdmin = function () {
  var htmlInFastFood;
  getListProductByType("foods", "fastFood").then((listproduct) => {
    // Sử dụng map để tạo ra các hàng (rows) HTML cho sản phẩm
    htmlInFastFood = listproduct
      .map((data) => {
        return `<tr>
                      <td>${data.id}</td>
                      <td>${data.name}</td>
                      <td><img src="../img/${data.img}" alt="error update" style="width: 50px;"></td>
                      <td>${data.type}</td>
                      <td>${data.enegy} kcal</td>
                      <td>${data.price} đ</td>
                      <td>
                          <button onclick="updateProduct('food',${data.id})" class="btn btn-outline-danger" data-toggle="modal" data-target="#updateProduct">
                              <i class="fas fa-cogs"></i>
                          </button>                       
                          <button onclick="deleteProduct('food',${data.id})" class="btn ml-1 btn-outline-warning">
                              <i class="fas fa-trash"></i>
                          </button>
                           <button onclick="detailProduct('food',${data.id})" class="btn ml-1 btn-outline-success">
                              <i class="fas fa-dots"></i>
                          </button>
                      </td>
                  </tr>`;
      })
      .join("");
    document.querySelector("#product-fastFood-admin").innerHTML =
      htmlInFastFood;
  });
};

var productDrinksAdmin = function () {
  var htmlInDrinks;
  getListProductByType("drinks", "juice").then((listproduct) => {
    // Sử dụng map để tạo ra các hàng (rows) HTML cho sản phẩm
    htmlInDrinks = listproduct
      .map((data) => {
        return `<tr>
                  <td>${data.id}</td>
                  <td>${data.name}</td>
                  <td><img src="../img/${data.img}" alt="error update" style="width: 50px;"></td>
                  <td>${data.type}</td>
                  <td>${data.enegy_1} kcal</td>
                  <td>${data.price_1} đ</td>
                  <td>${data.enegy_2} kcal</td>
                  <td>${data.price_2} đ</td>
                      <td>
                          <button onclick="updateProduct('drink',${data.id})" class="btn btn-outline-danger" data-toggle="modal" data-target="#updateProduct">
                              <i class="fas fa-cogs"></i>
                          </button>                       
                          <button onclick="deleteProduct('drink',${data.id})" class="btn ml-1 btn-outline-warning">
                              <i class="fas fa-trash"></i>
                          </button>
                           <button onclick="detailProduct('drink',${data.id})" class="btn ml-1 btn-outline-success">
                              <i class="fas fa-dots"></i>
                          </button>
                      </td>
                  </tr>`;
      })
      .join("");
  });
  getListProductByType("drinks", "smoothie").then((listproduct) => {
    // Sử dụng map để tạo ra các hàng (rows) HTML cho sản phẩm
    htmlInDrinks1 = listproduct
      .map((data) => {
        return `<tr>
                <td>${data.id}</td>
                <td>${data.name}</td>
                <td><img src="../img/${data.img}" alt="error update" style="width: 50px;"></td>
                <td>${data.type}</td>
                <td>${data.enegy_1} kcal</td>
                <td>${data.price_1} đ</td>
                <td>${data.enegy_2} kcal</td>
                <td>${data.price_2} đ</td>
                    <td>
                        <button onclick="updateProduct('drink',${data.id})" class="btn btn-outline-danger" data-toggle="modal" data-target="#updateProduct">
                            <i class="fas fa-cogs"></i>
                        </button>                       
                        <button onclick="deleteProduct('drink',${data.id})" class="btn ml-1 btn-outline-warning">
                            <i class="fas fa-trash"></i>
                        </button>
                         <button onclick="detailProduct('drink',${data.id})" class="btn ml-1 btn-outline-success">
                            <i class="fas fa-dots"></i>
                        </button>
                    </td>
                </tr>`;
      })
      .join("");
    htmlInDrinks = htmlInDrinks + htmlInDrinks1;
  });
  getListProductByType("drinks", "coke").then((listproduct) => {
    // Sử dụng map để tạo ra các hàng (rows) HTML cho sản phẩm
    htmlInDrinks2 = listproduct
      .map((data) => {
        return `<tr>
              <td>${data.id}</td>
              <td>${data.name}</td>
              <td><img src="../img/${data.img}" alt="error update" style="width: 50px;"></td>
              <td>${data.type}</td>
              <td>${data.enegy_1} kcal</td>
              <td>${data.price} đ</td>
              <td>${data.enegy_2} kcal</td>
              <td>${data.price_2} đ</td>
                  <td>
                      <button onclick="updateProduct('drink',${data.id})" class="btn btn-outline-danger" data-toggle="modal" data-target="#updateProduct">
                          <i class="fas fa-cogs"></i>
                      </button>                       
                      <button onclick="deleteProduct('drink',${data.id})" class="btn ml-1 btn-outline-warning">
                          <i class="fas fa-trash"></i>
                      </button>
                       <button onclick="detailProduct('drink',${data.id})" class="btn ml-1 btn-outline-success">
                          <i class="fas fa-dots"></i>
                      </button>
                  </td>
              </tr>`;
      })
      .join("");
    htmlInDrinks = htmlInDrinks + htmlInDrinks2;
    document.querySelector("#product-drinks-admin").innerHTML = htmlInDrinks;
  });
};

var productIngredientsAdmin = function () {
  var htmlInDrinks;
  getListProductByType("ingredients", "Cereal").then((listproduct) => {
    // Sử dụng map để tạo ra các hàng (rows) HTML cho sản phẩm
    htmlIningredients = listproduct
      .map((data) => {
        return `<tr>
              <td>${data.id}</td>
              <td>${data.name}</td>
              <td><img src="../img/${data.img}" alt="error update" style="width: 50px;"></td>
              <td>${data.type}</td>
              <td>${data.unit}</td>
              <td>${data.price} đ</td>
                      <td>
                          <button onclick="updateProduct('ingredien',${data.id})" class="btn btn-outline-danger" data-toggle="modal" data-target="#updateProduct">
                              <i class="fas fa-cogs"></i>
                          </button>                       
                          <button onclick="deleteProduct('ingredien',${data.id})" class="btn ml-1 btn-outline-warning">
                              <i class="fas fa-trash"></i>
                          </button>
                           <button onclick="detailProduct('ingredien',${data.id})" class="btn ml-1 btn-outline-success">
                              <i class="fas fa-dots"></i>
                          </button>
                      </td>
                  </tr>`;
      })
      .join("");
  });
  getListProductByType("ingredients", "Starch").then((listproduct) => {
    // Sử dụng map để tạo ra các hàng (rows) HTML cho sản phẩm
    htmlIningredients1 = listproduct
      .map((data) => {
        return `<tr>
              <td>${data.id}</td>
              <td>${data.name}</td>
              <td><img src="../img/${data.img}" alt="error update" style="width: 50px;"></td>
              <td>${data.type}</td>
              <td>${data.unit}</td>
              <td>${data.price} đ</td>
                    <td>
                        <button onclick="updateProduct('ingredien',${data.id})" class="btn btn-outline-danger" data-toggle="modal" data-target="#updateProduct">
                            <i class="fas fa-cogs"></i>
                        </button>                       
                        <button onclick="deleteProduct('ingredien',${data.id})" class="btn ml-1 btn-outline-warning">
                            <i class="fas fa-trash"></i>
                        </button>
                         <button onclick="detailProduct('ingredien',${data.id})" class="btn ml-1 btn-outline-success">
                            <i class="fas fa-dots"></i>
                        </button>
                    </td>
                </tr>`;
      })
      .join("");
    htmlIningredients = htmlIningredients + htmlIningredients1;
  });
  getListProductByType("ingredients", "cheese").then((listproduct) => {
    // Sử dụng map để tạo ra các hàng (rows) HTML cho sản phẩm
    htmlIningredients2 = listproduct
      .map((data) => {
        return `<tr>
              <td>${data.id}</td>
              <td>${data.name}</td>
              <td><img src="../img/${data.img}" alt="error update" style="width: 50px;"></td>
              <td>${data.type}</td>
              <td>${data.unit}</td>
              <td>${data.price} đ</td>
                  <td>
                      <button onclick="updateProduct('ingredien',${data.id})" class="btn btn-outline-danger" data-toggle="modal" data-target="#updateProduct">
                          <i class="fas fa-cogs"></i>
                      </button>                       
                      <button onclick="deleteProduct('ingredien',${data.id})" class="btn ml-1 btn-outline-warning">
                          <i class="fas fa-trash"></i>
                      </button>
                       <button onclick="detailProduct('ingredien',${data.id})" class="btn ml-1 btn-outline-success">
                          <i class="fas fa-dots"></i>
                      </button>
                  </td>
              </tr>`;
      })
      .join("");
    htmlIningredients = htmlIningredients + htmlIningredients2;
  });
  getListProductByType("ingredients", "protein").then((listproduct) => {
    // Sử dụng map để tạo ra các hàng (rows) HTML cho sản phẩm
    htmlIningredients3 = listproduct
      .map((data) => {
        return `<tr>
              <td>${data.id}</td>
              <td>${data.name}</td>
              <td><img src="../img/${data.img}" alt="error update" style="width: 50px;"></td>
              <td>${data.type}</td>
              <td>${data.unit}</td>
              <td>${data.price} đ</td>
                  <td>
                      <button onclick="updateProduct('ingredien',${data.id})" class="btn btn-outline-danger" data-toggle="modal" data-target="#updateProduct">
                          <i class="fas fa-cogs"></i>
                      </button>                       
                      <button onclick="deleteProduct('ingredien',${data.id})" class="btn ml-1 btn-outline-warning">
                          <i class="fas fa-trash"></i>
                      </button>
                       <button onclick="detailProduct('ingredien',${data.id})" class="btn ml-1 btn-outline-success">
                          <i class="fas fa-dots"></i>
                      </button>
                  </td>
              </tr>`;
      })
      .join("");
    htmlIningredients = htmlIningredients + htmlIningredients3;
  });
  getListProductByType("ingredients", "vegestable").then((listproduct) => {
    // Sử dụng map để tạo ra các hàng (rows) HTML cho sản phẩm
    htmlIningredients4 = listproduct
      .map((data) => {
        return `<tr>
              <td>${data.id}</td>
              <td>${data.name}</td>
              <td><img src="../img/${data.img}" alt="error update" style="width: 50px;"></td>
              <td>${data.type}</td>
              <td>${data.unit} kcal</td>
              <td>${data.price} đ</td>
                  <td>
                      <button onclick="updateProduct('ingredien',${data.id})" class="btn btn-outline-danger" data-toggle="modal" data-target="#updateProduct">
                          <i class="fas fa-cogs"></i>
                      </button>                       
                      <button onclick="deleteProduct('ingredien',${data.id})" class="btn ml-1 btn-outline-warning">
                          <i class="fas fa-trash"></i>
                      </button>
                       <button onclick="detailProduct('ingredien',${data.id})" class="btn ml-1 btn-outline-success">
                          <i class="fas fa-dots"></i>
                      </button>
                  </td>
              </tr>`;
      })
      .join("");
    htmlIningredients = htmlIningredients + htmlIningredients4;
  });
  getListProductByType("ingredients", "sauce").then((listproduct) => {
    // Sử dụng map để tạo ra các hàng (rows) HTML cho sản phẩm
    htmlIningredients5 = listproduct
      .map((data) => {
        return `<tr>
              <td>${data.id}</td>
              <td>${data.name}</td>
              <td><img src="../img/${data.img}" alt="error update" style="width: 50px;"></td>
              <td>${data.type}</td>
              <td>${data.unit} kcal</td>
              <td>${data.price} đ</td>
                  <td>
                      <button onclick="updateProduct('ingredien',${data.id})" class="btn btn-outline-danger" data-toggle="modal" data-target="#updateProduct">
                          <i class="fas fa-cogs"></i>
                      </button>                       
                      <button onclick="deleteProduct('ingredien',${data.id})" class="btn ml-1 btn-outline-warning">
                          <i class="fas fa-trash"></i>
                      </button>
                       <button onclick="detailProduct('ingredien',${data.id})" class="btn ml-1 btn-outline-success">
                          <i class="fas fa-dots"></i>
                      </button>
                  </td>
              </tr>`;
      })
      .join("");
    htmlIningredients = htmlIningredients + htmlIningredients5;
    document.querySelector("#product-ingredients-admin").innerHTML =
      htmlIningredients;
  });
};

const showForm = (type) => {
  var span = document.querySelectorAll("#closeModal");
  var product__salad = document.querySelector(".product--salad");
  var saladForm = document.querySelector(".formAddSalad");
  var fastFoodForm = document.querySelector(".formAddFastFood");
  var product__fastFood = document.querySelector(".product--fastFood");
  var modal = document.querySelector(".blackBack");
  var drinkForm = document.querySelector(".formAddDrink");
  var product__drink = document.querySelector(".product--drink");
  var product__ingredient = document.querySelector(".product--ingredient");
  var formAddIngredient =document.querySelector(".formAddIngredient");

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      saladForm.style.display = "none";
      fastFoodForm.style.display = "none";
      drinkForm.style.display = "none";
    formAddIngredient.style.display = "none";

      if (type === "salad") {
        product__salad.scrollIntoView({ behavior: "smooth" });
      } else if (type === "fastFood") {
        product__fastFood.scrollIntoView({ behavior: "smooth" });
      } else if (type === "drinks") {
        product__drink.scrollIntoView({ behavior: "smooth" });
      } else {
        product__ingredient.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  span.forEach((span_item) => {
    span_item.onclick = function () {
      modal.style.display = "none";
      saladForm.style.display = "none";
      fastFoodForm.style.display = "none";
      drinkForm.style.display = "none";
    formAddIngredient.style.display = "none";

      if (type === "salad") {
        product__salad.scrollIntoView({ behavior: "smooth" });
      } else if (type === "fastFood") {
        product__fastFood.scrollIntoView({ behavior: "smooth" });
      } else if (type === "drinks") {
        product__drink.scrollIntoView({ behavior: "smooth" });
      }else {
        product__ingredient.scrollIntoView({ behavior: "smooth" });
      }
    };
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      modal.style.display = "none";
      saladForm.style.display = "none";
      fastFoodForm.style.display = "none";
      drinkForm.style.display = "none";
    formAddIngredient.style.display = "none";

      if (type === "salad") {
        product__salad.scrollIntoView({ behavior: "smooth" });
      } else if (type === "fastFood") {
        product__fastFood.scrollIntoView({ behavior: "smooth" });
      } else if (type === "drinks") {
        product__drink.scrollIntoView({ behavior: "smooth" });
      }else {
        product__ingredient.scrollIntoView({ behavior: "smooth" });
      }
    }
  });

  if (type === "salad") {
    saladForm.style.display = "block";
    modal.style.display = "block";
  } else if (type === "fastFood") {
    fastFoodForm.style.display = "block";
    modal.style.display = "block";
    product__salad.scrollIntoView({ behavior: "smooth" });
  } else if (type === "drinks") {
    drinkForm.style.display = "block";
    modal.style.display = "block";
    product__salad.scrollIntoView({ behavior: "smooth" });
  } else{
    formAddIngredient.style.display = "block";
    modal.style.display = "block";
    product__salad.scrollIntoView({ behavior: "smooth" });
  }
};
var addNewProduct = function (type) {
  var apiFoods = "http://localhost:3000/foods";
  var apiDrinks = "http://localhost:3000/drinks";
  var apiIngredients = "http://localhost:3000/ingredients";

  if (type == "salad") {
    const saladName = document.getElementById("productName").value;
    const img = document.getElementById("productImg").value;
    const saladType = document.getElementById("productType").value;
    const ingredients = document
      .getElementById("ingredients")
      .value.split(",")
      .map((item) => item.trim());
    const energy1 = document.getElementById("energy1").value;
    const price1 = document.getElementById("price1").value;
    const energy2 = document.getElementById("energy2").value;
    const price2 = document.getElementById("price2").value;
    const isTrue = true;

    // Kiểm tra các trường bắt buộc
    if (
      saladName.trim() === "" ||
      img.trim() === "" ||
      saladType.trim() === "" ||
      ingredients.length === 0
    ) {
      alert("Vui lòng điền đầy đủ thông tin!");
      isTrue = false;
    }

    // Kiểm tra giá trị năng lượng và giá tiền
    if (isNaN(energy1) || energy1 <= 0) {
      alert("Giá trị energy 1 phải là số và lớn hơn 0");
      isTrue = false;
    }

    if (isNaN(price1) || price1 <= 0) {
      alert("Giá trị price 1 phải là số và lớn hơn 0");
      isTrue = false;
    }

    if (energy2 && (isNaN(energy2) || energy2 <= 0)) {
      alert("Giá trị energy 2 phải là số và lớn hơn 0 (nếu có)");
      isTrue = false;
    }

    if (price2 && (isNaN(price2) || price2 <= 0)) {
      alert("Giá trị price 2 phải là số và lớn hơn 0 (nếu có)");
      isTrue = false;
    }

    // Kiểm tra nguyên liệu có ít nhất 1 giá trị
    if (ingredients.length === 0 || ingredients[0] === "") {
      alert("Nguyên liệu không được để trống!");
      isTrue = false;
    }

    if (isTrue) {
      var id = getId('foods')
      opt = {
        url: apiFoods,
        method: "post",
        data: {
          id : id,
          name: saladName,
          ingredient: ingredients,
          description: "",
          type: saladType,
          enegy_1: energy1,
          price_1: price1,
          enegy_2: energy2,
          price_2: price2,
          img: img,
        },
      };
    }
    axios(opt)
      .then(function (data_res) {
        console.log(data_res);
        if (data_res.status == 201) alert("Created successfully");
      })
      .catch(function (ex) {
        console.log(ex);
      });
  } else if (type == "fastFood") {
    const saladName = document.getElementById("fastFoodName").value;
    const img = document.getElementById("fastFoodImg").value;
    const description = document.getElementById("description").value;
    const energy = document.getElementById("energy").value;
    const price = document.getElementById("price").value;
    const isTrue = true;

    // Kiểm tra giá trị năng lượng và giá tiền
    if (isNaN(energy) || energy <= 0) {
      alert("Giá trị energy 1 phải là số và lớn hơn 0");
      isTrue = false;
    }

    if (isNaN(price) || price <= 0) {
      alert("Giá trị price 1 phải là số và lớn hơn 0");
      isTrue = false;
    }

    if (isTrue) {
      var id = getId('foods')

      opt = {
        url: apiFoods,
        method: "post",
        data: {
          id : id+1,
          name: saladName,
          ingredient: "",
          description: description,
          type: "fastFood",
          enegy: energy,
          price: price,
          img: img,
        },
      };
    }
    axios(opt)
      .then(function (data_res) {
        console.log(data_res);
        if (data_res.status == 201) alert("Created successfully");
      })
      .catch(function (ex) {
        console.log(ex);
      });
  }else if (type == "drinks") {
    const drinkName = document.getElementById("drinkName").value;
    const drinkImg = document.getElementById("drinkImg").value;
    const drinkType = document.getElementById("drinkType").value;

    if (drinkType == "juice") {
      var energy1 = document.getElementById("energy-drink-1").value;
      var price1 = document.getElementById("price-drink-1").value;
      var energy2 = document.getElementById("energy-drink-2").value;
      var price2 = document.getElementById("price-drink-2").value;
    } else if (drinkType == "smoothie") {
      var energy1 = document.getElementById("energy-drink-1").value;
      var price1 = document.getElementById("price-drink-1").value;
      var energy2 = document.getElementById("energy-drink-2").value;
      var price2 = document.getElementById("price-drink-2").value;
      var description = document.getElementById("description-drink").value;
    } else {
      var price = document.getElementById("price-drink").value;
    }

    const isTrue = true;
    if (drinkType == "juice" || drinkType == "smoothie") {
      if (isNaN(energy1) || energy1 <= 0) {
        alert("Giá trị energy 1 phải là số và lớn hơn 0");
        isTrue = false;
      }

      if (isNaN(price1) || price1 <= 0) {
        alert("Giá trị price 1 phải là số và lớn hơn 0");
        isTrue = false;
      }

      if (energy2 && (isNaN(energy2) || energy2 <= 0)) {
        alert("Giá trị energy 2 phải là số và lớn hơn 0 (nếu có)");
        isTrue = false;
      }

      if (price2 && (isNaN(price2) || price2 <= 0)) {
        alert("Giá trị price 2 phải là số và lớn hơn 0 (nếu có)");
        isTrue = false;
      }
    } else {
      // Kiểm tra giá trị năng lượng và giá tiền

      if (isNaN(price) || price <= 0) {
        alert("Giá trị price  phải là số và lớn hơn 0");
        isTrue = false;
      }
    }

    if (isTrue) {
      if (drinkType == "juice" || drinkType == "smoothie") {
        opt = {
          url: apiDrinks,
          method: "post",
          data: {
            id:getId('drinks'),
            name: drinkName,
            description: description,
            type: drinkType,
            enegy_1: energy1,
            price_1: price1,
            enegy_2: energy2,
            price_2: price2,
            img: drinkImg,
          },
        };
      } else {
        opt = {
          url: apiDrinks,
          method: "post",
          data: {
            name: drinkName,
            description: "",
            type: "coke",
            price: price,
            img: drinkImg,
          },
        };
      }
    }
    axios(opt)
      .then(function (data_res) {
        console.log(data_res);
        if (data_res.status == 201) alert("Created successfully");
      })
      .catch(function (ex) {
        console.log(ex);
      });
  }
  else{
    const name = document.getElementById("ingredientName").value;
    const img = document.getElementById("ingredientName").value;
    const type = document.getElementById("ingredientType").value;
    const unit = document.getElementById("unit").value;
    const energy = document.getElementById("ingredient--energy").value;
    const price = document.getElementById("ingredient--price").value;
    const isTrue = true;


    // Kiểm tra giá trị năng lượng và giá tiền
    if (isNaN(energy) || energy <= 0) {
      alert("Giá trị energy 1 phải là số và lớn hơn 0");
      isTrue = false;
    }

    if (isNaN(price) || price <= 0) {
      alert("Giá trị price 1 phải là số và lớn hơn 0");
      isTrue = false;
    }


    if (isTrue) {
      opt = {
        url: apiIngredients,
        method: "post",
        data: {
          id : getId('ingredients'),
          name: name,
          type: type,
          unit: unit,
          enegy: energy,
          price: price,
          img: img,
        },
      };
    }
    axios(opt)
      .then(function (data_res) {
        console.log(data_res);
        if (data_res.status == 201) alert("Created successfully");
      })
      .catch(function (ex) {
        console.log(ex);
      });
  }
};

const updateForm = () => {
  const formContainer = document.getElementById("dynamic-form");
  const type = document.getElementById("drinkType").value;

  formContainer.innerHTML = "";
  let formHTML = "";
  if (type === "juice") {
    formHTML = `
       <div class="form-group">
                        <label for="energy-drink-1">Energy 1</label>
                        <input type="number" class="form-control" id="energy-drink-1" name="energy-drink-1" placeholder="Enter Energy 1 (kcal)">
                    </div>
                    <div class="form-group">
                        <label for="price-drink-1">Price 1</label>
                        <input type="number" class="form-control" id="price-drink-1" name="price-drink-1" placeholder="Enter Price 1 (USD)">
                    </div>
                    <div class="form-group">
                        <label for="energy-drink-2">Energy 2</label>
                        <input type="number" class="form-control" id="energy-drink-2" name="energy-drink-2" placeholder="Enter Energy 2 (kcal)">
                    </div>
                    <div class="form-group">
                        <label for="price-drink-2">Price 2</label>
                        <input type="number" class="form-control" id="price-drink-2" name="price-drink-2" placeholder="Enter Price 2 (USD)">
                    </div>
    `;
  } else if (type === "smoothie") {
    formHTML = `
       <div class="form-group">
                        <label for="energy-drink-1">Energy 1</label>
                        <input type="number" class="form-control" id="energy-drink-1" name="energy-drink-1" placeholder="Enter Energy 1 (kcal)">
                    </div>
                    <div class="form-group">
                        <label for="price-drink-1">Price 1</label>
                        <input type="number" class="form-control" id="price-drink-1" name="price-drink-1" placeholder="Enter Price 1 (USD)">
                    </div>
                     <div class="form-group">
                    <label for="description-drink">Description</label>
                    <!-- Thêm input cho nguyên liệu -->
                    <input type="text" id="description-drink" class="form-control" name="description-drink" placeholder="Enter description">
                    </div>
                    <div class="form-group">
                        <label for="energy-drink-2">Energy 2</label>
                        <input type="number" class="form-control" id="energy-drink-2" name="energy-drink-2" placeholder="Enter Energy 2 (kcal)">
                    </div>
                    <div class="form-group">
                        <label for="price-drink-2">Price 2</label>
                        <input type="number" class="form-control" id="price-drink-2" name="price-drink-2" placeholder="Enter Price 2 (USD)">
                    </div>
    `;
  } else if (type === "coke") {
    formHTML = `
                    <div class="form-group">
                        <label for="price-drink">Price</label>
                        <input type="number" class="form-control" id="price-drink" name="price-drink" placeholder="Enter Price (USD)">
                    </div>
    `;
  }

  // Insert the new form HTML
  formContainer.innerHTML = formHTML;
};
// Xóa sản phẩm
var deleteProduct = function (type,id) {
  var apiFoods = "http://localhost:3000/foods";
  var apiDrinks = "http://localhost:3000/drinks";
  var apiIngredients = "http://localhost:3000/ingredients";
  id = "`${id}`"
  if (type === 'food') {
    alert(id)
    axios.delete(`http://localhost:3000/foods/${id}`)
    .then(response => {
      console.log('Deleted:', response.data);
    })
    .catch(error => {
      console.error('There was an error deleting the item!', error);
    });
  }else if (type === 'drink'){
    alert("")
  }else{
    alert("ingredient");
  }
};

// Sửa sản phẩm
var updateProduct = function (i) {};
var submitUpdate = function (i) {};

var userAdmin = function () {
  var listproduct = "";
  for (var i in user) {
    var data = JSON.parse(JSON.stringify(user[i]));
    var listproduct = "<tr>";
    listproduct += "<td>" + data.id + "</td>";
    listproduct += "<td>" + data.username + "</td>";
    // listproduct+='<td><img src="../img/'+data.img+'" alt="" style="width: 50px;"></td>';
    listproduct += "<td>" + data.email + "</td>";
    // listproduct1+='';
    listproduct +=
      '<td><button onclick="updateProduct()" class="btn ml-1 btn-outline-warning"><i class="fas fa-trash"></i></button></td>;';

    listproduct +=
      '<button onclick="deleteProduct()" class="btn btn-outline-danger" data-toggle="modal" data-target="#updateProduct"><i class="fas fa-cogs"></i></button>;';

    listproduct += "</tr>";
    document.getElementById("user-admin").innerHTML += listproduct;
  }
  // Save();
};
productSaladAdmin();
productFastFoodAdmin();
productDrinksAdmin();
productIngredientsAdmin();
userAdmin();
