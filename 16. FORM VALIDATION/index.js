
function checkValidData(){

    let name = document.getElementById('uname').value;
    let lname = document.getElementById('luname').value;
    let r1 = document.getElementById('rbtn1').value;
    let r2 = document.getElementById('rbtn2').value;
    let No = document.getElementById('number').value;
    let mail = document.getElementById('email').value;
    let pwd = document.getElementById('pwd').value;
    let cpwd = document.getElementById('cpwd').value;
    let dob = document.getElementById('dob').value;


        if(name == ''){
            document.getElementById('uname').focus();
            document.getElementById('errname').innerHTML = "Please Enter FirstName";
            document.getElementById('errname').style.color="red";
            return false;
        } else{
            document.getElementById('errname').innerHTML ='';
        }

        if(name.length <2 || name.length >10){
            document.getElementById('uname').focus();
            document.getElementById('errname').innerHTML="Name Must be Min 2 or Max 10 Char."
            document.getElementById('errname').style.color="red";
            return false;
        } else{
            document.getElementById('errname').innerHTML ='';
        }

        if(lname == ''){
            document.getElementById('luname').focus();
            document.getElementById('errlname').innerHTML = "Please Enter LastName";
            document.getElementById('errlname').style.color="red";
            return false;
        } else{
            document.getElementById('errlname').innerHTML ='';
        }

        if(lname.length <2 || lname.length >10){
            document.getElementById('luname').focus();
            document.getElementById('errlname').innerHTML="Name Must be Min 2 or Max 10 Char."
            document.getElementById('errlname').style.color="red";
            return false;
        } else{
            document.getElementById('errlname').innerHTML ='';
        }

        if(!r1.checked && !r2.checked){
            document.getElementById('errradio').innerHTML="Please Select Your Gender"
            document.getElementById('errradio').style.color="red";
        } else{
            document.getElementById('errradio').innerHTML ='';
        }

        if(dob == ''){
            document.getElementById('dob').focus();
            document.getElementById('errdob').innerHTML = "Please Enter Date of Birth";
            document.getElementById('errdob').style.color="red";
            return false;
        } else{
            document.getElementById('errdob').innerHTML ='';
        }

        if(No == ''){
            document.getElementById('number').focus();
            document.getElementById('errnumber').innerHTML = "Please Enter Number";
            document.getElementById('errnumber').style.color="red";
            return false;
        } else{
            document.getElementById('errnumber').innerHTML ='';
        }

        if(mail == ''){
            document.getElementById('email').focus();
            document.getElementById('erremail').innerHTML = "Please Enter email";
            document.getElementById('erremail').style.color="red";
            return false;
        } else{
            document.getElementById('erremail').innerHTML ='';
        }

        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var ans = pattern.test(mail);

        if(ans == false){
            document.getElementById('email').focus();
            document.getElementById('erremail').innerHTML = "You have entered an invalid email address!";
            document.getElementById('erremail').style.color="red";
            return false;
        } else{
            document.getElementById('erremail').innerHTML ='';
        }

        if(pwd == ''){
            document.myform.pwd.focus();
            document.getElementById('errpwd').innerHTML = "Please Enter Password";
            document.getElementById('errpwd').style.color="red";
            return false;
        } else{
            document.getElementById('errpwd').innerHTML ='';
        }

        if(cpwd == ''){
            document.myform.cpwd.focus();
            document.getElementById('errcpwd').innerHTML = "Please Enter Confirm Password";
            document.getElementById('errcpwd').style.color="red";
            return false;
        } else{
            document.getElementById('errcpwd').innerHTML ='';
        }

        if(pwd != cpwd){
            document.myform.cpwd.focus();
            document.getElementById('errcpwd').innerHTML = "Password did not Match";
            document.getElementById('errcpwd').style.color="red";
            return false;
        } else{
            document.getElementById('errcpwd').innerHTML ='';
        }

        let capital = pwd.charAt(0);
        if(capital >='a' && capital <='z'){
            document.myform.pwd.focus();
            document.getElementById('errcpwd').innerHTML = "First Character must be Capital";
            document.getElementById('errcpwd').style.color="red";
            return false;
        } else{
            document.getElementById('errcpwd').innerHTML ='';
        }

        if(pwd.length < 8){
            document.myform.pwd.focus();
            document.getElementById('errpwd').innerHTML = "Password length must be atleast 8 characters";
            document.getElementById('errpwd').style.color="red";
            return false;
        } else{
            document.getElementById('errpwd').innerHTML ='';
        }
          
        if(pwd.length > 15){
            document.myform.pwd.focus();
            document.getElementById('errpwd').innerHTML = "assword length must not exceed 15 characters";
            document.getElementById('errpwd').style.color="red";
            return false;
        } else{
            document.getElementById('errpwd').innerHTML ='';
        }   

}