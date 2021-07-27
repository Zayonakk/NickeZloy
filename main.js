const selected = document.querySelector(".custom-select-selected");
const optionsContainer = document.querySelector(".custom-select-optionlist");
const optionsList = document.querySelectorAll(".custom-option");
const arrow = document.querySelector(".arrow")

selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");
  });

  selected.addEventListener("click", () => {
    arrow.classList.toggle("active");
  });

  arrow.addEventListener("click", () => {
    arrow.classList.toggle("active");
  });

  arrow.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");
  });

optionsList.forEach(o => {
    o.addEventListener("click", () => {
      selected.innerHTML = o.querySelector("label").innerHTML;
      optionsContainer.classList.remove("active");
      arrow.classList.remove("active");
  });
});
;

