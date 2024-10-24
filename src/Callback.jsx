import React, {useState} from "react";

//child
function Callback({zetColor}) {
    const [activecolor, setActiveColor] = useState(''); // Initialize state with an empty string

    const handleChange = (e) => {
        const {value} = e.target;
        setActiveColor(value);
        zetColor(value);
    }

    return(
        <input 
        type="text" 
        id="input"
        aria-label="input"
        onChange={handleChange}
        value={activecolor}
        />
    )

}

export default Callback;
