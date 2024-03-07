import Image from "next/image";
import Footer from "../components/footer";
import Navbar from "../components/navbar";


const people = [
    {
        name: 'Byron Luk',
        role: 'Co-Founder & President',
        country: 'Canada',
        imageUrl:
            '/byron.jpg',
        linkedinUrl: 'https://www.linkedin.com/in/byron-luk123/',
    },
    {
        name: 'Matthew Depondt',
        role: 'Co-Founder & President',
        country: 'Belgium',
        imageUrl:
            'matthew.jpeg',
        linkedinUrl: 'https://www.linkedin.com/in/matthewdepondt/',
    },
    {
        name: 'Bence Paulik',
        role: 'VP Stock Pitch',
        country: 'Hungary',
        imageUrl:
            'bence.jpeg',
        linkedinUrl: 'https://www.linkedin.com/in/bence-paulik/',
    },
    {
        name: 'Ahmad Sleiman',
        role: 'VP Educational',
        country: 'USA',
        imageUrl:
            'ahmad.jpeg',
        linkedinUrl: 'https://www.linkedin.com/in/ahmadnsleiman/',
    },
    {
        name: 'Niclas Weddigen',
        role: 'VP Educational',
        country: 'Germany',
        imageUrl:
            'niclas.jpg',
        linkedinUrl: 'https://www.linkedin.com/in/niclas-weddigen/',
    },
    {
        name: 'Elizabeth Vandeurzen',
        role: 'VP External',
        country: 'Belgium',
        imageUrl:
            'elizabeth.jpeg',
        linkedinUrl: 'https://www.linkedin.com/in/elisabethvandeurzen/',
    },
    {
        name: 'Eliott Even',
        role: 'VP External',
        country: 'France / Spain',
        imageUrl:
            'eliott.jpeg',
        linkedinUrl: 'https://www.linkedin.com/in/eliott-even/',
    },
    {
        name: 'Indra Otgonbaatar',
        role: 'VP Events',
        country: 'Mongolia',
        imageUrl:
            'indra.jpeg',
        linkedinUrl: 'https://www.linkedin.com/in/indraotgonbaatar/',
    },
    {
        name: 'Guillaume Lüber',
        role: 'VP Events',
        country: 'Switzerland',
        imageUrl:
            'guillaume.jpeg',
        linkedinUrl: 'https://www.linkedin.com/in/guillaume-luber/',
    }
]

export default function LeadershipPage() {
    return (
        <main>
            <Navbar dark={false} />
            <div className="bg-white pt-32">
                <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
                    <div className="mx-auto max-w-2xl">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our team</h2>
                        <p className="mt-4 text-lg leading-8 text-gray-600">
                            We’re a dynamic group of individuals who are passionate about what we do.
                        </p>
                    </div>
                    <ul
                        role="list"
                        className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
                    >
                        {people.map((person) => (
                            <li key={person.name}>
                                <div className="mx-auto h-56 w-56" style={{ position: "relative" }}>
                                    <Image src={person.imageUrl} alt={person.name} fill className="rounded-full" style={{
                                        objectFit: "cover",
                                    }} />
                                </div>
                                <h3 className="mt-6 text-lg font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                                <p className="text-md leading-6 text-gray-600">{person.role}</p>
                                <p className="text-sm leading-6 text-green-700">{person.country}</p>
                                <ul role="list" className="mt-6 flex justify-center gap-x-6">
                                    <li>
                                        <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                                            <span className="sr-only">LinkedIn</span>
                                            <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <Footer />
        </main>
    );
}