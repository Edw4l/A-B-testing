import React, { useEffect, useState } from 'react';

function Offer() {
    const [randomOffer, setRandomOffer] = useState('');

    useEffect(() => {
        const randomNumber = Math.random();
        if (randomNumber < 0.5) {
            setRandomOffer('a');
        } else {
            setRandomOffer('b');
        }
    }, []);

    const logOptionA = () => {
        console.log('User pressed option A');
    };

    const logOptionB = () => {
        console.log('User pressed option B');
    };

    return (
        <>
            {randomOffer === 'a' && (
                <article className="offer__a">
                    <img src="https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Sunglasses"></img>
                    <h2>Offer on sunglasses!</h2>
                    <p>Click the button below to get 30% off</p>
                    <button onClick={logOptionA}>Claim offer</button>
                </article>
            )}

            {randomOffer === 'b' && (
                <article className="offer__b">
                    <img src="https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Sunglasses"></img>
                    <h2>Limited stock left!</h2>
                    <p>Hurry & get 30% off before they're gone!</p>
                    <button onClick={logOptionB}>Get sunglasses</button>
                </article>
            )}
        </>
    );
}

export default Offer;
