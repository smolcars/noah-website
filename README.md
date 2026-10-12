# Noah Website

Official website for Noah - a Lightning wallet built on the Ark protocol for Bitcoin.

## About Noah

Noah is a self-custodial Bitcoin wallet that leverages the Ark protocol, a second-layer solution enabling instant, low-cost, and private transactions. Ark provides a trustless mixing service with unilateral exit capabilities, allowing users to send and receive bitcoin without managing Lightning channels.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com)
- **Language**: TypeScript
- **Package Manager**: Bun
- **Code Quality**: Biome

## Getting Started

Install dependencies:

```bash
bun install
```

Run the development server:

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

The homepage selects downloads from the request hostname. `signet.noahwallet.io`
serves the Signet TestFlight, Google Play, and APK links with a Signet label;
other hosts keep the mainnet links. Point both domains at this Next.js deployment
and preserve the original `Host` header in any reverse proxy.

To check the Signet version locally:

```bash
curl -H 'Host: signet.noahwallet.io' http://localhost:3000
```

## Build

Create a production build:

```bash
bun run build
```

Start the production server:

```bash
bun start
```

## Code Quality

Format code:

```bash
bun run format
```

Lint code:

```bash
bun run lint
```

## Links

- [Noah GitHub Repository](https://github.com/BlixtWallet/noah)
- [Ark Protocol](https://ark-protocol.org)

## License

See the main Noah repository for license information.
