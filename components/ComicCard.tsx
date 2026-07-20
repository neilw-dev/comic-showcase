



export default function ComicCard({ comic }) {
    return (
        <div>
            <h2>{comic.title}</h2>
            <p>{comic.description}</p>
            <p>{comic.price}</p>
        </div>
    );
}