import Link from 'next/link';
import './notFound.css';

export default function NotFound() {
  return (
    <main className="text-white">
      <h2 className="text-[200px] font-bold">404</h2>
      <p className='text-2xl font-semibold'>We could not find the page you were looking for.</p>
      <Link
        href="/"
        className="bg-teal-700 hover:bg-teal-950 transition-all ease-linear rounded-md px-4 py-2 m-4"
      >
        Home
      </Link>
    </main>
  );
}
