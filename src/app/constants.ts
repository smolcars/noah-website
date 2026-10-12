export const SITE_CONFIG = {
  name: "Noah",
  tagline: "Your Gateway to Bitcoin's Ark Protocol",
  description: {
    short:
      "Noah is a Lightning wallet built on Ark, a second-layer protocol for Bitcoin that enables instant and low-cost transactions.",
    long: "The Ark protocol is a second layer on the bitcoin network. It offers: simple onboarding, low and predictable fees, instant payments, Lightning interoperability, and full control over your bitcoin.",
  },
  logo: {
    src: "/1024_no_background.png",
    alt: "Noah Logo",
    width: 180,
    height: 180,
  },
} as const;

export const DOWNLOAD_LINKS = {
  testflight: {
    url: "https://testflight.apple.com/join/YQW6fu9w",
    label: "TestFlight",
    subtitle: "iOS Beta",
    color: "blue",
  },
  playstore: {
    url: "https://play.google.com/store/apps/details?id=com.noahwallet.mainnet",
    label: "Play Store",
    subtitle: "Android Beta",
    color: "green",
  },
  apk: {
    url: "https://github.com/BlixtWallet/noah/releases/latest/download/noah-mainnet.apk",
    label: "Direct APK",
    subtitle: "Android Package",
    color: "purple",
  },
} as const;

export const SIGNET_DOWNLOAD_LINKS = {
  testflight: {
    ...DOWNLOAD_LINKS.testflight,
    url: "https://testflight.apple.com/join/E4P44dXF",
  },
  playstore: {
    ...DOWNLOAD_LINKS.playstore,
    url: "https://play.google.com/store/apps/details?id=com.noahwallet.signet",
  },
  apk: {
    ...DOWNLOAD_LINKS.apk,
    url: "https://github.com/BlixtWallet/noah/releases/latest/download/noah-signet.apk",
  },
} as const;

export const EXTERNAL_LINKS = {
  github: "https://github.com/BlixtWallet/noah",
  arkProtocol: "https://ark-protocol.org",
} as const;
