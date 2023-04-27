<html>
  <body>
    <form onsubmit="saveToLocalStorage(event)">
      <label> Name</label>
      <input type="text" name="username" required />
      <label> Email</label>
      <input type="text" name="email" required />
      <label> phone Number</label>
      <input type="tel" name="phonenumber" />
      <button>Submit</button>
    </form>
    <ul id="listOfitems"></ul>
    <script>
      function saveToLocalStorage(event) {
        event.preventDefault();
        const name = event.target.username.value;
        const email = event.target.email.value;
        const phonenumber = event.target.phonenumber.value;
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("phonenumber", phonenumber);
        const obj = {
          name,
          email,
          phonenumber,
        };

        axios.post("https://crudcrud.com/api/4b0c14f575134e7b9ee4d800a62519e5".obj)
        .then((respone)=> {
          console.log(respone)
        })
          .catch((err)=> {
            console.log(err)
          })
        
        localStorage.setItem(obj.email, JSON.stringify(obj));
        showUserOnScreen(obj);
      }
      function showUserOnScreen(obj) {
        const parentElem = document.getElementById("listOfitems")
        const childElem = document.createElement("li");
        childElem.textContent = obj.name + " - " + obj.email + " - " + obj.phonenumber;
        parentElem.appendChild(childElem);

        const deleteButton = document.createElement("input")
        deleteButton.type = "button"
        deleteButton.value = "delete"
        deleteButton.onclick = () => {
          localStorage.removeItem(obj.email)
          parentElem.removeChild(childElem)
        };

        const editButton = document.createElement('input')
        editButton.type = "button"
        editButton.value = 'Edit'
        editButton.onclick = () => {
          localStorage.removeItem(obj.email)
          parentElem.removeChild(childElem)
          document.getElementById('usernameInputTag').value = obj.name
          document.getElementById('emailInputTag').value = obj.email
          document.getElementById('phonenumberInputTag').value =  obj.phonenumber
        }

        childElem.appendChild(deleteButton);
        childElem.appendChild(editButton);
        parentElem.appendChild(childElem);
      }
    </script>
  </body>
</html>
