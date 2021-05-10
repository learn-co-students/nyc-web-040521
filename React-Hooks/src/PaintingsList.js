import Painting from "./Painting"

const PaintingsList = (props) => {
    return(<div>
        {props.allPaintings.map(painting => 
        <Painting key={painting.id} painting={painting} />)}
    </div>)
}

export default PaintingsList