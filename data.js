let data = {};
let dataDisplayHtml = "<h2>Your data:</h2>";
const dataDisplayElement = document.getElementById("data-display");

const urlSearchParams = new URLSearchParams(window.location.search);
data = Object.fromEntries(urlSearchParams.entries());

function displayData() {
  Object.entries(data).forEach((pair) => {
    const key = pair[0];
    const value = pair[1];

    dataDisplayHtml += `<p>${key} = ${value}</p>`;
  });

  if (dataDisplayElement) dataDisplayElement.innerHTML = dataDisplayHtml;
}

displayData();