function user(userName,password){
    this.userName=userName;
    this.password=password;
    // return this;
}

// let user4 = user("Hashim","123");


// let user3 = user("Qureshi","456");
// console.log(user3);
// console.log("Name:"+user3.userName);

// console.log("------------");

// console.log(user4);
// console.log("Name:"+user4.userName);

//THE ABOVE EXAMPLE IS THE IMPORTANCE OF NEW KEYWORD.
//WITHOUT USING NEW KEYWORD IT WILL BE STORED IN SAME SPACE
//THE VALUE WILL BE REPLACED RATHER THAN CREATING NEW SPACE OR OBJECT
//ALSO IF YOU ARE USING NEW KEYWORD IT AUTOMATICALLY RETURNS THE VALUE AND RETURN KEYWORD DOESNT REQUIRED.

console.log("------------");

let user1 = new user("Hashim","123");


let user2 = new user("Qureshi","456");
console.log(user2);
console.log("Name:"+user2.userName);

console.log("------------");

console.log(user1);
console.log("Name:"+user1.userName);

console.log("------------");

console.log(user1.constructor);






