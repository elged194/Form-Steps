// -------------------- Input required ------------------------------
const form = document.querySelector("form"),
  nextBtn = form.querySelector(".nextBtn"),
  backBtn = form.querySelector(".backBtn"),
  allInput = form.querySelectorAll(".first input"),
  select = form.querySelectorAll(".personal select ");

nextBtn.addEventListener("click", () => {
  select.forEach((input) => {
    if (input.value != "") {
      form.classList.add("secActive");
    } else {
      form.classList.remove("secActive");
    }
  });
});

backBtn.addEventListener("click", () => form.classList.remove("secActive"));

// -------------------- update Image -----------------------------------

function updateImage() {
  const selectItem = document.querySelector(".first select[name='maker']");
  const outbotFirst = document.querySelector(".outBot-img-first");

  switch (selectItem.value) {
    case "bmw":
      outbotFirst.src = "img/bmw.jpg";
      break;
    case "mercedes":
      outbotFirst.src = "img/mercedes.jpg";
      break;
    case "kia":
      outbotFirst.src = "img/kia.jpg";
      break;
    case "toyota":
      outbotFirst.src = "img/toyota.jpg";
      break;
    case "mg":
      outbotFirst.src = "img/mg.jpg";
      break;
    case "hyundai":
      outbotFirst.src = "img/hyundai.jpg";
      break;
    default:
      outbotFirst.src = "";
  }

  console.log(selectItem);
}

document
  .querySelector(".first select[name='maker']")
  .addEventListener("change", updateImage);

updateImage();

// -------------------- Input required ------------------------------
