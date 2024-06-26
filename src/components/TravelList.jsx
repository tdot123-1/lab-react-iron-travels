import travelPlansData from "../assets/travel-plans.json"
import { useState } from "react";

const TravelList = () => {

    const [list, setList] = useState(travelPlansData);

    const deleteItem = (id) => {
        const updatedList = list.filter(item => item.id !== id);
        setList(updatedList);
    }

    return (
        <ul className="travel-list">
            {list.map(item => (
                <li key={item.id} className="travel-list-item">
                    <img src={item.image} alt={item.destination}/>
                    <div className="travel-info">
                        <h2>{item.destination} ({item.days} Days)</h2>
                        <p className="description">{item.description}</p>
                        <p><span>Price</span>: {item.totalCost} €</p>
                        <div className="labels-div">
                            { item.totalCost <= 350 && <div className="label deal">Great Deal</div> }
                            { item.totalCost >= 1500 && <div className="label">Premium</div> }
                            {item.allInclusive && <div className="label">All Inclusive</div>}
                        </div>
                        <button onClick={() => deleteItem(item.id)} className="delete-btn">Delete</button>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default TravelList;