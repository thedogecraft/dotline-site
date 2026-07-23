import { Crosshair, Download, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import DiscordIcon from "./icons/discord-icon";
import { Logo } from "./icons/logo";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <div className="flex items-center gap-2.5">
          <Logo className="size-6 text-primary" />
          <span className="text-lg font-semibold tracking-tight">dotline</span>
        </div>
        <nav className="hidden items-center gap-1 text-sm font-medium text-muted-foreground sm:flex">
          <a
            href="#features"
            className="rounded-md px-3 py-1.5 transition-colors hover:text-foreground"
          >
            Features
          </a>
          <a
            href="#games"
            className="rounded-md px-3 py-1.5 transition-colors hover:text-foreground"
          >
            Games
          </a>
          <a
            href="#download"
            className="rounded-md px-3 py-1.5 transition-colors hover:text-foreground"
          >
            Download
          </a>
          <a
            href="https://github.com/Parcoil/dotline"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md px-3 py-1.5 transition-colors hover:text-foreground"
          >
            GitHub
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            render={
              <a
                href="https://discord.com/invite/En5YJYWj3Z"
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            <DiscordIcon className="size-4 mr-1" />
            Discord
          </Button>
          <Button size="sm" render={<a href="#download" />}>
            <Download className="size-4 mr-1" />
            Download
          </Button>
        </div>
      </div>
    </header>
  );
}
