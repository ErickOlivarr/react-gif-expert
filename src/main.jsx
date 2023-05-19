import React from 'react'
import ReactDOM from 'react-dom/client'
import { GifExpertApp } from './GifExpertApp'

import './styles.css';


//NOTA: el React.StrictMode de abajo podemos no ponerlo e igual nuestra aplicacion funcionará, aunque eso nos asegura que nosotros estemos programando en react como react espera que lo hagamos con las buenas practicas y asi, asi que es recomendable siempre ponerlo, aunque con eso veremos que la funcion de getGifs que se llama en el archivo GifGrid.jsx se ejecutará 2 veces, aunque eso no afecta a nuestra aplicacion, y de hecho eso solo pasará cuando ejecutemos nuestro proyecto en desarrollo, porque cuando estemos en modo de produccion entonces aunque tengamos ahi el React.StrictMode de abajo ya no ejecutará eso 2 veces, para ejecutar nuestro proyecto en desarrollo hay que recordar que se pone en la consola sobre la raiz del proyecto: yarn dev (si el proyecto lo creamos con el yarn en lugar de npm, si es con npm entonces ponemos: npm run dev), y en la siguiente linea se dice cómo ejecutar nuestro proyecto en produccion
//NOTA: teniendo en cuenta lo que se explicó en la anterior linea, para ejecutar el proyecto de react en produccion (aunque tambien se ejecutará sobre el localhost pero será el entorno de produccion), si construimos nuestro proyecto en yarn ponemos en la consola sobre la raiz de nuestro proyecto: yarn build , y si construimos nuestro proyecto con npm pondríamos: npm run build , y con eso se creará automaticamente la carpeta dist sobre la raiz de nuestro proyecto, entonces en la terminal de visual studio code o el cmd de la computadora nos posicionamos sobre la direccion de esa carpeta dist y ponemos el comando: http-server -o , y ya con eso se ejecutará nuestro proyecto en produccion sobre la direccion de http://127.0.0.1:8080/ , aunque OJO que para poder ejecutar ese comando debemos instalar el paquete de http-server , y para eso podemos ver esta pagina: https://www.npmjs.com/package/http-server , ahi vemos que está el comando de: npm install --global http-server , pero tiene la bandera de --global, y en el curso de node js vimos que cuando un comando tiene esa bandera de --global o --g que entonces debemos intalarlo no en nuestro proyecto, sino en nuestra computadora abriendo el cmd de la computadora en modo administrador y entonces poner el comando para instalar el paquete

//NOTA: Anteriormente se dijo cómo tener el proyecto en modo de produccion, pero se usaría tambien con el localhost en la url, pero si quisieramos usar otra url y ya puesta sobre la Nube podemos hacerlo usando Netlify (yo me creé una cuenta en su pagina con mi correo de erick.salvador.olivar@gmail.com), checar este video: https://www.udemy.com/course/react-cero-experto/learn/lecture/32017038#questions

//NOTA: si tenemos un proyecto de react que tenga el package.json pero que no tenga la carpeta de node_modules, como cuando descargamos un proyecto de github, entonces en la consola sobre la raiz del proyecto ponemos: yarn , si el proyecto fue creado con yarn, o npm install , si el proyecto fue creado con npm

ReactDOM.createRoot(document.getElementById('root')).render(
  //arriba se explica lo de React.StrictMode
  //<React.StrictMode>
    <GifExpertApp />
  //</React.StrictMode>,
)
