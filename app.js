const imgBox = document.getElementById("imgBox");
const qrText = document.getElementById("qrText");
const qrImage = document.getElementById("qrImage");
const btn = document.querySelector("button");

GenerateQR = () => {
  btn.addEventListener("click", () => {
    if (qrText.value.length > 0) {
      qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText.value}`;
      imgBox.classList.add("is-show");
    } else {
      qrText.classList.add("error");
      setTimeout(() => {
        qrText.classList.remove("error");
      }, 1000);
    }
  });
};

GenerateQR();
