import Image from "next/image";
import "../globals.css";
import PatternBg from "@/public/assets/backgrounds/Pattern.png";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative h-[100vh] flex flex-col justify-center items-center bg-black">
      <Image
        src={PatternBg}
        width={1000}
        height={1000}
        alt="pattern"
        className="absolute bg-cover"
      />

      {children}
    </div>
  );
}
