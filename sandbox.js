// object literals

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
    // we can't access the key:values inside this object directly
    // we need to use this.key to access them
    // we can;t use an arrow function for that action though
    // arrow functions define the this keyword at the time the method is invoked
    logBlogsArrow: () => {
    },
    logBlogs: function(){
        console.log(this);
        console.log(this.blogs);
        console.log(`${this.name} has written the following blogs:`);
        this.blogs.forEach(blog => {
            console.log(blog);
        });
    },
    // finally we can clean up the functions inside objects by removing the word function and backing it up to the key
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
// this refers to the window object when used at the global scope
console.log(this);
// when used inside an object this refers to the object
// but arrow functions define this based on the level when invoked
user.logBlogsArrow();
// regular functions keep this at the level it is coded
user.logBlogs();
user.logBlogsClean();