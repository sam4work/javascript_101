const showAlert = (e) => {

    const element = e.target;

    const pageWrapper = document.getElementById("wrapper");

    for (const childElement of pageWrapper.children) {
        childElement.style.color = "black";
        childElement.style.textDecoration = "none";
    }

    element.style.color = "red";
    element.style.textDecoration = "underline";





    // if(element.style.color === "red"){
    //     element.style.color = "black";
    // }else{
    //     element.style.color = "red";
    // }

    // element.style.color = "red";
    // element.style.textDecoration = "underline";
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