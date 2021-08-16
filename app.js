var dob = document.querySelector("#birth-date")
var lucky = document.querySelector("#lucky")
var btn = document.querySelector("#chk-number")
var output = document.querySelector("#output")

function calculateSum(date) {
    date = date.replaceAll("-","");
    var sum = 0;
    for(i of date){
        sum = sum + Number(i);
    }
    return sum;
}

btn.addEventListener("click", function(){
    var date = dob.value;
    var lukcyNumber = lucky.value;
    var sum = calculateSum(date);

    if(sum % lukcyNumber === 0){
        output.innerText = "Yayy!!! Your Birthday is Lucky 🎉🎉";
    }
    else {
        output.innerText = `${lucky.value} is not Lucky for you 👎`;
    }
    

})