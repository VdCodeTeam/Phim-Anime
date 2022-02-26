
// slick slider imgage
$(document).ready(function(){
    $('.image-slider').slick({
        slidesToShow: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        dots: true,
        
        prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class="fas fa-chevron-left"></i></button>`,
        nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="fas fa-chevron-right"></i></button>`,
        responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 1,
                arrows: true,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                arrows: true,
                infinite: true,
              },
            },
          ],
    });
  });
          
// fullscreen 
      
let fullscreen;
let fsEnter = document.getElementById('fullscr');
fsEnter.addEventListener('click', function (e) {
    e.preventDefault();
    if (!fullscreen) {
        fullscreen = true;
        document.documentElement.requestFullscreen();
        fsEnter.innerHTML = "Tắt full màn hình";
    }
    else {
        fullscreen = false;
        document.exitFullscreen();
        fsEnter.innerHTML = "Bật full màn hình";
    }
});

// messenger-input

var outputArea = $("#chat-output");

$("#user-input-form").on("submit", function(e) {
  
  e.preventDefault();
  
  var message = $("#user-input").val();
  
  outputArea.append(`
    <div  class='bot-message'>
      <div class='message'>
        ${message}
        
      </div>
    </div>
  `);
  
  setTimeout(function() {
    outputArea.append(`
      <div  class='user-message'>
        <div class='message'>
          xin chào,cảm ơn đã ghé thăm!
        </div>
      </div>
    `);

  }, 250);
  $("#user-input").val("");
  
});


// daytime

let dayRef = document.getElementById('update-day');
let DayOfWeek = [
  "Chủ nhật","Thứ 2","Thứ 3","Thứ 4","Thứ 5","Thứ 6","Thứ 7",
];

let dateToday = new Date();
let dayToday = dateToday.getDay();

dayRef.innerHTML = `hôm nay là ${DayOfWeek[dayToday]}`;

// time daily
function showTime(){
  var date = new Date();
  var h = date.getHours();
  var n = date.getMinutes();
  var s = date.getSeconds();
  var timeday;

    if(h >= 0 && h <= 11){
      timeday = '[buổi sáng]';
    }
    if(h > 11 && h < 16){
      timeday ="[buổi trưa]";
    }
    if (h >= 16 && h < 18){
      timeday = "[buổi chiều]";
    }
    
    if(h >= 18 && h <= 24){
      timeday= "[buổi tối]";

}
  
  var time = h + " giờ " + n +" phút " + s +" giây ";
  document.getElementById("update-time").innerText = time;
  document.getElementById("update-time").innerContent = time;
  document.getElementById("update-timeday").innerText = timeday;
  setTimeout(showTime,1000);
}
showTime();

// hide password
const password = document.getElementById('password');
const toggle = document.getElementById("toggle");
function showHide(){
    if (password.type === 'password'){
        password.setAttribute('type' , 'text');
        toggle.classList.add('hide');
    }
    else{
        password.setAttribute('type', 'password');
        toggle.classList.remove('hide');
    }
}

// comment change color 
let changeComment = document.getElementsByClassName('home-product-item__price-old');
  for(i = 0;i < changeComment.length; i++){
    if(i % 2 === 0){
      changeComment[i].style.color = 'red';
    }
    else{
       changeComment[i].style.color = 'red'; 
      //color:  blue;
    }
  }
// changecolor text
// function changecolortext(){
//   document.getElementById("update-time").style.color = 'red';
// }
// function resetcolortext(){
//   document.getElementById("update-time").style.color = 'white';
// }

// change image for readmore
// setAttribute src cho ảnh để khi click sẽ ra đúng ảnh đó

function changeImage(id){
    let image = document.getElementById(id).getAttribute('src');
    document.getElementById('changeImagemain').setAttribute('src',image);
}

// đổi tab khi người dùng click vào ở readmore

