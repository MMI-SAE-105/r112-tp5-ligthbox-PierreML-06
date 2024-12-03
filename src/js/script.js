// *** LIGHTBOX ***
//début 
const lightBox = document.querySelector("lightbox");
const img = document.querySelectorAll("img");



img.forEach((img) => {
    img.addEventListener("click", () => {

        const light = img.dataset.lightBox2;
        const img2 = lightBox.querySelector("img2");
        img2.src = light; 
        lightBox.showModal(); 
         });
    });

    lightBox.addEventListener("click", () => {
        lightBox.close();
    });
