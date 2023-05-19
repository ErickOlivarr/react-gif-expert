export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=MNzRjFZbZZFF8Md1K0uf0ahOwdzsN64J&q=${ category }&limit=10`; //sobre esta url se habla en el archivo GifGrid.jsx, checarlo
    const resp = await fetch(url); //asi se hace una peticion http en react, usando el fetch que es nativo de javascript, y aqui se está haciendo una peticion GET a la url que se ve en la anterior linea
    const { data } = await resp.json(); //en el curso 2 de javascript vimos que al usar el fetch de javascript debemos poner a su resultado el metodo json() para ahora sí tener el resultado de esa consulta, ya que el fetch por sí solo retorna un objeto especial, no el resultado de la consulta, por eso se le aplica el metodo json() que se ve en esta linea, y aqui estamos desestructurando de ese resultado de la consulta el atributo data, el cual trae el array de los objetos que tiene la informacion de los gifs encontrados por la consulta

    const gifs = data.map(img => ({
        id: img.id, //con esto se obtiene el id del gif
        title: img.title, //con esto se obtiene el titulo del gif
        url: img.images.downsized_medium.url //con esto se obtiene la url del gif
    }));

    console.log(data);
    return gifs;
};