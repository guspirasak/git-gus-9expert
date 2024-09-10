import Image from "next/image";
import Link from 'next/link'
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  return (
    
      <main className="container mx-auto">
        <Link href="/about">Go to about Page</Link>
        <br />
        <Link href="/map">Go to map Page</Link>
        <br />
        <Link href="/blog">Go to blog Page</Link>
        <br />
        <Link href="/contact">Go to contact Page</Link>
        <br />
    </main>
  );
}
