
import Link from "next/link";
import Image from "next/image";
export default function Hero({ blok }) {


      return (
          <section className="hero">




<div>
<h1>{blok.title.content[0].content[0].text}</h1>
<p className="heroTxt">{blok.text}</p>


<button className="heroBtn" >{blok.button[0].label}</button>



</div>
{/* <img className="heroImg" src={blok.image.filename}/> */}


<Image 
  className="heroImg" 
  src={blok.image.filename} 
  alt="Logo" 
  width={200} 
  height={100} 
  priority 
/>

          </section>
      )
  }