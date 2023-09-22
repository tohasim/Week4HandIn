export function initEdit() {
  console.log("In initEdit()");
document.getElementById("btn-find-car-2").addEventListener("click", editCar);

}
  function editCar() {
    const id = document.getElementById("text-for-id2").value;
    fetch(SERVER_URL + "/" + id)
      .then((res) => {
        if (!res.ok) {
          return alert("Car Not Found");
        }
        return res.json();
      })
      .then((car) => {
        document.getElementById("found-car-2").innerHTML = `
        <form id="editCarForm">
            <div class="row mb-3">
              <label for="brand" class="col-sm-2 col-form-label">Brand</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" id="edit-brand" name="brand" value="${car.brand}"> 
              </div>
            </div>
            <div class="row mb-3">
              <label for="model" class="col-sm-2 col-form-label">Model</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" id="edit-model" name="model" value="${car.model}">
              </div>
            </div>
            <div class="row mb-3">
              <label for="pricePrDay" class="col-sm-2 col-form-label">Price Per Day</label>
              <div class="col-sm-10">
                <input type="number" step="0.01" class="form-control" id="edit-pricePrDay" name="pricePrDay" value="${car.pricePrDay}">
              </div>
            </div>
            <div class="row mb-3">
              <label for="bestDiscount" class="col-sm-2 col-form-label">Best Discount</label>
              <div class="col-sm-10">
                <input type="number" class="form-control" id="edit-bestDiscount" value="${car.bestDiscount}" name="bestDiscount">
              </div>
            </div>
          </form>
        `;

        document.getElementById("btn-edit-car").addEventListener("click", (evt) => {
          evt.preventDefault();
          const form = document.getElementById("editCarForm");
          const editedCar = {
            brand: form.brand.value,
            model: form.model.value,
            pricePrDay: parseFloat(form.pricePrDay.value),
            bestDiscount: parseInt(form.bestDiscount.value),
          };

          const options = {
            method: "PUT",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(editedCar),
          };
          fetch(SERVER_URL + "/" + id, options)
            .then((res) => res.json())
            .then((carRespons) => {
              document.getElementById("edited-car").innerText = JSON.stringify(carRespons, null, 3);
            });
        });
      });}