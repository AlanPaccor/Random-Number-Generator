<<<<<<< HEAD
# Random Number Generator - README

<img src="./Screenshot%202023-06-29%20at%208.45.21%20PM.png" style="width: 700px; height: auto;"></img>


This code represents a simple password generator that generates random passwords based on user preferences. It is written in HTML, CSS, and JavaScript. Let's go through the code and understand its components.

## HTML Structure

The HTML code represents the structure of the password generator user interface. It consists of the following elements:

- `<head>`: Contains meta information and external CSS stylesheets.
- `<body>`: Contains the main content of the page.
  - `<div class="wrapper">`: Serves as a container for the entire password generator.
    - `<header>`: Displays the heading "Password Generator."
    - `<div class="card">`: Represents the card-like container that holds the password generation elements.
      - `<div class="card-header">`: Displays the heading "Generate a Password."
      - `<div class="card-body">`: Contains a textarea where the generated password will be displayed.
      - `<div class="card-footer">`: Contains a button labeled "Generate Password."
- `<script>`: References an external JavaScript file that contains the logic for generating the password.

## CSS Styling

The CSS code defines the visual appearance of the password generator. It includes styling for various elements, such as the background color, card layout, text area, and button.

## JavaScript Logic

The JavaScript code implements the password generation logic. It consists of the following functions:

- `writePassword`: This function is triggered when the user clicks the "Generate Password" button. It retrieves user preferences, generates a password, and updates the textarea element with the generated password.
- `generatePassword`: This function generates a password based on the user preferences. It uses a loop to randomly select characters from the `choiceArr` array and concatenates them to form the password.
- `getPrompts`: This function prompts the user for password preferences, such as the desired character length and character types (lowercase, uppercase, special characters, and numbers). It validates the input and populates the `choiceArr` array accordingly.

## Usage

To use the password generator:

1. Open the HTML file in a web browser.
2. Enter the desired character length when prompted (between 8 and 128 characters).
3. Confirm the inclusion of lowercase letters, uppercase letters, special characters, and numbers by responding to the respective prompts.
4. Click the "Generate Password" button.
5. The generated password will be displayed in the text area.

Please note that this password generator is for educational purposes and may not provide the most secure passwords. It is always recommended to use a trusted and secure password manager or follow established password guidelines for stronger and more secure passwords.

Feel free to customize and modify the code as needed to suit your requirements.

## Conclusion

This README provides an overview of the code for a simple password generator. Understanding the structure and logic of the code will help you use and modify it according to your needs. Enjoy generating random passwords!
=======
# Random-Number-Generator
>>>>>>> 8f8af40c4c160359280bee721046408e2efeb1d8
