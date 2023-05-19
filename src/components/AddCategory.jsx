import { useState } from "react";

//export const AddCategory = ({agregarCategoria}) => { //esto se comentó y se puso lo de la siguiente linea por lo que se explica en el archivo GifExpertApp.jsx, el cual es el componente padre de este componente de AddCategory porque ahi se llama a este componente de AddCategory, checar esa parte de ese componente cuando se llama a este de AddCategory
export const AddCategory = ({onNewCategory}) => {
    
    const [ inputValue, setInputValue ] = useState('');
    
    const onInputChange = (event) => {
        setInputValue(event.target.value); //con el event.target.value se obtiene lo que se escribió en el input de abajo
    };

    const onSubmit = (event) => {
        event.preventDefault(); //esto se explica abajo en el form
        if(inputValue.trim().length <= 1) {
            return;
        }
        //agregarCategoria((c) => [inputValue, ...c]);
        onNewCategory(inputValue.trim()); //aqui se está llamando a la funcion onNewCategory del archivo GufExpertApp.jsx, checarlo y checar la explicacion de esto ahi en la parte que se llama a este componente de AddCategory
        setInputValue('');
    };

    return (
        //OJO que al poner un form de html y pulsamos la tecla enter o pulsamos un boton que sea de tipo submit dentro del form entonces el form por default hace que se haga refresh en el navegador web, pero si no queremos que se haga refresh en el navegador web entonces podemos poner el evento de onSubmit en el form para que se ejecute una funcion cuando se le haga submit al form (osea cuando se pulse la tecla enter o cuando se pulse un boton de tipo submit dentro del form), y entonces usando el event que se manda con el evento onSubmit podemos poner event.preventDefault() para que ya no se haga ese refresh, esto es propio de javascript, no de react
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    );
};