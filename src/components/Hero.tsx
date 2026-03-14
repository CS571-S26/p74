import heroImg from '../assets/hero.jpg'

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-white">
            {/* Background subtle blobs */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-60 -translate-x-1/3 -translate-y-1/3" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-50 rounded-full blur-3xl opacity-80 translate-x-1/4 translate-y-1/4" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                {/* Left: Text content */}
                <div className="flex-1 text-center lg:text-left">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 font-display">
                        <span className="text-blue-400">Dr. Trang Eye Clinic</span>
                        {' '} - Caring for your eyes with all our heart
                    </h1>
                    <p className="text-gray-500 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10 font-vietnam-pro font-thin">
                        We not only provide comprehensive examination and treatment services for eye diseases
                        with high professional expertise and advanced techniques, but also with the enthusiasm and
                        dedication of our medical professionals.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <a
                            href="#"
                            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold text-base px-8 py-4 rounded-full shadow-lg shadow-blue-200 transition-all duration-200"
                        >
                            Đặt lịch hẹn
                        </a>
                        <a
                            href="#"
                            className="inline-block border border-gray-300 hover:border-blue-400 text-gray-700 hover:text-blue-600 font-semibold text-base px-8 py-4 rounded-full transition-all duration-200 hover:bg-blue-50"
                        >
                            Tìm hiểu thêm
                        </a>
                    </div>
                </div>

                {/* Right: Image */}
                <div className="flex-1 w-full max-w-xl lg:max-w-none">
                    <div className="relative">
                        <div className="absolute -inset-3 rounded-3xl bg-blue-100 blur-xl opacity-70" />
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-100 border border-blue-50">
                            <img
                                src={heroImg}
                                alt="MEC medical team"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};