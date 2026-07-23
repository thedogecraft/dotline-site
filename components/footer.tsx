import { Crosshair, MessageCircle, Move } from "lucide-react";
import { GithubIcon } from "@/components/icons/github-icon";
import DiscordIcon from "./icons/discord-icon";
import ParcoilIcon from "./icons/parcoil-icon";
import { Logo } from "./icons/logo";

export function Footer() {
  return (
    <footer className="border-t border-border px-4 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
        <div className="flex items-center gap-2.5">
          <Logo className="size-5 text-primary" />
          <span className="text-base font-semibold">dotline</span>
        </div>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
          <a
            href="https://github.com/Parcoil/dotline"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            <GithubIcon className="size-4" />
            GitHub
          </a>
          <a
            href="https://discord.com/invite/En5YJYWj3Z"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            <DiscordIcon className="size-4" />
            Discord
          </a>
          <a
            href="https://parcoil.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            <ParcoilIcon className="size-4" />
            Parcoil
          </a>
        </div>
        <p className="text-xs text-muted-foreground/60">
          &copy; {new Date().getFullYear()} Parcoil. Open-source under the
          GPL-3.0 license.
        </p>
      </div>
    </footer>
  );
}
