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
    // based on my present understanding of functions in objects
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
    }
};

user.login();
user.logout();
user.logBlogsFor();
user.logBlogsWhile();