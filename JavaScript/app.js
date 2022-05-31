function signup(e) {
    event.preventDefault();
    var username = document.getElementById("username").value;
   
    var password = document.getElementById("password").value;
    var user = {
      username: username,
     
      password: password,
    };
    var json = JSON.stringify(user);
    localStorage.setItem(username, json);
    alert("Đăng ký thành công");
  }
  function login(e) {
    event.preventDefault();
    var username = document.getElementById("username").value;
   
    var password = document.getElementById("password").value;
    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    if (!user) {
      alert("Vui Long Nhập Username Password");
    } else if (
      username == data.username &&
     
      password == data.password
    ) {
      alert("Đăng Nhập Thành Công");
     window.location.href='../doan.html';
    } else {
      alert("Đăng nhập Thất Bại");
    }
  }
  