import React, { useState } from 'react';
import './outfits.css';

import trashIcon from '../assets/trash-icon.PNG';
import likeBlueIcon from '../assets/like-blue.PNG';
import likeGreyIcon from '../assets/like-grey.PNG';

const ClosetGrid = () => {
  const outfits = ['Outfit 1', 'Outfit 2', 'Outfit 3', 'Outfit 4', 'Outfit 5', 'Outfit 6', 'Outfit 7', 'Outfit 8', 'Outfit 9', 'Outfit 10', 'Outfit 11', 'Outfit 12']; 

  const [like, setLike] = useState(Array(outfits.length).fill(false)); // Crea el estado like

  const handleLike = index => {
    const newLike = [...like];
    newLike[index] = !newLike[index];
    setLike(newLike);
  };

  return (
    <div className="closet-container">
      <button className="add-clothes-button">Add Clothes</button>
      <div className="outfit-container">
        {outfits.map((outfit, index) => (
          <div key={index} className="outfit-item">
            {outfit}
            <img src={trashIcon} alt="delete" style={{ position: 'absolute', bottom: 10, right: 50 }} /> 
            <button className="update-button" style={{ position: 'absolute', bottom: 10, left: 10 }}>Update</button>
            <img src={like[index] ? likeBlueIcon : likeGreyIcon} alt="save" style={{ position: 'absolute', bottom: 10, right: 10 }} onClick={() => handleLike(index)} /> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClosetGrid;
