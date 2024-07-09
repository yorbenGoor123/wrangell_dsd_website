import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./containers/header/Header";
import Animation from "./components/animation/Animation";
import animationDataLogo from "./components/animation/logo_wrangell.json";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wrangell-dsd",
  description: "An Insightful And Creative Developer With A Robust Ambition To Learn New Ideas And Concepts Across A Range Of Related Disciplines. My Passion Extends To Various Fields, Including Machine Learning, Robotics, Artificial Intelligence, And Game Development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Oswald"
          rel="stylesheet"
        ></link>
      </head>
      <body className={inter.className}>
        <div className="logo_animation">
          <Animation animationData={animationDataLogo} />
        </div>
        <main className="min-h-screen">
          <Header />
          <div className="content_container_wrapper">
            <div className="content_container">{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
