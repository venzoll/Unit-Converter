let inputEl = document.getElementById("input-el");
let inputBtn = document.getElementById("input-btn");
let length = document.getElementById("length");
let volume = document.getElementById("volume");
let mass = document.getElementById("mass");

let meterToFeet = 3.281;
let literToGallon = 0.264;
let kiloToPound = 2.204;

inputBtn.addEventListener("click", function () {
  let baseValue = inputEl.value;

  length.textContent = `${baseValue} meter = ${(
    baseValue * meterToFeet
  ).toFixed(3)} feet | ${baseValue} feet = ${(baseValue / meterToFeet).toFixed(
    3
  )} meter`;

  volume.textContent = `${baseValue} liters = ${(
    baseValue * literToGallon
  ).toFixed(3)} gallons | ${baseValue} gallons = ${(
    baseValue / literToGallon
  ).toFixed(3)} liters`;

  mass.textContent = `${baseValue} kilos = ${(baseValue * kiloToPound).toFixed(
    3
  )} pounds | ${baseValue} pounds = ${(baseValue / kiloToPound).toFixed(
    3
  )} kilos`;
});
