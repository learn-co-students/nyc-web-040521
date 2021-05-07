import Painting from "./Painting"
import { Link } from "react-router-dom"

const PaintingList = (props)  => {
    return(<div>
        <Link to="/paintings/form" > Add a Painting</Link>

        <br/>
        <button onClick={() => props.history.push("/paintings/form")}>
            Go To Form
        </button>
        {
            props.paintingsArray.map(painting => <Painting art={painting} /> )
        }
    </div>)
}

export default PaintingList