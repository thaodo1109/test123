$(document).ready(function () {
  $("#add-new-product").click(function () {
    // show modal to add new product
  });

  $("#edit-product-item_1").click(function () {
    // show modal to edit product
  });

  $("#edit-product-item_2").click(function () {
    // show modal to edit product
  });
});
// Khai báo
listProduct = [];

// Xử lý khi click vào menu Product
function handleShowProduct(params) {
  // Load nội dung ContentProductAdmin
  $(".ProductAdminSection").load("./ContentProductAdmin.html", "data", function (response, status, request) {
    // Sau khi load thành công giao diện mới thực thi các hàm Callback trong này.
    fetchListProductAdmin();
  });
}


// Xử lý khi click vào menu Manufacturer
function handleShowManufacturer(params) {
  // Load nội dung ContentManufacturerAdmin
  $(".ProductAdminSection").load("./ContentManufacturerAdmin.html", "data", function (response, status, request) { });
}


// Xử lý khi click vào menu Category
function handleShowCategory(params) {
  // Load nội dung ContentCategoryAdmin
  $(".ProductAdminSection").load("./ContentCategoryAdmin.html", "data", function (response, status, request) { });
}


// Xử lý khi click vào menu Account
function handleShowAccount(params) {
  // Load nội dung ContentAccountAdmin
  $(".ProductAdminSection").load("./ContentAccountAdmin.html", "data", function (response, status, request) { });
}


// hàm xử lý thêm mới Product
function handleCreateNewProduct(params) {
  // alert("Create New!!");
  // Lấy dữ liệu từ các ô Input
  var v_Id = $("#Id").val();
  var v_Name = $("#Name").val();
  var v_Price = $("#Price").val();
  var v_Info = $("#Info").val();
  var v_Detail = $("#Detail").val();
  var v_Star = $("#Star").val();
  // Gọi hàm để lấy tên Ảnh
  var v_Image = getImageName($("#Image").val());
  var v_Manufacturer = $("#Manufacturer").val();
  var v_Category = $("#Category").val();


  // Tạo đối tượng ProductNew để lưu trữ
  var ProductNew = {
    id: v_Id,
    name: v_Name,
    price: v_Price,
    info: v_Info,
    detail: v_Detail,
    ratingStar: v_Star,
    imageName: v_Image,
    manufacturerId: v_Manufacturer,
    categoryId: v_Category,
  };
  // console.log("ProductNew: ", ProductNew);


  // Add thêm sản phẩm vào listProduct
  listProduct.push(ProductNew);
  // Lưu dữ liệu localStorage
  localStorage.setItem("listProduct", JSON.stringify(listProduct));
  // Thực hiện Reset Form
  handleResetForm();
  // Gọi hàm hiển thị lại danh sách sản phẩm
  fetchListProductAdmin();
}


// Hàm Load dữ liệu Product, sau đó đổ dữ liệu vào Table
function fetchListProductAdmin(params) {
  // Reset lại listProduct về Null
  listProduct = [];


  //Lấy dữ liệu từ LocalStorage để sử dụng
  // Kiểm tra xem có dữ liệu dưới LocalStorage không
  if (localStorage && localStorage.getItem("listProduct")) {
    var listProductLocalStorage = JSON.parse(localStorage.getItem("listProduct"));
    // Lưu dữ liệu từ localStorage vào listProduct trong JS để sử dụng
    listProduct = listProductLocalStorage;
  }


  //Xóa bảng dữ liệu hiện tại
  $("#tbProductAdmin").empty();
  // Dùng vòng lặp để tạo product
  for (let index = 0; index < listProduct.length; index++) {
    $("#tbProductAdmin").append(`
    <tr>
      <td>${listProduct[index].id}</td>
      <td>${listProduct[index].name}</td>
      <td>${listProduct[index].price}</td>
      <td>${listProduct[index].info}</td>
      <td>${listProduct[index].detail}</td>
      <td>${listProduct[index].ratingStar}</td>
      <td>${listProduct[index].imageName}</td>
      <td>${listProduct[index].manufacturerId}</td>
      <td>${listProduct[index].categoryId}</td>
      <td>
        <button type="button" class="btn btn-warning">Edit</button>
      </td>
      <td>
        <button type="button" class="btn btn-danger">Delete</button>
      </td>
  </tr>
    `);
  }
}

// Hàm handleResetForm, xóa dữ liệu trong các ô Input
function handleResetForm() {
  // Gọi lại các Form nhập liệu và reset giá trị
  $("#Id").val("");
  $("#Name").val("");
  $("#Price").val("");
  $("#Info").val("");
  $("#Detail").val("");
  $("#Star").val("");
  $("#Image").val("");
  $("#Manufacturer").val("");
  $("#Category").val("");
}


// Hàm lấy tên ảnh
function getImageName(pathImage) {
  // Chuyển đường dẫn thành mảng các phần tử
  var itemArray = pathImage.split("\\");
  // Lấy phần tử cuối cùng
  var imageName = itemArray[itemArray.length - 1];

  return imageName;
}

function handleSearchBtn() {
  var value = document.getElementById("searchinput").value;
  listProduct = [];
  if (localStorage && localStorage.getItem("listProduct")) {
    var listProductLocalStorage = JSON.parse(localStorage.getItem("listProduct"));
    listProduct = listProductLocalStorage;
  }
  console.log(value);
  console.log(listProduct);
}