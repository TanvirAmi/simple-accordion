//using selectors inside the element
// traversing the dom
const btns = document.querySelectorAll(".question-btn");

//The forEach() method calls a function for each element in an array.
//The syntax is: array.forEach(function(currentValue, index, arr), thisValue)
//here the currentVlaue is the btn
btns.forEach(function(plusBtn){
    //console.log(plusBtn);
    plusBtn.addEventListener("click", function(e){
        //console.log(e.currentTarget);
        const question = e.currentTarget.parentElement.parentElement;
        question.classList.toggle("show-text");
    })
});