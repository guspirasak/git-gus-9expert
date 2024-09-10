import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
      <main className="flex">
        <Link href="/about">Go to about Page</Link>
        <Link href="/services">Go to services Page</Link>
        <Link href="/blog">Go to blog Page</Link>
        <Link href="/contact">Go to contact Page</Link>
    </main>
  );
}
