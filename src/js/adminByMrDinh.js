var showSession = function (page) {
  var productPage = document.querySelector(".product__session");
  var userPage = document.querySelector(".user__session");
  var billPage = document.querySelector(".bill__session");

  // Ẩn tất cả các trang
  productPage.style.display = "none";
  userPage.style.display = "none";
  billPage.style.display = "none";

  // Hiện trang tương ứng
  if (page === "product") {
    productPage.style.display = "block";
  } else if (page === "user") {
    userPage.style.display = "block";
  } else if (page === "bill") {
    billPage.style.display = "block";
  }
};

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

var getUser = () => {
  return axios
    .get(`http://localhost:3000/accounts`)
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

var getProductById = (link, id) => {
  return axios
    .get(`http://localhost:3000/${link}/${id}`)
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
      throw error; // Ném lại lỗi nếu cần
    });
};

var getId = (link) => {
  return axios
    .get(`http://localhost:3000/${link}`)
    .then((response) => {
      if (response.data.length > 0) {
        //  console.log(response.data.length);
        //  console.log(typeof response.data.length);

        return String(response.data.length + 1);
      } else {
        console.error("No data found");
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      return null;
    });
};

var productSaladAdmin = function () {
  var htmlInSalad;
  getListProductByType("foods", "basicSalad").then((listproduct) => {
    // Sử dụng map để tạo ra các hàng (rows) HTML cho sản phẩm
    htmlInSalad = listproduct
      .map((data) => {
        return `<tr>
                        <td>${data.id}</td>
                        <td>${data.name}</td>
                        <td><img src="${data.img}" alt="error update" style="width: 50px;"></td>
                        <td>${data.type}</td>
                        <td>${data.enegy_1} kcal</td>
                        <td>${data.price_1} đ</td>
                        <td>${data.enegy_2} kcal</td>
                        <td>${data.price_2} đ</td>
                        <td>
                            <button onclick="updateProduct('salad',${data.id})" class="btn btn-outline-danger" data-toggle="modal" data-target="#updateProduct">
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
                      <td><img src="${data.img}" alt="error update" style="width: 50px;"></td>
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
                    <td><img src="${data.img}" alt="error update" style="width: 50px;"></td>
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
                  <td><img src="${data.img}" alt="error update" style="width: 50px;"></td>
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
                      <td><img src="${data.img}" alt="error update" style="width: 50px;"></td>
                      <td>${data.type}</td>
                      <td>${data.enegy} kcal</td>
                      <td>${data.price} đ</td>
                      <td>
                          <button onclick="updateProduct('fastFood',${data.id})" class="btn btn-outline-danger" data-toggle="modal" data-target="#updateProduct">
                              <i class="fas fa-cogs"></i>
                          </button>                       
                          <button onclick="deleteProduct('food',${data.id})" class="btn ml-1 btn-outline-warning">
                              <i class="fas fa-trash"></i>
                          </button>
                           <button onclick="detailProduct('fastFood',${data.id})" class="btn ml-1 btn-outline-success">
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
    console.log(listproduct);

    var htmlInDrinks = listproduct
      .map((data) => {
        return `<tr>
                  <td>${data.id}</td>
                  <td>${data.name}</td>
                  <td><img src="${data.img}" alt="error update" style="width: 50px;"></td>
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
                <td><img src="${data.img}" alt="error update" style="width: 50px;"></td>
                <td>${data.type}</td>
                <td>${data.enegy_1} kcal</td>
                <td>${data.price_1} đ</td>
                <td>${data.enegy_2} kcal</td>
                <td>${data.price_2} đ</td>
                    <td>
                        <button onclick="updateProduct('drinks',${data.id})" class="btn btn-outline-danger" data-toggle="modal" data-target="#updateProduct">
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
              <td><img src="${data.img}" alt="error update" style="width: 50px;"></td>
              <td>${data.type}</td>
              <td>${data.enegy_1} kcal</td>
              <td>${data.price} đ</td>
              <td>${data.enegy_2} kcal</td>
              <td>${data.price_2} đ</td>
                  <td>
                      <button onclick="updateProduct('drinks',${data.id})" class="btn btn-outline-danger" data-toggle="modal" data-target="#updateProduct">
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
              <td><img src="${data.img}" alt="error update" style="width: 50px;"></td>
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
              <td><img src="${data.img}" alt="error update" style="width: 50px;"></td>
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
              <td><img src="${data.img}" alt="error update" style="width: 50px;"></td>
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
              <td><img src="${data.img}" alt="error update" style="width: 50px;"></td>
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
              <td><img src="${data.img}" alt="error update" style="width: 50px;"></td>
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
              <td><img src=" " alt="error update" style="width: 50px;"></td>
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

const showForm = (type, idToUpdate) => {
  var span = document.querySelectorAll("#closeModal");
  var product__salad = document.querySelector(".product--salad");
  var saladForm = document.querySelector(".formAddSalad");
  var fastFoodForm = document.querySelector(".formAddFastFood");
  var product__fastFood = document.querySelector(".product--fastFood");
  var modal = document.querySelector(".blackBack");
  var drinkForm = document.querySelector(".formAddDrink");
  var product__drink = document.querySelector(".product--drink");
  var product__ingredient = document.querySelector(".product--ingredient");
  var formAddIngredient = document.querySelector(".formAddIngredient");

  if (idToUpdate == null && type == "salad") {
    const addButton = document.querySelector(".addSaladBtn");
    addButton.innerHTML = "Add";
    addButton.setAttribute("onclick", 'addNewProduct("salad", null)');
  } else {
    const addButton = document.querySelector(".addSaladBtn");
    addButton.innerHTML = "Update";
    addButton.setAttribute("onclick", `addNewProduct("salad", ${idToUpdate})`);
  }

  if (idToUpdate == null && type == "fastFood") {
    const addButton = document.querySelector(".addFastFoodBtn");
    addButton.innerHTML = "Add";
    addButton.setAttribute("onclick", 'addNewProduct("fastFood", null)');
  } else {
    const addButton = document.querySelector(".addFastFoodBtn");
    addButton.innerHTML = "Update";
    addButton.setAttribute(
      "onclick",
      `addNewProduct("fastFood", ${idToUpdate})`
    );
  }

  if (idToUpdate == null && type == "drinks") {
    const addButton = document.querySelector(".addDrinkBtn");
    addButton.innerHTML = "Add";
    addButton.setAttribute("onclick", 'addNewProduct("drinks", null)');
  } else {
    const addButton = document.querySelector(".addDrinkBtn");
    addButton.innerHTML = "Update";
    addButton.setAttribute("onclick", `addNewProduct("drinks", ${idToUpdate})`);
  }

  if (idToUpdate == null && type == "ingredient") {
    const addButton = document.querySelector(".addIngredientBtn");
    addButton.innerHTML = "Add";
    addButton.setAttribute("onclick", 'addNewProduct("ingredient", null)');
  } else {
    const addButton = document.querySelector(".addIngredientBtn");
    addButton.innerHTML = "Update";
    addButton.setAttribute(
      "onclick",
      `addNewProduct("ingredient", ${idToUpdate})`
    );
  }

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
      } else {
        product__ingredient.scrollIntoView({ behavior: "smooth" });
      }
    };
  });
  //  ád
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
      } else {
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
  } else {
    formAddIngredient.style.display = "block";
    modal.style.display = "block";
    product__salad.scrollIntoView({ behavior: "smooth" });
  }
};

var addNewProduct = function (type, idToUpdate) {
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
      getId("foods")
        .then((id) => {
          var method;
          var idInFunc;
          var urlInFunc;
          if (idToUpdate == null) {
            method = "post";
            idInFunc = id;
            urlInFunc = apiFoods;
          } else {
            method = "put";
            idInFunc = String(idToUpdate);
            urlInFunc = `${apiFoods}/${idInFunc}`;
          }

          const opt = {
            url: urlInFunc,
            method: method,
            data: {
              id: idInFunc,
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

          axios(opt)
            .then(function (data_res) {
              console.log(data_res);
              if (data_res.status == 201) alert("Created successfully");
            })
            .catch(function (ex) {
              console.log(ex);
            });
        })
        .catch((error) => {
          console.log(error);
        });
    }
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
      getId("foods")
        .then((id) => {
          var method;
          var idInFunc;
          var urlInFunc;
          if (idToUpdate == null) {
            method = "post";
            idInFunc = id;
            urlInFunc = apiFoods;
          } else {
            method = "put";
            idInFunc = String(idToUpdate);
            urlInFunc = `${apiFoods}/${idInFunc}`;
          }

          const opt = {
            url: urlInFunc,
            method: method,
            data: {
              id: idInFunc,
              name: saladName,
              ingredient: "",
              description: description,
              type: "fastFood",
              enegy: energy,
              price: price,
              img: img,
            },
          };

          // Kiểm tra dữ liệu trước khi gửi yêu cầu
          if (!saladName || !description || !energy || !price) {
            alert("Please fill in all required fields.");
            return;
          }

          axios(opt)
            .then(function (data_res) {
              console.log(data_res);
              if (data_res.status === 201 || data_res.status === 200) {
                alert("Operation successful!");
              }
            })
            .catch(function (ex) {
              console.error("Error during API call:", ex);
            });
        })
        .catch((error) => {
          console.error("Error getting ID:", error);
        });
    }
  } else if (type == "drinks") {
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
      getId("drinks")
        .then((id) => {
          var method;
          var idInFunc;
          var urlInFunc;
          if (idToUpdate == null) {
            method = "post";
            idInFunc = id;
            urlInFunc = apiDrinks;
          } else {
            method = "put";
            idInFunc = String(idToUpdate);
            urlInFunc = `${apiDrinks}/${idInFunc}`;
          }

          const opt = {
            url: urlInFunc,
            method: method,
            data: {
              id: idInFunc,
              name: drinkName,
              description: "",
              type: "coke",
              price_1: price,
              img: drinkImg,
            },
          };

          axios(opt)
            .then(function (data_res) {
              console.log(data_res);
              if (data_res.status == 201) alert("Created successfully");
            })
            .catch(function (ex) {
              console.log(ex);
            });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  } else {
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
      getId("ingredients")
        .then((id) => {
          var method;
          var idInFunc;
          var urlInFunc;
          if (idToUpdate == null) {
            method = "post";
            idInFunc = id;
            urlInFunc = apiIngredients;
          } else {
            method = "put";
            idInFunc = String(idToUpdate);
            urlInFunc = `${apiIngredients}/${idInFunc}`;
          }
          const opt = {
            url: urlInFunc,
            method: method,
            data: {
              id: idInFunc,
              name: name,
              type: type,
              unit: unit,
              enegy: energy,
              price: price,
              img: img,
            },
          };
          axios(opt)
            .then(function (data_res) {
              console.log(data_res);
              if (data_res.status == 201) alert("Created successfully");
            })
            .catch(function (ex) {
              console.log(ex);
            });
        })
        .catch((error) => {
          console.log(error);
        });
    }
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

var deleteProduct = function (type, id) {
  if (type === "food") {
    axios
      .delete(`http://localhost:3000/foods/${id}`)
      .then((response) => {
        console.log("Deleted:", response.data);
      })
      .catch((error) => {
        console.error("There was an error deleting the item!", error);
      });
  } else if (type === "drink") {
    axios
      .delete(`http://localhost:3000/drinks/${id}`)
      .then((response) => {
        console.log("Deleted:", response.data);
      })
      .catch((error) => {
        console.error("There was an error deleting the item!", error);
      });
  } else {
    axios
      .delete(`http://localhost:3000/ingredients/${id}`)
      .then((response) => {
        console.log("Deleted:", response.data);
      })
      .catch((error) => {
        console.error("There was an error deleting the item!", error);
      });
  }
};

var updateProduct = function (type, id) {
  if (type == "salad") {
    showForm(type, id);
  } else if (type == "fastFood") {
    showForm(type, id);
  } else if (type == "drinks") {
    showForm(type, id);
  } else {
    showForm(type, id);
  }
};

var closeDetailForm = function () {
  document.querySelector(".detail__form").style.display = "none";
};

var detailProduct = function (type, id) {
  id = String(id);
  if (type === "food") {
    getProductById("foods", id)
      .then((data) => {
        if (data) {
          // Kiểm tra xem dữ liệu có hợp lệ không
          const htmlDetails = `
        
    <div class="formDetail"  style="width: 45%;">
        <div class="container mt-5">
            <span class="close" id="closeModal" onclick = "closeDetailForm()">&times;</span>
            <h2 class="text-center">Detail form</h2>

            <form id="productForm">
                <div class="form-group">
                    <label for="productName">Name</label>
                    <input type="text" class="form-control" id="productName" name="productName" value="${data.name}">
                </div>
                <div class="form-group">
                    <label for="productImg">Img</label>
                <div class="detailImg" >   <img src="${data.img_url}" alt=""> </div>
                </div>
                <div class="form-group">
                    <label for="productType">Type</label>
                      <input type="text" class="form-control" id="productType" name="productType" value="${data.type}" >
                </div>
                <div class="form-group">
                 <label for="ingredients">Ingredients</label>

                  <textarea id="ingredients" class="form-control" rows="2">${data.ingredient}</textarea>
                </div>

                <div class="form-group">
                 <label for="description">Description</label>

                  <textarea id="description" class="form-control" rows="2">${data.description}</textarea>
                </div>

                <div class="form-group">
                    <label for="energy1">Energy 1</label>
                    <input type="number" class="form-control" id="energy1" name="energy1"  value="${data.enegy_1}>
                </div>
                <div class="form-group">
                    <label for="price1">Price 1</label>
                    <input type="number" class="form-control" id="price1" name="price1" value="${data.price_1}>
                </div>
                <div class="form-group">
                    <label for="energy2">Energy 2</label>
                    <input type="number" class="form-control" id="energy2" name="energy2" value="${data.enegy_2}">
                </div>
                <div class="form-group">
                    <label for="price2">Price 2</label>
                    <input type="number" class="form-control" id="price2" name="price2" value="${data.price_2}">
                </div>

            </form>
        </div>
    </div>
        `;

          document.querySelector(".detail__form").innerHTML = htmlDetails;
          document.querySelector(".detail__form").style.display = "block";
          document
            .querySelector(".detail__form")
            .scrollIntoView({ behavior: "smooth" });

          // Thêm sự kiện cho nút Edit
        } else {
          console.error("Product not found");
        }
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  } else if (type == "fastFood") {
    getProductById("foods", id)
      .then((data) => {
        if (data) {
          // Kiểm tra xem dữ liệu có hợp lệ không
          const htmlDetails = `
        
    <div class="formDetail"  style="width: 45%;">
        <div class="container mt-5">
            <span class="close" id="closeModal" onclick = "closeDetailForm()">&times;</span>
            <h2 class="text-center">Detail form</h2>

            <form id="productForm">
                <div class="form-group">
                    <label for="productName">Name</label>
                    <input type="text" class="form-control" id="productName" name="productName" value="${data.name}">
                </div>
                <div class="form-group">
                    <label for="productImg">Img</label>
                <div class="detailImg" >   <img src="${data.img_url}" alt=""> </div>
                </div>
                <div class="form-group">
                    <label for="productType">Type</label>
                      <input type="text" class="form-control" id="productType" name="productType" value="${data.type}" >
                </div>
          

                <div class="form-group">
                 <label for="description">Description</label>

                  <textarea id="description" class="form-control" rows="2">${data.description}</textarea>
                </div>

               
                <div class="form-group">
                    <label for="energy2">Energy</label>
                    <input type="number" class="form-control" id="energy2" name="energy2" value="${data.enegy}">
                </div>
                <div class="form-group">
                    <label for="price2">Price</label>
                    <input type="number" class="form-control" id="price2" name="price2" value="${data.price}">
                </div>

            </form>
        </div>
    </div>
        `;

          document.querySelector(".detail__form").innerHTML = htmlDetails;
          document.querySelector(".detail__form").style.display = "block";
          document
            .querySelector(".detail__form")
            .scrollIntoView({ behavior: "smooth" });

          // Thêm sự kiện cho nút Edit
        } else {
          console.error("Product not found");
        }
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  } else if (type == "drink") {
    getProductById("drinks", id)
      .then((data) => {
        if (data) {
          // Kiểm tra xem dữ liệu có hợp lệ không
          const htmlDetails = `
      
  <div class="formDetail"  style="width: 45%;">
      <div class="container mt-5">
          <span class="close" id="closeModal" onclick = "closeDetailForm()">&times;</span>
          <h2 class="text-center">Detail form</h2>

          <form id="productForm">
              <div class="form-group">
                  <label for="productName">Name</label>
                  <input type="text" class="form-control" id="productName" name="productName" value="${data.name}">
              </div>
              <div class="form-group">
                  <label for="productImg">Img</label>
              <div class="detailImg" >   <img src="${data.img_url}" alt=""> </div>
              </div>
              <div class="form-group">
                  <label for="productType">Type</label>
                    <input type="text" class="form-control" id="productType" name="productType" value="${data.type}" >
              </div>
        

              <div class="form-group">
               <label for="description">Description</label>

                <textarea id="description" class="form-control" rows="2">${data.description}</textarea>
              </div>
                <div class="form-group">
                  <label for="energy2">Energy</label>
                  <input type="number" class="form-control" id="energy2" name="energy2" value="${data.enegy_1}">
              </div>
              <div class="form-group">
                  <label for="price2">Price</label>
                  <input type="number" class="form-control" id="price2" name="price2" value="${data.price_1}">
              </div>
             
              <div class="form-group">
                  <label for="energy2">Energy</label>
                  <input type="number" class="form-control" id="energy2" name="energy2" value="${data.enegy_2}_2">
              </div>
              <div class="form-group">
                  <label for="price2">Price</label>
                  <input type="number" class="form-control" id="price2" name="price2" value="${data.price_2}">
              </div>

          </form>
      </div>
  </div>
      `;

          document.querySelector(".detail__form").innerHTML = htmlDetails;
          document.querySelector(".detail__form").style.display = "block";
          document
            .querySelector(".detail__form")
            .scrollIntoView({ behavior: "smooth" });

          // Thêm sự kiện cho nút Edit
        } else {
          console.error("Product not found");
        }
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  } else {
    getProductById("ingredients", id)
      .then((data) => {
        if (data) {
          // Kiểm tra xem dữ liệu có hợp lệ không
          const htmlDetails = `
      
  <div class="formDetail"  style="width: 45%;">
      <div class="container mt-5">
          <span class="close" id="closeModal" onclick = "closeDetailForm()">&times;</span>
          <h2 class="text-center">Detail form</h2>

          <form id="productForm">
              <div class="form-group">
                  <label for="productName">Name</label>
                  <input type="text" class="form-control" id="productName" name="productName" value="${data.name}">
              </div>
              <div class="form-group">
                  <label for="productImg">Img</label>
              <div class="detailImg" >   <img src="${data.img_url}" alt=""> </div>
              </div>
              <div class="form-group">
                  <label for="productType">Type</label>
                    <input type="text" class="form-control" id="productType" name="productType" value="${data.type}" >
              </div>
              <div class="form-group">
                  <label for="price2">Price</label>
                  <input type="number" class="form-control" id="price2" name="price2" value="${data.price}">
              </div>
             
              <div class="form-group">
                  <label for="unit">Unit</label>
                  <input type="text" class="form-control" id="unit" name="unit" value="${data.unit}">
              </div>

              <div class="form-group">
                  <label for="price2">energy</label>
                  <input type="number" class="form-control" id="price2" name="price2" value="${data.enegy}">
              </div>

          </form>
      </div>
  </div>
      `;

          document.querySelector(".detail__form").innerHTML = htmlDetails;
          document.querySelector(".detail__form").style.display = "block";
          document
            .querySelector(".detail__form")
            .scrollIntoView({ behavior: "smooth" });

          // Thêm sự kiện cho nút Edit
        } else {
          console.error("Product not found");
        }
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }
};

var userAdmin = function () {
  var listproduct;
  getUser().then((listUser) => {
    // Sử dụng map để tạo ra các hàng (rows) HTML cho sản phẩm
    listproduct = listUser
      .map((data) => {
        return `<tr>
                        <td>${data.id}</td>
                        <td>${data.userName}</td>
                        <td>${data.email}</td>
                        <td>${data.phoneNum}</td>
                        <td>${data.password}</td>
                        <td>${data.role}</td>
                        <td>
                            <button onclick="showFormUpdateUser(${String(
                              data.id
                            )})" class="btn btn-outline-danger" data-toggle="modal" data-target="#updateProduct">
                                <i class="fas fa-cogs"></i>
                            </button>                       
                            <button onclick="deleteUser(${String(
                              data.id
                            )})" class="btn ml-1 btn-outline-warning">
                                <i class="fas fa-trash"></i>
                            </button>
                        </td>
                    </tr>`;
      })
      .join("");
    document.querySelector("#userAdmin").innerHTML = listproduct;
  });
};

var deleteUser = function (id) {
  id = String(id);

  axios
    .delete(`http://localhost:3000/accounts/${id}`)
    .then((res) => {
      console.log("User deleted successfully:", res);
    })
    .catch((error) => {
      console.error("Error deleting user:", error);
    });
};

var hideUserForm = function () {
  var form = document.querySelector(".formUpdateUser");
  form.style.display = "none";
};

var showFormUpdateUser = function (id) {
  var form = document.querySelector(".formUpdateUser");
  var buttonUpdate = document.querySelector(".updateUser");
  form.style.display = "block";
  buttonUpdate.setAttribute("onclick", `updateUser(${id})`);
};

var updateUser = function (id) {
  id = String(id);
  var userName = document.querySelector("#userName").value;
  var email = document.querySelector("#email").value;
  var role = document.querySelector("#role").value;
  var phoneNum = document.querySelector("#phoneNum").value;
  var passWord = document.querySelector("#passWord").value;
  const opt = {
    url: `http://localhost:3000/accounts/${id}`,
    method: "put",
    data: {
      userName: userName,
      email: email,
      phoneNum: phoneNum,
      password: passWord,
      role: role,
    },
  };
  axios(opt)
    .then(function (data_res) {
      console.log(data_res);
      if (data_res.status == 201) alert("Update successfully");
    })
    .catch(function (ex) {
      console.log(ex);
    });
};

productSaladAdmin();
productFastFoodAdmin();
productDrinksAdmin();
productIngredientsAdmin();
userAdmin();
