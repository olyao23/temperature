import Temperature from "../Temperature/Temperature";
import {useState} from "react";

export default function Card() {

    const [temperature, setTemperature] = useState(10);

    return (
        <div style={{
            backgroundColor: "#2F566C",
            width: "300px",
            height: "360px",
            borderRadius: "20px",
            boxShadow: "2px 2px 10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <button
                style={{
                    color: "white",
                    borderRadius: "50%",
                    border: "2px solid white",
                    fontSize: "50px",
                    padding: "70px",
                    marginTop: "10px",
                    backgroundColor: temperature > 15 ? "#F65600" : "#195BA3"
                }}>{temperature}C
            </button>
            <div>
                <Temperature
                    innerText="+"
                    onClickChangeTemperature={() => setTemperature(temperature + 1)}
                />
                <Temperature
                    innerText="-"
                    onClickChangeTemperature={() => setTemperature(temperature - 1)}
                />
            </div>
        </div>
    )
}