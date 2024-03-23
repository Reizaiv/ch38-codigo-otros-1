const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
console.log(usersEndpoint);
const userName = document.querySelector("#name"); //4, 5
const blogName = document.querySelector("#blog"); //4, 5
const userLocation = document.querySelector("#location"); //4, 5

const displayUser = async (username) => { //1, 2
  userName.textContent = 'cargando...'; //5
  const response = await fetch(`${usersEndpoint}/${username}`);
  //console.log(`${usersEndpoint}/${username}`)
  const data = await response.json(); //Faltaba una variable data que reciba el obejto a partir del JSON
  console.log(data);
  userName.textContent = `${data.name}`; //3, 5
  blogName.textContent = `${data.blog}`; //3, 5
  userLocation.textContent = `${data.location}`; //3, 5
}

const handleError = (err) => { //1
  console.log('OH NO!');
  console.log(err);
  userName.textContent = `Algo salió mal: ${err}` //se homogeneizo el nombre de la variable
}

displayUser('stolinski').catch(handleError);

/**
 * 1. Se cambian las funciones a arrow functions
 * 2. Se agrega la palabra async a la funcion para indicar que es una funcion asincrona
 * 3. se cambiaron comillas "" por ``
 * 4. Se utiliza # para identificar los elementos por el id
 * 5. Se les da a las variables un nombre mas legible y se elimina el $
 */