import React from 'react'

const SlotM = ({ x, y, z }) => {
    // const x = '🤭';
    // const y = '🤭';
    // const z = '😲 ';

    if (x === y && y === z) {
        return (
            <>
                <div>
                    <h1> {x} {y} {z}</h1>
                    <h1>This is Matching.</h1>
                    <hr />
                </div>
            </>
        )
    } else {
        return (
            <>
                <div>
                    <h1>{x} {y} {z}</h1>
                    <h1>This is not Matching</h1>
                    <hr />
                </div>
            </>
        )
    }
}

export default SlotM
