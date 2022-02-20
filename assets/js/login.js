document.getElementById("true").style.display = "none"
function verify(){
    var username = document.getElementById("username").value
    var atposition = username.indexOf("@")
    var dotposition = username.lastIndexOf(".")
    var matkhau = document.getElementById("matkhau").value
    if (atposition < 1 || dotposition < atposition+2 || username.length <= dotposition+2){
    document.getElementById("error").innerHTML = "Có thể tên người dùng hoặc mật khẩu của bạn không chính xác, hoặc có thể bạn cần cập nhật Tài khoản Riot của mình nếu bạn đã ngừng chơi trong vài tháng."
    document.getElementById("error").style.color = "purple";
    document.getElementById("username").style.background = "pink";
    document.getElementById("matkhau").style.background = "pink";
    return false
    }
    else{
      if(matkhau ==""){
      document.getElementById("error").innerHTML = "Có thể tên người dùng hoặc mật khẩu của bạn không chính xác, hoặc có thể bạn cần cập nhật Tài khoản Riot của mình nếu bạn đã ngừng chơi trong vài tháng."
      document.getElementById("error").style.color = "purple";
      document.getElementById("username").style.background = "pink";
      document.getElementById("matkhau").style.background = "pink";
      return false
    }
      if(matkhau.length<8){
      document.getElementById("error").innerHTML = "Có thể tên người dùng hoặc mật khẩu của bạn không chính xác, hoặc có thể bạn cần cập nhật Tài khoản Riot của mình nếu bạn đã ngừng chơi trong vài tháng."
      document.getElementById("error").style.color = "purple";
      document.getElementById("username").style.background = "pink";
      document.getElementById("matkhau").style.background = "pink";
      return false
    }
      else{
        document.getElementById("error").innerHTML = ""
        document.getElementById("username").style.background = "aquamarine";
        document.getElementById("matkhau").style.background = "aquamarine";
        window.location.replace("/index.html")
        return false
    }
    }
    }

