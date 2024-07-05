
# Student Survey Form

This project is a simple HTML, CSS, and JavaScript-based student survey form. It collects student details such as name, email, age, class, school type, school name, selected courses, and the reason for choosing those courses. The form validates the input and displays a thank-you message upon successful submission.


## Features

- Responsive Design : The form is designed to be responsive and adjusts its layout according to the screen size.
- Input Validation : JavaScript is used to validate the form inputs to ensure all required fields are filled out correctly.
- User Feedback : Displays a thank-you message upon successful form submission.



## File Structure
- `index.html` : Main HTML file containing the form structure and JavaScript for validation.
- `style.css` : Inline CSS used for styling the form and making it responsive.
- `script.js`: Inline JavaScript code for form validation and displaying the thank-you message.
## Form Fields
- Name: Text input for the student's name.
- Email: Text input for the student's email address.
- Age: Text input for the student's age.
- Class: Text input for the student's class.
- School Type: Radio buttons for selecting the type of school (Private or Govt.).
- School Name: Text input for the name of the school.
- Selected Courses: Checkboxes for selecting one or more courses.
- Reason for Selected Course: Text input for the reason behind choosing the selected courses.
## Input Validation
- Name, Email, Age, Class, School Name, Reason: Required fields.
- School Type: At least one option (Private or Govt.) must be selected.
- Selected Courses: At least one course must be selected.
- Email: Must be a valid email format.
- Age: Must be a valid number.
- Class: Must be a valid class between 1 and 12.
## How to Use
- Open files in a web browser.
- Fill out the form with the required details.
- Click the "Submit" button.
- If the form is correctly filled out, a thank-you message will be displayed. If not, appropriate error messages will be shown.

## Customization
- Styles: Modify the CSS styles within the `<style>` tag to customize the appearance of the form.
- Validation: Update the validation logic in the validateForm function within the `<script>` tag to change the input validation rules.
- Form Fields: Add or remove form fields by editing the HTML structure within the `<form>` tag.

## License

This project is open-source and available for anyone to use and modify. Feel free to adapt it to your needs.

