import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  return (
    <main>
      <div className="bg-transparent backdrop-blur-sm fixed top-2 w-96 rounded-lg h-12 ">
        <ul className="flex justify-around items-center">
          <li className="text-2xl font-semibold ">Logo</li>
          <li className="text-2xl font-semibold ">Home</li>
          <li className="text-2xl font-semibold ">About</li>
          <li className="text-2xl font-semibold ">Contact</li>
        </ul>
      </div>
      <Link href="/articles/1">
        <Button className="mt-14">Article 1</Button>
      </Link>
    </main>
  );
}
