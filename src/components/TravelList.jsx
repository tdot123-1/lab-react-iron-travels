import travelPlansData from "../assets/travel-plans.json"
import { useState } from "react";

const TravelList = () => {

    const [list, setList] = useState(travelPlansData);

    return (
        <ul>
            {list.map(item => (
                <li key={item.id} className="travel-list-item">
                    <img src={item.image} alt={item.destination}/>
                    <div className="travel-info">
                        <h2>{item.destination} ({item.days} Days)</h2>
                        <p className="description">{item.description}</p>
                        <p><span>Price</span>: {item.totalCost} €</p>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default TravelList;