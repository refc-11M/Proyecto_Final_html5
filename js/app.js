console.log("Sitio de Huamantla cargado correctamente");


document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        console.log("Navegando...");
    });
});
