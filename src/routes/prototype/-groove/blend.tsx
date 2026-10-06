import { cn } from '@/lib/utils/ui'

import { ArchesBody, ArchesHero } from './arches'
import { NightHero } from './night'
import { BookPill, Flower, OrnamentContext, useReveal } from './shared'

import './blend.css'

// Combined looks: a Jewel Night style hero above the Arches page body.

function BlendPage({
	children,
	className,
}: {
	children: React.ReactNode
	className?: string
}) {
	const pageRef = useReveal()

	return (
		<main ref={pageRef} id="top" className={cn('gv arch blend', className)}>
			{children}
			<ArchesBody />
		</main>
	)
}

/** A row of cream arches that rises out of a dark hero into the page. */
function Colonnade() {
	return <div aria-hidden="true" className="blend-colonnade" />
}

export function DuskLook() {
	return (
		<BlendPage>
			<NightHero className="night" />
			<Colonnade />
		</BlendPage>
	)
}

export function DoorwaysLook() {
	return (
		<BlendPage>
			<NightHero className="night blend-doorways" />
			<Colonnade />
		</BlendPage>
	)
}

export function RecordDoorwaysLook() {
	return (
		<OrnamentContext value="record">
			<DoorwaysLook />
		</OrnamentContext>
	)
}

export function GlowLook() {
	return (
		<BlendPage>
			<ArchesHero className="blend-glow" />
		</BlendPage>
	)
}

export function MoonriseLook() {
	return (
		<BlendPage>
			<header className="night blend-moon">
				<nav className="blend-moon-nav" aria-label="Primary navigation">
					<a className="arch-mark" href="#top">
						<Flower className="gv-spin" />
						Skin Groove
					</a>
					<div className="night-nav-links">
						<a href="#services">Services</a>
						<a href="#faq">FAQ</a>
						<a href="#contact">Contact</a>
					</div>
				</nav>

				<div className="blend-moon-stage">
					<figure className="blend-moon-arch">
						<img
							alt="A sunken lounge under glowing amber arches"
							fetchPriority="high"
							height="1104"
							src="/images/groove/57.webp"
							width="736"
						/>
					</figure>
					<h1 className="blend-moon-wordmark">
						<span>Skin</span>
						<span>Groove</span>
					</h1>
					<Flower className="blend-moon-flower is-left gv-spin" />
					<Flower className="blend-moon-flower is-right gv-spin" />
				</div>

				<div className="night-hero-foot blend-moon-foot">
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
			</header>
			<Colonnade />
		</BlendPage>
	)
}
