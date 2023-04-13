let points = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let active = 10;

let pointContainer = document.getElementById("point-container");

let input = document.getElementById("form-input");

let error = document.getElementById("error");

let form = document.getElementById("feedback-form");

let feebackContainer = document.getElementById("feedback-container");

let totalReview = document.getElementById("total-review");

let avgResult = document.getElementById("average-point");

let avg = 0;



// thêm số từ 1 đến 10 cho hãy và số 10 đc đổi màu đỏ
function renderPoints() {
  pointContainer.innerHTML = "";
  for (let i = 0; i < points.length; i++) {
    if (points[i] == active) {
      pointContainer.innerHTML =
        pointContainer.innerHTML +
        ` <div class="point active"> ${points[i]} </div>`;
    } else {
      pointContainer.innerHTML =
        pointContainer.innerHTML + ` <div class="point"> ${points[i]} </div>`;
    }
  }
}

// tính tổng số Review
function rederTotalReviews() {
  totalReview.innerHTML = feebackContainer.children.length;
}
//avg = avg + Number
// tính tổng trung bình
function rederAvg() {
  if (feebackContainer.children.length > 0 ) {
    let rerult = 0 
  for (let i = 0; i < feebackContainer.children.length; i++) {
    rerult = rerult + Number(feebackContainer.children[i].children[0].innerHTML);
    console.log(avg);
  }
  avg = rerult / feebackContainer.children.length;
  console.log(feebackContainer.children.length);
  console.log(avg);
  avgResult.innerHTML = avg;
  }
}

renderPoints();
rederTotalReviews();
rederAvg();

// add point event
pointContainer.onclick = function (event) {
  if (event.target.classList.contains("point")) {
    // cobtains("point") -->> kiểm tra xem point có nằm trong class list PonitContainer không
    // nếu có thì mới bắt đầu thực hiện active

    // gán lại giá trị cho biến active = event.target
    active = +event.target.innerHTML;
    // render lại points
    renderPoints();
  }
};

// add input event ( validate input) 
input.oninput = function (event) {
  if (event.target.value === "") {
    error.style.display = "none";
  } else if (event.target.value.length < 10) {
    error.style.display = "block";
  } else {
    error.style.display = "none";
  }
};

// add nut send
// lắng nghe sự kiện submit (gửi đi) của thẻ form và thực hiện function
form.onsubmit = function (event) {
  event.preventDefault(); // bỏ qua sự kiện mặc định của form
  if (input.value.length >= 10) {
    /**
 * cách 1: lấy trực tiếp thẻ input thông qua các phương thức quyry HTML
 * lấy elemnt.value
 * console.log(input.value);
 *
/**
 * cách 2 : lấy value của input thông qua name của input
 */
    console.log(form.content.value);
    console.log(active);

    let content = form.content.value;
    console.log(content);

    let feeback = `<div class="feedback-item">
<div class="point"> ${active} </div>
<div class="content"> ${content} </div>
<div class="action-container">
  <ion-icon class="update" name="share-outline"></ion-icon>
  <ion-icon class="delete" name="close-outline"></ion-icon>
</div>
</div>`;

    // lấy ra giá trị point đang active hiện tại

    feebackContainer.innerHTML = feebackContainer.innerHTML + feeback;
    input.value = "";

    rederTotalReviews();
    rederAvg();
  }
};

// xóa 1 phần tử đi khi thực hiện click xóa 

feebackContainer.onclick = function(e) {
 if ( e.target.classList.contains("delete")) {
  let close = e.target.parentElement.parentElement
  close.remove();
  rederTotalReviews();
  rederAvg();
 }
}
