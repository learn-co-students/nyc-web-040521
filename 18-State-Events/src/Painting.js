import PaintingInfo from "./PaintingInfo"

const Painting = (props) => {
    // console.log(props.art)
    return(<div>
            <img src={props.art.image} />
            <PaintingInfo artInfo = {props.art} />
        </div>)
}

export default Painting