setTimeout(function() {
    // Select the target element
    let d = document.querySelector('.loop-bundle-size-selector-wrapper');

    // Check if the target element exists
    if (d) {
        // Create a div element
        let divElement = document.createElement("div");
        divElement.className = "loop-bundle-size-selector-text";

        // Create three buttons and add classes to each button
        for (let i = 1; i <= 3; i++) {
            let buttonElement = document.createElement("button");
            if(i==1){
                buttonElement.textContent = "Sample text for button " + i;
            }else if(i==2){
                buttonElement.textContent = "Pack of 5 " + i;
            }else{
                buttonElement.textContent = "Pack of 7 " + i;
            }
            buttonElement.style.maxWidth = "11em";
            buttonElement.className = "loop-btn loop-btn-outline loop-btn-size-md loop-btn mx-2 mt-1";
            divElement.appendChild(buttonElement);
        }

        // Append the div to the selected element
        d.appendChild(divElement);
    } else {
        console.error('Target element not found');
    }
}, 1000);