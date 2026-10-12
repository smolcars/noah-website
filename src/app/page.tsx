import { headers } from "next/headers";
import Image from "next/image";
import {
  DOWNLOAD_LINKS,
  EXTERNAL_LINKS,
  SIGNET_DOWNLOAD_LINKS,
  SITE_CONFIG,
} from "./constants";

export default async function Home() {
  const host = (await headers()).get("host")?.split(":")[0].toLowerCase();
  const isSignet = host === "signet.noahwallet.io";
  const downloadLinks = isSignet ? SIGNET_DOWNLOAD_LINKS : DOWNLOAD_LINKS;

  return (
    <div className="min-h-screen bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_50%,transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(14,165,233,0.1),transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f0a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f0a_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <nav className="relative z-10 border-b border-white/5 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src={SITE_CONFIG.logo.src}
                alt={SITE_CONFIG.logo.alt}
                width={40}
                height={40}
                priority
                className="drop-shadow-lg"
              />
              <span className="text-xl font-semibold text-white">
                {SITE_CONFIG.name}
              </span>
              {isSignet && (
                <span className="rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-300">
                  Signet
                </span>
              )}
            </div>

            <a
              href={EXTERNAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 border border-white/10 hover:border-white/20"
            >
              <svg
                className="h-5 w-5 text-slate-300 transition-transform group-hover:scale-110"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span className="text-sm font-medium text-slate-200">GitHub</span>
            </a>
          </div>
        </div>
      </nav>

      <main className="relative">
        <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
                  {SITE_CONFIG.tagline}
                </h1>
                <p className="text-xl text-slate-400 leading-relaxed">
                  {SITE_CONFIG.description.short}
                </p>
                <p className="text-lg text-slate-500 leading-relaxed">
                  {SITE_CONFIG.description.long}
                </p>
              </div>

              {/* Platform availability indicator with iOS and Android logos */}
              <div className="flex items-center gap-2 text-sm">
                <div className="flex -space-x-2">
                  {/* iOS logo - sized at 14x18px (smaller than Android) to achieve visual balance
                      since the Apple logo has more vertical presence */}
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 ring-2 ring-black flex items-center justify-center">
                    <Image
                      src="/apple-logo-white.svg"
                      alt="iOS"
                      width={14}
                      height={18}
                      className="object-contain -mt-0.5"
                    />
                  </div>
                  {/* Android logo - sized at 18x11px (larger than iOS) to achieve visual balance
                      since the Android head is horizontally oriented and needs more width */}
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-green-500 to-green-600 ring-2 ring-black flex items-center justify-center">
                    <Image
                      src="/android-head-white.svg"
                      alt="Android"
                      width={18}
                      height={11}
                      className="object-contain -mt-0.5"
                    />
                  </div>
                </div>
                <p className="text-slate-400">Available on iOS & Android</p>
              </div>

              <a
                href="https://second.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block cursor-pointer"
              >
                <Image
                  src="/second-badge-black.svg"
                  alt="Powered by Second"
                  width={168}
                  height={32}
                />
              </a>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl opacity-20 blur-3xl" />
              <div className="relative">
                <Image
                  src={SITE_CONFIG.logo.src}
                  alt={SITE_CONFIG.logo.alt}
                  width={SITE_CONFIG.logo.width}
                  height={SITE_CONFIG.logo.height}
                  priority
                  className="drop-shadow-2xl mx-auto animate-float"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3">Get Started</h2>
            <p className="text-slate-400">
              {isSignet
                ? "Download Noah for Signet. Uses test bitcoin with no monetary value."
                : "Choose your platform and start using Noah today"}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            <a
              href={downloadLinks.testflight.url}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500/10 to-blue-600/10 p-8 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:from-blue-500/20 hover:to-blue-600/20 border border-blue-400/20 hover:border-blue-400/40 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <div className="flex flex-col gap-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg">
                  <svg
                    className="h-8 w-8 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <p className="text-xl font-semibold text-white">
                    {downloadLinks.testflight.label}
                  </p>
                  <p className="text-sm text-slate-400">
                    {downloadLinks.testflight.subtitle}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-blue-400 text-sm font-medium">
                  <span>Download now</span>
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </a>

            <a
              href={downloadLinks.playstore.url}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-500/10 to-green-600/10 p-8 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:from-green-500/20 hover:to-green-600/20 border border-green-400/20 hover:border-green-400/40 hover:shadow-2xl hover:shadow-green-500/20"
            >
              <div className="flex flex-col gap-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-green-600 shadow-lg">
                  <svg
                    className="h-8 w-8 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <p className="text-xl font-semibold text-white">
                    {downloadLinks.playstore.label}
                  </p>
                  <p className="text-sm text-slate-400">
                    {downloadLinks.playstore.subtitle}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-green-400 text-sm font-medium">
                  <span>Download now</span>
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </a>

            <a
              href={downloadLinks.apk.url}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-500/10 to-purple-600/10 p-8 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:from-purple-500/20 hover:to-purple-600/20 border border-purple-400/20 hover:border-purple-400/40 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              <div className="flex flex-col gap-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 shadow-lg">
                  <svg
                    className="h-8 w-8 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <p className="text-xl font-semibold text-white">
                    {downloadLinks.apk.label}
                  </p>
                  <p className="text-sm text-slate-400">
                    {downloadLinks.apk.subtitle}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-purple-400 text-sm font-medium">
                  <span>Download now</span>
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </section>

        <footer className="relative border-t border-white/5 backdrop-blur-sm mt-20">
          <div className="mx-auto max-w-7xl px-6 py-8">
            <p className="text-center text-sm text-slate-500">
              © {new Date().getFullYear()} Noah. Open source and available on
              GitHub.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
