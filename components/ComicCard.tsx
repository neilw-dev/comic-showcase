import Image from "next/image";

export default function ComicCard({ comic }) {
    return (
        <div className="border rounded-lg p-4 shadow-sm hover:shadow-lg transition">
            <div className="relative h-[800px] mb-4">
                <Image 
                    src={comic.image}
                    alt={comic.title}
                    fill
                    className="object-cover rounded-lg"
                />
            </div>
            <h2>{comic.title}</h2>
            <p>{comic.description}</p>
            <p>{comic.price}</p>
            <button className="mt-4 bg-gray-900 text-white px-4 py-2 rounded hover:bg-green-700">
                View Comic
            </button>
        </div>
    );
}