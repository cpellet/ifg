import Footer from "../components/footer"
import Navbar from "../components/navbar"

import { StarIcon } from '@heroicons/react/20/solid'

const products = [
    {
        id: 1,
        name: 'Novo Nordisk',
        imageSrc: 'pitch1.png',
        imageAlt: 'TODO',
        date: '2024-01-17',
        datetime: '2024-01-17',
        href: 'Novo Nordisk Stock Pitch.pdf'
    },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}
export default function PitchesPage() {
    return (
        <main>
            <Navbar dark={false} />
            <div className="bg-white pt-32">
                <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
                    <div className="mx-auto max-w-2xl">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Stock pitches</h2>
                        <p className="mt-4 text-lg leading-8 text-gray-600">
                            Discover the stock pitches presented by our members.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-2 border-l border-gray-200 md:grid-cols-3 lg:grid-cols-4 mt-12 mx-12">
                    {products.map((post) => (
                        <article
                            key={post.id}
                            className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
                        >
                            <img src={post.imageSrc} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
                            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                            <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                            <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                                <time dateTime={post.datetime} className="mr-8">
                                    {post.date}
                                </time>
                            </div>
                            <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                                <a href={post.href}>
                                    <span className="absolute inset-0" />
                                    {post.name}
                                </a>
                            </h3>
                        </article>
                    ))}
                </div>
            </div>
            <Footer />
        </main >
    )
}