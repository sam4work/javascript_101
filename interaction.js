const showAlert = (e) => {

    const element = e.target;

    const pageWrapper = document.getElementById("wrapper");

    for (const childElement of pageWrapper.children) {
        childElement.style.color = "black";
        childElement.style.textDecoration = "none";
    }

    element.style.color = "red";
    element.style.textDecoration = "underline";
}

const pageWrapper = document.getElementById("wrapper");

const changeTeamTag = (e) => {

    const element = e.target;

    console.log(
        changeTeamTag.prevText
    )
    console.log(
        changeTeamTag.prevElement
    )

    // console.log(
    //     pageWrapper.children[0]
    // )

    // for(let i = 0; i < pageWrapper.children.length; i++){
    //     pageWrapper.children[i].textContent = changeTeamTag.prevText;
    // }

    // for (const childElement of pageWrapper.children) {
    //     childElement.style.color = "black";
    //     childElement.style.textDecoration = "none";
    //     // childElement.textContent = changeTeamTag.prevElement.textContent
    // }



    // element.style.color = "red";
    // element.style.textDecoration = "underline";
    // element.textContent = "success"
}

document.addEventListener("DOMContentLoaded", () => {

    // document.getElementById(); look for id attribute
    // document.getElementsByClassName(); look for class attribute
    // document.getElementsByName(); look for name attribute
    // document.getElementsByTagName(); look the html tag name

    // return HTML collection
    // const entireBody = document.getElementsByTagName("body"); 

    // const allHTags = document.getElementsByTagName("h1");

    // const pageWrapper = document.getElementById("wrapper");

    // console.log(entireBody);
    // console.log(allHTags);
    // console.log(pageWrapper.children);



    for (const childElement of pageWrapper.children) {
        
        childElement.addEventListener("click", changeTeamTag);
    }



});