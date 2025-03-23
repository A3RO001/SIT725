function changeText(){
    var textsArray = ["Text 1","Text 2", "Text 3", "Text 4", "Text 5"];
    var number = getRandomNumberBetween(0,textsArray.length - 1);
    console.log("Index: ", number);
    document.getElementById("heading").innerHTML = textsArray[number];
}

function getRandomNumberBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

function calculateSum() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    
    fetch(`/add?num1=${num1}&num2=${num2}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("result").innerHTML = `Result: ${data.result}`;
        })
        .catch(error => {
            console.error("Error fetching sum:", error);
            document.getElementById("result").innerHTML = 'Error calculating result';
        });
}
