document.addEventListener("DOMContentLoaded", function () {
  const map = document.getElementById("map");
  const infoDiv = document.getElementById("info");
  let currentChosen = null;

  map.addEventListener("mouseover", () => {
    changecolor();
    displayInfo();
  });

  function changecolor() {
    if (currentChosen != null) {
      currentChosen.style.fill = "rgb(220, 220, 220)";
    }
    event.target.style.fill = "rgb(255, 0, 0)";
    currentChosen = event.target;
  }

  function displayInfo() {
    fetch(`https://countries.plaul.dk/api/countries/${event.target.id}`)
      .then((res) => res.json())
      .then((data) => buildHtml(data));
  }

  function buildHtml(data) {
    console.log(data);
    const flagImage = document.createElement("img");
    flagImage.src = data.flag;

    let infoHtml = `
      <div>
        <!-- Insert the flag image here -->
        <p>${flagImage.outerHTML}</p>
        <p>Country: ${data.name.common}</p>
        <p>Member of UN: ${data.unMember}</p>
        <p>${formatCurrencies(data.currencies)}</p>
        <p>Capital: ${data.capital}</p>
        <p>Borders: ${data.borders.join(", ")}</p>
      </div>`;

    infoDiv.innerHTML = infoHtml;
  }

  function formatCurrencies(currencies) {
    const currencyEntries = Object.entries(currencies);

    if (currencyEntries.length === 0) {
      return "Currencies: None";
    }

    const formattedCurrencies = currencyEntries.map(([code, currency]) => {
      return `${code}, name: ${currency.name}, symbol: ${currency.symbol}`;
    });

    return `Currencies: ${formattedCurrencies.join("; ")}`;
  }
});
