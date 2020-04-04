import React from 'react';
import Card from './Card';



const CardList = ({robots}) => {
    
    return <div className="tc">
                {
                     robots.map((user, i) => 
                     {
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
            </div>;
}

export default CardList;


/**This constant Cardlist is used to map the amount of users located in 
     * robots.js and reiterates the array of each user.
     * key prop should have something that doesn't change. For example, index
     * (or i in our case) could change if array items get moved. So a better key in this case
     * would be something unique like id.
     * 
     * Cardlist is a pure function in the sense that it receives an input and always
     * returns the same output (pure components)
     */