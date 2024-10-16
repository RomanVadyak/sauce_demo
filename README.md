# Cypress Sauce Demo Testing Project

## Description

This project is designed to automate the testing process of purchasing items on an e-commerce website using **Cypress**. The tests simulate the following steps:

1. Log in to the site as a user.
2. Add 2 products to the cart.
3. Fill in the checkout form.
4. Complete the purchase and log out.

### Main scenarios tested:
- User authentication.
- Adding items to the cart.
- Checkout process.
- Verifying correct cart contents.
- Completing the order and logging out.

---

## Requirements

Before running the project, ensure you have the following installed:

- **Node.js** 
- **Cypress** (latest version)
- **Git** (to clone the repository)

---

## Installation

To set up and run this project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/RomanVadyak/sauce_demo.git
   
2. Navigate to the project directory:
   ```bash
   cd sauce_demo
    
 3.Install dependencies:

     ```bash
     npm install

 ##Running the Tests
You can run the tests in two different modes:

1. **Interactive Mode**:
Use this mode to run the tests in a browser with a user interface:

    ```bash
    npx cypress open
2. **Headless Mode**:
Run the tests without opening a browser window:

    ```bash
    npx cypress run

##Project Structure

- `cypress/constants:` Contains file for different inputs and texts.
- `cypress/e2e:` Contains test files for logging in, adding items to the cart, checkout and logging out.
- `cypress/pageObject:` Contains files that helps to keep the code organized.
- `cypress/support:` Contains custom commands and support files.
- `cypress.config.js:` Cypress configuration file.
