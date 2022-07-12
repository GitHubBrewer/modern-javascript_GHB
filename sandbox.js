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
    logBlogs: function(){

    }
};

user.login();
user.logout();