
import './App.css'
import General from "./Components/General/General.jsx";
import XpTravail from "./Components/ExperienceTravail/XpTravail.jsx";
import XpEcole from "./Components/ExperienceEcole/XpEcole.jsx";

function App() {

return(
    <>
        <h1 className='titre'>C.V J.C</h1>
        <General/>
        <XpTravail/>
        <XpEcole/>
    </>
)

}

export default App
