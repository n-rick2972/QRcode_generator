const imgBox = document.getElementById("imgBox");
const qrText = document.getElementById("qrText");
const qrImage = document.getElementById("qrImage");
const btn = document.querySelector("button");

// サイズ指定(同値にする)
const qrHeight = document.getElementById("qrHeight");
const qrWidth = document.getElementById("qrWidth");

qrHeight.addEventListener("keydown", () => {
  qrWidth.value = qrHeight.value;
});

// 選択されているカラーコードを取得
const colorCode = () => {
  const colorBox = document.getElementById("color");
  switch (colorBox.selectedIndex) {
    case 1:
      return "0000ff";
      break;
    case 2:
      return "000080";
      break;
    case 3:
      return "008000";
      break;
    case 4:
      return "ffff00";
      break;
    case 5:
      return "ff0000";
      break;
    case 6:
      return "800080";
      break;
    default:
      return "333";
  }
};

// 選択されているカラーコードを取得
const selectFormat = () => {
  const formatBox = document.getElementById("format");
  return formatBox.selectedIndex === 0 ? "png" : "svg";
};

// QRコード生成
GenerateQR = () => {
  btn.addEventListener("click", () => {
    if (qrText.value.length > 0) {
      qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=${
        qrHeight.value
      }x${qrWidth.value}&data=${
        qrText.value
      }&color=${colorCode()}&format=${selectFormat()}`;

      console.log(qrImage.src);

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

// リセットボタン
const resetBtn = document.getElementById("resetBtn");

resetBtn.addEventListener("click", () => {
  location.reload();
});
