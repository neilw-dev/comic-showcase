import ComicCard from "@/components/ComicCard"

const comics = [
  {
    title: "The Shadow Realm",
    description: "A hero battles forces from another world.",
    price: "$12.99",
    image: "/images/shadow.jpg",
  },
  {
    title: "Cosmic Warriors",
    description: "A team of heroes protects the galaxy.",
    price: "$9.99",
    image: "/images/cosmic.jpg",
  },
];

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