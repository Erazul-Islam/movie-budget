const Cart = ({selectedActors,remaining,totalCost}) => {
    // eslint-disable-next-line react/prop-types
    console.log(selectedActors)
    return (
        <div>
            <h1>Total actor: {selectedActors.length}</h1>
            <h5>remaining: {remaining}</h5>
            <h5>TotalCost: {totalCost}</h5>
            {
                selectedActors.map((actor)=>(
                    <li key={actor.id}>{actor.name}</li>
                ))
            }
        </div>
    );
};

export default Cart;