import PaintingInfo from "./PaintingInfo"

const Painting = (props) => {
    console.log(props.art)
    return(<div>
        <img src={props.art.image} />
        <PaintingInfo artInfo = {props.art} />
        {/* <PaintingInfo artist={props.art.artist.name} title={props.art.title} /> */}
    </div>)
}

export default Painting