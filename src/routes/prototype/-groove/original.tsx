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

import './original.css'

export function OriginalLook() {
	const pageRef = useReveal()

	return (
		<main ref={pageRef} id="top" className="gv groove">
			<header className="groove-hero">
				<div className="groove-hero-copy">
					<nav className="groove-nav" aria-label="Primary navigation">
						<a aria-label="Skin Groove home" href="#top">
							<Flower className="groove-nav-flower gv-spin" />
						</a>
						<div className="groove-nav-links">
							<a href="#services">Services</a>
							<a href="#faq">FAQ</a>
							<a href="#contact">Contact</a>
						</div>
					</nav>

					<h1 className="groove-wordmark">
						<span>Skin</span>
						<span>Groove</span>
					</h1>

					<div className="groove-hero-foot">
						<p className="groove-tagline">
							Virtual care.
							<br />
							Warm approach.
						</p>
						<p className="groove-hero-statement">
							Virtual esthetics rooted in skin health and routines that fit real
							life.
						</p>
						<BookPill />
					</div>
				</div>
				<figure className="groove-hero-photo">
					<img
						alt="A sunken lounge under glowing amber arches"
						fetchPriority="high"
						height="1104"
						src="/images/groove/57.webp"
						width="736"
					/>
				</figure>
			</header>

			<section className="groove-meet" aria-labelledby="meet-title">
				<div className="groove-meet-head" data-reveal>
					<Flower className="groove-meet-flower gv-spin" />
					<h2 id="meet-title">
						Meet
						<br />
						Skin Groove
					</h2>
				</div>
				<div className="groove-meet-columns">
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

			<section className="groove-expect" aria-labelledby="expect-title">
				<h2 id="expect-title" data-reveal>
					What you can expect
				</h2>
				<div className="groove-expect-grid">
					{expectations.map((item, index) => (
						<article
							data-reveal
							key={item.title}
							style={{ transitionDelay: `${index * 90}ms` }}
						>
							<h3>{item.title}</h3>
							<Flower className="groove-expect-flower" />
							<p>{item.body}</p>
						</article>
					))}
				</div>
			</section>

			<section
				id="services"
				className="groove-services"
				aria-labelledby="services-title"
			>
				<figure className="groove-services-photo">
					<img
						alt="A warm apricot treatment room with arched shelving and pendant lights"
						height="1536"
						loading="lazy"
						src="/images/groove/54.webp"
						width="1024"
					/>
				</figure>
				<div className="groove-services-panel">
					<h2 id="services-title" data-reveal>
						Services
					</h2>
					<ul>
						{services.map((service) => (
							<li data-reveal key={service.name}>
								<h3>
									<Flower className="groove-bullet" />
									{service.name}:
								</h3>
								<p className="groove-service-kind">{service.kind}</p>
								<p>{service.body}</p>
							</li>
						))}
					</ul>
				</div>
			</section>

			<section className="groove-room" aria-labelledby="room-title">
				<div className="groove-room-head" data-reveal>
					<h2 id="room-title">The Groove Room</h2>
					<p>
						The mood behind the practice: warm light, soft shapes, and spaces
						that feel like an exhale.
					</p>
				</div>
				<GalleryRows />
				<p className="groove-room-shop" data-reveal>
					A curated shelf of skincare, beauty, and home finds
					<span>Coming soon</span>
				</p>
			</section>

			<section id="faq" className="groove-faq" aria-labelledby="faq-title">
				<div className="groove-faq-copy">
					<h2 id="faq-title" data-reveal>
						Before you book
					</h2>
					<div data-reveal>
						<FaqList />
					</div>
				</div>
				<figure className="groove-faq-photo">
					<img
						alt="A row of glowing lava lamps"
						height="1277"
						loading="lazy"
						src="/images/groove/61.webp"
						width="1800"
					/>
				</figure>
			</section>

			<section
				id="contact"
				className="groove-book"
				aria-labelledby="book-title"
			>
				<h2 id="book-title" data-reveal>
					Your next skin chapter starts here
				</h2>
				<div className="groove-book-details" data-reveal>
					<p className="groove-book-name">Skin Groove</p>
					<p>Virtual · From home</p>
				</div>
				<div data-reveal>
					<EmailPill />
				</div>
			</section>

			<footer className="groove-footer">
				<a className="groove-monogram" aria-label="Back to top" href="#top">
					SG
					<Flower className="groove-monogram-flower" />
				</a>
				<p>Virtual care. Warm approach.</p>
			</footer>
		</main>
	)
}
