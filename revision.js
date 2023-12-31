document.addEventListener("DOMContentLoaded", function () {


    // select the button from the DOM
    const btnChangeTheme = document.querySelector('#btnChangeTheme');

    // add on click event listener
        btnChangeTheme.addEventListener('click', function (e) {
            // toggle html tag class attribute
            const htmlClassList = document.documentElement.classList;

            // if dark mode is on, remove it from class list

            // if(htmlClassList.contains('dark')){
            //     htmlClassList.remove('dark')
            //     this.textContent = 'light';
            // }else{
            //     htmlClassList.add('dark')
            //     this.textContent = 'dark';

            // }

            // same as condition above but using switch statement
            switch (htmlClassList.contains('dark')) {
                case true:
                    htmlClassList.remove('dark')
                    this.textContent = 'light';
                    break;
            
                case false:
                    htmlClassList.add('dark')
                    this.textContent = 'dark';
                    break;
                default:
                    break;
            }
        })

})


