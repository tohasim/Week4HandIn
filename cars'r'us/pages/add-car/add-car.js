export function initAdd() {
  console.log("In initAdd()");
  document.getElementById("btn-add-car").addEventListener("click", addCar);
}
  function addCar() {
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
