import "../styles/style.css"


import ImageWithText from "./ImageWithText";
export default function Grid({ blok }) {



    return (
       <div className="gridContainer">

       {blok.columns.map((column) => (
                 <ImageWithText key={column._uid} blok={column} />
                ))}

       </div>
    )
}