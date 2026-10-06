import { cn } from '@/lib/utils/ui'

import {
	BookPill,
	EmailPill,
	expectations,
	FaqList,
	Flower,
	guides,
	imageSrc,
	services,
	useReveal,
} from './shared'

import './poster.css'

const stripeColors = [
	'var(--chestnut)',
	'var(--burnt)',
	'var(--amber)',
	'var(--avocado)',
]

const serviceThumbs = ['37', '43', '05']

const collage = [
	'01',
	'13',
	'37',
	'05',
	'41',
	'49',
	'18',
	'62',
	'02',
	'50',
	'47',
	'52',
]

/** Racing stripes that run along the bottom, then sweep up the right side. */
function Stripes({ className }: { className?: string }) {
	return (
		<svg
			aria-hidden="true"
			className={cn('poster-stripes', className)}
			fill="none"
			preserveAspectRatio="xMaxYMax meet"
			viewBox="0 0 1200 600"
		>
			{stripeColors.map((color, index) => {
				const offset = index * 34
				return (
					<path
						d={`M -20 ${560 - offset} H ${880 - offset} A ${300 - offset} ${300 - offset} 0 0 0 ${1180 - offset * 2} ${260 + offset} V -20`}
						key={color}
						stroke={color}
						strokeWidth="26"
					/>
				)
			})}
		</svg>
	)
}

function StripeRule() {
	return (
		<span className="poster-rule" aria-hidden="true">
			{stripeColors.map((color) => (
				<span key={color} style={{ background: color }} />
			))}
		</span>
	)
}

export function PosterLook() {
	const pageRef = useReveal()

	return (
		<main ref={pageRef} id="top" className="gv poster">
			<header className="poster-hero">
				<Stripes />
				<nav className="poster-nav" aria-label="Primary navigation">
					<a className="poster-mark" href="#top">
						<Flower className="gv-spin" />
						Skin Groove
					</a>
					<div className="poster-nav-links">
						<a href="#services">Services</a>
						<a href="#faq">FAQ</a>
						<a href="#contact">Contact</a>
					</div>
				</nav>

				<div className="poster-hero-grid">
					<div className="poster-hero-copy">
						<h1 className="poster-wordmark">
							<span>Skin</span>
							<span>Groove</span>
						</h1>
						<p className="poster-statement">
							Virtual esthetics rooted in skin health and routines that fit real
							life.
						</p>
						<BookPill className="poster-pill-dark" />
					</div>

					<div className="poster-record">
						<svg
							aria-hidden="true"
							className="poster-record-text gv-spin"
							viewBox="0 0 200 200"
						>
							<defs>
								<path
									d="M 100,100 m -86,0 a 86,86 0 1,1 172,0 a 86,86 0 1,1 -172,0"
									id="poster-ring"
								/>
							</defs>
							<text>
								<textPath href="#poster-ring">
									Virtual care · Warm approach · Virtual care · Warm approach ·
								</textPath>
							</text>
						</svg>
						<figure>
							<img
								alt="A glowing apricot living room"
								fetchPriority="high"
								height="1400"
								src="/images/groove/13-lg.webp"
								width="1121"
							/>
						</figure>
					</div>
				</div>
			</header>

			<section className="poster-meet" aria-labelledby="poster-meet-title">
				<h2 id="poster-meet-title" data-reveal>
					Meet Skin Groove
				</h2>
				<div className="poster-meet-columns">
					{guides.map((guide, index) => (
						<div
							data-reveal
							key={guide.title}
							style={{ transitionDelay: `${index * 90}ms` }}
						>
							<StripeRule />
							<p className="poster-number">0{index + 1}</p>
							<h3>{guide.title}</h3>
							{guide.body.map((paragraph) => (
								<p key={paragraph}>{paragraph}</p>
							))}
						</div>
					))}
				</div>
			</section>

			<section className="poster-expect" aria-labelledby="poster-expect-title">
				<h2 id="poster-expect-title" data-reveal>
					What you can expect
				</h2>
				<div className="poster-expect-grid">
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
				className="poster-services"
				aria-labelledby="poster-services-title"
			>
				<h2 id="poster-services-title" data-reveal>
					Services
				</h2>
				<ol>
					{services.map((service, index) => (
						<li data-reveal key={service.name}>
							<span className="poster-service-no" aria-hidden="true">
								0{index + 1}
							</span>
							<h3>{service.name}</h3>
							<div className="poster-service-copy">
								<p className="poster-service-kind">{service.kind}</p>
								<p>{service.body}</p>
							</div>
							<img
								alt=""
								className="poster-service-thumb"
								height="360"
								loading="lazy"
								src={imageSrc(serviceThumbs[index] ?? '37')}
								width="360"
							/>
						</li>
					))}
				</ol>
			</section>

			<section className="poster-room" aria-labelledby="poster-room-title">
				<div className="poster-room-head" data-reveal>
					<h2 id="poster-room-title">The Groove Room</h2>
					<p>
						The mood behind the practice. A curated shelf of skincare, beauty,
						and home finds is coming soon.
					</p>
				</div>
				<div className="poster-collage" aria-hidden="true">
					{collage.map((image, index) => (
						<figure data-reveal key={image}>
							<img
								alt=""
								height="360"
								loading="lazy"
								src={imageSrc(image)}
								style={{ transitionDelay: `${(index % 4) * 60}ms` }}
								width="270"
							/>
						</figure>
					))}
				</div>
			</section>

			<section
				id="faq"
				className="poster-faq"
				aria-labelledby="poster-faq-title"
			>
				<div className="poster-faq-copy" data-reveal>
					<h2 id="poster-faq-title">Before you book</h2>
					<FaqList />
				</div>
				<figure className="poster-faq-photo" data-reveal>
					<img
						alt="A retro bedroom with an arched mural and glowing lamp"
						height="1400"
						loading="lazy"
						src="/images/groove/01-lg.webp"
						width="933"
					/>
				</figure>
			</section>

			<section
				id="contact"
				className="poster-book"
				aria-labelledby="poster-book-title"
			>
				<Stripes className="is-book" />
				<div className="poster-book-copy">
					<h2 id="poster-book-title" data-reveal>
						Your next skin chapter starts here
					</h2>
					<p data-reveal>Skin Groove · Virtual · From home</p>
					<div data-reveal>
						<EmailPill />
					</div>
				</div>
			</section>

			<footer className="poster-footer">
				<p className="poster-mark">
					<Flower />
					Skin Groove
				</p>
				<p>Virtual care. Warm approach.</p>
			</footer>
		</main>
	)
}
