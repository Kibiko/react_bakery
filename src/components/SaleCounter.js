const SaleCounter = ({count, onButtonClick}) => {

    const sellCake = () => {
        onButtonClick(count + 1);
    }

    return(
        <>
            <p><b>Cakes sold:</b> {count}</p>
            <button onClick={sellCake}>Sell Cake</button>
        </>
    )

}

export default SaleCounter;