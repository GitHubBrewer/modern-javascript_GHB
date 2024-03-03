// object literals continued

let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'berlin',
    blogs: ['why mac and cheese rules', '10 things to make with marmite'],
    // methods are created as key:value pairs as well
    // the key is the method name and the value is the function
    login: function(){
        console.log('the user logged in');
    },
    logout: function(){
        console.log('the user logged out');
    },
    // based on my understanding of functions in objects form the previous lesson
    // here is how I thought we can log out the names of each blog title
    logBlogsFor: function(){
        for (let i = 0; i < user.blogs.length; i++){
            console.log(`"${user.blogs[i]}"`);
        }
    },
    logBlogsWhile: function(){
        let i = 0;
        while (i < 2){
            console.log(user.blogs[i]);
        i++;
        }
    },
    // apparently we can't access the key:values inside this object directly
    // this is true if we try to access the key like this
    logBlogsWrong: function(){
        console.log(blogs);
    },
    // we need to use the this keyword to access them
    // https://www.w3schools.com/js/js_this.asp the this keyword refers to an object
    // the object it refers to is dependent on where/how it is being called
    logBlogs: function(){
        // when invoked within the object, this refers to the local object
        console.log(`invoking this at the object scope result in ${this}`);
        // knowing that let's us use it to reference the keys in this object
        console.log(this.blogs);
        // so now we can write a function iterating through the elements in an array inside this object
        // starting with a template string
        console.log(`${this.name} has written the following blogs:`);
        // now we can iterate through using the forEach method
        this.blogs.forEach(blog => {
            console.log(blog);
        });
    },
    // special note that we can't use an arrow function when invoking the this keyword in an object
    // arrow functions define the this keyword at the time the method is invoked
    // so even though we use "this" inside the object, the function is called at the global scope
    // to JS we have invoked this at the global scope
    logBlogsArrow: () => {
        console.log("result of this inside an arrow function");
        console.log(this);
        console.log(this.blogs);
    },
    /* finally there are syntax changes we can use to clean up the functions inside objects
    instead of 
    functionName: function(){
        codeblock;
    } 
    */
    // remove the word function and back it up to the key
    logBlogsClean(){
        console.log('this looks better');
        console.log(`${this.name} has written the following blogs:`);
        this.blogs.forEach(blog => {
            console.log(blog);
        });
    }
};

user.login();
user.logout();
user.logBlogsFor();
user.logBlogsWhile();

// as we noted above the object of the this keyword changes this based on where it is invoked
// alone, this refers to the window object
console.log(`the result of invoking this alone ${this}`);

// regular functions keep this at the level it is coded
user.logBlogs();

// but arrow functions define this based on the level when invoked
user.logBlogsArrow();

user.logBlogsClean();

// here is the result of trying to access the blogs key directly
console.log('about to throw an error!');
user.logBlogsWrong();
