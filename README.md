# bigelow-e-commerce-backend

## Description

This project was practice for engineering the back end of an e-commerce application. As such, it doesn't offer much in the way of practical functionality from a user standpoint. However, what it can do is allow a user who is competent in using Insomnia to test the GET, POST, PUT and DELETE routes. The application as such has a functioning database and functioning middleware. As a learning developer, this project taught me how using models eases the workflow, eliminating the need to create every table in MySql.  

## Installation

To install the project, clone the repo to your device. 

## Usage

To use the project, you first need to have the repo cloned to your device. Once you have it, open the repo in VS Code. You will need to install the dependencies. right click the file "server.js", open the integrated terminal and type "npm i", then press enter. This will install your dependencies. Next, navigate to the .env file. Type your MySql password in the password field and "root" in the user field. Now you are ready to begin the process of seeding your database. You will need to navigate to the MySql integrated terminal. In the Bash terminal, type "mysql -u root -p", then press enter. 

![image](https://user-images.githubusercontent.com/115512219/227386908-280f83af-1a67-4fe9-b733-90f3782e2bb6.png)

You will be prompted to enter your MySql password. Enter it and press enter again. You are now in the MySql terminal. Type "SOURCE db/schema.sql;" then press enter.

![image](https://user-images.githubusercontent.com/115512219/227387021-e183d8bb-bdf4-4602-baaf-897dc93d8a85.png)

After that, simply type "quit" and then press enter. You no longer need to use the MySql terminal. 

![image](https://user-images.githubusercontent.com/115512219/227387229-d6674707-e34d-4ab8-abde-2d1fd4f23e83.png)

The final step in seeding your database will be done in the Bash terminal. Type "npm run seed" and "npm start". 

![image](https://user-images.githubusercontent.com/115512219/227387290-2505565c-9693-42a0-ae7b-20b5e177894b.png)
![image](https://user-images.githubusercontent.com/115512219/227387365-e1768b47-2602-4d2b-8814-37d16343420c.png)

Your database should now be seeded. To test your endpoints, open up Insomnia. Make a GET request using the following URL: localhost:3001/api/products. This should return all the seed data in JSON format in the righthand column. 

![image](https://user-images.githubusercontent.com/115512219/227387464-ac7c7fac-25c5-4b21-9c01-d79cf15f3da5.png)

You can do a GET request for single columns too by entering the ID of the thing you're looking for at the end of the URL, like so: localhost:3001/api/products. You can also make POST, PUT and DELETE requests. For more details about running these tests, refer to the tests section of the README. 

## Credits

TA's Roman Senin and Anthony Quinones helped with debugging, along with instructor Alexander Kaufman. 

## License

MIT License

Copyright (c) 2023 Ibigelow92

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Tests

The code can be tested after you run "db/schema.sql" in the MySql terminal. Exit the MySql terminal and open "server.js" in the Bash terminal. First, type "npm run seed" and press enter. You should see four messages, telling you that each table has been seeded. Now type "npm start" into the terminal and pres enter. You should get a message saying the app is listening on port 3001. The remaining tests must be done using Insomnia. Open Insomnia and click on any collection, or start a new one. Make a GET request using the following URL: localhost:3001/api/products. If you see a set of JSON data in the right column, then the GET route was successful. While this GET request returns all products, you can test it with just one product. To view one product, type a forward slash after the URL, followed by the ID of the product. This should return the data for just one. This same pair of tests can be performed on any table, such as tags, categories or product_tags. To test the POST routes, change the dropdown menu next to the URL to "POST". Then type in a new set of JSON data into the field just below it. Remember, you must set the data type to JSON if you have not already done so. After you click "send", make a GET request for whichever table you added to. The URL should look like this: localhost:3001/api/products. Scroll to the bottom of your response and you should see the data you entered. To test the PUT route, take a pre-existing column, copy the JSON data from the right column to the center text field and change one or more things about it. In the dropdown menu next to the URL field, select "PUT" then click "send". Now when you view the same data with a GET request, it should show the updated information. Finally, to test the DELETE route, select DELETE in the dropdown menu and select the ID of whichever thing you want to delete. Click "send" and then verify the thing has been deleted by making another GET request. 
