import ComicCard from "@/components/ComicCard"

const comics = [
  {
    title: "The Shadow Realm",
    description: "A hero battles forces from another world.",
    price: "$12.99",
  },
  {
    title: "Cosmic Warriors",
    description: "A team of heroes protects the galaxy.",
    price: "$9.99",
  },
];

export default function Comics() {
    return (
        <main>
            <h1>My Comics</h1>
            <p>Explore my comic books and graphic art.</p>

            {comics.map((comic) => (
                <ComicCard 
                    key={comic.title}
                    comic={comic} 
                />
            ))}

        </main>
    )
}