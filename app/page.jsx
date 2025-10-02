import Link from 'next/link';
import { LINKS } from '../config/links';

export default function HomePage() {
    return (
        <main className="centered home-hero">
            <h1 className="brand">Cistagram</h1>
            <div className="grid">
                <Link href="/menu" className="btn primary">Menü</Link>
                <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" className="btn">Instagram</a>
                <a href={LINKS.location} target="_blank" rel="noopener noreferrer" className="btn">Konum</a>
            </div>
        </main>
    );
}


