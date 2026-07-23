import {
  Download,
  Palette,
  Layers,
  Settings,
  ExternalLink,
  Check,
  X,
  Share,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { GithubIcon } from "@/components/icons/github-icon";
import { Logo } from "@/components/icons/logo";
import { DownloadButton } from "@/components/download-button";

const BASE_PATH = "/dotline";

const FEATURES = [
  {
    icon: Palette,
    title: "Full Customization",
    description:
      "Adjust color, opacity, thickness, length, gap, rotation, outlines, and center dots.",
  },
  {
    icon: Layers,
    title: "Built-in Presets",
    description:
      "10+ community presets like Green Classic, Tactical Orange, and Sniper Blue ready to use.",
  },
  {
    icon: Settings,
    title: "Crosshair Editor",
    description:
      "A dedicated editor with live preview, library management, and import/export via .dotline files.",
  },
  {
    icon: Share,
    title: "Share Crosshairs with Others",
    description:
      "Export your crosshair setup and share it with friends or the community.",
  },
];

const GAMES = [
  { name: "CS2", image: "/cs2.jpg" },
  { name: "Rust", image: "/rust.png" },
  { name: "Marvel Rivals", image: "/marvelrivals.webp" },
  { name: "Minecraft", image: "/minecraft.png" },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,oklch(0.62_0.17_150/0.15),transparent)]" />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 pt-24 pb-20 text-center md:pb-28">
          {/* <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            v0.6.0 — Alpha
          </div> */}
          <div className="dark:bg-primary p-4 rounded-full bg-foreground mb-4">
            <Logo className="dark:text-white text-primary" />
          </div>
          <h1 className="mb-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            A modern <span className="text-primary">crosshair overlay</span>
          </h1>
          <p className="mb-8 max-w-xl text-lg text-muted-foreground md:text-xl">
            Customize your crosshair with 5 styles, adjustable color, opacity,
            thickness, and more. Free, open-source, and cross-platform.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <DownloadButton />
            <Button
              variant="outline"
              size="lg"
              render={
                <a
                  href="https://github.com/Parcoil/dotline"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              <GithubIcon className="size-5" />
              View on GitHub
            </Button>
          </div>
          <a
            href="#download"
            className="mt-4 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            other downloads
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-20">
        <div className="overflow-hidden rounded-xl border border-border bg-card shadow-xl">
          <Image
            src="https://raw.githubusercontent.com/parcoil/dotline/refs/heads/main/images/appscreenshot.png"
            alt="Dotline app screenshot"
            width={1200}
            height={800}
            priority
            className="w-full object-cover"
          />
        </div>
      </section>

      <section
        id="features"
        className="border-t border-border bg-muted/30 px-4 py-20"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Everything you need
            </h2>
            <p className="mx-auto max-w-lg text-muted-foreground">
              Powerful customization in a lightweight, always-on-top overlay.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-3 inline-flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <feature.icon className="size-5" />
                </div>
                <h3 className="mb-1.5 text-base font-semibold">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="games" className="px-4 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Tested with popular games
          </h2>
          <p className="mb-10 text-muted-foreground">
            Works across a wide range of FPS and competitive titles.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {GAMES.map((game) => (
              <div
                key={game.name}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium shadow-sm"
              >
                <img
                  src={`${BASE_PATH}${game.image}`}
                  alt={game.name}
                  width={20}
                  height={20}
                  className="rounded-full object-cover"
                />
                {game.name}
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            And more — any game that allows windowed fullscreen mode.
          </p>
        </div>
      </section>

      {/* Comparison */}
      <section className="border-t border-border bg-muted/30 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-3 text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Dotline vs Others
          </h2>
          <p className="mb-10 text-center text-muted-foreground">
            A quick, high-level comparison to help you choose what fits your
            needs.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {/* Dotline */}
            <div className="rounded-xl border border-primary bg-card p-6 shadow-md transition-shadow hover:shadow-lg">
              <div className="mb-4 flex items-center gap-2">
                <Image
                  src="https://raw.githubusercontent.com/parcoil/dotline/refs/heads/main/resources/dotline.png"
                  alt="Dotline"
                  width={28}
                  height={28}
                />
                <span className="text-lg font-semibold">Dotline</span>
                <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                  Open Source
                </span>
              </div>
              <p className="mb-4 text-sm text-muted-foreground">
                Community-driven, free
              </p>
              <ul className="mb-6 space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  Free &amp; open source
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  Windows, Linux &amp; macOS
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  In-app crosshair editor
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  10+ presets with deep customization
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  Import/Export configurations
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  No ads
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  Portable and installer builds
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  Auto updates
                </li>
              </ul>
              <Button
                className="w-full gap-2"
                render={
                  <a
                    href="https://github.com/Parcoil/dotline"
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                <GithubIcon className="size-4" />
                View on GitHub
              </Button>
            </div>

            {/* Crosshair X */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 flex items-center gap-2">
                <Image
                  src="https://store-images.s-microsoft.com/image/apps.28166.14083481012137053.8dd52c3f-852b-4b54-a82f-7927fdfb0143.fb58a0a2-9434-4c2b-a457-a47de9656f83"
                  alt="Crosshair X"
                  width={28}
                  height={28}
                />
                <span className="text-lg font-semibold">Crosshair X</span>
                <span className="rounded-full bg-blue-600/10 px-2 py-0.5 text-xs font-medium text-blue-600">
                  Commercial
                </span>
              </div>
              <p className="mb-4 text-sm text-muted-foreground">
                Proprietary, distributed via Steam
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <X className="mt-0.5 size-4 shrink-0 text-destructive" />
                  Paid software (proprietary)
                </li>
                <li className="flex items-start gap-2">
                  <X className="mt-0.5 size-4 shrink-0 text-destructive" />
                  Only Windows support via Steam
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  Preset library and in-app editor
                </li>
                <li className="flex items-start gap-2">
                  <X className="mt-0.5 size-4 shrink-0 text-destructive" />
                  Not open source
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  No ads
                </li>
                <li className="flex items-start gap-2">
                  <X className="mt-0.5 size-4 shrink-0 text-destructive" />
                  Requires Steam for distribution
                </li>
              </ul>
            </div>

            {/* Crosshair v2 */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 flex items-center gap-2">
                <Image
                  src="https://store-images.s-microsoft.com/image/apps.14369.13899847573165032.36bcfc47-3b27-4d4a-a723-9193b65b9ef2.92da79b2-055e-4c1b-98c6-f4d5a57e5acd"
                  alt="Crosshair v2"
                  width={28}
                  height={28}
                />
                <span className="text-lg font-semibold">Crosshair v2</span>
                <span className="rounded-full bg-blue-600/10 px-2 py-0.5 text-xs font-medium text-blue-600">
                  Commercial
                </span>
              </div>
              <p className="mb-4 text-sm text-muted-foreground">
                Proprietary, distributed via Steam
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <X className="mt-0.5 size-4 shrink-0 text-destructive" />
                  Paid software (proprietary)
                </li>
                <li className="flex items-start gap-2">
                  <X className="mt-0.5 size-4 shrink-0 text-destructive" />
                  Only Windows support via Steam
                </li>
                <li className="flex items-start gap-2">
                  <X className="mt-0.5 size-4 shrink-0 text-destructive" />
                  Small preset library, no editor
                </li>
                <li className="flex items-start gap-2">
                  <X className="mt-0.5 size-4 shrink-0 text-destructive" />
                  Not open source
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  No ads
                </li>
                <li className="flex items-start gap-2">
                  <X className="mt-0.5 size-4 shrink-0 text-destructive" />
                  Requires Steam for distribution
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-muted-foreground">
            Crosshair X, Crosshair v2, and Dotline are separate, third-party
            products. Dotline is not affiliated with or endorsed by Crosshair X
            or Crosshair v2.
          </p>
        </div>
      </section>

      <section
        id="download"
        className="border-t border-border bg-muted/30 px-4 py-20"
      >
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Get dotline
          </h2>
          <p className="mb-10 text-muted-foreground">
            Free and open-source. Available on Windows, Linux, and macOS.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h3 className="mb-1 font-semibold">Windows</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Installer &amp; portable
              </p>
              <Button
                className="w-full gap-2"
                render={
                  <a
                    href="https://github.com/Parcoil/dotline/releases/latest"
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                <Download className="size-4" />
                Download
              </Button>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h3 className="mb-1 font-semibold">Linux</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                AppImage &amp; .deb
              </p>
              <Button
                className="w-full gap-2"
                variant="outline"
                render={
                  <a
                    href="https://github.com/Parcoil/dotline/releases/latest"
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                <Download className="size-4" />
                Download
              </Button>
              <p className="mt-3 text-xs text-muted-foreground">
                Arch Linux:{" "}
                <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs select-all">
                  yay -S dotline
                </code>
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h3 className="mb-1 font-semibold">macOS</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Build from source
              </p>
              <Button
                className="w-full gap-2"
                variant="outline"
                render={
                  <a
                    href="https://github.com/Parcoil/dotline#building-from-source"
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                <ExternalLink className="size-4" />
                Instructions
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
