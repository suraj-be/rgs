/* using the fetch API */

const fetchData = () => {
  fetch('https://api.github.com')
    .then(resp => {
      resp.json().then(data => {
        console.log(data)
      })
    })
}

fetchData()

/* using async-await */
/* 
  - The async-await syntax is just a way for us to consume promises without having to nest .then() calls.
  - Using async keyword makes a function Asynchronous and returns a promise object.  
*/
const fetchData2 = async () => {
  const resp = await fetch('https:api.github.com');
  const data = await resp.json()
  console.log(data);
}

fetchData2()