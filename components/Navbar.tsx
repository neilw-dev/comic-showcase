import Link from "next/link";

export default function Navbar() {
    return(
        <nav className="flex justify-between items-center p-4 bg-gray-900 text-white">
            <h2>My Cousin's <br />Comic Studio</h2>
            
            <ul className="flex gap-8">
                <li>
                    <Link className="hover:text-gray-400" href="/">Home</Link>
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