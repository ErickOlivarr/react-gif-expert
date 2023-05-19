import { useState } from 'react';
/*import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';*/
import { AddCategory, GifGrid } from './components'; //las anteriores 2 lineas se comentaron y solo se puso esta porque en la carpeta de components se hizo lo mismo que se vio en el curso de node js, en react tambien se puede hacer eso de poner un archivo llamado index.js (o index.ts si usamos typescript) y aho poner todas nuestras exportaciones de los archivos que estén dentro de esa carpeta, ya que si ponemos la ruta de esa carpeta como aqui entonces automaticamente se llamará a ese archivo de index.js, y de ahi pues exportaremos lo de los archivos que están en esa carpeta, y asi todas las importaciones de lo que tenemos en nuestros archivos de esa carpeta pueden quedar en una sola linea y no en varias como se estaba viendo en las 2 anteriores lineas que se comentaron, y esto se puede hacer para todo tipo de archivos dentro de una carpeta, puede ser archivos jsx o js o ts si usamos typescript


export const GifExpertApp = () => {
    
    //NOTA: cuando ponemos hooks no debemos ponerlos de forma condicional dentro de un if, eso con los hooks nunca se debe hacer, ya que siempre los hooks como el useState de abajo deben ir asi sin condiciones, simplemente que estén en el componente y ya sin depender de condiciones para que se declaren, osea sin estar dentro de if
    //NOTA: se puede poner en un componente mas de 1 hook de useState
    const [ categories, setCategories ] = useState([ 'One Punch']);

    /*const onAddCategory = () => {
        //categories.push('ichii'); //NOTA: en react para cambiar el estado de una constante usando el useState, en este caso categories, no se usa el push sobre las categories ni nada que modifique a categories como tal, sino que con el useState para cambiar el valor de en este caso categories siempre usamos el setCategories, esto ya que el push modifica una constante o variable, pero eso con el useState pues se debe hacer con el setCategories en este caso, por eso esto con el push se comentó y se hizo como se ve en la siguiente linea para asi en el array de categories tener un valor extra, osea añadirle un valor sin usar el push, y esto pasaría cada vez que se pulse el boton de abajo
        setCategories((c) => ['ichi', ...c]); //tambien se pudo haber puesto esto como setCategories(['ichi', ...categories]) , y asi se insertaría ese nuevo elemento de 'ichi' al principio del array de categories
    };*/

    const onAddCategory = (newCategory) => { //la anterior funcion de comentó porque era una demostracion junto al boton, que tambien se comentó, que está abajo, por eso ya al final pusimos esta funcion de aqui, y esta funcion se llama desde el AddCategory.jsx (y desde ahi se le pasa el parametro de newCategory de aqui), checar la explicacion de abajo
        if(categories.includes(newCategory)) return; 
        
        setCategories((c) => [newCategory, ...c]);
    };


    return (
        //aqui llamamos al componente AddCategory que está en el archivo AddCategory.jsx, y le pasamos la propiedad de onNewCategory, checar la explicacion de abajo
        <>
            <h1>Gif Expert App</h1>

            <AddCategory 
                //agregarCategoria={ setCategories } //esto se comentó porque esta sería una forma en que desde el componente de AddCategory del archivo AddCategory.jsx se cambie el valor de categories de este componente de GifExpertApp porque aqui le estamos mandando como propiedad a AddCategory la referencia del setCategories del useState de arriba, y asi desde ese componente hijo de AddCategory (con esto sería componente hijo de este componente de GifExpertApp) se podrá cambiar el valor de categories de aqui, esta es una forma de hacer esto, pero se comentó porque al final se hizo de la forma de la siguiente linea, la cual funciona igual pero es mas recomendada por cuestiones de mayor facilidad al leer el codigo, la cual en lugar de pasar la referencia del setCategories del useState de arriba se pasa la referencia de la funcion dentro de este componente en la cual se usa el setCategories y asi mejor usamos el setCategories aqui en el mismo componente donde se declaró el useState que trajo el setCategories, y ya asi desde el componente hijo, en este caso AddCategory, se llama a esa funcion pasandole como parametro el valor al que queremos modificar el categories de aqui con el setCategories
                onNewCategory={ onAddCategory } //teniendo en cuenta lo que se explicó la anterior linea, aqui se puso un nombre a esta propiedad empezando con on, osea onNewCategory, eso no es obligatorio pero se suele poner un nombre de propiedad de componente empezando con el on si desde ese componente hijo se llama a una funcion del componente padre pasandole un valor como parametro, como si ese componente hijo estuviera emitiendo un evento dentro del componente padre
            />

            {/* <button onClick={ onAddCategory }>Agregar</button> */}
            
            {/* <ol>
                {
                    //[ <li key={'ok'}>{categories[0]}</li>, <li key={'ok2'}>{categories[1]}</li> ] //asi teniendo un array de elemento del html se puede iterar en codigo html de los archivos jsx de react, como el ngFor de Angular pero aqui usando solo arrays, y por eso abajo se puso el metodo map del array de categories para que retorne eso un nuevo array con los elemento li de html
                    
                    // categories.map((category) => {
                    //     return <li key={ category }>{ category }</li> //cuando ponemos un elementos en el html de manera dinamica en react, como aqui con el metodo map para hacer algo equivalente al ngFor de Angular, debemos ponerle el atributo key a esos elementos que se van a poner dinamicamente en el html, asi como se muestra aqui, y su valor debe ser un valor unico
                    // }) //NOTA: en la anterior linea dijimos que el key siempre debe ir sobre elementos que se están iterando y que debe ser unico, y como debe ser unico podríamos pensar que ponerle el category del map estaría mal y que debe ponerse el indice del map poniendo map((category, indice)), pero poner ese indice no se recomienda en react porque daría conflictos cuando se eliminan elementos del array, por eso se puso ahi category en el key, aunque OJO que asi sí se puede repetir el valor de un key si en el array de categories tenemos el mismo nombre de la categoria, pero se evitó que en ese array de categories haya el mismo elemento repetido arriba al poner el categories.includes, asi que con esa validacion arriba se evitó eso y asi aseguramos que el key aqui nunca se repita, y sin usar el indice que no se recomienda, tambien aqui en el key podríamos poner algo que sea unico como un uuid generado por javascript o algo asi
                    
                }
            </ol> */}

            {/* NOTA: lo anterior del elemento ol se comentó porque al final se hizo el siguiente map del array de categories */}

            {
                categories.map((category) => 
                    <GifGrid key={ category } category={ category } /> //vemos que aqui estamos llamando a un componente llamado GifGrid que está en el archivo GifGrid.jsx, pero se está haciendo sobre una iteracion con el categories.map, por eso se puso el key aqui como se ve arriba, y tambien a ese componente hijo GifGrid aqui le mandamos una propiedad llamada category
                )
                //NOTA: arriba tenemos una iteracion sobre un componente hijo, el GifGrid, lo que significa que aqui es como si se repitiera ese componente las veces del numero de elementos del array de categories por el categories.map de arriba, pero OJO que cada componente será independiente entre sí de modo que cada componente de GifGrid aqui puede tener su propio hook de useState, teniendo valores diferentes en su estado del useState, y si un useState cambia en un componente de GifGrid entonces solo ese componente se va a renderizar y los demas no, se mantendrán igual
                //NOTA: cuando agregamos nuevos elementos al array de categories, solo se construye (y ejecuta) el nuevo componente GifGrid que tiene una nueva key, pero los componentes de GifGrid que ya estaban antes de agregarle el nuevo elemento al array de categories no se ejecutarán de nuevo, no se construirán de nuevo
            }
            
        </>
    );

};