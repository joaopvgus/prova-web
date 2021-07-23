
$("#login").submit(function(e) {
  e.preventDefault();
  const username = e.target[0].value
  const password = e.target[1].value

  const myHeaders = new Headers()
  myHeaders.append('api_key', 'cadu')

  const url = new URL("https://petstore.swagger.io/v2/user/login")
  const params = {username, password}
  Object.keys(params).map(key => url.searchParams.append(key, params[key]))

  fetch(url, {
    method: "GET",
    headers: myHeaders,
  }).then(response => {
    response.json().then(data => {
      if(data.code === 200) {
        window.location.href ='./src/screens/home/index.html'
      }
    })
  }).catch(error => {
    console.log(error);
  })
});
