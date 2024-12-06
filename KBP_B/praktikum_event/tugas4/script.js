const inputField = document.getElementById("itemInput");
const addButton = document.getElementById("addItemButton");
const itemList = document.getElementById("itemList");

addButton.addEventListener("click", function () {
  const newItemText = inputField.value.trim();

  if (newItemText !== "") {
    // Buat elemen li baru
    const newItem = document.createElement("li");
    newItem.textContent = newItemText;

    // Tambahkan elemen ke ul
    itemList.appendChild(newItem);

    // Kosongkan input field setelah menambahkan item
    inputField.value = "";
  } else {
    alert("Please enter a valid item.");
  }
});
