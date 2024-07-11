async function fetchName() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new ERROR(`HTTP error : ${response.status}`);
    }

    const data = await response.json();
    // console.log(data);

    let userAlreadyexist = localStorage.getItem("usersData");
    userAlreadyexist
      ? null
      : localStorage.setItem("usersData", JSON.stringify(data)); //Store JSON string in local storage   (key,value)

    //generate random ID
    function makeId() {
      let id = "_" + Math.random().toString(36).substr(2, 9);
      return id;
    }

    fetchData();

    //print all the data from the api
    function fetchData() {
      const storedData = localStorage.getItem("usersData"); // Retrieve the data from local storage
      const users = JSON.parse(storedData);
      console.log(users);
      const tableBody = document.getElementById("tableBody");
      tableBody.innerHTML = ""; // clear existing rows before adding the updated data form the local storage
      users.forEach((item) => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${makeId()}</td>
            <td>${item.name}</td>
            <td>${item.username}</td>
            <td>${item.email}</td>
            <td>${item.phone}</td>
            <td>
              <div class="submit_btn">
                <button type="button"  class="btn btn-success edit-btn">EDIT</button>
                <button type="button"  class="btn btn-danger delete-btn">DELETE</button>
              </div>
            </td>
          `;
        tableBody.appendChild(row);

        row.querySelector(".edit-btn").addEventListener("click", () => {
          editItem(item.email);
          window.location.href = "edit.html";
        });
        row
          .querySelector(".delete-btn")
          .addEventListener("click", () => deleteItem(item.email));
      });
    }

    // delete function
    function deleteItem(email) {
      const storedData = localStorage.getItem("usersData"); // Retrieve the data from local storage
      const users = JSON.parse(storedData);

      const index = users.findIndex((user) => user.email === email);

      console.log(index);
      if (index !== -1) {
        // Remove the user from the array
        users.splice(index, 1);

        // Update the local storage with the modified users array
        localStorage.setItem("usersData", JSON.stringify(users));

        console.log(`User with email ${email} deleted successfully`);
      } else {
        console.log(`User with email ${email} not found`);
      }

      fetchData();
    }

    function editItem(email) {
      console.log(email);
      localStorage.setItem("sharedValue", email);
    }
  } catch (error) {
    console.error(`could not get the names ${error}`);
  }
}

fetchName();
