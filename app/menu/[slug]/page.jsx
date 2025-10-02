import Image from 'next/image';
import Link from 'next/link';
import { CATEGORIES, CATEGORY_PAGES } from '../../../config/menu';

export function generateStaticParams() {
    return CATEGORIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
    const cat = CATEGORIES.find((c) => c.slug === params.slug);
    return { title: `${cat ? cat.title : 'Menü'} | Cistagram` };
}

export default function CategoryPage({ params }) {
    const cat = CATEGORIES.find((c) => c.slug === params.slug);
    const pages = CATEGORY_PAGES[params.slug] || [];

    if (!cat) {
        return (
            <main className="page">
                <p>Kategori bulunamadı.</p>
                <Link href="/menu" className="btn">Geri dön</Link>
            </main>
        );
    }

    return (
        <main className="page">
            <h2>{cat.title}</h2>
            <div className="image-list">
                {pages.map((img, idx) => (
                    <div className="image-item" key={idx}>
                        <Image src={img.src} alt={img.alt} width={1200} height={1600} className="menu-image" sizes="100vw" />
                    </div>
                ))}
            </div>
            <Link href="/menu" className="btn">Tüm kategoriler</Link>
        </main>
    );
}


