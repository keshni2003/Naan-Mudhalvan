// Get the "read more" buttons
const readMoreButtons = document.querySelectorAll('.read-more-btn');

// Loop through the buttons and add event listeners to each one
readMoreButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the corresponding article
    const article = button.parentNode.parentNode;

    // Toggle the "show-more" class on the article
    article.classList.toggle('show-more');

    // Update the button text
    if (button.textContent === 'Read more') {
      button.textContent = 'Read less';
    } else {
      button.textContent = 'Read more';
    }
  });
});

// Get the form
const form = document.querySelector('#contact-form');
// Add an event listener for form submission
form.addEventListener('submit', event => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the form data
  const formData = new FormData(form);

  // Convert the form data to an object
  const formObject = Object.fromEntries(formData.entries());

  // Log the form data to the console
  console.log(formObject);

  // Clear the form inputs
  form.reset();
});
