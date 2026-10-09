import { cn } from '@/lib/utils/ui'

import { expectations, guides, services } from './content'
import { EmailPill, FaqList, GalleryRows, Record } from './parts'

import './sections.css'

const serviceArches = [
	'/images/groove/37-lg.webp',
	'/images/groove/43-lg.webp',
	'/images/groove/06-lg.webp',
]

function Wave({ className }: { className?: string }) {
	return (
		<svg
			aria-hidden="true"
			className={cn('home-wave', className)}
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
		<svg aria-hidden="true" className="home-rainbow" viewBox="0 0 400 200">
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

export function Sections() {
	return (
		<>
			<section className="home-meet" aria-labelledby="home-meet-title">
				<div className="home-meet-head" data-reveal>
					<Record className="home-meet-record" />
					<h2 id="home-meet-title">Meet Skin Groove</h2>
				</div>
				<div className="home-meet-cards">
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

			<section className="home-expect" aria-labelledby="home-expect-title">
				<Wave className="is-top" />
				<div className="home-expect-inner">
					<h2 id="home-expect-title" data-reveal>
						What you can expect
					</h2>
					<div className="home-expect-grid">
						{expectations.map((item, index) => (
							<article
								data-reveal
								key={item.title}
								style={{ transitionDelay: `${index * 90}ms` }}
							>
								<div className="home-badge">
									<Record />
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
				className="home-services"
				aria-labelledby="home-services-title"
			>
				<h2 id="home-services-title" data-reveal>
					Services
				</h2>
				<div className="home-service-grid">
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
							<p className="home-service-kind">{service.kind}</p>
							<p>{service.body}</p>
						</article>
					))}
				</div>
			</section>

			<section className="home-room" aria-labelledby="home-room-title">
				<div className="home-room-head" data-reveal>
					<h2 id="home-room-title">The Groove Room</h2>
					<p>
						Warm light, soft shapes, and spaces that feel like an exhale. A
						curated shelf of skincare and home finds is coming soon.
					</p>
				</div>
				<GalleryRows />
			</section>

			<section id="faq" className="home-faq" aria-labelledby="home-faq-title">
				<figure className="home-faq-photo" data-reveal>
					<img
						alt="A row of glowing lava lamps"
						height="1277"
						loading="lazy"
						src="/images/groove/61.webp"
						width="1800"
					/>
				</figure>
				<div className="home-faq-copy" data-reveal>
					<h2 id="home-faq-title">Before you book</h2>
					<FaqList />
				</div>
			</section>

			<section
				id="contact"
				className="home-book"
				aria-labelledby="home-book-title"
			>
				<Rainbow />
				<h2 id="home-book-title" data-reveal>
					Your next skin chapter starts here
				</h2>
				<p data-reveal>Virtual · From home</p>
				<div data-reveal>
					<EmailPill />
				</div>
			</section>

			<footer className="home-footer">
				<p className="home-mark">
					<Record />
					Skin Groove
				</p>
				<p>Virtual care. Warm approach.</p>
			</footer>
		</>
	)
}
