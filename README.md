Comic Inventory Backend API 🚀
A backend API built with Node.js and Express.js, connected to MongoDB for managing a comic book inventory. It supports adding, editing, deleting, and fetching comic books from the inventory.

Features - 
CRUD operations for managing comics
MongoDB database integration
Cloudinary integration for image handling
Middleware for file uploads using Multer
CORS enabled for cross-origin requests


Table of Contents - 
Installation 
Environment Setup
Endpoints
Technologies Used




Step 1: Clone the Repository
bash
Copy code
git clone https://github.com/ayushsharma00001/comic-inventory-backend.git
cd comic-inventory-backend



Step 2: Install Dependencies
Make sure you have Node.js installed. Then, run the following command to install all the required dependencies:
npm install


Environment Setup - 
Step 1: Create a .env File
In the root directory of the project, create a .env file to store your environment variables.

Step 2: Add Your Variables
Use the following keys and fill in your own values:
Copy code - 


MONGODB_URL=<your-mongodb-connection-string>
PORT=<your-server-port>
CLOUDINARY_CLOUD_NAME=<your-cloudinary-cloud-name>
CLOUDINARY_API_KEY=<your-cloudinary-api-key>
CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>


Where to Get These Values?
MONGODB_URL: You can get this from MongoDB Atlas after creating a cluster. Make sure to whitelist IPs or allow all IPs (0.0.0.0/0).
CLOUDINARY_CLOUD_NAME, API_KEY, and API_SECRET: These values are available in your Cloudinary dashboard after creating an account.
Scripts
The following scripts are available in the package.json:

Start the Development Server - 
npm run dev
This uses nodemon to restart the server on changes.




Here are some of the main endpoints provided by the API - 
Method	Endpoint	Description:(choose port as per your code for local environment testing otherwise you can test it out on hosted link)
GET - https://comic-inventory-backend.onrender.com/api/comics/ || http://localhost:8080/api/comics/	---	Fetch all comics 

GET - https://comic-inventory-backend.onrender.com/api/comics/670e937f045a05e6f7542728 || http://localhost:8080/api/comics/670e937f045a05e6f7542728    --- fetch comic by id

POST - https://comic-inventory-backend.onrender.com/api/comics || http://localhost:8080/api/comics	---comics	Add a new comic to the inventory

PUT - https://comic-inventory-backend.onrender.com/api/comics/670e937f045a05e6f7542728 || http://localhost:8080/api/comics/670e937f045a05e6f7542728 	--- edit a comic according to it's id

DELETE - https://comic-inventory-backend.onrender.com/api/comics/670e937f045a05e6f7542728 ||
http://localhost:8080/api/comics/670e937f045a05e6f7542728   --- delete comic by id


Technologies Used - 
Node.js: Backend runtime environment
Express.js: Web framework for Node.js
MongoDB: NoSQL database for storing comics
Mongoose: ODM for MongoDB
Cloudinary: Cloud-based storage for media files
Multer: Middleware for file uploads
CORS: Handling cross-origin requests
