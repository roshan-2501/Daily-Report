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
    let makeId = () => {
      let ID = "";
      let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      for (var i = 0; i < 12; i++) {
        ID += characters.charAt(Math.floor(Math.random() * 36));
      }
      return ID;
    };

    fetchData();

    //print all the data from the api
    function fetchData() {
      const storedData = localStorage.getItem("usersData"); // Retrieve the data from local storage
      const users = JSON.parse(storedData);

      console.log(users);
      const tableBody = document.getElementById("tableBody");
      users.forEach((item) => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${makeId()}</td>
            <td>${item.name}</td>
            <td>${item.username}</td>
            <td>${item.email}</td>
            <td>${item.phone}</td>
          `;
        tableBody.appendChild(row);
      });
    }
  } catch (error) {
    console.error(`could not get the names ${error}`);
  }
}

fetchName();
