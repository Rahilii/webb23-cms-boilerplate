import "../styles/style.css"
import Image from "next/image"
export default function ImageWithText({ blok }) {


     return (
    <div className="gridChild" > 
        {/* <img src={blok.image.filename} /> */}


        <Image 
  className="logo3" 
  src={blok.image.filename} 
  alt="Logo3" 
  width={200} 
  height={100} 
  priority 
/>
       
        <p className="gridTitle">{blok.title.content[0].content[0].text}</p> 
    
 <p className="gridTxt">{blok.text}</p>
 
    </div>
     )
 }
