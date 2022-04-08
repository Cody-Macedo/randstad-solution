import React from 'react';
import img from '../assets/svg/presentation.svg'

const Card = () => {
    return (
        <div className="card-presentation">
            <h4> Présentation </h4>
            <p>
                Random task est une startup spécialisée dans la création audio visuel, que soit du motion design ou de
                la captation, la startup s’engage à délivrer un produit de qualité. </p>
            <img src={img} alt="img"/>
            <h4> Ce qu'ils recherchent</h4>
            <p>
                Travailler pour Random task, c’est avant tout partager ses valeurs : l'entrepreneuriat, l’esprit
                d’équipe, l’exemplarité et l'authenticité. C’est être positif et passionné, accorder une place
                importante à l’écoute et prendre en compte les intérêts de tous pour avancer ensemble. </p>
        </div>
    );
};

export default Card;
