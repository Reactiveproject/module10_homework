const btn = document.querySelector(".button");
const ico_one = document.querySelector(".ico_one");
const ico_two = document.querySelector(".ico_two");

btn.addEventListener("click", () => {
  ico_one.classList.toggle("hidden");
  ico_two.classList.toggle("hidden");
});
