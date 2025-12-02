export default function Footer() {
    return (
        <footer className="bg-neo-black text-neo-white py-12 border-t-3 border-neo-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <h2 className="text-5xl font-black uppercase tracking-tighter mb-2">DORKSENSE</h2>
                        <p className="font-mono text-neo-accent">© 2025 RAW POWER INC.</p>
                    </div>

                    <div className="flex gap-6">
                        {['INSTA', 'TWITTER', 'GITHUB'].map((social) => (
                            <a key={social} href="#" className="text-xl font-bold hover:text-neo-primary hover:underline decoration-4 underline-offset-4 uppercase">
                                {social}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="mt-12 text-center font-mono text-sm text-gray-400">
                    BUILT WITH CHAOS AND NEXT.JS
                </div>
            </div>
        </footer>
    );
}
