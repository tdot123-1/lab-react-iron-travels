import { useState } from "react";

const Favorites = () => {

    const favoritesArr = [];

    const [currentFavorites, setCurrentFavorites] = useState(favoritesArr)


    return (
        <div className="favorites-list">
            <h2>Favorites</h2>
            {currentFavorites.map(items => (
                
            ))}
        </div>
    )
}