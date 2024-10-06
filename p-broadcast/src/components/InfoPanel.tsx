import { useEffect, useState } from "react"

export default function InfoPanel() {

    const [timer, setTimer] = useState<string>("none");
    const [distance, setDistance] = useState<number>(0);
    const [cadence, setCadence] = useState<number>(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimer(new Date().toLocaleTimeString());
        }, 1000);

        const distance = setInterval(() => {
            setDistance((prevDistance) => prevDistance + 3);
        }, 1000)

        const cadence = setInterval(() => {
            const randomCadence = Math.floor(Math.random() * (100 - 60 + 1)) + 60;
            setCadence(randomCadence);
        }, 2000);

        return () => {
            clearInterval(timer);
            clearInterval(distance);
            clearInterval(cadence);
        }

    }, [])

    return (
        <div className="info-panel">
            <div className="timer">
                <h3>経過時間</h3>
                <p className="info-font">{timer}</p>
            </div>
            <div className="distance">
                <h3>飛行距離</h3>
                <p className="info-font">{distance.toString()} m</p>
            </div>
            <div className="cadence">
                <h3>回転数</h3>
                <p className="info-font">{cadence} rpm</p>
            </div>
        </div>
    )
}