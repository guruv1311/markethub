function gift() {
    const n = document.getElementById("number").value;
    const grid = document.getElementById("grid");
    grid.innerHTML = "";
    // grid.innerHTML = n;
    for (let i = 0; i < n; i++) {
        let img = document.createElement("img");
        img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZnmidmwha7DyaVHCRSw917MPbIP3kNjaXkg&usqp=CAU";
        img.alt = "gift";
        img.loading = "lazy";
        grid.appendChild(img);
    }
}