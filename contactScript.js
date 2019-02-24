//form validation
var name=document.getElementById('name');
var email=document.getElementById('email');
var form=document.getElementById('myForm');
var validName='l'; //Regex for validName
var validEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
form.addEventListener('submit',($event)=>{
    $event.preventDefault();
    var x = name.value;
    if (x===null) {
        alert("Name must be filled out, and letters only including hyphen");
        return false;
    }
    else if((validEmail.test(email))){
        alert("Enter a valid email");
    }
    else{
        //creating a new paragraph that contains the successful image.
       var message=document.createElement('p');
        message.textContent="Form succesfully submited.Would you like to submit another one?";
        message.style.fontSize="24px;"
        message.style.color="green";
        message.style.border="thin solid green;"
        //getting the message div
        var messagediv=document.getElementById('message');
        //removing any existing children(messages)
        if (messagediv.hasChildNodes()) {
            messagediv.removeChild(messagediv.childNodes[0]);
        }
        //adding the curent message
        messagediv.appendChild(message);
        messagediv.style.display="block";
        form.reset();
    }
});
console.log(name);



