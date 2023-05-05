let previous = document.querySelector(".previous");
let next = document.querySelector(".next");
let img = document.querySelector(".img1");

next.onclick = () => {

    if (img.classList.contains("active")) {

        img.classList.remove("active");

        img = img.nextElementSibling;

        if (img == null) {
            img = document.querySelector(".images").firstElementChild
        }

        if (img != null) {
            img.classList.add("active");
        }

    }

}


previous.onclick = () => {

    if (img.classList.contains("active")) {

        img.classList.remove("active");

        img = img.previousElementSibling;

        if (img == null) {
            img = document.querySelector(".images").lastElementChild
        }

        if (img != null) {
            img.classList.add("active");
        }

    }

}
