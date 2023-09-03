

// function doSomething() {
//     fetch('http://www.boredapi.com/api/activity/')
//     .then(res => res.json())
//     .then(data => {
//        document.getElementById('activity').innerText = data.activity
//     })
// }
 
// doSomething()

// setInterval(() => {
//     doSomething()
// },3000);


//Name api
fetch('https://randomuser.me/api')
.then (res => res.json())
.then(data => {
console.log(data);
} )