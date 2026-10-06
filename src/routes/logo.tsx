import { createFileRoute } from '@tanstack/react-router'
import type { ReactNode } from 'react'

import { cn } from '@/lib/utils/ui'

import {
	BloomMark,
	DoorwayMark,
	EchoMark,
	FlowerOsMark,
	RecordMark,
	SealMark,
	SunriseMark,
	SwooshMark,
} from './-logo/marks'

import './-logo/logo.css'

type Concept = {
	name: string
	note: string
	shape: 'badge' | 'wide'
	mark: () => ReactNode
	/** A compact version for favicons and profile pictures. */
	icon: () => ReactNode
}

const concepts: ReadonlyArray<Concept> = [
	{
		name: 'Doorway',
		note: 'Nested arches from the sunken lounge photo, beside the Caprasimo wordmark. Matches the Dusk and Doorways pages.',
		shape: 'wide',
		mark: () => <DoorwayMark />,
		icon: () => <DoorwayMark iconOnly />,
	},
	{
		name: 'Seal',
		note: 'A round stamp with the name set around the edge and the site flower in the middle. Works as a sticker and on packaging.',
		shape: 'badge',
		mark: () => <SealMark />,
		icon: () => <SealMark />,
	},
	{
		name: 'Record',
		note: 'A vinyl record with a flower label. Puts the “groove” in Skin Groove.',
		shape: 'badge',
		mark: () => <RecordMark />,
		icon: () => <RecordMark />,
	},
	{
		name: 'Sunrise',
		note: 'An arched name over a rising rainbow sun. The most 70s of the set.',
		shape: 'badge',
		mark: () => <SunriseMark />,
		icon: () => <SunriseMark />,
	},
	{
		name: 'Swoosh',
		note: 'The wordmark riding on four racing stripes that turn up at the end.',
		shape: 'wide',
		mark: () => <SwooshMark />,
		icon: () => <BloomMark />,
	},
	{
		name: 'Echo',
		note: 'A lowercase wordmark on a wave, with two colour echoes behind it.',
		shape: 'wide',
		mark: () => <EchoMark />,
		icon: () => <BloomMark />,
	},
	{
		name: 'Bloom',
		note: 'An eight-petal flower around a lowercase “sg” monogram. Strong at small sizes.',
		shape: 'badge',
		mark: () => <BloomMark />,
		icon: () => <BloomMark />,
	},
	{
		name: 'Flower O’s',
		note: 'A rounded retro wordmark in Righteous, where the two o’s in “groove” are flowers.',
		shape: 'wide',
		mark: () => <FlowerOsMark />,
		icon: () => <BloomMark />,
	},
]

const surfaces = [
	{ name: 'Cream', className: 'lg-on-cream' },
	{ name: 'Night', className: 'lg-on-night' },
	{ name: 'Garnet', className: 'lg-on-garnet' },
]

const iconSizes = [96, 48, 24]

export const Route = createFileRoute('/logo')({
	head: () => ({
		meta: [{ title: 'Logo studies | Skin Groove' }],
	}),
	component: LogoPage,
})

function LogoPage() {
	return (
		<main className="lg-page">
			<header className="lg-intro">
				<p className="lg-eyebrow">Skin Groove</p>
				<h1>Logo studies</h1>
				<p>
					Eight directions in the site palette. Each one shows on cream, night
					green, and garnet, plus small sizes for a favicon or a profile
					picture.
				</p>
			</header>

			<ol className="lg-list">
				{concepts.map((concept, index) => (
					<li className="lg-concept" key={concept.name}>
						<div className="lg-concept-head">
							<span className="lg-number">
								{String(index + 1).padStart(2, '0')}
							</span>
							<h2>{concept.name}</h2>
							<p>{concept.note}</p>
						</div>

						<div
							className={cn(
								'lg-surfaces',
								concept.shape === 'wide' && 'is-wide',
							)}
						>
							{surfaces.map((surface) => (
								<figure
									className={cn('lg-surface', surface.className)}
									key={surface.name}
								>
									<div className="lg-art">{concept.mark()}</div>
									<figcaption>
										<span className="sr-only">{concept.name} logo on </span>
										{surface.name}
									</figcaption>
								</figure>
							))}
						</div>

						<div className="lg-sizes lg-on-cream">
							{iconSizes.map((size) => (
								<div
									className="lg-size"
									key={size}
									style={{ width: size, height: size }}
								>
									{concept.icon()}
								</div>
							))}
							<span>Icon at 96, 48, and 24 px</span>
						</div>
					</li>
				))}
			</ol>
		</main>
	)
}
