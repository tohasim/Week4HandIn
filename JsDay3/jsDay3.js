document.addEventListener("DOMContentLoaded", function () {
  const contentDiv = document.getElementById("content");
  let contentString = "";

  document.getElementById("get-user-btn").addEventListener("click", getChosenUser);

  document.getElementById("get-all-users-btn").addEventListener("click", getAllUsers);

  function getChosenUser() {
    const id = document.getElementById("user-id").value;
    console.log(id);

    fetch("https://jsonplaceholder.typicode.com/users/" + id)
      .then((res) => res.json())
      .then((data) => showUser(data));
  }

  function showUser(user) {
    contentString = `
    Name: ${user.name} <br>
    Phone: ${user.phone} 
    <br><br>
    <b> Address: </b><br>
    Street: ${user.address.street} <br>
    City: ${user.address.city} <br>
    Zip: ${user.address.zipcode} <br>
    Geo (lat, lng): ${user.address.geo.lat}, ${user.address.geo.lng} <br>
    `;
    contentDiv.innerHTML = contentString;
  }

  function getAllUsers() {
    let userArray = [];
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((res) => res.json())
      .then((data) => {
        userArray = data;
        console.log(userArray);
        displayUsers(userArray);
      })
      .catch((error) => console.error("Error:", error));
  }

  function displayUsers(users) {
    let contentString = `
          <table class="table">
            <thead>
              <tr>
                <th id="name">Name</th>
                <th id="phone">Phone</th>
              </tr>
            </thead>
            <tbody>
        `;

    contentString += users
      .map(
        (user) => `
          <tr>
            <td>${user.name}</td>
            <td>${user.phone}</td>
          </tr>
        `
      )
      .join("");
    contentString += `
            </tbody>
          </table>
        `;

    contentDiv.innerHTML = contentString;
  }
});
