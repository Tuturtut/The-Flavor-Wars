// Get all items
const items = document.querySelectorAll(".country-item");
items[0].classList.add("country-selected");
// Add click event listener to each item
items.forEach((item) => {
  item.addEventListener("click", () => {
    // Remove 'selected' class from all items
    items.forEach((i) => i.classList.remove("country-selected"));

    // Add 'selected' class to the clicked item
    item.classList.add("country-selected");
  });
});

const images = document.querySelectorAll(".countries-img");
const titles = document.querySelectorAll(".country-title");

titles.forEach((title, index) => {
  title.addEventListener("mouseenter", () => {
    const img = images[index];
    const rect = img.getBoundingClientRect();
    const overflowRight = rect.right - window.innerWidth;

    if (overflowRight > 0) {
      img.style.right = `calc(100vw - ${rect.width + rect.left}px)`; // Adjust the position
    }
  });
});
