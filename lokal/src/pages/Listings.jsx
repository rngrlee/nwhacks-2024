import Navbar from "../Navbar"
import Calendar from "../components/Calendar"

export default function Listings() {
    return (
        <div>
            <h1>What are you looking for?</h1>
            <div>I need a...</div>
            <button>Home <br /> Caretaker</button><button>Pet <br /> Caretaker</button>
            <div>from...</div>
            <button>start date</button> to <button>end date</button>
            <Calendar />
            <div className="slider">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <button>save & exit</button> <button>2. Add Tasks</button>
            <Navbar />
        </div>
    )
}
