// Function to confirm deletion
function confirmDelete(event) {
  const confirmed = confirm("Are you sure you want to delete this chat?");
  if (!confirmed) {
    event.preventDefault(); // Prevent form submission if not confirmed
  }
}

// Add event listeners once the DOM is fully loaded
window.onload = function () {
  const deleteForms = document.querySelectorAll(".delete-form");
  deleteForms.forEach((form) => {
    form.addEventListener("submit", confirmDelete);
  });
};
