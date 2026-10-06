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

import './night.css'

const triptych = [
	{
		src: '/images/groove/06-lg.webp',
		alt: 'A glowing retro bar with amber pendant lights',
		width: 1170,
		height: 1169,
	},
	{
		src: '/images/groove/57.webp',
		alt: 'A sunken lounge under glowing amber arches',
		width: 736,
		height: 1104,
	},
	{
		src: '/images/groove/41-lg.webp',
		alt: 'A bedroom lit by a single orange lamp',
		width: 736,
		height: 1104,
	},
]

export function NightLook() {
	const pageRef = useReveal()

	return (
		<main ref={pageRef} id="top" className="gv night">
			<header className="night-hero">
				<div className="night-triptych">
					{triptych.map((image, index) => (
						<figure key={image.src}>
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

				<nav className="night-nav" aria-label="Primary navigation">
					<a aria-label="Skin Groove home" href="#top">
						<Flower className="night-nav-flower gv-spin" />
					</a>
					<div className="night-nav-links">
						<a href="#services">Services</a>
						<a href="#faq">FAQ</a>
						<a href="#contact">Contact</a>
					</div>
				</nav>

				<div className="night-hero-copy">
					<h1 className="night-wordmark">Skin Groove</h1>
					<div className="night-hero-foot">
						<p className="night-tagline">
							Virtual care.
							<br />
							Warm approach.
						</p>
						<p>
							Virtual esthetics rooted in skin health and routines that fit real
							life.
						</p>
						<BookPill />
					</div>
				</div>
			</header>

			<section className="night-meet" aria-labelledby="night-meet-title">
				<div className="night-meet-head" data-reveal>
					<h2 id="night-meet-title">
						Meet <em>Skin Groove</em>
					</h2>
					<Flower className="night-meet-flower gv-spin" />
				</div>
				<div className="night-meet-columns">
					{guides.map((guide, index) => (
						<div
							data-reveal
							key={guide.title}
							style={{ transitionDelay: `${index * 90}ms` }}
						>
							<h3>{guide.title}</h3>
							{guide.body.map((paragraph) => (
								<p key={paragraph}>{paragraph}</p>
							))}
						</div>
					))}
				</div>
			</section>

			<section className="night-expect" aria-labelledby="night-expect-title">
				<h2 id="night-expect-title" data-reveal>
					What you can expect
				</h2>
				<div className="night-expect-grid">
					{expectations.map((item, index) => (
						<article
							data-reveal
							key={item.title}
							style={{ transitionDelay: `${index * 90}ms` }}
						>
							<Flower />
							<h3>{item.title}</h3>
							<p>{item.body}</p>
						</article>
					))}
				</div>
			</section>

			<section
				id="services"
				className="night-services"
				aria-labelledby="night-services-title"
			>
				<div className="night-services-panel">
					<h2 id="night-services-title" data-reveal>
						Services
					</h2>
					<ol>
						{services.map((service, index) => (
							<li data-reveal key={service.name}>
								<span className="night-service-no" aria-hidden="true">
									0{index + 1}
								</span>
								<div>
									<h3>{service.name}</h3>
									<p className="night-service-kind">{service.kind}</p>
									<p>{service.body}</p>
								</div>
							</li>
						))}
					</ol>
				</div>
				<figure className="night-services-photo">
					<img
						alt="A dim retro living room lit by an orange lamp"
						height="1184"
						loading="lazy"
						src="/images/groove/43-lg.webp"
						width="864"
					/>
				</figure>
			</section>

			<section className="night-room" aria-labelledby="night-room-title">
				<div className="night-room-head" data-reveal>
					<h2 id="night-room-title">The Groove Room</h2>
					<p>
						The mood behind the practice. A curated shelf of skincare, beauty,
						and home finds is coming soon.
					</p>
				</div>
				<GalleryRows />
			</section>

			<section id="faq" className="night-faq" aria-labelledby="night-faq-title">
				<figure className="night-faq-photo" data-reveal>
					<img
						alt="A cream cabinet with glowing orange cutouts"
						height="1400"
						loading="lazy"
						src="/images/groove/38-lg.webp"
						width="788"
					/>
				</figure>
				<div className="night-faq-copy" data-reveal>
					<h2 id="night-faq-title">Before you book</h2>
					<FaqList />
				</div>
			</section>

			<section
				id="contact"
				className="night-book"
				aria-labelledby="night-book-title"
			>
				<h2 id="night-book-title" data-reveal>
					Your next skin chapter <em>starts here</em>
				</h2>
				<p data-reveal>Skin Groove · Virtual · From home</p>
				<div data-reveal>
					<EmailPill />
				</div>
			</section>

			<footer className="night-footer">
				<p className="night-footer-mark">Skin Groove</p>
				<p>Virtual care. Warm approach.</p>
			</footer>
		</main>
	)
}
