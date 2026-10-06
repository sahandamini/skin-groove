import { cn } from '@/lib/utils/ui'

import {
	BookPill,
	EmailPill,
	expectations,
	FaqList,
	Flower,
	GalleryRows,
	guides,
	services,
	useReveal,
} from './shared'

import './arches.css'

const heroArches = [
	{
		src: '/images/groove/13-lg.webp',
		alt: 'A glowing apricot living room',
		width: 1121,
		height: 1400,
	},
	{
		src: '/images/groove/57.webp',
		alt: 'A sunken lounge under glowing amber arches',
		width: 736,
		height: 1104,
	},
	{
		src: '/images/groove/49-lg.webp',
		alt: 'A salon with arched green doorways',
		width: 1120,
		height: 1400,
	},
]

const serviceArches = [
	'/images/groove/37-lg.webp',
	'/images/groove/43-lg.webp',
	'/images/groove/06-lg.webp',
]

function Wave({ className }: { className?: string }) {
	return (
		<svg
			aria-hidden="true"
			className={cn('arch-wave', className)}
			preserveAspectRatio="none"
			viewBox="0 0 1440 80"
		>
			<path d="M0 40C240 80 480 0 720 40s480 40 720 0v40H0z" />
		</svg>
	)
}

function Rainbow() {
	const bands = [
		'var(--garnet)',
		'var(--burnt)',
		'var(--amber)',
		'var(--apricot)',
		'var(--cream)',
	]

	return (
		<svg aria-hidden="true" className="arch-rainbow" viewBox="0 0 400 200">
			{bands.map((color, index) => {
				const radius = 185 - index * 30
				return (
					<path
						d={`M ${200 - radius} 200 A ${radius} ${radius} 0 0 1 ${200 + radius} 200`}
						fill="none"
						key={color}
						stroke={color}
						strokeWidth="26"
					/>
				)
			})}
		</svg>
	)
}

export function ArchesLook() {
	const pageRef = useReveal()

	return (
		<main ref={pageRef} id="top" className="gv arch">
			<header className="arch-hero">
				<nav className="arch-nav" aria-label="Primary navigation">
					<a className="arch-mark" href="#top">
						<Flower className="gv-spin" />
						Skin Groove
					</a>
					<div className="arch-nav-links">
						<a href="#services">Services</a>
						<a href="#faq">FAQ</a>
						<a href="#contact">Contact</a>
					</div>
					<BookPill className="arch-pill-dark" />
				</nav>

				<h1 className="arch-wordmark">
					Skin <span>Groove</span>
				</h1>

				<div className="arch-hero-sub">
					<p className="arch-tagline">Virtual care. Warm approach.</p>
					<p>
						Virtual esthetics rooted in skin health and routines that fit real
						life.
					</p>
				</div>

				<div className="arch-windows">
					{heroArches.map((image, index) => (
						<figure
							className="arch-window"
							key={image.src}
							style={{ animationDelay: `${index * 120}ms` }}
						>
							<img
								alt={image.alt}
								fetchPriority={index === 1 ? 'high' : undefined}
								height={image.height}
								src={image.src}
								width={image.width}
							/>
						</figure>
					))}
				</div>
			</header>

			<section className="arch-meet" aria-labelledby="arch-meet-title">
				<div className="arch-meet-head" data-reveal>
					<Flower className="arch-meet-flower gv-spin" />
					<h2 id="arch-meet-title">Meet Skin Groove</h2>
				</div>
				<div className="arch-meet-cards">
					{guides.map((guide, index) => (
						<article
							data-reveal
							key={guide.title}
							style={{ transitionDelay: `${index * 90}ms` }}
						>
							<h3>{guide.title}</h3>
							{guide.body.map((paragraph) => (
								<p key={paragraph}>{paragraph}</p>
							))}
						</article>
					))}
				</div>
			</section>

			<section className="arch-expect" aria-labelledby="arch-expect-title">
				<Wave className="is-top" />
				<div className="arch-expect-inner">
					<h2 id="arch-expect-title" data-reveal>
						What you can expect
					</h2>
					<div className="arch-expect-grid">
						{expectations.map((item, index) => (
							<article
								data-reveal
								key={item.title}
								style={{ transitionDelay: `${index * 90}ms` }}
							>
								<div className="arch-badge">
									<Flower />
									<h3>{item.title}</h3>
								</div>
								<p>{item.body}</p>
							</article>
						))}
					</div>
				</div>
				<Wave className="is-bottom" />
			</section>

			<section
				id="services"
				className="arch-services"
				aria-labelledby="arch-services-title"
			>
				<h2 id="arch-services-title" data-reveal>
					Services
				</h2>
				<div className="arch-service-grid">
					{services.map((service, index) => (
						<article
							data-reveal
							key={service.name}
							style={{ transitionDelay: `${index * 90}ms` }}
						>
							<figure>
								<img
									alt=""
									height="1400"
									loading="lazy"
									src={serviceArches[index]}
									width="1000"
								/>
							</figure>
							<h3>{service.name}</h3>
							<p className="arch-service-kind">{service.kind}</p>
							<p>{service.body}</p>
						</article>
					))}
				</div>
			</section>

			<section className="arch-room" aria-labelledby="arch-room-title">
				<div className="arch-room-head" data-reveal>
					<h2 id="arch-room-title">The Groove Room</h2>
					<p>
						Warm light, soft shapes, and spaces that feel like an exhale. A
						curated shelf of skincare and home finds is coming soon.
					</p>
				</div>
				<GalleryRows />
			</section>

			<section id="faq" className="arch-faq" aria-labelledby="arch-faq-title">
				<figure className="arch-faq-photo" data-reveal>
					<img
						alt="A row of glowing lava lamps"
						height="1277"
						loading="lazy"
						src="/images/groove/61.webp"
						width="1800"
					/>
					<Flower className="arch-faq-sticker gv-spin" />
				</figure>
				<div className="arch-faq-copy" data-reveal>
					<h2 id="arch-faq-title">Before you book</h2>
					<FaqList />
				</div>
			</section>

			<section
				id="contact"
				className="arch-book"
				aria-labelledby="arch-book-title"
			>
				<Rainbow />
				<h2 id="arch-book-title" data-reveal>
					Your next skin chapter starts here
				</h2>
				<p data-reveal>Virtual · From home</p>
				<div data-reveal>
					<EmailPill />
				</div>
			</section>

			<footer className="arch-footer">
				<p className="arch-mark">
					<Flower />
					Skin Groove
				</p>
				<p>Virtual care. Warm approach.</p>
			</footer>
		</main>
	)
}
