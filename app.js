const counter = document.querySelector("#count");

let increase = document.querySelector("#plus");
let decrease = document.querySelector("#minus");
let reset = document.querySelector("#reset");

let count = 0;

const increaseCount = () => {
    count++;
    counter.innerText = count;
    if(count>0){
        counter.style.color = "green";
    }
    checkZero();
};

const decreaseCount = () => {
    count--;
    counter.innerText = count;
    if(count<0){
        counter.style.color = "red";
    }
    checkZero();
};

const checkZero = () => {
    if(count == 0){
        counter.style.color = "#081b31";
    }
};

increase.addEventListener("click", () => {
    increaseCount();
});

decrease.addEventListener("click", () => {
    decreaseCount();
});

reset.addEventListener("click", () => {
    count = 0;
    counter.innerText = count;
    counter.style.color = "#081b31";
});