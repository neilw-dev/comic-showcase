import Link from "next/link";

export default function Navbar() {
    return(
        <nav>
            <h2>My Cousin's Comic Studio</h2>
            
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>

                <li>
                    <Link href="/comics">Comics</Link>
                </li>

                <li>
                    <Link href="/gallery">Gallery</Link>
                </li>

                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
            
        </nav>
    );
}