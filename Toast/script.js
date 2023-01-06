const btn = document.getElementById("btn");
const toasts = document.getElementById("toasts");

const texts = ["text1", "text2", "text3", "text4", "text5"];

const types = ["info", "error", "success"];

btn.addEventListener("click", createToast);

function createToast(texts = null, types = null) {
  const notification = document.createElement("div");

  notification.classList.add(type ? type : getRandomType());

  notification.classList.add("toast");

  toasts.append(notification);
}

function getRandomType() {
  return types[Math.floor(Math.random() * types.length)];
}

function getRandomType() {
  return texts[Math.floor(Math.random() * texts.length)];
}
