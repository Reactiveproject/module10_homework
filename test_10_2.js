// ЗАдание 10_2

//Сверстайте кнопку, клик на которую будет выводить данные о размерах экрана с помощью alert.

document.querySelector(".button").addEventListener("click", () => {
  alert(
    `Размер экрана составляет ${window.screen.width} на ${window.screen.height} пискелей`
  );
});
