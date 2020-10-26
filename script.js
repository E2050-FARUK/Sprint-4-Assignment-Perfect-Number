document.getElementById("check").addEventListener(
    "click", perfectVerification)

    //let counter = 0;
    //const myNum = Math.floor(Math.random() * 3);

    function perfectVerification(){
        let number = document.getElementById("guess").value;

        let dividers = [];
        let sum_dividers = 0;

        for (let i = 1; i< number; i++){
            if (number % i == 0){
                dividers.push(i)
                sum_dividers+=i
            };
        }
        if (sum_dividers == number) {
            document.getElementById("answer").innerHTML = `${number} is a perfect number`;
        } else {
            document.getElementById("answer").innerHTML = `${number} is not a perfect number`;
        }
        document.getElementById("guess").value=""; 
        document.getElementById("guess").focus();
    }
    

