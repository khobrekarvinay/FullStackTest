
///// Dotenv module -----------------------------------------------------------

//-> Dotenv is a Node.js module that loads environment variables from a .env file into the 'process.env' object in your application.
// It helps keep sensitive config values such as API keys, database credentials, or other environment-specific setting separate from source code.

// ADVANTAGE: 
// Separation of config values from the code. So if say you want to run a certain server code for some different database then you only need change 
// one value in .env file and everywhere else in the code the value will be received automatically.

// Also separating important config values like API keys or database passwords from the code means it can easily be excluded from the all commits 
// made to github from the system. This is done using .gitignore file

//.env example
// PORT=3000
// DB_HOST=localhost
// DB_USER=root
// DB_PASS=example

// Install command: npm install dotenv    

//Loading .env into application

dotenv.config(); // To load 

//And then use it's values anywhere. Eg: PORT: 3000, process.env.PORT = 3000;

app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT} `);
}); 


// Command for creating .env file : " echo. > .env "
// echo commands outputs text to the console or with '>' writes it to a file. 
// The extra dot just after echo represents an empty string. It's a placeholder for creating empty file

// Same command to create .gitignore file : " echo. > .gitignore "

// Inside .gitignore mostly only 2 lines are needed: 
// 1 node_modules/ 
// 2 .env 





  
























