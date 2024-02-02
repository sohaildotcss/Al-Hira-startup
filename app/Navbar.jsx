import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  return (
    <main>
      <h1 className="text-3xl text-indigo-800 font-bold">Navbar</h1>
      <Link href="/">
        <Button variant="outline">Home</Button>
      </Link>
      <Link href="/articles/1">
        <Button className="mt-14">Article 1</Button>
      </Link>
      <Link href="/articles/2">
        <Button className="mt-4">Article 2</Button>
      </Link>
    </main>
  );
}
