import Footer from "../components/footer"
import Navbar from "../components/navbar"

import { StarIcon } from '@heroicons/react/20/solid'

const products = [
    {
        id: 1,
        name: 'Novo Nordisk',
        imageSrc: 'pitch1.png',
        imageAlt: 'TODO',
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
                    {products.map((product) => (
                        <div key={product.id} className="group relative border-b border-r border-gray-200 p-4 sm:p-6">
                            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                            <div className="pb-4 pt-10 text-center">
                                <h3 className="text-sm font-medium text-gray-900">
                                    <a href={product.href}>
                                        <span aria-hidden="true" className="absolute inset-0" />
                                        {product.name}
                                    </a>
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </main >
    )
}