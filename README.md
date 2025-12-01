# OWL Timer Demo 🦉

This module is a practical and educational example of how to build an interactive application in Odoo using **OWL (Odoo Web Library)**.

It was created as part of a video tutorial to demonstrate the fundamental concepts of modern frontend development in Odoo.

## 📺 Video Tutorial
**[Watch the Tutorial on YouTube](https://youtu.be/CxcGeprrAp4)**

## 🚀 What You Will Learn

This module demonstrates the following key concepts:

*   **OWL Components**: How to create a `Component` class from scratch.
*   **Reactivity (`useState`)**: How to make the interface update automatically when data changes.
*   **Lifecycle**:
    *   `setup()`: State initialization.
    *   `onMounted()`: Actions upon component loading.
    *   `onWillUnmount()`: Resource cleanup (crucial for performance).
*   **Client Actions**: How to integrate your Widget as a full application in the Odoo menu.

## 📂 Project Structure

*   `static/src/components/timer_app.js`: Contains all Javascript logic (State, Methods, Hooks).
*   `static/src/components/timer_app.xml`: The visual template of the component.
*   `views/views.xml`: Declares the menu and the `ir.actions.client` to open the app.

## 🛠 Installation

1.  Clone this repository into your `custom-addons` folder.
2.  Restart your Odoo service.
3.  Activate **Developer Mode**.
4.  Update the apps list.
5.  Search for **"OWL Timer Demo"** and install it.
6.  You will find a new menu called **"OWL Timer"** on your home screen.

---
Made with ❤️ by **Dustin Mimbela**.
