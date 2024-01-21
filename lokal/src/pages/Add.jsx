import Navbar from "../Navbar"
import Calendar from "../components/Calendar"

export default function Add() {

    return (
        <>
            <div className="component">
                <h1 className="title">What are you looking for?</h1>
                <div className="addListing">
                    <p>I need a...</p>
                    <div className="iNeedOptions">
                        <button className="top-selection-buttons">Home <br /> Caretaker</button>
                        <button className="top-selection-buttons">Pet <br /> Caretaker</button>
                    </div>
                    <p>from...</p>
                    <div className="dateOptions">
                        <button className="top-selection-buttons">start date</button>
                        <p>to</p>
                        <button className="top-selection-buttons">end date</button>
                    </div>
                    <Calendar />
                    <div className="slider">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <a className="nextStepButtons" href="/">save & exit</a> <a href="/listings2">2. Add Tasks</a>
                </div>
            </div>
        <Navbar /> 
        </>

    )
}
