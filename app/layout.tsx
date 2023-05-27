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
  return (
    <html lang="en">
      <body
        className={`${roboto.className} bg-dark-blue text-custom-white`}
      >
        <HeaderNavbar />
        {children}
      </body>
    </html>
  );
};
