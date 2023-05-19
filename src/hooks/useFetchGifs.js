import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    
    //NOTA: este es un custom hook y se explica en el archivo GifGrid.jsx, checarlo, y OJO que aqui se ve un principio de javascript y es que podríamos pensar que se retornaría lo del return de abajo de este useFetchGifs hasta que se hayan cargado las imagenes cuando se termine de ejecutar la funcion de getImages de abajo, porque eso se ejecutaría cuando se construye el componente de GifGrid porque ahi se usa este custom hook y abajo pus usamos el hook de useEffect (checar el archivo GifGrid.jsx), pero no, lo que va a pasar es que primero se retornará lo del return de abajo antes que se termine de ejecutar la funcion de getImages llamada por el useEffect de abajo, y asi entonces en el componente de GifGrid al principio recibiríamos el images como un array vacio y el isLoading como false, y asi se ejecutaría el html del codigo jsx que está en el componente de GifGrid, esto pasa por la asincronía de javascript que no se espera a que se termine de ejecutar la funcion de getImages de abajo ya que eso se llama desde el useEffect, pero simultaneamente javascript sigue ejecutando lo que siga despues del useEffect, y asi igual se ejecutan las cosas dentro de los componente, no solo dentro de los custom hooks porque pues asi funciona javascript, como lo visto en el curso 2 de javascript, y entonces cuando ya se termine de ejecutar la funcion de getImages de abajo entonces vemos que se ejecutará lo del setImages y el setIsLoading, y entonces una funcion del react de las versiones actuales es que si en una funcion se ejecuta mas de un set del useState entonces no es que se vaya a renderizar el componente 2 veces por el setImages y el setIsLoading, sino que react se espera a que termine de ejecutarse esa funcion y entonces ya que se hayan terminado todos los set de los useState, en este caso el setImages y el setIsLoading, entonces se va a renderizar el componente y asi se renderizará 1 sola vez y no varias veces, y esa vez que se renderice pues ya tendrá los valores actuales del useState, por eso al terminar de ejecutarse la funcion de getImages de abajo se renderizará 1 vez el componente de GifGrid y entonces se volverá a ejecutar ese componente y por lo tanto tambien este custom hook de useFetchGifs, pero ya no se ejecutará lo del useEffect porque pues el componente de GifGrid ya se habrá construido como se explica en el archivo GifGrid.jsx, y entonces ya aqui solo se retornará el images y el isLoading pero ya con sus valores actualizados, osea el images ya con su
    //CONTINUACION DE LA ANTERIOR NOTA: array de gifs, y el isLoading con el valor de true   

    const [ images, setImages ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages); 
        setIsLoading(false); //en este punto las imagenes ya se cargaron, por eso aqui al isLoading le pusimos false
    };

    useEffect(() => {
        getImages();
    }, []);
    

    return {
        images,
        isLoading
    };
};