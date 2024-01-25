let select = document.querySelectorAll(".currency");
let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
let btn = document.querySelector(".btn");
fetch("https://api.frankfurter.app/currencies")
  .then((res) => res.json())
  .then((res) => displayDropDown(res));
function displayDropDown(res) {
  let curr = Object.entries(res);
  for (let i = 0; i < curr.length; i++) {
    let opt = ` <option value="${curr[i][0]}">${curr[i][0]}</option>`;
    select[0].innerHTML += opt;
    select[1].innerHTML += opt;
  }
}
btn.addEventListener("click", () => {
  let curr1 = select[0].value;
  let curr2 = select[1].value;
  let inputval = input1.value;
  if (curr1 === curr2) {
    alert("enter different currencies");
  } else {
    convert(curr1, curr2, inputval);
  }
});
function convert(curr1, curr2, inputval) {
  const host = "api.frankfurter.app";
  fetch(`https://${host}/latest?amount=${inputval}&from=${curr1}&to=${curr2}`)
    .then((resp) => resp.json())
    .then((data) => {
      let result = Object.values(data.rates);
      input2.value = result;
    });
}
