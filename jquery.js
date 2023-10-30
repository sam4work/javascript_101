$(document).ready(function () {


    const btnUpload = $("#btn-upload");
    const uploadInput = $("[name=upload-input]");

    btnUpload.click(function () {
        uploadInput.click();

        uploadInput.change(function () {
            console.log(uploadInput);
            console.log(uploadInput[0].files[0].name);
            const fileName = uploadInput[0].files[0];

            const imageUrl =  URL.createObjectURL(fileName)

            $('#image-container').css('background-image',`url(${imageUrl})`)




            console.log(imageUrl);
        })





    })



});
