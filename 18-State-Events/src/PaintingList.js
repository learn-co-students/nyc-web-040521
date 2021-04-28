import Painting from "./Painting"

const PaintingList = (props)  => {
    return(<div>
        {
            props.paintingsArray.map(painting => <Painting art={painting} /> )
        }
    </div>)
}

export default PaintingList