const refs = {
  resultBtn: document.querySelector(".js-button"),
  textarea: document.querySelector(".js-textarea"),
  checkedFirstInput: document.querySelectorAll(".js-first-input"),
  checkedSecondInput: document.querySelectorAll(".js-second-input"),
};
const { resultBtn, checkedFirstInput, checkedSecondInput, textarea } = refs;
resultBtn.addEventListener("click", onBtnClick);
function onBtnClick() {
  verification(checkedFirstInput, checkedSecondInput);
}

function verification(testOne, testTwo) {
  console.log("this is form", testOne);
  let result = 0;
  if (testOne[2].checked) {
    result += 1;
  }
  if (testTwo[2].checked) {
    result += 1;
  }
  if (testTwo[0].checked) {
    result += 1;
  }
  textarea.value = result;
}
