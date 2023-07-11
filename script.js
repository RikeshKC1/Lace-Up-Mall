// script.js
document.getElementById("deleteForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Retrieve username and password
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Perform validation (e.g., check if fields are not empty)
  
    // Send delete request to the server
    // You can use AJAX, fetch API, or any other method to send the request
    // Replace the URL with your server endpoint
    fetch("https://example.com/delete-account", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username: username, password: password })
    })
    .then(function(response) {
      if (response.ok) {
        // Account deleted successfully, show a success message
        alert("Account deleted successfully!");
      } else {
        // Account deletion failed, show an error message
        alert("Account deletion failed. Please try again.");
      }
    })
    .catch(function(error) {
      console.error("Error:", error);
    });
  });
  