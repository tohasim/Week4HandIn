export function initSearch() {
  console.log("In initSearch()");
  document.getElementById("btn-find-car").addEventListener("click", getACar);
}

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
