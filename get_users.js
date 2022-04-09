const axios = require("axios");

// Make a request for a user with a given ID
url = "http://localhost:3000/users";
axios
  .get(url)
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
