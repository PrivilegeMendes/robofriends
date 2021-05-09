import React from 'react';
import Card from './Card';


const CardList = ({robots}) => {
    return (
        <div>
            {
                robots.map((user, i) => {
                    return (
                        <Card 
                        key={i} 
                        id={robots[i].id} 
                        name={robots[i].name} 
                        email={robots[i].email}
                        />
                    );
                })
            }
        </div>

    );
}

export default CardList;

// key props should have something that does not change. 
//eg "i" could change if array items get moved. 
//so a better key in this case would be something unique like id