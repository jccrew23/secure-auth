# secure-auth
# Overview

This program is  the first step in creating an authentication app. This program starts a server in the localhost in this instance(but would be using any deployment program when properly deployed). This program connects to MongoDB in the Typescript language. Then using controllers, routes and an app, CRUD operations are successfully executed. My program successfully demonstrated the ability to correctly type annotate, compile TypeScript and use Rest Client to test its execution. This program was written with the purpose of preparing a secure authentication app. This sets up a good background/first step

[Software Demo Video](https://youtu.be/TE94Zo8ykPQ)

# Development Environment

Visual Studio Code was used to write the code and control version. Rest Client was use to test the CRUD operations

I used typescript to write this code. I used body-parser to assist in json reading during the results and responses. The cors dependency was used go manage the interaction from the api. Dotenv was used to configure the .env file for the uri connection to MongoDB and MongoDb was used to facilitate the database connection. Express and @types/express are used to create and manage the server. TS-node and typescript are used to aid in the compilation of typescript into javascript prior to running the program. And finally, nodemon was used to allow for automatic restarting of the serve after changes to the code. 

# Useful Websites


- [TypeScript Documentation](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- [Build an Authication System](https://www.youtube.com/watch?v=qylGaki0JhY&list=PL32Pk31fkt_tTk5wrjcv2cvd-Q80VQGX0&index=3)

# Future Work


- I would love to add another controller for updating a user by email or username rather than id
- The biggest thing I'd like to add is the app front end portion that actually takes input when logging in. 
- I would also like to find a way to validate that info that the users would input. 