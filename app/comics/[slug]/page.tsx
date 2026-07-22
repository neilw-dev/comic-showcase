import Image from "next/image";
import { comics } from "@/lib/comics"

type ComicPageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export default async function ComicPage({ params }: ComicPageProps) {
    const { slug } = await params;

    const comic = comics.find(
        (comic) => comic.slug === slug
    );

    if (!comic) {
        return <h1>Comic not found</h1>;
    }

    return ( 
        <main className="m-4">
            <div className= "flex flex-col md:flex-row gap-8">

                <div className="relative w-full md:w-1/2 h-[500px]">
                    <Image
                        src={comic.image}
                        alt={comic.title}
                        fill
                        className="object-contain rounded-lg"
                    />
                </div>

                <div className="flex flex-col justify-center">
                    <h1 className="text-4xl font-bold">
                        {comic.title}
                    </h1>

                    <p className="mt-4">
                        {comic.description}
                    </p>

                    <p className="mt-4 text-xl font-semibold">
                        {comic.price}
                    </p>

                    <button className="mt-6 inline-block bg-blue-600 text-white px-4 p4-2 rounded-lg hover:bg-blue-500">
                        Buy Now
                    </button>
                </div>
            </div>
        </main>

    );
}