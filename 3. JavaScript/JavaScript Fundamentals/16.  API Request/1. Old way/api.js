
// parse method is use to convert string to JSON
// XMLHttpRequest (XHR) objects are used to interact with servers
// The constructor initializes an XMLHttpRequest. It must be called before any other method calls.


const apiURL = 'https://api.github.com/users/Imtiyaz-78';
const xhr = new XMLHttpRequest(); 
xhr.open('GET', apiURL);
xhr.onreadystatechange = function () {//jaise state change hoti hai toh ye function baar baar execute 
    console.log(xhr.readyState);
    if (xhr.readyState === 4 && xhr.status === 200) {
        const data = JSON.parse(this.response);
        console.log(typeof data);
        console.log(data.bio);
        console.log(data.login);
        console.log(data.name);
        console.log(`Total followers ==> ${data.followers}`);
        console.log(`Total following ==> ${data.following}`);
    }
}
xhr.send();



