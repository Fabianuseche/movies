async function getMovies (){
  const respuesta = await fetch ("/api/movies.json")
  const respuestabien = await respuesta.json()
  return respuestabien
}

export default getMovies