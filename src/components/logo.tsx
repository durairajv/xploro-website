import Link from "next/link";
import Image from "next/image";

export function Logo({ href = "/", className = "" }: { href?: string; className?: string }) {
  return (
    <Link href={href} className={`flex items-center group ${className}`}>
      {/* Pink-colored logo via CSS mask — white PNG used as mask shape, brand color fills it */}
      <div
        className="h-11 transition-opacity group-hover:opacity-100 opacity-90"
        style={{
          aspectRatio: "2 / 1",
          backgroundColor: "#E84C8A",
          WebkitMaskImage: "url(/logo-white.png)",
          WebkitMaskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskPosition: "left center",
          maskImage: "url(/logo-white.png)",
          maskSize: "contain",
          maskRepeat: "no-repeat",
          maskPosition: "left center",
        }}
      />
    </Link>
  );
}

export function LogoWhite({ href = "/", className = "" }: { href?: string; className?: string }) {
  return (
    <Link href={href} className={`flex items-center group ${className}`}>
      <Image
        src="/logo-white.png"
        alt="Xploro.io"
        width={180}
        height={90}
        className="h-11 w-auto opacity-90 group-hover:opacity-100 transition-opacity"
        priority
      />
    </Link>
  );
}
