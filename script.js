function toggleModules() {
    const techDiv = document.getElementById("tech");
    const items = techDiv.querySelectorAll(".item");

    items.forEach(item => {
        if (item.style.display === "none" || item.style.display === "") {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}





// function toggleContent(header) {
//     const contentDiv = header.nextElementSibling; // Target the next sibling (the .content div)
//     contentDiv.classList.toggle("show"); // Toggle the 'show' class
//   }