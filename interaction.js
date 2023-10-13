const showAlert = (e) => {

    console.log(e.target.innerText)
    // alert("Hello")
}

document.addEventListener("DOMContentLoaded", () => {

    // document.getElementById(); look for id attribute
    // document.getElementsByClassName(); look for class attribute
    // document.getElementsByName(); look for name attribute
    // document.getElementsByTagName(); look the html tag name

    // return HTML collection
// const entireBody = document.getElementsByTagName("body"); 

// const allHTags = document.getElementsByTagName("h1");

const pageWrapper = document.getElementById("wrapper");

// console.log(entireBody);
// console.log(allHTags);
// console.log(pageWrapper.children);



for (const childElement of pageWrapper.children) {
    childElement.addEventListener("click", showAlert);
  }



});