window.onload = function (e) {
  e.preventDefault();
  const date = new Date()
  document.getElementById('date').innerText = formatDate(date)

  const myHeaders = new Headers()

  fetch('https://petstore.swagger.io/v2/pet/findByStatus?status=available',
    {
      method: "GET",
      headers: myHeaders,
    }
  )
    .then(async response => {
      const data = await response.json()
      if (data) {
        const container = document.getElementById('container')
        const image1 = await loadImages()
        const image2 = await loadImages()
        const image3 = await loadImages()
        const image4 = await loadImages()
        const images = {image1, image2, image3, image4}
        const pets = await data.slice(0, 5).reduce( (pets, currentPet, index) => {
          let newElement
          if (index > 1) {
            newElement = pets + `
              <div class="card">
                <div class="img-dog"
                  style="background-image: url('${images['image' + index].message}')">
                </div>
                <div class="content">
                  <p>${currentPet.name}</p>
                  <h3>3 anos</h3>
                  <button onclick="location.href='../medical_record/index.html'">Ver prontuário</button>
                </div>
              </div>`
          } else {
            newElement = `
              <div class="card">
                <div class="img-dog"
                  style="background-image: url('${images['image' + index].message}')">
                </div>
                <div class="content">
                  <p>${pets.name}</p>
                  <h3>3 anos</h3>
                  <button onclick="location.href='../medical_record/index.html'">Ver prontuário</button>
                </div>
              </div>`
          }

          return newElement

        })
        container.innerHTML = pets
      }
    })
    .catch(error => {
      console.log(error);
    })
}

const formatDate = (date) => {
  let weekDay, month

  switch (date.getDay()) {
    case 0:
      weekDay = 'Domingo'
      break;

    case 1:
      weekDay = 'Segunda'
      break;

    case 2:
      weekDay = 'Terça'
      break;

    case 3:
      weekDay = 'Quarta'
      break;

    case 4:
      weekDay = 'Quinta'
      break;

    case 5:
      weekDay = 'Sexta'
      break;

    case 6:
      weekDay = 'Sábado'
      break;
  }

  switch (date.getMonth()) {
    case 0:
      month = 'janeiro'
      break;

    case 1:
      month = 'fevereiro'
      break;

    case 2:
      month = 'março'
      break;

    case 3:
      month = 'abril'
      break;

    case 4:
      month = 'maio'
      break;

    case 5:
      month = 'junho'
      break;

    case 6:
      month = 'julho'
      break;


    case 7:
      month = 'agosto'
      break;


    case 8:
      month = 'setembro'
      break;


    case 9:
      month = 'outubro'
      break;


    case 10:
      month = 'novembro'
      break;

    case 11:
      month = 'dezembro'
      break;
  }

  return `${weekDay}, ${date.getDate()} de ${month} de ${date.getFullYear()}`
}

async function loadImages() {
  const res = await fetch('https://dog.ceo/api/breeds/image/random')
  const image = await res.json()
  return image
}