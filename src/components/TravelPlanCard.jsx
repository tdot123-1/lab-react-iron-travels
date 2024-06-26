const TravelPlanCard = ({ plan, onClick }) => {
    return (
        <li id={plan.id} className="travel-list-item">
            <img src={plan.image} alt={plan.destination}/>
            <div className="travel-info">
                <h2>{plan.destination} ({plan.days} Days)</h2>
                <p className="description">{plan.description}</p>
                <p><span>Price</span>: {plan.totalCost} €</p>
                <div className="labels-div">
                    { plan.totalCost <= 350 && <div className="label deal">Great Deal</div> }
                    { plan.totalCost >= 1500 && <div className="label">Premium</div> }
                    { plan.allInclusive && <div className="label">All Inclusive</div> }
                </div>
                <div className="buttons-div">
                    <button onClick={() => onClick(plan.id)} className="delete-btn">Delete</button>
                    <button className="favorite-btn">♡</button>
                </div>
            </div>
        </li>
    );
}

export default TravelPlanCard;