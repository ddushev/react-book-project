# DISCLAIMER: 
This is not a real-world app and you should not disclose personal information and/or passwords. The app uses a practice server that does not keep track of the changes made after a couple of minutes of inactivity.

# ReactBook app 
- Client hosted on Firebase - https://reactbook-app.firebaseapp.com/
- Server hosted on Glitch - https://spiky-sudden-digit.glitch.me/data (needs to be awakened if not used in the past 5 minutes)

# Overview
ReactBook is a Singe Page Application  that allows users to register login and logout into a system. They can create/update/delete rooms and also book rooms other users have published. After a booking is made the host of that room can either confirm or decline the reservation. In the meantime, the guest can also cancel his request. After the booking is confirmed both parties can send messages to each other discussing details for that particular booking.

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


# To install locally
1. Clone the repo locally.
2. Open the server folder in the terminal and type "node server". Don't close the terminal just minimize it and leave the server working.
3. Open the client folder in the terminal and type "npm run dev".
4. Open the app at the address pointed out - most likely that would be "Local:   http://127.0.0.1:5173/"
