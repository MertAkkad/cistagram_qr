export const CATEGORIES = [
    {
        slug: 'icecekler',
        title: 'İçecekler',
        image: '/images/1.png'
    },
    {
        slug: 'sandvicler',
        title: 'Sandviçler',
        image: '/images/sandvicler.jpg'
    },
    {
        slug: 'burgerler',
        title: 'Burgerler',
        image: '/images/burgerler.jpg'
    }
];

// For each category, you can host Canva-exported images in /public or remote URLs
export const CATEGORY_PAGES = {
    icecekler: [
        { src: '/images/1.png', alt: 'İçecekler 1' },
        { src: '/images/menus/icecekler-2.jpg', alt: 'İçecekler 2' }
    ],
    sandvicler: [
        { src: '/images/2.png', alt: 'Sandviçler 1' }
    ],
    burgerler: [
        { src: '/images/3.png', alt: 'Burgerler 1' }
    ]
};


