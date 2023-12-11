import '~/styles/globals.css';
import 'react-vertical-timeline-component/style.min.css';

import SectionContextProvider from './_context/section-context';
import ThemeContextProvider from './_context/theme-context';
import LangaugeMenu from './_components/langauge-menu';
import Navbar from './_components/navbar';
import Footer from './_components/footer';

import Providers from '../providers';

import { TRPCReactProvider } from '~/trpc/react';
import { DefaultLocale, type Locale } from '~/server/i18n.config';
import { api } from '~/trpc/server';

import { Toaster } from 'react-hot-toast';
import { headers } from 'next/headers';
import { Anonymous_Pro } from 'next/font/google';


const anonpro = Anonymous_Pro({
    weight: '400',
    subsets: ['latin'],
});

export const metadata = {
    title: 'Tilen Okretič',
    description: 'Website dedicated to showcase Tilen Okretič',
    icons: [{ rel: 'icon', url: '/favicon.ico' }],
};
 
// TODO: move the section context provider functionality inside the TRPC !
export default async function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { lang: Locale }
}) {
    await api.translator.setI18n.query({locale: params.lang});

    return (
        <html lang={params.lang ?? DefaultLocale} className="!scroll-smooth">
            <body className={`
                ${anonpro.className}
                text-gray-950
                dark:text-gray-50
                dark:text-opacity-80
                relative
                h-screen`}
            >
                <Providers>
                    <ThemeContextProvider>
                        <SectionContextProvider>
                            <Navbar />
                            <TRPCReactProvider headers={headers()}>
                                {children}
                            </TRPCReactProvider>
                            <Toaster />
                            <Footer />
                            {/**<ThemeSwitch />*/}
                        </SectionContextProvider>
                    </ThemeContextProvider>
                </Providers>
            </body>
        </html>
    );
}
