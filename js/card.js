// 卡片一
const item_1 = document.querySelector("#item-1");
const santa_container = document.querySelector(".santa-container");
const cancel_1 = document.querySelector("#cancel-1");

item_1.onclick = () => {
    santa_container.classList.add("active");
}

cancel_1.onclick = () => {
    santa_container.classList.remove("active");
}

// 卡片二
const item_2 = document.querySelector("#item-2");
const reindeer_container = document.querySelector(".reindeer-container");
const cancel_2 = document.querySelector("#cancel-2");

item_2.onclick = () => {
    reindeer_container.classList.add("active");
}

cancel_2.onclick = () => {
    reindeer_container.classList.remove("active");
}

// 卡片三
const item_3 = document.querySelector("#item-3");
const elf_container = document.querySelector(".elf-container");
const cancel_3 = document.querySelector("#cancel-3");

item_3.onclick = () => {
    elf_container.classList.add("active");
}

cancel_3.onclick = () => {
    elf_container.classList.remove("active");
}