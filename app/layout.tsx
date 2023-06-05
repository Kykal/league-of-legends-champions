//NextJS
import { Roboto } from 'next/font/google'
import { Metadata } from 'next';
import sharedMetadata from './shared-metadata';


export const metadata: Metadata = sharedMetadata;


//Styles
import './globals.css'
const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
});


//Components
import HeaderNavbar from '@/components/Header';


//Typings
type RootLayout = {
  children: JSX.Element;
};


export default function RootLayout({ children }: RootLayout) {

  const background: string = 'bg-dark-blue';
  const text: string = 'text-custom-white';
  const position: string = 'relative';
  const display: string = 'flex flex-col';

  return (
    <html lang="en">
      <body
        className={`${roboto.className} ${background} ${text} ${position} ${display}`}
      >
        <HeaderNavbar />
        {children}
      </body>
    </html>
  );
};
