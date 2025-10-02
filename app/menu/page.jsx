import Link from 'next/link';
import Image from 'next/image';
import { CATEGORIES } from '../../config/menu';

export const metadata = { title: 'Menü | Cistagram' };

export default function MainMenuPage() {
    return (
        <main className="page">
            <Link href="/" className="btn">Girişe dön</Link>
            <h2>Menü</h2>
            <div className="cards">
                {CATEGORIES.map((cat) => (
                    <Link key={cat.slug} href={`/menu/${cat.slug}`} className="card">
                        <div className="card-image">
                            <Image src={cat.image} alt={cat.title} fill sizes="(max-width: 700px) 100vw, 50vw" />
                        </div>
                        <div className="card-title">{cat.title}</div>
                    </Link>
                ))}
            </div>
        </main>
    );
}


