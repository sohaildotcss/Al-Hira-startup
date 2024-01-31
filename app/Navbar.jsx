import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  return (
    <main>
      <Link href="/articles/1">
        <Button className="mt-14">Article 1</Button>
      </Link>
    </main>
  );
}
