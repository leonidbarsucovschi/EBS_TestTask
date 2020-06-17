
// TODO: посмотреть методы http посмотреть fetch промисы

export function getProducts () {
  return fetch('http://localhost:3001/api/products/', {
    method: 'GET',
    credentials:'same-origin',
    mode: 'cors',
  })
    .then(response => response.json())
    .catch(e => {
      console.log(e);
    })
}



