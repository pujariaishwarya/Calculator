const inputValue = document.getElementById("userinput");
const calci = document
    .querySelectorAll(".operation")
    .forEach(function (item) {
        item.addEventListener("click", function (e) { 
            let lastvalue = inputValue.innerText.substring(inputValue.innerText.length, inputValue.innerText.length-1);
            console.log(lastvalue);
            if(!isNaN(lastvalue) && e.target.innerHTML === "="){
                inputValue.innerText = eval(inputValue.innerText);
            } 
            else if(e.target.innerHTML === "Clr"){
                inputValue.innerText = "0";
            }
            else if(e.target.innerHTML === "Del"){
                inputValue.innerText = inputValue.innerText.substring(
                    0,inputValue.innerText.length-1
                );
                if(inputValue.innerText.length == "0"){
                    inputValue.innerText = "0";
                }
            }
            else{
                if(!isNaN(lastvalue)){
                    inputValue.innerText += e.target.innerHTML;
                }
            }
        });
    });
const number = document.querySelectorAll(".numbers").forEach(function (item) {
    item.addEventListener("click", function (e) {
        if(inputValue.innerText === "0"){
            inputValue.innerText = "";
        }
        inputValue.innerText += e.target.innerHTML.trim();
    });
});