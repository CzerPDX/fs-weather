# How to use
## **Installation**

### Backend
- #### **Install server node modules**
  cd into `fs-weather-app/server` and use:

  ```shell
  npm install
  ```
- #### **Set up environment variable file**
  Copy the provided `.env` file that contains the API key into `fs-weather-app/server`

- #### **Install client node modules**
  cd into `fs-weather-app/client` and use:

  ```shell
  npm install
  ```


## Running the software
- ### **Start the Database**
  cd into `fs-weather-app/server` and use:

  ```shell
  npm run fs-database
  ```

- ### **Start the Server**
  stay in `fs-weather-app/server` and use:


  ```shell
  npm run dev
  ```

- ### **Start the client**
  cd into `fs-weather-app/client` and use:

  ```shell
  npm start
  ```


# Development information

### react-icons is installed

* You can use any icons from here: [https://react-icons.github.io/react-icons](https://react-icons.github.io/react-icons)
  * You can see an example of using them in `examples/react-crash-course/react-task-tracker/src/components/Xbtn.js`


### Styling with CSS vs directly editing the style of an object with React

I've been styling using index.css rather than react as it's usually a lot easier to make changes. So if you need to edit the style of something that isn't bootstrap-specific, my edits will all be class and selector-based and stored in `index.css` - Brooke


## OPEN WEATHER API KEY
There will be a `.env` file for each person with a database login string and it will contain the api key. 
Place it in the `fs-weather-app/server` directory and it should work!


## Database
We are using `json-server` and `json-server-auth` to securely store the email and password information of our users. 
https://www.npmjs.com/package/json-server-auth
It uses a `JWT` style of authentication