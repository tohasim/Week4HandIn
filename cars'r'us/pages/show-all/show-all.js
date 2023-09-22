import {SERVER_URL} from "../../settings.js"

export function initShowAll() {
  console.log("In initShowAll()");
  document.getElementById("btn-get-all").addEventListener("click", getAllCars);
}


function getAllCars() {
  fetch(SERVER_URL)
    .then((response) => response.json())
    .then((cars) => {
      const tableRows = cars.map(
        (car) => `
      <tr>
      <td>${car.id}</td>
      <td>${car.brand}</td>
      <td>${car.model}</td>
      <td>${car.pricePrDay}</td>
      <td>${car.bestDiscount}</td>
      </tr>
      `
      );
      const rowsAsString = tableRows.join("");
      console.log(rowsAsString);
      document.getElementById("tbody").innerHTML = rowsAsString;
    });
}
