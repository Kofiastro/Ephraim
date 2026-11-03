import Link from 'next/link';
import GalleryGrid from './GalleryGrid';

export const metadata = {
  title: 'Gallery — Ephraim Addae Sam',
  description:
    'Photos and screenshots from billing system, access point, Starlink and network rack work by Ephraim Addae Sam.',
};

export default function GalleryPage() {
  return (
    <main>
      <div className='mx-auto max-w-6xl px-6 py-6 sm:px-10 lg:px-12'>
        <header className='flex items-center justify-between border-b border-slate-200 pb-5'>
          <Link href='/' className='font-mono text-sm font-semibold tracking-tight'>
            ES<span className='text-amber-600'>.</span>
          </Link>
          <Link href='/' className='text-sm text-slate-500 transition hover:text-slate-950'>
            ← Back to portfolio
          </Link>
        </header>

        <section className='pb-4 pt-14'>
          <p className='section-kicker'>Gallery</p>
          <h1 className='mt-3 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl'>Work in pictures.</h1>
          <p className='mt-4 max-w-2xl text-lg leading-8 text-slate-600'>
            Billing dashboards, access point and backhaul setups, Starlink installs and rack work, grouped by category.
          </p>
        </section>

        <GalleryGrid />
      </div>
    </main>
  );
}
