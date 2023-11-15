# DISCLAIMER: This is not a real-world app and you should not disclose personal
information and/or passwords. The app uses a practice server that does not keep track of
the changes made after a couple of minutes of inactivity.

# ReactBook app
Client hosted on Firebase - https://reactbook-app.firebaseapp.com/
Server hosted on Glitch - https://spiky-sudden-digit.glitch.me/data (needs to be awakened if not used in the past 5 minutes)

# Overview
ReactBook is an app that allows users to register log and logout into a system. 

# Technical stack
1. HTML
2. CSS
3. ReactJS


# To install locally
1. Clone the repo locally.
2. Open the server folder in the terminal and type "node server". Don't close the terminal just minimize it and leave the server working.
3. Open the client folder in the terminal and type "npm run dev".
4. Open the app at the address pointed out - most likely that would be "Local:   http://127.0.0.1:5173/"

# Implementation
- Most of the components (categories, category description, products' grid, price and metal filters) are dynamically built using lit-html templating library based on the data fetched from the '/data/' folder stored as JSON(/data/products.json and /data/categories.json)

- The app is initialized from the 'main.js' file after the DOMContentLoaded event is triggered. Most of the components(category,product,filters,sorting and load more handlers and render functions) are imported and along with other needed information are attached to the 'ctx' object to be shared between modules with dependancy injection in order to avoid circular dependancy.

- Header - made to be sticky using CSS and also to navigate between the categories. Every time a new category is selected the category name, category description, product grid and the filters are re-rendered based on the fetched data. Only the selected sorting option is kept. Initially only 8 products will be displayed in the product grid when a category is selected.

- Product counter(x of y products) - showing the number of products in the current category based on selected filters(number Y) and the number of currently displayed products(number X) in the product grid.

- Product grid - fetching the data according to the selected category. Using CSS to achieve a grid-like structure initially loading 2 rows with 4 items per row and adding 2 more rows with every 'Load more' button click. Every product is displayed with the respective information for image, name, metal type short description, price, rating and 'Add to cart' button.

- Filters - Checkboxes to filter the data based on price of the products or their metal type.
The price filters are rendered based on the minimal and maximum product price for the selected category with range of 1000 units($). The metal type is also rendered based on all metal types for the currently selected category. Multiple price ranges and metal types can be selected at a time resulting in combined filtering capabilities. For desktop users the filters are positioned on the left of the product grid and for mobile users on top of it. 

- Sorting - products can be sorted based on price or name in ascending or descending order

- Load more - if more products are available than the initially 8 which are displayed pressing the button will load 8 more or the remaining if less than 8 and the button will disapear.

- Footer - static section containing set of links e.g., T&C, Privacy Policy, Contact Us

