const SERVER_URL = "http://localhost:8080/api/cars";
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("btn-get-all").addEventListener("click", getAllCars);

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

  document.getElementById("btn-find-car").addEventListener("click", getACar);

  function getACar() {
    const id = document.getElementById("text-for-id").value;
    fetch(SERVER_URL + "/" + id)
      .then((res) => {
        if (!res.ok) {
          return alert("Car Not Found");
        }
        return res.json();
      })
      .then((car) => {
        document.getElementById("found-car").innerText = JSON.stringify(car, null, 2);
      });
  }
  function addCar(evt) {
    evt.preventDefault();
    const form = document.getElementById("carForm");
    const newCar = {
      brand: form.brand.value,
      model: form.model.value,
      pricePrDay: parseFloat(form.pricePrDay.value),
      bestDiscount: parseInt(form.bestDiscount.value),
    };

    const options = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newCar),
    };
    fetch(SERVER_URL, options)
      .then((res) => res.json())
      .then((carRespons) => {
        document.getElementById("new-car-response").innerText = JSON.stringify(carRespons, null, 3);
      });
  }
});

/*const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      brand: "Toyata",
      model: "RAV",
      pricePrDay: 500,
      bestDiscount: 25,
    }),
  };

  fetch(SERVER_URL, options)
    .then((response) => response.json())
    .then((data) => console.log(data));*/
