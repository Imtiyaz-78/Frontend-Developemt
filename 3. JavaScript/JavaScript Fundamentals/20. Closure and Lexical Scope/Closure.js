
// 1st Example of Closure
function outer() {
    let username = "imtiyaz_78";
    function inner() { // inner() is the inner function, that forms the closure
        console.log(`Username: ${username}`); // Username: imtiyaz_78
    }
    inner();
}
outer();



// 2nd Tricky Example of Closure:
function outer() {
    let username = "imtiyaz_78";
    function inner() {
        let secret = "My123";
        console.log(`Username: ${username}`);
    }
    function innerTwo() {
        console.log(secret); // Uncaught ReferenceError: secret is not defined
    }
    inner();
    innerTwo();
}
outer();

/*
   Ye closure same faimly ki tarah kaaam karta hai, jaise chhote bache apne papa or dadaji se kuchh
   bhi mang sakte hai but kabhi kabhi bhaee bhaee mein nhi jamta hai ek bhaee dusre bahee ko icecraem
   share nhi karte hai apas mein same upper ke example mein inner function ka access innerTwo function mein nhi le sakta hai
  
*/


// 3rd more Tricky Example of Closure:
function outer() {
    let username = "imtiyaz_78";
    console.log("Parent or outer", secret); // Uncaught ReferenceError: secret is not defined
    function inner() {
        let secret = "My123";
        console.log(`Username: ${username}`);
    }
    function innerTwo() {
        console.log(secret); // Uncaught ReferenceError: secret is not defined
    }
    inner();
    innerTwo();
}
outer();

/*
  Iss above 3rd example mein chhote bache bade se mobile mang sakte hai but bade log
  chhote bache se mobile, toy etc nhi mang sakte hai insult ki baat hai  
*/
