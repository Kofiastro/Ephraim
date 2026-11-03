'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { categories, media } from './data';

export default function GalleryGrid() {
  const [active, setActive] = useState('all');
  const [open, setOpen] = useState(null);

  const visible = active === 'all' ? media : media.filter((m) => m.category === active);
  const current = open === null ? null : visible[open];

  useEffect(() => {
    if (open === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(null);
      if (e.key === 'ArrowRight') setOpen((i) => (i + 1) % visible.length);
      if (e.key === 'ArrowLeft') setOpen((i) => (i - 1 + visible.length) % visible.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, visible.length]);

  const tabs = [{ id: 'all', label: 'All' }, ...categories];

  return (
    <>
      <div className='flex flex-wrap gap-2' role='tablist' aria-label='Gallery categories'>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role='tab'
            aria-selected={active === tab.id}
            onClick={() => {
              setActive(tab.id);
              setOpen(null);
            }}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              active === tab.id
                ? 'border-slate-950 bg-slate-950 text-white'
                : 'border-slate-300 text-slate-600 hover:border-slate-950 hover:text-slate-950'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {(active === 'all' ? categories : categories.filter((c) => c.id === active)).map((cat) => {
        const items = visible.filter((m) => m.category === cat.id);
        if (!items.length) return null;
        return (
          <section key={cat.id} className='mt-12'>
            <h2 className='text-xl font-semibold tracking-tight text-slate-950'>{cat.label}</h2>
            <div className='mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
              {items.map((item) => (
                <figure key={item.src} className='group overflow-hidden rounded-2xl border border-slate-200 bg-white'>
                  <button
                    type='button'
                    onClick={() => setOpen(visible.indexOf(item))}
                    className='block h-60 w-full overflow-hidden bg-slate-100'
                    aria-label={`Open ${item.title}`}
                  >
                    {item.type === 'video' ? (
                      <video src={item.src} poster={item.poster} muted preload='metadata' className='h-full w-full object-cover' />
                    ) : (
                      <Image
                        src={item.src}
                        width={item.width}
                        height={item.height}
                        alt={item.alt}
                        className='h-full w-full object-cover object-top transition duration-500 group-hover:scale-105'
                      />
                    )}
                  </button>
                  <figcaption className='px-4 py-3 text-sm font-medium text-slate-800'>{item.title}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        );
      })}

      {current && (
        <div
          role='dialog'
          aria-modal='true'
          aria-label={current.title}
          className='fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950/90 p-4'
          onClick={() => setOpen(null)}
        >
          <button
            type='button'
            onClick={() => setOpen(null)}
            className='absolute right-4 top-4 rounded-full bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20'
          >
            Close
          </button>
          <div className='flex max-h-[85vh] max-w-6xl items-center justify-center' onClick={(e) => e.stopPropagation()}>
            {current.type === 'video' ? (
              <video src={current.src} poster={current.poster} controls autoPlay className='max-h-[85vh] max-w-full rounded-lg' />
            ) : (
              <Image
                src={current.src}
                width={current.width}
                height={current.height}
                alt={current.alt}
                className='max-h-[85vh] w-auto max-w-full rounded-lg object-contain'
              />
            )}
          </div>
          <p className='mt-3 text-sm text-slate-200'>
            {current.title} · {open + 1} / {visible.length}
          </p>
          <div className='mt-3 flex gap-3' onClick={(e) => e.stopPropagation()}>
            <button type='button' onClick={() => setOpen((i) => (i - 1 + visible.length) % visible.length)} className='rounded-full bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20'>
              ← Prev
            </button>
            <button type='button' onClick={() => setOpen((i) => (i + 1) % visible.length)} className='rounded-full bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20'>
              Next →
            </button>
          </div>
        </div>
      )}
    </>
  );
}
