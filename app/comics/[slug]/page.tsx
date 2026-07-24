import Image from "next/image";
import { comics } from "@/lib/comics"
import Link from "next/link";

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
        <main className="max-w-6xl mx-auto p-6">
            <Link
                href="/comics"
                className="inline-block mb-6 text-blue-600 hover:underline"
            >
              ← Back to Comics  
            </Link>
            
            <div className="bg-white rounded-xl shadow-lg p-12">
                <div className= "grid grid-col-1 md:grid-cols-3 gap-8">

                    <div className="relative h-[750px] md:col-span-2">
                        <Image
                            src={comic.image}
                            alt={comic.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 66vw"
                            className="object-over rounded-lg drop-shadow-xl"
                        />
                    </div>

                    <div className="flex flex-col justify-center items-center text-center">
                        <h1 className="text-4xl font-bold">
                            {comic.title}
                        </h1>

                        <p className="mt-4">
                            {comic.description}
                        </p>

                        <p className="mt-4 text-xl font-semibold">
                            {comic.price}
                        </p>

                        <button className="mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </main>

    );
}