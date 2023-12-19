import Link from 'next/link'
import './header.css'

export default function Header(){
    return(
        <header className="header">
            <nav>
                <ul className="header-list">
                    <li>
                        <Link className='header-link' href={"/film"}>
                        Filmes
                        </Link>
                    </li>
                    <li>
                    <Link className='header-link' href={"/series"}>
                        Séries
                        </Link>
                    </li>
                </ul>
            </nav>
                <Link className='header-link' href={"/"}><h1>Diego <span className='subtitle-logo'>max</span></h1></Link>
            <nav>
                <ul className="header-list">
                    <li>
                    <Link className='header-link' href={"/login"}>
                        Entrar
                    </Link>
                    </li>
                    <li>
                    <Link className="singup" href={"/singup"}>
                        Assinar
                    </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}