// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))

axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => {
    // handle success
    console.log(response.data);
  })

  // POST call

//   fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   })
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

axios.post("https://jsonplaceholder.typicode.com/posts", {
    title: 'foo',
    body: 'bar',
    userId: 1,
  }).then((response) => console.log(response))




<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script defer src="axios.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js"></script>
</head>

<body>

</body>

</html>
