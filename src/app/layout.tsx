import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Capriola, Love_Ya_Like_A_Sister } from "next/font/google";
import HeaderContainer from "@/components/Header/HeaderContainer";
import FooterContainer from "@/components/Footer/FooterContainer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

//ts-ignore - Capriola is not a module
//eslint-disable-next-line @typescript-eslint/ban-ts-comment
const capriola = Capriola({
    weight: '400',
    variable: '--font-headers',
    subsets: ['latin'],
});

const loveYaLikeASister = Love_Ya_Like_A_Sister({
    weight: '400',
    variable: '--font-subheaders',
    subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <head>
          <link rel="stylesheet" href="/fonts/font-awesome/css/all.css"/>
          <link rel="stylesheet" href="/fonts/font-awesome/css/brands.css"/>
          <link rel="stylesheet" href="/fonts/font-awesome/css/fontawesome.css"/>
          <link rel="stylesheet" href="/fonts/font-awesome/css/regular.css"/>
          <link rel="stylesheet" href="/fonts/font-awesome/css/solid.css"/>
          <link rel="stylesheet" href="/fonts/font-awesome/css/v4-shims.css"/>
          <link rel='stylesheet' id='booba-google-fonts-css'
                href='//fonts.googleapis.com/css?family=Capriola:400%7CLove+Ya+Like+A+Sister:400&#038;subset=latin'
                type='text/css' media='all'/>

          <link rel='stylesheet' id='booba-google-fonts-css'
                href='//fonts.googleapis.com/css?family=Capriola:400%7CLove+Ya+Like+A+Sister:400&#038;subset=latin'
                type='text/css' media='all'/>
          <link rel='stylesheet' id='google-fonts-1-css'
                href='https://fonts.googleapis.com/css?family=Source+Code+Pro%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CCapriola%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CLove+Ya+Like+A+Sister%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&#038;display=auto&#038;ver=6.3.5'
                type='text/css' media='all'/>

          <link rel="https://api.w.org/" href="https://brainybunnies.com.au/wp-json/"/>
          <link rel="alternate" type="application/json" href="https://brainybunnies.com.au/wp-json/wp/v2/pages/32647"/>
          <link rel="EditURI" type="application/rsd+xml" title="RSD"
                href="https://brainybunnies.com.au/xmlrpc.php?rsd"/>
          <meta name="generator" content="WordPress 6.3.5"/>
          <meta name="generator" content="WooCommerce 8.1.1"/>
          <link rel='shortlink' href='https://brainybunnies.com.au/'/>
          <link rel="alternate" type="application/json+oembed"
                href="https://brainybunnies.com.au/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fbrainybunnies.com.au%2F"/>
          <link rel="alternate" type="text/xml+oembed"
                href="https://brainybunnies.com.au/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fbrainybunnies.com.au%2F&#038;format=xml"/>
          <meta name="tec-api-version" content="v1"/>
          <meta name="tec-api-origin" content="https://brainybunnies.com.au"/>
          <link rel="alternate" href="https://brainybunnies.com.au/wp-json/tribe/events/v1/"/>
          <link rel="icon" href="/favicon.ico" sizes="any"/>
      </head>
      <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <HeaderContainer />
        <main className="container mx-auto px-8 mt-8">{children}</main>
      <FooterContainer />
      </body>
      </html>
  );
}
