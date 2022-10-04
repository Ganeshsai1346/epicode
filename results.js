let total = 10;
let correct = 7;
let wrong = 3;

let correctPercentage = (correct / total) * 100;
let wrongPercentage = 100 - correctPercentage;

let data = {
  datasets: [
    {
      data: [correctPercentage, wrongPercentage],
      backgroundColor: ["#00FFFF", "#D20094"],
    },
  ],
};
let promisedDeliveryChart = new Chart(document.getElementById("myChart"), {
  type: "doughnut",
  data: data,
  options: {
    cutoutPercentage: 70,
    rotation: 120,
  },
});

let btnRateUs = document.querySelector("#rateUS");

btnRateUs.addEventListener(
  "click",
  () => (btnRateUs.style.backgroundColor = "#00FFFF")
);
