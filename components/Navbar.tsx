import Link from "next/link";


const links = [
    {
        name: "Home",
        path: '/',
    },
    {
        name: "Comics",
        path: '/comics',
    },
    {
        name: "Gallery",
        path: '/gallery'
    },
    {
        name: "Contact",
        path: '/contact'
    },
];

export default function Navbar() {
    return(
        <nav className="flex justify-between items-center p-4 bg-gray-900 text-white">
            <h2>My Cousin's <br />Comic Studio</h2>
            
            <ul className="flex gap-8">
                {links.map((link) => (
                    <li key={link.name}>
                        <Link
                            className="text-white hover:text-gray-400"
                            href={link.path}
                        >
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
            
        </nav>
    );
}