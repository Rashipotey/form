function myFunction(){
    var x=document.getElementById("myInput");
    if (x.type === "password") {
        x.type = "text";
      } else {
        x.type = "password";
      }
}
function verifyPassword(){
    var pw=document.getElementById("myInput").value;
      if(pw==""){
          document.getElementById("message").innerHTML="Fill the password please!";
          return false;
      }
          else if(pw.length<7){
              document.getElementById("message").innerHTML="Password too small!";
              return false;
          }
          else if(pw.length>12){
            document.getElementById("message").innerHTML="Password too big!";
            return false;
          }
    else if(pw.length>=8 && pw.length<=11)
    {
        document.getElementById("message").innerHTML=" ";
    }
          else{
            document.getElementById("message").innerHTMl=" ";
            return true;
          }  
}
function nameValidate(){
    var name=document.getElementById("i2").value;
    if(name==""){
        document.getElementById("msg1").innerHTML="Name can't be blank!";
        return false;
    }
    else{
        document.getElementById("msg1").innerHTML=" ";
        return true;
    }
}
function uIdValidate(){
    var userID=document.getElementById("i1").value;
   var userId=/^[a-zA-Z]+$/;
    if(userID.match(userId))
    {
        document.getElementById("msg2").innerHTML=" ";
        return true;
    }
    else  if(userID==""){
        document.getElementById("msg2").innerHTML="This field cannot be blank";
       }
    else{
        document.getElementById("msg2").innerHTML="userId must contain aplhabets only";
        return false;
    }
}
function adrValidate(){
    var letters=/^[0-9a-zA-Z]+$/;
    var adr=document.getElementById("i3").value;
    if(adr.match(letters))
    {
        return true;
    }
    else{
        return false;
    }
}
function cntryValidate(){
    var cntry=document.getElementById("country").value;
    if(cntry=="select")
    {
        document.getElementById("msg3").innerHTML="Must select a country";
        return false;
    }
    else{
        document.getElementById("msg3").innerHTML=" ";
        return true;
    }
}
function zipValidate(){
    var zip=document.getElementById("i4").value;
    var num=/^[0-9]+$/;
    if(zip.match(num))
    {
        document.getElementById("msg4").innerHTML=" ";
        return true;
    }
    else{
        document.getElementById("msg4").innerHTML="Zip code can have numeric values only";
        return false;
    }
}
function emailValidate(){
    var mail=document.getElementById("i5").value;
    if(mail.includes("@") && mail.includes(".com"))
    {
        document.getElementById("msg5").innerHTML=" ";
        return true;
    }
    else{
        document.getElementById("msg5").innerHTML="Please enter valid email address";        return false;
    }
}
function checkForm(){
    var a=document.getElementById("i1");
    var b=document.getElementById("myInput");
    var c=document.getElementById("i2");
    var d=document.getElementById("i3");
    var e=document.getElementById("i4");
    var f=document.getElementById("i5");
    var g=document.getElementById("i6");
    var h=document.getElementById("i7");
    var i=document.getElementById("i8");
    var j=document.getElementById("country");
    var k=document.getElementById("input");
    if(a==""||b==""||c==""||d==""||e==""||f==""||g==""||h==""||i==""||j==""||k=="")
    {
        alert("Please fill all the entries");
    }
}



