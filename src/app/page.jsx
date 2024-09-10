import Image from "next/image";
import Link from 'next/link'
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  return (
      <main className="flex">
        <Link href="/about">Go to about Page</Link>
        <br />
        <Link href="/services">Go to services Page</Link>
        <br />
        <Link href="/blog">Go to blog Page</Link>
        <br />
        <Link href="/contact">Go to contact Page</Link>
        <Link href="/about">Go to about Page</Link>
        <br />
        <Link href="/services">Go to services Page</Link>
        <br />
        <Link href="/blog">Go to blog Page</Link>
        <br />
        <Link href="/contact">Go to contact Page</Link>
        <Link href="/about">Go to about Page</Link>
        <br />
        <Link href="/services">Go to services Page</Link>
        <br />
        <Link href="/blog">Go to blog Page</Link>
        <br />
        <Link href="/contact">Go to contact Page</Link>
    </main>
  );
}
