

const form = document.querySelector("form"),
statusTxt = form.querySelector(".button-area span");

form.onsubmit = (e)=>{
    e.preventDefault(); //preventing form from submitting
    statusTxt.style.color = "blue";
    statusTxt.style.display = "inline";

    let xhr = new XMLHttpRequest(); //creating new xml object
    xhr.open("POST", "message.php",true); //sending post request to message.php file
    xhr.onload = ()=>{  //once ajax loaded
        if(xhr.readyState == 4 && xhr.status == 200){ //if ajax response status is 200 and ready state is 4 means there is no error
            let response = xhr.response; //storing ajax response in a response variable
            if(response.indexOf("Email and message required.") != -1 || response.indexOf("Enter a valid email address.") || response.indexOf("Sorry, failed to send message.")) {
                statusTxt.style.color = "red";
            } else {
                form.reset();
                setTimeout(()=> {
                    statusTxt.style.display = "none";
                }, 3000);
            }
            statusTxt.innerText = response;
        }
    }
    let formData = new FormData(form); // creating new FormData This object is used to send form data
    xhr.send(formData); //sending form data
}