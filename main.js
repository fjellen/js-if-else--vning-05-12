/* Del 1
const apple = 10;
const kiwi = 2;

const fruitsalad = apple / kiwi === 5;

console.log(fruitsalad);
*/

/* Del 2
const strawberry = 1;
const blueberry = 1;

const berrys = strawberry - blueberry === 0;

console.log(berrys);
*/

/* Del 3
const large = 100;

const larger = large > 10;

console.log(larger);
*/


/* Del 4
const small = 3;

const smaller = small < 10;

console.log(smaller);
*/

/* Del 5
const sports = [
"football", 
"ice hockey", 
"ping pong", 
"e-sports"
]; 

console.log(sports);
*/

/* Del 6
function kvadratYta(bredd, höjd) {
    if (bredd > 0 && höjd > 0) {
        return bredd * höjd;
    }
    return 0;
}

console.log(kvadratYta(5, 8))
*/

// Del 7
const inputField1 = document.getElementById("johnAge");
const inputField2 = document.getElementById("sarahAge");
const Button = document.getElementById("click");

function whenClicked() {
    const user1Age = parseInt(inputField1.value);
    const user2Age = parseInt(inputField2.value);

    if (user1Age > user2Age) {
        alert("John is older then Sarah!");
    }
    else if (user1Age < user2Age) {
        alert("Sarah is older than John!");
    }
    else {
        alert("They are the same age!")
    }
}


Button.addEventListener("click", whenClicked);