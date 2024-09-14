import Link from 'next/link';
import "../styles/style.css"

export default function Header({ config }) {
  
    // if (!config) {
    //   console.log("finns ej")
    
    // }
    // else{
    //   console.log("config finns");
    //   console.log(config);
    const configContent = config.content;
    const logotype = configContent?.logo?.filename;



    return (
        <header className="navbar">
            {logotype && <img src={logotype} alt="Logo" className="logo" />}

            <nav className="navLinksContainer">
                {configContent?.nav?.map((storylink, index) => (
                    <Link key={index} href={`/${storylink.link.story.slug}`}>
                        <p className="nav-link"> {storylink.link.story.name}</p>
                    </Link>
                ))}
            </nav>
        </header>
    );
}
