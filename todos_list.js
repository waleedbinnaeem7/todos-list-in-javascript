
           // Define the array of items
let items = [];

// Get the form elements
const titleInput = document.querySelector("#title");
const descriptionInput = document.querySelector("#description");
const addButton = document.querySelector("#add");

// Get the table body element
const tableBody = document.querySelector("#table_body");

// Define a function to update the table
function updateTable() {
  // Clear the table body
  tableBody.innerHTML = "";

  // Loop through the items and add rows to the table
  items.forEach((item, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <th scope="row">${index + 1}</th>
      <td>${item.title}</td>
      <td>${item.description}</td>
      <td><button id="del-${index}" class="btn btn-sm btn-danger">Delete</button></td>
    `;
    tableBody.appendChild(row);

    // Add an event listener to the delete button
    const deleteButton = document.querySelector(`#del-${index}`);
    deleteButton.addEventListener("click", function () {
      items.splice(index, 1);
      updateTable();
    });
  });
}

// clear All function
function clearAll() {
  // Remove all keys from localStorage
  localStorage.clear();
  
  // Get all table rows from table_body table
  const rows = document.querySelectorAll('#table_body tr');
  
  // Confirm before deleting all rows
  if (confirm('Are you sure you want to clear all rows?')) {
    // Loop through each row and remove it
    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      row.parentNode.removeChild(row);
    }

    // Update the items array
    items = [];

    // Update the UI
    updateTable();
    
    // Alert user that rows have been cleared
    alert('All rows have been cleared!');
  }
}





// Add an event listener to the add button
addButton.addEventListener("click", function () {
  // Get the values from the form inputs
  const title = titleInput.value;
  const description = descriptionInput.value;

  // Create a new item object and add it to the items array
  const item = { title, description };
  items.push(item);

  // Update the table
  updateTable();

  // Clear the form inputs
  titleInput.value = "";
  descriptionInput.value = "";
});
