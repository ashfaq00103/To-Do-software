submit=()=>{

    let phone =document.getElementById("ema").value;
   

        if (phone&&phone.length===10){
            console.log(phone.length,phone)
            document.getElementById("ema").style.border="1px solid black";
        document.getElementById("phone-error").style.opacity=0;
        document.getElementById("p-error1").style.opacity=0;
            
            }
        else {
        document.getElementById("ema").style.border="1px solid red";
            document.getElementById("phone-error").style.opacity=1;
            document.getElementById("p-error1").style.opacity=1;
        }
        let pass =document.getElementById("password").value;
        if (pass&&pass.length>=8&&pass.length<=12){document.getElementById("password").style.border="1px solid black";
        document.getElementById("pass-error").style.opacity=0;
        document.getElementById("pass-error1").style.opacity=0;
            
            }
        else {
        document.getElementById("password").style.border="1px solid red";
            document.getElementById("pass-error").style.opacity=1;
            document.getElementById("pass-error1").style.opacity=1;
     }

      if(phone.length===10&&pass.length>=8&&pass.length<=12)window.location.href = "todohome.html";
   


}

 opaci=(borderId,iconId,messageErrorId)=>{
    document.getElementById(borderId).style.border="1px solid whitesmoke";
        document.getElementById(iconId).style.opacity=0;
        document.getElementById(messageErrorId).style.opacity=0;
}


