// Get all items
const items = document.querySelectorAll(".country-item");

// Add click event listener to each item
items.forEach((item) => {
  item.addEventListener("click", () => {
    // Remove 'selected' class from all items
    items.forEach((i) => i.classList.remove("country-selected"));

    // Add 'selected' class to the clicked item
    item.classList.add("country-selected");
  });
});
