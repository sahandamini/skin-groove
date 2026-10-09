import { BookPill, Record } from './parts'

import './hero.css'

const doorways = [
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

export function Hero() {
	return (
		<>
			<header className="hero">
				<div className="hero-doorways">
					{doorways.map((image, index) => (
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

				<nav className="hero-nav" aria-label="Primary navigation">
					<a aria-label="Skin Groove home" href="#top">
						<Record className="hero-nav-record" />
					</a>
					<div className="hero-nav-links">
						<a href="#services">Services</a>
						<a href="#faq">FAQ</a>
						<a href="#contact">Contact</a>
					</div>
					<BookPill className="hero-nav-pill" />
				</nav>

				<div className="hero-copy">
					<h1 className="hero-wordmark">Skin Groove</h1>
					<div className="hero-foot">
						<p className="hero-tagline">
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
			<div aria-hidden="true" className="hero-colonnade" />
		</>
	)
}
