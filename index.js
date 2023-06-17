function submitData(name, email) {
  const formData = {
    name: name,
    email: email,
  };

  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  };

  return fetch("http://localhost:3000/users", configurationObject)
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
        const newId = object.id;
        const newIdElement = document.createElement("p");
        newIdElement.textContent = "New ID: " + newId;
        document.body.appendChild(newIdElement);
        return object;
    })
    .catch(function (error) {
      const errorMessage = document.createElement("p");
      errorMessage.textContent = "Error: " + error.message;
      document.body.appendChild(errorMessage);
      return error;
    });
}
