const changeNameBtn = document.querySelector("#changeNameBtn");
const changeThemeBtn = document.querySelector("#changeThemeBtn");
const likeBtn = document.querySelector("#likeBtn");
const hideBioBtn = document.querySelector("#hideBioBtn");
const hideHobbiesBtn = document.querySelector("#hideHobbiesBtn");
const changeImageBtn = document.querySelector("#changeImageBtn");
const resetBtn = document.querySelector("#resetBtn");

const username = document.querySelector("#username");
const likes = document.querySelector("#likes");
const bio = document.querySelector("#bio");
const hobbies=document.querySelector("#hobbies");
const profileImage = document.querySelector("#profileImage");

const defaultName = "Алексей";
const defaultLikes = 0;

changeNameBtn.addEventListener("click", () => {
	const newName = prompt();
    if (newName) { //проверка что имя не пустое
        username.textContent = newName; 
    }; 
});

changeThemeBtn.addEventListener("click", () => {
    document.body.classList.toggle('dark-theme');
});

likeBtn.addEventListener("click", () => {
    likes.textContent = parseInt(likes.textContent) + 1;
});

hideBioBtn.addEventListener("click", () => {
    bio.classList.toggle("hidden");
});

hideHobbiesBtn.addEventListener("click", () => {
    hobbies.classList.toggle("hidden");
});

changeImageBtn.addEventListener("click", () => {
    const newImageUrl = prompt();
    profileImage.src = newImageUrl;
});

resetBtn.addEventListener("click", () => {
    username.textContent = defaultName;
    likes.textContent = defaultLikes;
});

