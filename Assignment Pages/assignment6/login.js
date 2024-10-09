window.onload = loginLoad;

function loginLoad() {
  const form = document.getElementById("myLogin");
  form.onsubmit = checkLogin;
}

function checkLogin(event) {
  const username = document.getElementById("username").value;
  const password = document.forms["myLogin"]["password"].value;

  const registeredUsername = localStorage.getItem("username");
  const registeredPassword = localStorage.getItem("password");

  // ตรวจสอบว่าผู้ใช้และรหัสผ่านถูกบันทึกไว้ใน localStorage
  if (registeredUsername && registeredPassword) {
    if (username === registeredUsername && password === registeredPassword) {
      alert("เข้าสู่ระบบสำเร็จ!");
      return true;
    }
  }
  
  document.getElementById("loginError").innerText = "Username หรือ Password ไม่ถูกต้อง กรุณาลองใหม่";
  event.preventDefault();
  return false;
}
