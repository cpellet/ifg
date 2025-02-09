import Image from "next/image";

export default function NotFound() {
    return (
        <main className="relative isolate min-h-screen">
            <img
                src="/insead.jpg"
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover"
                style={{
                    filter: 'brightness(0.3) blur(5px)',
                }}
            />
            <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
                <Image src="/logo.png" alt="" className="h-12 w-auto items-center mx-auto" width={100} height={100} />
                <h1 className="text-2xl font-bold tracking-tight text-white mt-4">
                    INSEAD Finance Group
                </h1>
                <p className="text-3xl font-semibold leading-8 text-white mt-24">404</p>
                <h1 className="mt-4 text-3xl font-light tracking-tight text-white sm:text-5xl">Page not found</h1>
                <p className="mt-4 text-base text-white/70 sm:mt-6">Sorry, we couldn’t find the page you’re looking for.</p>
                <div className="mt-10 flex justify-center">
                    <a href="/" className="text-sm font-semibold leading-7 text-white">
                        <span aria-hidden="true">&larr;</span> Back to home
                    </a>
                </div>
            </div>
        </main>
    )
}