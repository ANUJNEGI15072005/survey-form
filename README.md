#**Student Survey Form**
This is a simple HTML and JavaScript-based student survey form. The form collects various information from students, including their name, email, age, class, school type, school name, selected courses, and the reason for selecting those courses. After the form is filled out and submitted, it displays a thank-you message.
##**Features:-**
**Responsive Design:** The form is styled to be responsive and works well on various screen sizes.
**Validation:** JavaScript functions validate the form input to ensure that all required fields are filled out correctly.
**Dynamic Content:** After submission, the form is hidden, and a thank-you message is displayed.
##**Form Fields:-**
**Name:** A text input field for entering the student's name.
**Email-ID:** A text input field for entering the student's email.
**Age:** A text input field for entering the student's age.
**Class:** A text input field for entering the student's class.
**School Type:** Radio buttons for selecting the type of school (Private or Govt.).
**School Name:** A text input field for entering the name of the school.
**Selected Courses:** Checkboxes for selecting the courses the student is interested in (B.Tech, BCA, B.Com, BBA, BA, B.Sc).
**Reason for the selected course:** A text input field for providing the reason for selecting the course.
##**Form Validation:-**
The form includes JavaScript validation to ensure the following:
All required fields are filled out.
The email address is in a valid format.
The age is a valid number.
The class is a valid number between 1 and 12.
At least one school type is selected.
At least one course is selected.
##**JavaScript Functions:-**
**validateForm(form):** Validates the form input fields.
**show():** Displays the thank-you message and hides the form.
**submitForm():** Handles form submission, calls validateForm for validation, and then displays the thank-you message if validation is successful.
##**CSS Styling:-**
The form is styled using CSS to ensure a clean and user-friendly interface. It includes media queries to adjust the layout for different screen sizes, making it mobile-friendly.
##**Usage:-**
To use this form, simply open the HTML file in a web browser. Fill out the form fields and click the "SUBMIT" button. If all fields are correctly filled out, the form will display a thank-you message. If any field is incorrectly filled out or missing, an alert will notify the user to correct the input.
