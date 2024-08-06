const containerEl = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
    const colorContainerEL = document.createElement("div");
    colorContainerEL.classList.add("color-container");
    containerEl.appendChild(colorContainerEL); 
}

const colorContainerEl = document.querySelectorAll(".color-container");

generateColor()
function generateColor(){
    colorContainerEl.forEach((colorContainerEl) => {
        const newColorcode = couleur();
        colorContainerEl.style.backgroundColor = "#" + newColorcode;
        colorContainerEl.innerHTML = "#" + newColorcode;
    });
}



function couleur(){
    const chars = "0123456789abcdef";
    const colorCode=6
    let colorC = "";

    for (let i = 0; i < colorCode; i++) {
        const randomNum = Math.floor (Math.random() * chars.length);
        colorC += chars.substring(randomNum, randomNum+1);

        console.log(colorC);
    }
    return colorC;
}