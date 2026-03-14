import Stack from './Stack'

const images = [
    ["https://plus.unsplash.com/premium_photo-1677333507982-191efa209bc8?q=80&w=987&auto=format", "Eye exam"],
    ["https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=600&auto=format", "Eye care"],
    ["https://plus.unsplash.com/premium_photo-1661281397737-9b5d75b52beb?q=80&w=2069&auto=format", "Medical team"],
    ["https://images.unsplash.com/photo-1631248055158-edec7a3c072b?q=80&w=2061&auto=format", "Medical team"],
]

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-white">
            {/* Background subtle blobs */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-subtle rounded-full blur-3xl opacity-60 -translate-x-1/3 -translate-y-1/3" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-light rounded-full blur-3xl opacity-80 translate-x-1/4 translate-y-1/4" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                {/* Left: Text content */}
                <div className="flex-1 text-center lg:text-left">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 font-display">
                        <span className="text-brand">Dr. Trang Eye Clinic</span>
                        {' '} - Caring for your eyes with our heart
                    </h1>
                    <p className="text-gray-500 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10 font-vietnam-pro font-thin">
                        We not only provide comprehensive examination and treatment services for eye diseases
                        with high professional expertise and advanced techniques, but also with the enthusiasm and
                        dedication of our medical professionals.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <a
                            href="#"
                            className="inline-block bg-brand hover:bg-brand-hover text-white font-semibold text-base px-8 py-4 rounded-full shadow-lg shadow-brand-muted transition-all duration-200"
                        >
                            Book appointment
                        </a>
                        <a
                            href="#"
                            className="inline-block border border-gray-300 hover:border-brand-accent text-gray-700 hover:text-brand-hover font-semibold text-base px-8 py-4 rounded-full transition-all duration-200 hover:bg-brand-light"
                        >
                            Find out more
                        </a>
                    </div>
                </div>

                {/* Right: Image Stack */}
                <div className="flex-1 w-full">
                    <div className="relative h-[300px] lg:h-[400px]">
                        <Stack
                            cards={images.map(([src, alt]) => (
                                <img src={src} alt={alt} className="w-full h-full object-cover" draggable={false} />
                            ))}
                            randomRotation
                            sensitivity={150}
                            sendToBackOnClick
                            autoplay
                            autoplayDelay={2500}
                            pauseOnHover
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
