// object literals

// adding that we can store objects in arrays
const blogArray = [
    {title: 'why mac and cheese rules', likes: 30},
    {title: '10 things to make with marmite', likes: 50}
];

console.log(blogArray);

let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'berlin',
    premium: false,
    // updating to store the object created above in this array
    blogs: [
        {title: 'why mac and cheese rules', likes: 30},
        {title: '10 things to make with marmite', likes: 50}    
    ],
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
            console.log(blog.title);
        });
    },
    // finally we can clean up the functions inside objects by removing the word function and backing it up to the key
    logBlogsClean(){
        console.log('this looks better');
        // updating to call the keys in the new object we stored in the array
        console.log(`${this.name} has written the following blogs:`);
        this.blogs.forEach(blog => {
            console.log(blog.title);
        });
    },
    // adding the likes
    logBlogsLikes(){
        this.blogs.forEach(blog => {
            console.log(`${this.name} received ${blog.likes} likes for their blog titled: ${blog.title}`)
        });
    },
    logPremium(){
        if (this.premium === true) {
            console.log(`Thanks for being a premium member ${this.name}`)
        } else {
            console.log(`You can support our mission ${this.name} by subscribing to our premium tier today!`)
        };
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
user.logBlogsLikes();
user.logPremium();