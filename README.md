# Unibites

Unibites is a web application that helps users find PGs and hostels in different states and cities. It provides a 
user-friendly interface to search and book accommodations based on location, price, and amenities. Built using Node.js, 
Express JS and MongoDB, Unibites is easy to deploy and customize.

Live at : [https://unibites.live/](https://unibites.live/)


## Usage:

The Unibites application has been divided into 3 working modules, namely: tenant, Owner & Admin.

### tenant
The tenant module encompasses the user who is here to look for properties. A tenant in the application can do several 
things enlisted below:

1. Create a profile.
2. Search for properties.
3. Review, like and save properties for future.
4. Book a property by paying the booking amount, using card payments.
5. Get notified about booking success, booking fail, booking completion etc. through E-Mail.
6. Finally, a user can see all their bookings & likes and other information at one place, Dashboard.

### Owner
The Owner module describes the user who is there to create property pages (their own), and do other stuff dealing 
with properties which they created. A Owner's capabilities are:

1. Create a profile
2. Add properties by filling a detailed form, encompassing all details from property name to amenities provided.
3. Delete or Update a property details.
4. Confirm (Accept / Reject) a booking of a property owned by the Owner after providing a valid message.
5. Finally, a Owner can see all his properties, past confirmed booking and current pending booking details on their 
dashboard.

### Admin
As the name suggests, the admin has the complete control over the application. There are various tasks an admin can 
perform but Unibites has taken care of the fact that multiple people can be admin, for this there is an entire 
admin-creation mechanism in place. Admin rights are as below:

1. Create admin account by providing Email and Admin Key.
2. Access the current state of all the roles in the application.
3. See profiles of tenant & Owner and can delete them as per need.
4. See status of all the bookings, and can remove any booking.
5. Can see all the contact made through home page's contact us section.


## License

MIT License - Copyright (c) 2024 Team Unibites



## Developers
Kruti Dewda
Deepanshu Pariyani
Aditi Rani