
export const Footer = () => {
    return (
        <footer className="py-12 px-6 border-t border-white/10 bg-black relative z-10">
            <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-2xl font-bold tracking-tighter">
                    Zintra<span className="text-primary">.AI</span>
                </div>

                <div className="text-sm text-gray-500">
                    © 2024 Zintra AI. All rights reserved.
                </div>

                <div className="flex gap-6">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a>
                </div>
            </div>
        </footer>
    );
};
