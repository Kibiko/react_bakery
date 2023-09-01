import { useState } from 'react';
import CakeDisplay from '../components/CakeDisplay';
import SaleCounter from '../components/SaleCounter';

const CakeListContainer = () =>{

    const [vicSponge, setVictoriaSponge] = useState({
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

    const [teaLoaf, setTeaLoaf] = useState({
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

    const [carrotCake, setCarrotCake] = useState({
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

    const avgRating = (vicSponge.rating + teaLoaf.rating + carrotCake.rating)/3;

    const totalValueSold = vicSpongeSold*vicSponge.price + teaLoadSold*teaLoaf.price + carrotCakeSold*carrotCake.price;

    return(
        <>  
            <div id="header">
                <h1>Cake recipes:</h1>
             </div>

            <div id="cakes">
                <div id="cake">
                    <CakeDisplay cake={vicSponge}/>
                    <SaleCounter 
                        count={vicSpongeSold}
                        onButtonClick={setVicSpongeSold}/>
                </div>
                <div id="cake">
                    <CakeDisplay cake={teaLoaf}/>
                    <SaleCounter 
                        count={teaLoadSold}
                        onButtonClick={setTeaLoafSold}/>
                </div>
                <div id="cake">
                    <CakeDisplay cake={carrotCake}/>
                    <SaleCounter 
                        count={carrotCakeSold}
                        onButtonClick={setCarrotCakeSold}/>
                </div>
            </div>

            <div id="stats">
                    <p>Average rating of cakes: {avgRating}</p>
                    <p>Total value of cakes sold: £{totalValueSold}</p>
            </div>
        </>
    )
}

export default CakeListContainer;