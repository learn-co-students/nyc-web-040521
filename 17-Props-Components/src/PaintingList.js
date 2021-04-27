
// export const List = ()  => {
//     return(<div>
//         WelCome
//     </div>)
// } 

import Painting from "./Painting"

const PaintingList = (props)  => {
    // console.log(props.paintings)
    return(<div>
        {
            props.paintingsArray.map(painting => <Painting art={painting} /> )
        }
    </div>)
}

export default PaintingList