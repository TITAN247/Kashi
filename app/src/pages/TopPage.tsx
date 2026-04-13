import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TopPage() {
    return (
        <div className="min-h-screen bg-[#2a1f1b] pt-24 px-4 md:px-8 text-[#f8f5f2]">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center" style={{ fontFamily: 'Playfair Display, serif' }}>
                Top Attractions
            </h1>
            <p className="text-center text-[#e6d1b1] mb-12 max-w-2xl mx-auto">
                Discover the legendary landmarks that define the spiritual essence of Kashi.
            </p>
            {/* Content will go here */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Placeholders */}
                <div className="h-64 bg-[#3d2418] rounded-lg flex items-center justify-center">Coming Soon</div>
                <div className="h-64 bg-[#3d2418] rounded-lg flex items-center justify-center">Coming Soon</div>
                <div className="h-64 bg-[#3d2418] rounded-lg flex items-center justify-center">Coming Soon</div>
            </div>
        </div>
    );
}
