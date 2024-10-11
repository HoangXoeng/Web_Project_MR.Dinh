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
                            <button onclick="updateProduct(${data.id})" class="btn btn-outline-danger" data-toggle="modal" data-target="#updateProduct">
                                <i class="fas fa-cogs"></i>
                            </button>                       
                            <button onclick="deleteProduct(${data.id})" class="btn ml-1 btn-outline-warning">
                                <i class="fas fa-trash"></i>
                            </button>
                             <button onclick="detailProduct(${data.id})" class="btn ml-1 btn-outline-success">
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
                          <button onclick="updateProduct(${data.id})" class="btn btn-outline-danger" data-toggle="modal" data-target="#updateProduct">
                              <i class="fas fa-cogs"></i>
                          </button>                       
                          <button onclick="deleteProduct(${data.id})" class="btn ml-1 btn-outline-warning">
                              <i class="fas fa-trash"></i>
                          </button>
                           <button onclick="detailProduct(${data.id})" class="btn ml-1 btn-outline-success">
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
                        <button onclick="updateProduct(${data.id})" class="btn btn-outline-danger" data-toggle="modal" data-target="#updateProduct">
                            <i class="fas fa-cogs"></i>
                        </button>                       
                        <button onclick="deleteProduct(${data.id})" class="btn ml-1 btn-outline-warning">
                            <i class="fas fa-trash"></i>
                        </button>
                         <button onclick="detailProduct(${data.id})" class="btn ml-1 btn-outline-success">
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
                      <button onclick="updateProduct(${data.id})" class="btn btn-outline-danger" data-toggle="modal" data-target="#updateProduct">
                          <i class="fas fa-cogs"></i>
                      </button>                       
                      <button onclick="deleteProduct(${data.id})" class="btn ml-1 btn-outline-warning">
                          <i class="fas fa-trash"></i>
                      </button>
                       <button onclick="detailProduct(${data.id})" class="btn ml-1 btn-outline-success">
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
                          <button onclick="updateProduct(${data.id})" class="btn btn-outline-danger" data-toggle="modal" data-target="#updateProduct">
                              <i class="fas fa-cogs"></i>
                          </button>                       
                          <button onclick="deleteProduct(${data.id})" class="btn ml-1 btn-outline-warning">
                              <i class="fas fa-trash"></i>
                          </button>
                           <button onclick="detailProduct(${data.id})" class="btn ml-1 btn-outline-success">
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


    var htmlInDrinks = listproduct.map((data) => {
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
                        <button onclick="updateProduct(${data.id})" class="btn btn-outline-danger" data-toggle="modal" data-target="#updateProduct">
                            <i class="fas fa-cogs"></i>
                        </button>                       
                        <button onclick="deleteProduct(${data.id})" class="btn ml-1 btn-outline-warning">
                            <i class="fas fa-trash"></i>
                        </button>
                         <button onclick="detailProduct(${data.id})" class="btn ml-1 btn-outline-success">
                            <i class="fas fa-dots"></i>
                        </button>
                    </td>
                </tr>`;
    }).join("");
}).catch((error) => {
    console.error("Error fetching product list:", error);
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
                        <button onclick="updateProduct(${data.id})" class="btn btn-outline-danger" data-toggle="modal" data-target="#updateProduct">
                            <i class="fas fa-cogs"></i>
                        </button>                       
                        <button onclick="deleteProduct(${data.id})" class="btn ml-1 btn-outline-warning">
                            <i class="fas fa-trash"></i>
                        </button>
                         <button onclick="detailProduct(${data.id})" class="btn ml-1 btn-outline-success">
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
                      <button onclick="updateProduct(${data.id})" class="btn btn-outline-danger" data-toggle="modal" data-target="#updateProduct">
                          <i class="fas fa-cogs"></i>
                      </button>                       
                      <button onclick="deleteProduct(${data.id})" class="btn ml-1 btn-outline-warning">
                          <i class="fas fa-trash"></i>
                      </button>
                       <button onclick="detailProduct(${data.id})" class="btn ml-1 btn-outline-success">
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
                          <button onclick="updateProduct(${data.id})" class="btn btn-outline-danger" data-toggle="modal" data-target="#updateProduct">
                              <i class="fas fa-cogs"></i>
                          </button>                       
                          <button onclick="deleteProduct(${data.id})" class="btn ml-1 btn-outline-warning">
                              <i class="fas fa-trash"></i>
                          </button>
                           <button onclick="detailProduct(${data.id})" class="btn ml-1 btn-outline-success">
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
                        <button onclick="updateProduct(${data.id})" class="btn btn-outline-danger" data-toggle="modal" data-target="#updateProduct">
                            <i class="fas fa-cogs"></i>
                        </button>                       
                        <button onclick="deleteProduct(${data.id})" class="btn ml-1 btn-outline-warning">
                            <i class="fas fa-trash"></i>
                        </button>
                         <button onclick="detailProduct(${data.id})" class="btn ml-1 btn-outline-success">
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
                      <button onclick="updateProduct(${data.id})" class="btn btn-outline-danger" data-toggle="modal" data-target="#updateProduct">
                          <i class="fas fa-cogs"></i>
                      </button>                       
                      <button onclick="deleteProduct(${data.id})" class="btn ml-1 btn-outline-warning">
                          <i class="fas fa-trash"></i>
                      </button>
                       <button onclick="detailProduct(${data.id})" class="btn ml-1 btn-outline-success">
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
                      <button onclick="updateProduct(${data.id})" class="btn btn-outline-danger" data-toggle="modal" data-target="#updateProduct">
                          <i class="fas fa-cogs"></i>
                      </button>                       
                      <button onclick="deleteProduct(${data.id})" class="btn ml-1 btn-outline-warning">
                          <i class="fas fa-trash"></i>
                      </button>
                       <button onclick="detailProduct(${data.id})" class="btn ml-1 btn-outline-success">
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
                      <button onclick="updateProduct(${data.id})" class="btn btn-outline-danger" data-toggle="modal" data-target="#updateProduct">
                          <i class="fas fa-cogs"></i>
                      </button>                       
                      <button onclick="deleteProduct(${data.id})" class="btn ml-1 btn-outline-warning">
                          <i class="fas fa-trash"></i>
                      </button>
                       <button onclick="detailProduct(${data.id})" class="btn ml-1 btn-outline-success">
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
                      <button onclick="updateProduct(${data.id})" class="btn btn-outline-danger" data-toggle="modal" data-target="#updateProduct">
                          <i class="fas fa-cogs"></i>
                      </button>                       
                      <button onclick="deleteProduct(${data.id})" class="btn ml-1 btn-outline-warning">
                          <i class="fas fa-trash"></i>
                      </button>
                       <button onclick="detailProduct(${data.id})" class="btn ml-1 btn-outline-success">
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
  var span = document.getElementById("closeModal");
  var saladForm = document.querySelector('.formAddSalad')
  var modal = document.querySelector('.blackBack')
  window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        saladForm.style.display = 'none'; 
    }
  }
  span.onclick = function() {
    modal.style.display = "none";
    saladForm.style.display = 'none'; 
  }

  document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        modal.style.display = "none";
        saladForm.style.display = 'none'; 
    }
});

  if (type === 'salad'){
    saladForm.style.display = 'block'; 
    modal.style.display = 'block';  
  }
}
var addNewProduct = function (type) {
  var apiFoods =  'http://localhost:3000/foods';
  var apiDrinks = 'http://localhost:3000/drinks';
  var apiIngredients = 'http://localhost:3000/ingredients';
  
  if (type == 'salad'){
    const saladName = document.getElementById('productName').value
    const img = document.getElementById('productImg').value
    const saladType = document.getElementById('productType').value
    const ingredients = document.getElementById('ingredients').value.split(',').map(item => item.trim())
    const energy1 = document.getElementById('energy1').value
    const price1 = document.getElementById('price1').value
    const energy2 = document.getElementById('energy2').value
    const price2 = document.getElementById('price2').value
    const isTrue = false;

    // Kiểm tra các trường bắt buộc
    if (saladName.trim() === "" || img.trim() === "" || saladType.trim() === "" || ingredients.length === 0) {
        alert("Vui lòng điền đầy đủ thông tin!");
        isTrue = false;
    }

    // Kiểm tra định dạng ảnh
    if (!/\.(jpg|jpeg|png|gif)$/i.test(img)) {
        alert("Định dạng ảnh không hợp lệ! Hãy dùng .jpg, .jpeg, .png, hoặc .gif");
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
      opt = {
        url: "http://localhost:3000/foods",
        method: "post",
        data: {
          name: saladName,
          ingredient:ingredients,
          description:'',
          type: saladType,
          enegy_1:energy1,
          price_1:price1,
          enegy_2:energy2,
          price_2:price2,
          img: img
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

// Xóa sản phẩm
var deleteProduct = function (i) {};

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
