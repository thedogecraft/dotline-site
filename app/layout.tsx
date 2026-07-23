import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://parcoil.com/dotline"),
  title: {
    default: "Dotline — A Modern Crosshair Overlay",
    template: "%s — Dotline",
  },
  description:
    "Dotline is a modern, cross-platform crosshair overlay for PC gaming. Customize your crosshair with 5 styles, adjustable color, opacity, thickness, and more. Free and open-source.",
  keywords: [
    "crosshair",
    "overlay",
    "gaming",
    "crosshair overlay",
    "dotline",
    "parcoil",
    "crosshair customizer",
    "fps crosshair",
    "game overlay",
  ],
  applicationName: "Dotline",
  openGraph: {
    title: "Dotline — A Modern Crosshair Overlay",
    description:
      "Dotline is a modern, cross-platform crosshair overlay for PC gaming. Customize your crosshair with 5 styles, adjustable color, opacity, thickness, and more. Free and open-source.",
    url: "https://parcoil.com/dotline",
    siteName: "Dotline",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://raw.githubusercontent.com/parcoil/dotline/refs/heads/main/resources/dotline.png",
        width: 512,
        height: 512,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Dotline — A Modern Crosshair Overlay",
    description:
      "Dotline is a modern, cross-platform crosshair overlay for PC gaming. Customize your crosshair with 5 styles, adjustable color, opacity, thickness, and more.",
    images: [
      "https://raw.githubusercontent.com/parcoil/dotline/refs/heads/main/resources/dotline.png",
    ],
  },
  icons: {
    icon: new URL(
      "https://raw.githubusercontent.com/parcoil/dotline/refs/heads/main/resources/dotline.png",
    ),
  },
  alternates: {
    canonical: "https://parcoil.com/dotline",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.variable} h-full antialiased dark`}
    >
      <head>
        <Script
          strategy="afterInteractive"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1565760898646999"
          crossOrigin="anonymous"
        ></Script>
        <Script
          async
          src="https://fundingchoicesmessages.google.com/i/pub-1565760898646999?ers=1"
          strategy="afterInteractive"
        />

        <Script id="google-funding-choices" strategy="afterInteractive">
          {`
            (function() {
              function signalGooglefcPresent() {
                if (!window.frames['googlefcPresent']) {
                  if (document.body) {
                    const iframe = document.createElement('iframe');
                    iframe.style = 'width: 0; height: 0; border: none; z-index: -1000; left: -1000px; top: -1000px;';
                    iframe.style.display = 'none';
                    iframe.name = 'googlefcPresent';
                    document.body.appendChild(iframe);
                  } else {
                    setTimeout(signalGooglefcPresent, 0);
                  }
                }
              }
              signalGooglefcPresent();
            })();
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col">
        {" "}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}{" "}
        </ThemeProvider>
      </body>
    </html>
  );
}
