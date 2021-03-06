## I. Tools Used

    - $ npm install
    - $ npm install --save express
    - $ npm install --save body-parser
    - $ npm install --save ejs pug express-handlebars
    - $ npm install --save express-handlebars@3.0
    - $ npm install --save mysql2
    - $ npm install --save sequelize
    - $ npm install --save mongodb
    - $ npm install --save mongoose
    - $ npm install --save express-session
    - $ npm install --save connect-mongodb-session

    - https://www.mysql.com/
        MySQL Community Server
        https://dev.mysql.com/downloads/mysql/
        > download DMG file

        MySQL Workbench:
        https://dev.mysql.com/downloads/workbench/

        Go to /Desktop/Trung/Programs > open workbench

        setup video > video 138

    - MongoDB atlas (cloud database, no need to install)
        +, Just need to login, see login in password app
        +, Setting up MongoDB: Video 178

    - MongoDB Compass: GUI for MongoDb data
        +, help us to explore and manipulate our
        cloud MongoDB atlas
    https://www.mongodb.com/products/compass
    > install to machine to use
    > use at set up guide at video 184

## II. Core Concepts:

    1. What is a Cookie:
        - Cookie is a small text file on your browser (client-side)
        - Originally, Cookie contains information about user and the user
            preferences
            For i.e: cookie can contains your preference language,
                time you visited a website, your location
            Later on, as information grow, cookie file must grow beyond its
            shape
        - Cookie now only contains an id as an identifier so that
            website can access and store all your preferences in their system
        - Websites can access and write to your Cookie if allowed
        - Cookie is not related to website, it is a global file that
            can be access by any web application

    2. What is Session:
        - Session:
            +, is a data structure that contain user data,
            +, is stored in the server-side
            +, share information across requests of the same user
            +, doesn't share information across user
        - With Session, Cookie must contain user id as an identifier
        - See Session and Cookie relationship in this image:
        https://drive.google.com/file/d/1buX-IXZh5G_TGs5HTqWCrAFxDltWIFqq/view?usp=sharing

## III. Module Notes:

    1. Setting and Getting basic Cookies:
        - Code in 3rd Commit
        - See note what is a cookie above
        - See controllers/auth.js for how to set and get basic
            Cookie

    2. Setting Cookie Configs:
        - Forgot to commit this code, see video 236 (not really important)
        - See controllers/auth.js for how to set Cookie Configs
        - Note that often time we won't set cookie manually like this,
            this is just a demonstration for understanding
            the basic

    3. Setting and Using Basic Session:
        - Code in 4th Commit
        - See note for what is session above
        - How to set up session see in app.js
        - How to set and use cookie variable in ./controllers/auth.js

    4. Using MongoDB to store session:
        - Code in 5th Commit
        - See app.js for how to set up configurations
            +, see store constant and middleware to set up session
        - Now we hit login in the /login route, we'll have a record in
            mongodb under shop, under session collection

    5. Asssignment 5:
        - Code in 6th Commit
        - Task: Authenticate user when user go to Login > hit button Login,
            not at the beginning of the applicaiton. When user hit Login,
            create a session that store the user. Operate information
            from that user session instead of req.user
        - See ./controllers/auth.js: under postLogin() to see how to create
            user session and authenticate user.

            +, After we click Login,
            go to dev tools > Application > Cookies we'll see connect.id
            Cookie, which will be connected to the req.session.user.

            +, If we delete the cookie from this application, won't be
            able to render 'Cart' and 'Order' option, 'Add To Cart'
            won't work also

        - See ./controllers/shop.js: under getCart(), postCart(), postCartDeleteProduct():
            +, In order to work with user object retrieved from the database,
            we will have to use:
            const sessionObject = User.hydrate(req.session.user);
            to create a new mongoose object

            +, After all operations finished, we'll have to save that object
            back to user session:
            req.session.user = sessionObject;

    6. Deleting Session and Cookie:
        - Code in 7th Commit
        - See in ./controllers/auth.js: under postLogout() to see how to
        destroy session
        - This operation delete the session in the database. The Cookie
        in the browser still remain but reference to nothing so it'll
        contain no information

    8. Saving session before redirect:
        - Code in 8th Commit
        - See ./controllers/auth.js: under postLogin(), see
            req.session.save()

## IV. Other Notes:

    What's in this module ?
        - What is Cookies ?
        - What is Sessions ?
        - Using Sessions and Cookies !
