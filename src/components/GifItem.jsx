export const GifItem = ({ title, url, id }) => {

    return (
        //con el image de abajo se muestra el gif
        <div className="card">
            <img src={ url } alt={ title } />
            <p>{ title }</p>
        </div>
    );
};