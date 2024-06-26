import travelPlansData from "../assets/travel-plans.json"
import { useState } from "react";
import TravelPlanCard from "./TravelPlanCard";

const TravelList = () => {

    const [list, setList] = useState(travelPlansData);

    const deleteItem = (id) => {
        const updatedList = list.filter(item => item.id !== id);
        setList(updatedList);
    }

    return (
        <ul className="travel-list">
            {list.map(item => (
                <TravelPlanCard plan={item} key={item.id} onClick={deleteItem}/>
            ))}
        </ul>
    );
}

export default TravelList;