import ComicCard from "@/components/ComicCard"
import { comics } from "@/lib/comics"

export default function Comics() {
    return (
        <main className="px-8">
            <h1>My Comics</h1>
            <p>Explore my comic books and graphic art.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {comics.map((comic) => (
                    <ComicCard 
                        key={comic.title}
                        comic={comic} 
                    />
                ))}
            </div>

        </main>
    )
}