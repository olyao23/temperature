import {useState} from "react";


export default function Temperature({innerText, onClickChangeTemperature}) {

    const [backgroundColor, setBackgroundColor] = useState("#5F5F5E");


    return (
        <button style={{
            backgroundColor: backgroundColor,
            padding: "20px 30px",
            cursor: "pointer",
            color: "white",
            border: "2px solid white",
            fontSize: "30px",
            borderRadius: "50%",
            margin: "30px 20px 20px 20px"
        }
        }
                onClick={onClickChangeTemperature}
                onMouseOver={() => setBackgroundColor("#A1A1A0")}
                onMouseLeave={() => setBackgroundColor("#5F5F5E")}>{innerText}</button>
    );
}