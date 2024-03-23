const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
console.log(usersEndpoint);
const $n = document.querySelector("#name"); //4
const $b = document.querySelector("#blog"); //4
const $l = document.querySelector("#location"); //4

const displayUser = async (username) => { //1, 2
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  //console.log(`${usersEndpoint}/${username}`)
  const data = await response.json(); //Faltaba una variable data que reciba el obejto a partir del JSON
  console.log(data);
  $n.textContent = `${data.name}`; //3
  $b.textContent = `${data.blog}`; //3
  $l.textContent = `${data.location}`; //3
}

const handleError = (err) => { //1
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);

/**
 * 1. Se cambian las funciones a arrow functions
 * 2. Se agrega la palabra async a la funcion para indicar que es una funcion asincrona
 * 3. se cambiaron comillas "" por ``
 * 4. Se utiliza # para identificar los elementos por el id
 */