const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = document.querySelector("#height").value;
  console.log(height);
  const weight = document.querySelector("#weight").value;
  const result = document.querySelector("#result");
  console.log(weight);
  if (height === "" || height <= 0 || isNaN(height)) {
    result.innerHTML = "Enter a valid height";
  } else if (weight === "" || weight <= 0 || isNaN(weight)) {
    result.innerHTML = "Enter a valid weight";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>Your BMI is ${bmi}.</span>`;
    if (bmi <= 18.6) {
      const guide = document.createElement("span");
      const message = "You are under weight";
      guide.appendChild(document.createTextNode(message));
      result.appendChild(guide);
    } else if (bmi > 18.6 && bmi <= 24.9) {
      const guide = document.createElement("span");
      const message = "You are in normal range";
      guide.appendChild(document.createTextNode(message));
      result.appendChild(guide);
    } else {
      const guide = document.createElement("span");
      const message = " You are Overweight";
      guide.appendChild(document.createTextNode(message));
      result.appendChild(guide);
    }
  }
});
