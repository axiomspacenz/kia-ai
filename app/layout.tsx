import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import {
  ClerkProvider,
} from "@clerk/nextjs";

const raleway = Raleway({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ArtifiQ | AI Photo Editor",
  description: "Unleash your creative potential with ArtifiQ - a powerful tool that empowers you to take your digital artistry to the next level. With this advanced AI tool, you can seamlessly restore images, resize them, remove unwanted objects, recolor elements, and even fill images with generative fill. Get ready to turn your artistic vision into reality with ArtifiQ!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      variables: { colorPrimary: "#03A09B" }
    }}>
      <html lang="en">
        <body className={raleway.className}>
          {children}
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}