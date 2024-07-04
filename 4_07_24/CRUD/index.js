async function fetchName() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new ERROR(`HTTP error : ${response.status}`);
    }

    const data = await response.json();
    // console.log(data)

    //add
    let add = document.getElementById("add");
    add.addEventListener("click", (obj) => {
      let user_id = document.querySelector(".id").value;
      let full_name = document.querySelector(".name").value;
      let user_name = document.querySelector(".username").value;
      let user_email = document.querySelector(".email").value;
      let user_phone = document.querySelector(".phone").value;

      let newUser = {
        id: user_id,
        name: full_name,
        username: user_name,
        email: user_email,
        phone: user_phone,
      };

      data.push(newUser);
      console.log(data);
    });

    //update
    let update = document.getElementById("update");
    update.addEventListener("click", (obj) => {
      let user_id = document.querySelector(".id").value;
      let full_name = document.querySelector(".name").value;
      let user_name = document.querySelector(".username").value;
      let user_email = document.querySelector(".email").value;
      let user_phone = document.querySelector(".phone").value;

      const updatedUser = {
        //object for storing the updated user info
        id: user_id,
        name: full_name,
        username: user_name,
        email: user_email,
        phone: user_phone,
      };

      let userToUpdate = data.find((user) => user.id == updatedUser.id);
      if (userToUpdate) {
        data[updatedUser.id - 1].name = updatedUser.name;
        data[updatedUser.id - 1].username = updatedUser.username;
        data[updatedUser.id - 1].email = updatedUser.email;
        data[updatedUser.id - 1].phone = updatedUser.phone;
      }

      console.log(data);
    });

    //delete
    let del = document.getElementById("delete");
    del.addEventListener("click", (obj) => {
      let user_id = document.querySelector(".id").value;
      let full_name = document.querySelector(".name").value;
      let user_name = document.querySelector(".username").value;
      let user_email = document.querySelector(".email").value;
      let user_phone = document.querySelector(".phone").value;

      const deleteUser = {
        //object for storing the updated user info
        id: user_id,
        name: full_name,
        username: user_name,
        email: user_email,
        phone: user_phone,
      };

      const index = data.findIndex((user) => user.id == deleteUser.id);
      if (index !== -1) {
        // Remove user from array using splice
        data.splice(index, 1);
        console.log(data);
      } else {
        console.log(`id not found`);
      }
    });
  } catch (error) {
    console.error(`could not get the names ${error}`);
  }
}

fetchName();
