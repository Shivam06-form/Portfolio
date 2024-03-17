import { useEffect, useState } from 'react'
import './Clock.css'

const Clock = () => {

    const [time, setTime] = useState({ Seconds: 0, Minutes: 0, Hours: 0 })

    useEffect(() => {
        setInterval(() => {
            const DATE = new Date()
            setTime({ ...time, Seconds: DATE.getSeconds() * 6, Minutes: DATE.getMinutes() * 6, Hours: ((DATE.getHours() * 30) + (DATE.getMinutes() * 0.5)) })
        }, 1000)
    }, [time.Hours])

    return (
        <div className='clock'>
            <div className='Wallclock'>
                <div className='clockNumbers'><div>12</div><div>6</div></div>
                <div className='clockNumbers2'><div>9</div><div>3</div></div>
                <div className='clockNumbers2' style={{ transform: "rotateZ(30deg)" }}><div>10</div><div>4</div></div>
                <div className='clockNumbers2' style={{ transform: "rotateZ(-30deg)" }}><div>8</div><div>2</div></div>
                <div className='clockNumbers2' style={{ transform: "rotateZ(-60deg)" }}><div>7</div><div>1</div></div>
                <div className='clockNumbers2' style={{ transform: "rotateZ(60deg)" }}><div>11</div><div>5</div></div>
                <div className='HourHand' style={{ transform: `rotateZ(${time.Hours}deg)` }}><div></div></div>
                <div className='MinuteHand' style={{ transform: `rotateZ(${time.Minutes}deg)` }}>
                    <div></div>
                </div>
                <div className='SecondHand'
                    style={{ transform: `rotateZ(${time.Seconds}deg)` }}
                >
                    <div></div>
                </div>
            </div>
        </div>
    )
}



export default Clock