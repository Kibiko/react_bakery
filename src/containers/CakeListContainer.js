import { useState } from 'react';
import CakeDisplay from '../components/CakeDisplay';
import SaleCounter from '../components/SaleCounter';

const CakeListContainer = () =>{

    const [vicSponge] = useState({
        cakeName: "Victoria Sponge",
            ingredients: [
                "eggs",
                "butter",
                "sugar",
                "self-raising flour",
                "baking powder",
                "milk"
            ],
            price: 5,
            rating: 5
    });

    const [vicSpongeSold, setVicSpongeSold] = useState(0);

    const [teaLoaf] = useState({
        cakeName: "Tea Loaf",
            ingredients: [
                "eggs",
                "oil",
                "dried fruit",
                "sugar",
                "self-raising flour",
                "strong tea",
            ],
            price: 2,
            rating: 3
    });

    const [teaLoadSold, setTeaLoafSold] = useState(0);

    const [carrotCake] = useState({
        cakeName: "Carrot Cake",
            ingredients: [
                "carrots",
                "walnuts",
                "oil",
                "cream cheese",
                "flour",
                "sugar",
            ],
            price: 8,
            rating: 5
    });

    const [carrotCakeSold, setCarrotCakeSold] = useState(0);

    return(
        <>  
            <div id="header">
                <h1>Cake recipes:</h1>
                <div id="stats">
                    <p>Average rating of cakes: {(vicSponge.rating + teaLoaf.rating + carrotCake.rating)/3}</p>
                    <p>Total value of cakes sold: £{vicSpongeSold*vicSponge.price + teaLoadSold*teaLoaf.price + carrotCakeSold*carrotCake.price}</p>
                </div>
             </div>

            <CakeDisplay cake={vicSponge}/>
            <SaleCounter 
                count={vicSpongeSold}
                onButtonClick={setVicSpongeSold}/>

            <CakeDisplay cake={teaLoaf}/>
            <SaleCounter 
                count={teaLoadSold}
                onButtonClick={setTeaLoafSold}/>

            <CakeDisplay cake={carrotCake}/>
            <SaleCounter 
                count={carrotCakeSold}
                onButtonClick={setCarrotCakeSold}/>
        </>
    )
}

export default CakeListContainer;