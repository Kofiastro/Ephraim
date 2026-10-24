import Image from 'next/image';
import { FaArrowDown, FaArrowUpRightFromSquare, FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa6';

const contact = {
  email: 'samephraimaddae5167@gmail.com',
  phone: '+233557616152',
  phoneLabel: '+233 55 761 6152',
};

const emailHref = `mailto:${contact.email}?subject=${encodeURIComponent('IT support enquiry for Ephraim Addae Sam')}`;
const whatsappHref = `https://wa.me/${contact.phone.replace('+', '')}?text=${encodeURIComponent('Hello Ephraim, I would like to discuss an IT support or networking project.')}`;

const capabilities = [
  {
    number: '01',
    title: 'IT support',
    description: 'Practical technical support for the devices, systems, and users that keep teams productive.',
  },
  {
    number: '02',
    title: 'Network infrastructure',
    description: 'Structured cabling, rack installation, connectivity, and network equipment setup.',
  },
  {
    number: '03',
    title: 'Wireless systems',
    description: 'Reliable wireless coverage through access-point installation, configuration, and troubleshooting.',
  },
];

const services = [
  ['Network installation', 'Switches, patch panels, structured cabling, and rack organisation.'],
  ['Wireless deployment', 'Access-point installation and connectivity checks for offices and facilities.'],
  ['Technical support', 'Hardware, connectivity, and day-to-day troubleshooting for teams and organisations.'],
  ['Systems maintenance', 'Clear diagnostics, preventative checks, and dependable technical follow-through.'],
];

const gallery = [
  { src: '/network-rack.jpeg', alt: 'Network switches and patch cables in a rack' },
  { src: '/access-point.jpeg', alt: 'Wireless access point installed on a ceiling' },
  { src: '/wireless-installation.jpeg', alt: 'Technician working on network equipment' },
  { src: '/network-maintenance.jpeg', alt: 'Outdoor wireless installation in progress' },
];

const stackGroups = [
  ['Networking', 'Switches', 'Routers', 'Access points', 'Structured cabling', 'Network troubleshooting'],
  ['IT support', 'Hardware support', 'Connectivity diagnostics', 'User support', 'Systems maintenance'],
  ['Professional practice', 'Documentation', 'Site installation', 'Billing systems', 'Preventative checks', 'Technical communication'],
];

function ArrowLink({ href = '#contact', children = 'Learn more' }) {
  return (
    <a href={href} className='inline-flex items-center gap-2 text-sm font-medium text-amber-700 transition hover:text-slate-950'>
      {children} <FaArrowUpRightFromSquare className='text-xs' />
    </a>
  );
}

export default function Page() {
  return (
    <main className='overflow-hidden'>
      <div className='mx-auto max-w-6xl px-6 py-6 sm:px-10 lg:px-12'>
        <header className='flex items-center justify-between border-b border-slate-200 pb-5'>
          <a href='#top' className='font-mono text-sm font-semibold tracking-tight'>
            ES<span className='text-amber-600'>.</span>
          </a>
          <nav aria-label='Main navigation' className='flex items-center gap-5 text-sm text-slate-500'>
            <a href='#work' className='transition hover:text-slate-950'>Work</a>
            <a href='#about' className='transition hover:text-slate-950'>About</a>
            <a href='#contact' className='transition hover:text-slate-950'>Contact</a>
          </nav>
        </header>

        <section id='top' className='grid gap-12 pb-24 pt-16 md:grid-cols-[1.15fr_0.85fr] md:items-end md:pt-24'>
          <div>
            <p className='mb-6 font-mono text-xs uppercase tracking-[0.25em] text-amber-700'>IT Support · Networking · Ghana</p>
            <h1 className='max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.06em] text-slate-950 sm:text-7xl'>
              Keeping people and systems connected.
            </h1>
            <p className='mt-8 max-w-xl text-lg leading-8 text-slate-500'>
              I&apos;m Ephraim Addae Sam, an IT support and networking professional focused on practical infrastructure, reliable connectivity, and responsive technical service.
            </p>
            <div className='mt-9 flex flex-wrap items-center gap-4'>
              <a href='#contact' className='inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-amber-700'>
                Work with Ephraim <FaArrowUpRightFromSquare className='text-xs' />
              </a>
              <a href='#work' className='text-sm font-medium text-slate-600 underline decoration-slate-300 underline-offset-8 transition hover:text-slate-950'>View my work</a>
            </div>
          </div>
          <div className='flex flex-col items-start gap-6 md:items-end'>
            <Image src='/ephraim-portrait.jpeg' width={240} height={240} alt='Portrait of Ephraim Addae Sam' className='h-44 w-44 rounded-full object-cover sm:h-56 sm:w-56' priority />
            <p className='max-w-xs text-left text-sm leading-6 text-slate-500 md:text-right'>
              Technical support and network infrastructure work grounded in careful installation, clear diagnosis, and dependable follow-through.
            </p>
          </div>
        </section>

        <section id='about' className='border-t border-slate-200 py-20'>
          <div className='grid gap-10 md:grid-cols-[0.7fr_1.3fr]'>
            <div>
              <p className='section-kicker'>What I do</p>
              <h2 className='mt-3 max-w-xs text-3xl font-semibold tracking-[-0.04em] text-slate-950'>Technology support with a hands-on point of view.</h2>
            </div>
            <div className='grid gap-4 sm:grid-cols-3'>
              {capabilities.map((item) => (
                <article key={item.number} className='border-t border-slate-300 pt-4'>
                  <p className='font-mono text-xs text-amber-700'>{item.number}</p>
                  <h3 className='mt-8 text-lg font-medium text-slate-950'>{item.title}</h3>
                  <p className='mt-3 text-sm leading-6 text-slate-500'>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className='pb-20'>
          <div className='rounded-3xl bg-slate-950 p-7 text-white sm:p-10'>
            <div className='flex flex-wrap items-start justify-between gap-6'>
              <div>
                <p className='font-mono text-xs uppercase tracking-[0.2em] text-amber-300'>Professional focus</p>
                <h2 className='mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl'>Infrastructure that works.</h2>
              </div>
              <span className='rounded-full border border-white/20 px-3 py-1.5 font-mono text-xs text-slate-300'>IT Support / Networking</span>
            </div>
            <div className='mt-12 grid gap-10 md:grid-cols-[1fr_0.8fr]'>
              <p className='max-w-2xl text-xl leading-8 text-slate-300'>
                From a clean network rack to a carefully positioned wireless access point, every installation is part of a larger goal: making technology dependable for the people who use it.
              </p>
              <div className='border-l border-white/20 pl-5 text-sm leading-6 text-slate-400'>
                <p className='text-slate-200'>Read the full CV</p>
                <p className='mt-2'>Download Ephraim&apos;s CV for a complete overview of experience, education, and qualifications.</p>
                <a href='/ephraim-addae-sam-cv.pdf' download className='mt-5 inline-flex items-center gap-2 text-sm font-medium text-amber-300 hover:text-white'>
                  Download CV <FaArrowDown className='text-xs' />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className='border-y border-slate-200 py-16'>
          <div className='grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:items-center'>
            <div>
              <p className='section-kicker'>Partner</p>
              <h2 className='mt-2 text-3xl font-semibold tracking-[-0.04em] text-slate-950'>Supporting dependable public infrastructure.</h2>
            </div>
            <div className='flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-6 sm:flex-row sm:items-center'>
              <Image
                src='/department-roads-logo.png'
                width={280}
                height={140}
                alt='Department of Feeder Roads, Republic of Ghana logo'
                className='h-24 w-full object-contain sm:h-28 sm:w-64'
              />
              <div className='border-t border-slate-200 pt-4 text-sm leading-6 text-slate-500 sm:border-l sm:border-t-0 sm:pl-5 sm:pt-0'>
                <p className='font-medium text-slate-900'>Department of Feeder Roads</p>
                <p className='mt-1'>Republic of Ghana</p>
                <a href='https://dfr.gov.gh/' target='_blank' rel='noopener noreferrer' className='mt-3 inline-flex items-center gap-2 font-medium text-amber-700 hover:text-slate-950'>
                  Visit website <FaArrowUpRightFromSquare className='text-xs' />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id='work' className='border-y border-slate-200 py-20'>
          <div className='mb-9 flex items-end justify-between gap-5'>
            <div>
              <p className='section-kicker'>Field work</p>
              <h2 className='mt-2 text-3xl font-semibold tracking-[-0.04em] text-slate-950'>Practical work in real environments.</h2>
            </div>
            <span className='hidden font-mono text-xs text-slate-400 sm:block'>04 / projects</span>
          </div>
          <div className='grid gap-4 sm:grid-cols-2'>
            {gallery.map((item) => (
              <figure key={item.src} className='group overflow-hidden rounded-2xl bg-slate-100'>
                <Image src={item.src} width={768} height={1024} alt={item.alt} className='h-72 w-full object-cover transition duration-500 group-hover:scale-105' />
                <figcaption className='border border-t-0 border-slate-200 bg-white px-5 py-4 text-sm text-slate-600'>{item.alt}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className='py-20'>
          <div className='grid gap-10 md:grid-cols-[0.7fr_1.3fr]'>
            <div>
              <p className='section-kicker'>Services</p>
              <h2 className='mt-2 text-3xl font-semibold tracking-[-0.04em] text-slate-950'>Support for the systems teams depend on.</h2>
            </div>
            <div className='divide-y divide-slate-200 border-y border-slate-200'>
              {services.map(([title, description], index) => (
                <article key={title} className='grid gap-3 py-5 sm:grid-cols-[60px_1fr]'>
                  <p className='font-mono text-xs text-slate-400'>0{index + 1}</p>
                  <div><h3 className='text-lg font-medium text-slate-950'>{title}</h3><p className='mt-1 text-sm leading-6 text-slate-500'>{description}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className='grid gap-10 border-t border-slate-200 py-16 md:grid-cols-[0.7fr_1.3fr]'>
          <div><p className='section-kicker'>Technical toolkit</p><h2 className='mt-2 text-2xl font-semibold tracking-[-0.03em] text-slate-950'>The tools and practices behind dependable support.</h2></div>
          <div className='grid gap-6 sm:grid-cols-3'>
            {stackGroups.map(([title, ...items]) => <div key={title}><h3 className='font-mono text-xs uppercase tracking-[0.16em] text-amber-700'>{title}</h3><div className='mt-3 flex flex-wrap gap-2'>{items.map((item) => <span key={item} className='rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600'>{item}</span>)}</div></div>)}
          </div>
        </section>

        <section id='contact' className='rounded-3xl bg-amber-400 px-7 py-12 sm:px-12 sm:py-16'>
          <p className='font-mono text-xs uppercase tracking-[0.2em] text-amber-950'>Start a conversation</p>
          <div className='mt-5 flex flex-col justify-between gap-8 md:flex-row md:items-end'>
            <h2 className='max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.05em] text-slate-950 sm:text-5xl'>Need practical support for a network, workplace, or connected system?</h2>
            <div className='flex flex-wrap gap-3'>
              <a href={emailHref} className='inline-flex shrink-0 items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-slate-950'><FaEnvelope /> Email Ephraim</a>
              <a href={whatsappHref} target='_blank' rel='noopener noreferrer' className='inline-flex shrink-0 items-center gap-2 rounded-full border border-slate-950/20 px-5 py-3 text-sm font-medium text-slate-950 transition hover:border-white hover:bg-white'><FaWhatsapp /> WhatsApp</a>
            </div>
          </div>
          <div className='mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-slate-950/15 pt-5 text-sm text-slate-900'>
            <a href={emailHref} className='inline-flex items-center gap-2 hover:text-white'><FaEnvelope /> {contact.email}</a>
            <a href={`tel:${contact.phone}`} className='inline-flex items-center gap-2 hover:text-white'><FaPhone /> {contact.phoneLabel}</a>
            <a href={whatsappHref} target='_blank' rel='noopener noreferrer' className='inline-flex items-center gap-2 hover:text-white'><FaWhatsapp /> Chat on WhatsApp</a>
          </div>
        </section>

        <footer className='flex flex-col gap-5 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between'>
          <p>© 2026 Ephraim Addae Sam</p>
          <div className='flex flex-wrap items-center gap-4'>
            <a href={emailHref} className='transition hover:text-slate-950'>{contact.email}</a>
            <a href={whatsappHref} target='_blank' rel='noopener noreferrer' aria-label='WhatsApp' className='transition hover:text-slate-950'><FaWhatsapp /></a>
            <a href={`tel:${contact.phone}`} aria-label={`Call ${contact.phoneLabel}`} className='transition hover:text-slate-950'><FaPhone /></a>
            <ArrowLink href='/ephraim-addae-sam-cv.pdf'>Download CV</ArrowLink>
          </div>
        </footer>
      </div>
    </main>
  );
}
