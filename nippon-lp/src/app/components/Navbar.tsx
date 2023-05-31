import Link from "next/link"
import '../assets/main.css'

export default function Navbar() {
    return (
        <nav>
            <ul>
                <Link className="left-anchor" href={'/'}>
                    <h2 id="logo">Nippon 🍥</h2>
                </Link>
                <Link href={'/markdown'}>O que é Markdown?</Link>
                <Link href={'/contribuir'}>Contribuir</Link>
                <Link href={'https://github.com/thomalmeidard'}>Open source</Link>
            </ul>
        </nav>
    )
} 