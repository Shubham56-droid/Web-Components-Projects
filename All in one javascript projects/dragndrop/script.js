const dropArea = document.querySelector(".drag-area");
dragText = dropArea.querySelector("header"),
    button = dropArea.querySelector("button"),
    input = dropArea.querySelector("input");
let file;

button.onclick = () => {
    input.click();

}

input.addEventListener("change", function () {
    file = this.files[0];
    showFile();
    dropArea.classList.add("active");
});


dropArea.addEventListener("dragover", (event) => {
    event.preventDefault();
    // console.log("file");
    dropArea.classList.add("active");
    dragText.textContent = "Release to Upload";
});

dropArea.addEventListener("dragleave", () => {
    // console.log("file rem");
    dropArea.classList.remove("active");
    dragText.textContent = "Drag and Drop to upload";

});

dropArea.addEventListener("drop", (event) => {
    event.preventDefault();
    file = event.dataTransfer.files[0];
    showFile();
});

function showFile() {
    let fileType = file.type;
    console.log(file);

    let validExtensions = ["image/jpeg", "image/jpg", "image/png"];

    if (validExtensions.includes(fileType)) {
        console.log("asdf");
        let fileReader = new FileReader();
        fileReader.onload = () => {
            let fileURL = fileReader.result;
            console.log(fileURL);
            let imgTag = `<img src="${fileURL}" alt="">`;
            dropArea.innerHTML = imgTag;
        }
        fileReader.readAsDataURL(file);
    }
    else {
        alert("img file only");
        dropArea.classList.remove("active");

    }
}