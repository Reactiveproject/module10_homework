//Задание 10_3
//Реализовать чат на основе эхо-сервера wss://echo-ws-service.herokuapp.com.
// Интерфейс состоит из input, куда вводится текст сообщения, и кнопки «Отправить».
//При клике на кнопку «Отправить» сообщение должно появляться в окне переписки.
// Эхо-сервер будет отвечать вам тем же сообщением, его также необходимо выводить в чат:
//При клике на кнопку «Гео-локация» необходимо отправить данные серверу
//и в чат вывести ссылку на https://www.openstreetmap.org/ с вашей гео-локацией.
//Сообщение, которое отправит обратно эхо-сервер, не выводить.

const btnMsg = document.querySelector(".btn_snd_msg");
const btnGeo = document.querySelector(".btn_snd_geo");
const msgField = document.querySelector(".massage_field");

const wsUrl = "wss://echo-ws-service.herokuapp.com";
const geoUrl = "https://www.openstreetmap.org/";

function writeUserMessage(message) {
  let pre = document.createElement("p");
  pre.style.cssText =
    "color: black; align-self: end; text-align: center; border: 1px solid cornflowerblue; margin: 10px; padding: 15px; max-width: 200px; border-radius: 5px ";
  pre.innerHTML = message;
  msgField.appendChild(pre);
}

function writeEchoMessage(message) {
  let pre = document.createElement("p");
  pre.style.cssText =
    "color: black; align-self: start; text-align: center; border: 1px solid cornflowerblue; margin: 10px; padding: 15px; max-width: 200px; border-radius: 5px ";
  pre.innerHTML = message;
  msgField.appendChild(pre);
}

const websocket = new WebSocket(wsUrl);
websocket.onerror = function (evt) {
  writeEchoMessage(evt.data);
};
websocket.onmessage = function (evt) {
  writeEchoMessage(evt.data);
};

btnMsg.addEventListener("click", () => {
  let inputTxt = document.querySelector(".input").value;
  const message = inputTxt;
  writeUserMessage(message);
  websocket.send(message);
});

btnGeo.addEventListener("click", () => {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const geoMess = `<a href=https://www.openstreetmap.org/#map=18/${latitude}/${longitude} target="_blank">
          Гео-локация
        </a>`;
      writeUserMessage(geoMess);
    });
  }
});
