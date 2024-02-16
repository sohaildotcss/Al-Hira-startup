import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  return (
    <main className="mt-4 flex justify-around">
      <Link href="/">
        <Button variant="outline">Home</Button>
      </Link>
      <Link href="/articles/1">
        <Button className="font-medium text-xl" >Article 1</Button>
      </Link>
      <Link href="/articles/2">
        <Button className="">Article 2</Button>
      </Link>
    </main>
  );
}
