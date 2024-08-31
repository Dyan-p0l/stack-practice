import {useState} from 'react';

export function ColorPicker () {

    const [color, setColor] = useState('#FFFFFF');


    return(
        <>
            <div className="color-picker-cont">
                <h1 className='h1-text'>COLOR PICKER</h1>
                <div className="color-display" style={{backgroundColor: color}}>
                    <p className='text-in'>Selected Color: {color}</p>
                </div>
                <label>Select a Color: </label>
                <input className='selector-color' type="color" value={color} onChange={(e) => setColor(e.target.value)}/>
            </div>
        </>
    );
}