function changeProductlist(type,element){
    let tabs = document.getElementsByClassName('tab-title');
    // vì có 3 tab => cho i chạy từ 0 đến 2 để lấy mảng array từng cái
    for (i = 0;i < tabs.length; i++ ){
      tabs[i].style.backgroundColor = 'black';
     
  }
    element.style.backgroundColor = 'red';
    // dùng câu lệnh dk switch case nếu .. mà
    document.getElementById(type).style.display = 'block';

    switch(type){
      case 'trend-product':
          document.getElementById('new-product').style.display = 'none';
          document.getElementById('best-sell-product').style.display = 'none';
        break;

      case 'new-product':
          document.getElementById('trend-product').style.display = 'none';
          document.getElementById('best-sell-product').style.display = 'none';
        break;
      case 'best-sell-product':
          document.getElementById('trend-product').style.display = 'none';
          document.getElementById('new-product').style.display = 'none';
        break;
    }
}
// tạo profile ở truyện tranh
function nameOfyou(){
    let Name = document.getElementById('yourName-request').value;
    let citySelect = document.getElementById('select-your-city').value;
    let yourWork = document.getElementById('select-your-work').value;
    document.getElementById('result-request-name').innerHTML = `Xin chào bạn: ${Name}`;
    document.getElementById('result-request-city').innerHTML = `Thành phố của bạn là: ${citySelect}`;
    document.getElementById('result-request-work').innerHTML = `Công việc của bạn là: ${yourWork}`;
    let colorRquestname = document.getElementById('result-request-name');
        colorRquestname.style.color = 'red';
}

// tạo form giải phương trình bậc nhất 1 ẩn 

function giaiPT(){
    var a = parseFloat(document.dataform.hsa.value);
    var b = parseFloat(document.dataform.hsb.value);
    var ketqua = "Phương trình: "+ a +"x" +"+" +b + " = 0 <br>";

    if(a==0 && b==0)
      ketqua += "vô số nghiệm"
    
    if(a == 0 && b!=0)
      ketqua += "vô nghiệm rùi"
    
    if(a!=0)
      ketqua+= "có nghiệm là: " + (-b/a)
    
    document.getElementsByClassName('ketQuaCaculator')[0].innerHTML = ketqua;
}
    // tạo box cho banh chạy và dừng

    var ballTop = 0;
    var ballLeft = 0; //vì bóng ở phía trên bên trái
    var X = 10;
    var Y = 10;
    var ball = document.getElementsByClassName('ball-motion-in-box')[0];
    var box = document.getElementsByClassName('table-box-ball')[0];
    var timer;
    var reseter = document.getElementsByClassName('ball-motion-in-box');
function playNow(){
  
    if(ballTop + ball.offsetHeight >= box.offsetHeight || ballTop <0 )
      Y = -Y; //cho nó dội lại khi qua bóng chạm vào cạnh của chiều cao
    
    if(ballLeft + ball.offsetWidth >= box.offsetWidth || ballLeft <0)
      X = -X;
    ballTop += Y //quả bóng sẽ đi xuống
    ballLeft += X // quả bóng sẽ sang phải
    ball.style.top = ballTop + 'px';
    ball.style.left = ballLeft + 'px';
    timer = setTimeout('playNow()',100);
}
function stopNow(){
    clearTimeout(timer);
}
// text product 

let day;
switch (new Date().getDay()){
  case 0:
    day = "Chủ nhật";
    break;
  case 1:
    day = "Thứ 2";
    break;
  case 2:
    day = "Thứ 3";
    break;
  case 3:
    day = "Thứ 4";
    break;
  case 4:
    day = "Thứ 5";
    break;
  case 5:
    day = "Thứ 6";
    break;
  case 6:
    day = "Thứ 7";
    break;
  
}
// document.getElementById('test-swicth-case').innerHTML = "hôm nay là " + day;

// const cars = [
//   "siêu xe",
//   "xe điện tesla",
//   "H2 kawasaki",
//   "suzuki",
// ];
// let text = "";
// for (let i = 0; i < cars.length; i++){
//     text += cars[i] + "<br>";
// };
// document.getElementById('show-text-for').innerHTML = text;

// let text = '{"employees":[' +
// '{"firstName":"John","lastName":"Doe" },' +
// '{"firstName":"Anna","lastName":"Smith" },' +
// '{"firstName":"Peter","lastName":"Jones" }]}';

// const obj = JSON.parse(text);
// document.getElementById("show-text-for").innerHTML =
// obj.employees[0].firstName + " " + obj.employees[0].lastName;

let p1 = 5;
let p2 = 10;

document.getElementById('notifycation-js').addEventListener("click",function(){
    myFunction(p1,p2);
});
function myFunction(a,b){
  document.getElementById('notifycation-js').innerHTML = Math.random(a * b);
};
