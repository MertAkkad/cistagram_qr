import './globals.css';

export const metadata = {
    title: 'Cistagram',
    description: 'Cistagram işletmesi için basit menü ve bağlantılar',
};

export default function RootLayout({ children }) {
    return (
        <html lang="tr">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
                <meta name="theme-color" content="#0f0f10" />
            </head>
            <body>
                <div className="container">
                    {children}
                </div>
            </body>
        </html>
    );
}


