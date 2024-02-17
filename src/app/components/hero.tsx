import Navbar from './navbar';

export default function Hero() {
    return (
        <>
            <div className="bg-gray-900">
                <Navbar dark={true} />
                <div className="relative isolate overflow-hidden pt-14 h-screen">
                    <img
                        src="/insead.jpg"
                        alt=""
                        className="absolute inset-0 -z-10 h-full w-full object-cover"
                        style={{
                            filter: 'brightness(0.3) blur(5px)',
                        }}
                    />
                    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-60">
                        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
                                Announcing our first stock pitches.{' '}
                                <a href="/pitches" className="font-semibold text-white">
                                    <span className="absolute inset-0" aria-hidden="true" />
                                    Read more <span aria-hidden="true">&rarr;</span>
                                </a>
                            </div>
                        </div>
                        <div className="text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mx-12">
                                Discover Finance the INSEAD way
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-300 mx-12">
                                The INSEAD Finance Group is committed to delivering premier education and professional exposure to our students, all while highlighting the exceptional financial skills of our community
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <a href="#about-section" className="text-sm font-semibold leading-6 text-white">
                                    Learn more <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                        aria-hidden="true"
                    >
                        <div
                            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
