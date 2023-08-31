const CakeDisplay = ({cake}) => {

    const displayIngredients = cake.ingredients.map((ingredient) =>{ 
        return <li>{ingredient}</li>
    });

    return(
        <>
            <h2>{cake.cakeName}</h2>
            <h3>Ingredients:</h3>
                <ul>{displayIngredients}</ul>
            <p><b>Price:</b> £{cake.price}</p>
            <p><b>Rating:</b> {cake.rating}/5</p>
        </>
    )

}

export default CakeDisplay;