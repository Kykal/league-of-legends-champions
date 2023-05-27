//NextJS
import { Roboto } from 'next/font/google'
export const metadata = {
  title: 'League of Legends Champions Data',
  description: 'Preview your favourite League of Legend champion\'s skin! Learn about them, their skills, history, cost and more!',
};


//Styles
import './globals.css'
const roboto = Roboto({
  subsets: ['latin'],
  weight: '500',
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
