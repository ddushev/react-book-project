# DISCLAIMER: 
This is not a real-world app and you should not disclose personal information and/or passwords. The app uses a practice server that does not keep track of the changes made after a couple of minutes of inactivity.

# ReactBook app 
- Client hosted on Firebase - https://reactbook-app.firebaseapp.com/
- Server hosted on Glitch - https://spiky-sudden-digit.glitch.me/data (needs to be awakened if not used in the past 5 minutes)

# Overview
ReactBook is a Singe Page Application  that allows users to register login and logout into a system. Logged-in users can create/read/update/delete rooms and also book rooms other users have published. After a booking is made the host(user who published it) of that room can either confirm or decline the reservation. In the meantime, the guest(the user who booked it) can also cancel his request. After the booking is confirmed both parties can send messages to each other discussing details for that particular booking. Another functionality of the app is to search for available rooms by certain criteria(location, price per night, or occupancy). Functionalities available for not logged-in users are only to browse and search for available rooms and to register in the app.

# Pre-seed data(other data can be added after the server and the app are started but it will be lost once the server is closed/asleep)
1. Users - there are two users which can be used to login into the app
   - danieldyshew@gmail.com - 123456
   - maria@gmail.com - 123456
2. Rooms - there are several rooms added for both users some of which are already confirmed and others on status pending or not booked.
3. Comments - for the rooms that are already confirmed there are a couple of messages sent by both parties.

# Technical stack
1. HTML
2. CSS
3. ReactJS
4. ReactRouter
5. React testing library
6. Vite
7. Vitest

# To install locally
1. Clone the repo locally.
2. Open the server folder in the terminal and type "node server". Don't close the terminal just minimize it and leave the server working.
3. Open the client folder in the terminal and type "npm run dev".
4. Open the app at the address pointed out - most likely that would be "Local:   http://127.0.0.1:5173/"

# Architecture
1. Project structure
   - Using Vite for React building tool.
   - The public folder holds the bootstrap CSS, images, JS, and SASS files required for this template.
   - The src folder holds the components, context, hooks, services, and utilities for the app.
   - The index.html file is the entry point of the app and it loads the necessary fonts, stylesheets, javascript libraries, and the main JSX module.
2. Component hierarchy
   - The App.jsx component is the main component loaded by the main JSX module which holds the context and routing for the rest of the components.
   - Header, Footer, Newsletter, and BackToTop are the components that are loaded no matter the route. The rest of the components are loaded when a particular route is navigated.
   - Most used components are RoomsCatalog, RoomDetails RoomCard, and CommonHeader which based on the current route and other criteria display different information.
3. Routing
   - The app uses routing via the "react-router-dom" library.
   - All routes can be found in the App.jsx component.
   - Some of the routes are protected depending on whether the user is logged in/logged out or the relation between the user and the particular resource(owner or not).
   - If the user tries to access an invalid route he is shown the NotFound page.
4. State management
   - The app uses the built-in React Context API to create context and along with useEffect and useState hooks to manage state
   - The AuthContext, RoomContext, and MessageContext hold the state for the particular resources and wrap all app components in order to share it
5. API integration
   - The app uses REST API to asynchronously send requests
   - The api.js file in the services folder contains methods for abstracting the request and the options object. It then exports wrapper functions for all CRUD requests.
   - The requests.js uses these functions to build all endpoints needed to work with the available resources.
6. Styling
   - The app uses Bootstrap which is located in the public folder.
   - There are also components that have additional CSS written and placed and loaded in the component itself e.g Header, Footer, Carousel, RoomDetails, MessagesCatalog  etc.
7. Testing
   - Several components and hooks are tested using Vitest and React testing library (Header, EditRoom, RoomCard, MessageCard and useForm hook)
   - Run npm run test to execute tests
8. Deployment
    - The server is hosted via Glitch(https://glitch.com/) and can be accessed at: https://spiky-sudden-digit.glitch.me/data. After several minutes of inactivity, it falls asleep.
    - The client is deployed via Firebase(https://firebase.google.com/) and can be access at https://reactbook-app.firebaseapp.com/
      
