// Index.js
const addButton = document.getElementById("btn");
const listWrapper = document.getElementById("wrapper");
const inputField = document.getElementById("input");

// Function to create the close button element
function createCloseButton() {
  const closeButton = document.createElement("span");
  closeButton.textContent = "\u00D7";
  closeButton.className = "close";
  return closeButton;
}

function addListItem() {
  const inputValue = inputField.value.trim();
  if (inputValue !== "") {
    const listItem = document.createElement("li");
    listItem.classList.add("task");
    listItem.textContent = inputValue;

    // Create close button for the new list item
    const closeButton = createCloseButton();
    listItem.appendChild(closeButton);

    // Add click event listener to the close button to remove the list item
    closeButton.addEventListener("click", () => {
      listItem.remove();
    });

    listWrapper.appendChild(listItem);
    inputField.value = "";
  }
}

addButton.addEventListener("click", addListItem);

inputField.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    addListItem();
  }
});
