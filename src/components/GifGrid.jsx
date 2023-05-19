import { getGifs } from "../helpers/getGifs";
import { useEffect, useState } from 'react';
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    /*
    //por lo que se ve mas abajo, este componente solo se va a renderizar usando el setImage del useState de la siguiente linea solo cuando se contruya este componente 
    const [ images, setImages ] = useState([]);

    const getImages = async () => {
        const newImages = await getGifs(category); //lo de esta funcion de getGifs se explica abajo
        setImages(newImages); //OJO que esto ejecuta de nuevo el componente, pero no ejecuta de nuevo el useEffect de abajo porque el useEffect de abajo, como se explica abajo, solo se ejecuta cuando se construye por primera vez el componente (debido al array vacio en su segundo parametro, abajo se explica), pero no se ejecuta cuando se renderiza el componente, solo cuando se construye, osea la primera vez que se ejecuta el componente
    };

    useEffect(() => { //el hook de useEffect (sabemos que es un hook porque empieza por use y es una funcion), hace que en su primer parametro se ponga una funcion, osea un callback, y se ejecutará segun las condiciones o dependencias de su segundo parametro, y en ese segundo parametro se pone un array, y si el array está vacio entonces significa que ese el callback del primer parametro se ejecutará solo cuando el componente se construya, osea solo cuando se ejecute o renderice la primera vez, y esto nos conviene en este caso porque en el archivo getGifs.js de la carpeta helpers tenemos la funcion de getGifs que vemos que se ejecuta en el callback del primer parametro del useEffect, y vemos ahi en esa funcion de getGifs que se llama a un api de gifs que está en internet para buscar gifs segun el valor de category aqui, y para este proyecto nos conviene que esa consulta a ese api solo se ejecute la primera vez que se ejecuta el componente, osea cuando se construye (de esto se explica en el archivo GifExpertApp.jsx, checarlo), y que no se esté ejecutando cada vez que se renderiza el componente. Esa api de gifs se puede llamar con el endpoint que al final lleva el search en esta pagina: https://developers.giphy.com/docs/api/endpoint/#search , aunque como dice en esa pagina, a ese endpoint se le debe poner el query param de q (osea el query param de ?q= al final del endpoint) que es el nombre del gif que vamos a buscar, y el query param de api_key, en la cual se pone el api key que obtenemos de esta pagina (debemos crear una cuenta e iniciar sesion con nuestra cuenta): https://developers.giphy.com/dashboard/ . Tambien opcionalmente podemos ponerle a ese endpoint el query param de limit, pasandole el numero que queremos que nos traiga de resultados
        // getGifs(category) //esta funcion se puso en el archivo getGifs.js, esto para tener un mayor orden, ya que si se hubiera puesto en este mismo archivo se pondría afuera de esta funcion de componente de GifGrid, se puede poner dentro de este componente, pero eso sería mala practica porque se estaría asignando una nueva direccion de memoria para esa funcion cada vez que el componente se renderiza, osea cada vez que el componente se ejecuta, por eso si ponemos esta funcion de getGifs es recomendable ponerla afuera de este componente de GifGrid, en este caso se puso en otro archivo para mantener el orden y asi en este archivo solo tendríamos el puro componente y ya
        //    .then(newImages => setImages(newImages));
        
        //NOTA: en el useEffect no se puede poner que el callback de su primer parametro sea async, porque el useEffect asi podría retornar una promesa (al useEffect se le puede poner un return en su callback de su primer parametro), y el callback del useEffect nunca debe retornar una promesa, por eso a su callback no se le puede poner el async, y por eso no podemos usar el await en su callback, asi que si dentro de ese callback llamamos a algo que retorna una promesa, como en la funcion de getGifs de arriba, entonces tenemos 2 opciones, o usar el metodo then o llamar a una funcion aqui que esté dentro o afuera del componente y afuera del useEffect,y que desde esa funcion se llame a eso que retorna una promesa y ya en esa funcion pues ya podemos usar el async y await, y justo esa segunda opcion fue lo que se hizo y por eso se comentó lo de arriba y se puso lo de la anterior linea 
        getImages();
        
    }, []);
    */ 
    

    //NOTA: lo de arriba se comentó porque al final se puso lo de la siguiente linea que funciona igual, osea todo lo que se comentó arriba funciona igual que solo poner lo de la siguiente linea, y en la siguiente linea vemos que pusimos useFetchGifs, y como empieza con use entonces significa que es un hook de react, pero el useFetchGifs no es un hook de react existente, sino que nosotros creamos ese hook, lo cual se conoce como custom hook porque es un hook personalizado que nosotros creamos, y ese hook se puede ver en el archivo useFetchGifs.js, vemos que igual es una funcion como los componentes, pero como le pusimos el use al principio y lo estamos poniendo dentro del codigo de javascript y no en el codigo de html del jsx que está abajo entonces react lo detecta como un hook y no como un componente, y ahi dentro de ese hook pusimos pusimos lo mismo que lo de arriba que se comentó, incluyendo el useState, y ademas pusimos un segundo useState para tener una variable que indique si ya cargaron las imagenes o no ya que eso se usa abajo, checarlo en ese hook con el isLoading, y OJO que entonces los custom hooks pueden tener entonces sus propios estados con el useState, tambien su propio useEffect que se vio arriba, pero OJO que esos hooks existentes en react que se ponen en el custom hook estarán ligados con el componente donde se pone ese custom hook, en el sentido de que en el hook de useFetchGifs cuando se pone el setImages o el setIsLoading (checar el archivo useFetchGifs.js) entonces eso hará que se renderice este componente de GifGrid porque pues aqui estamos usando ese custom hook, y tambien el useEffect de ese hook de useFetchGifs solo se ejecutará cuando se construya (ejecute) por primera vez este componente de GifGrid, osea funcionaría igual que como si no hubieramos usado ese custom hook de useFetchGifs y hubieramos puesto lo de arriba que se comentó 
    const { images, isLoading } = useFetchGifs(category);
    //VER LA NOTA QUE ESTÁ EN EL ARCHIVO useFetchGifs.js, ES IMPORTANTE

    return (
        <>
            <h3>{ category }</h3>

            {
                /*isLoading
                ? ( <h2>Cargando...</h2> )
                : null*/
                isLoading && ( <h2>Cargando...</h2> ) //esto es propio de javascript, y esto hace que si el valor de isLoading es false que entonces se retorne false y un booleano no hace nada dentro del html, es como si no se pusiera, pero si es true que entonces se retorne lo que está despues del && , y asi sería lo mismo que lo de arriba que se comentó, arriba se usa un operador ternario y el null tampoco hace nada en el html al igual que los booleanos, y estas expresiones se vieron en el curso 2 de javascript, y pues al principio el valor de isLoading es false y despues se pone en true, esto pasa por lo explicado en el archivo useFetchGifs.js, checarlo
            }
            
            <div className="card-grid">
                {
                    /*images.map(({ id, title }) => (
                        <li key={ id }>{ title }</li>
                    ))*/
                    
                    images.map((image) => (
                        <GifItem 
                            key={ image.id } 
                            //title={ image.title }
                            //url={ image.url }
                            //id={ image.id }
                            { ...image } //asi se puede mandar como propiedad todos los atributos del objeto image, por lo tanto con esto sería lo mismo que poner las 3 lineas anteriores que se comentaron
                        />
                    ))
                }
            </div>
        </>
    );
};