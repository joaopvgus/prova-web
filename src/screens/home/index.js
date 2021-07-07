const date = new Date()

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

document.getElementById('date').innerText = formatDate(date)