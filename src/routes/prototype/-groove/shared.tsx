import {
	ArrowLeftIcon,
	ArrowRightIcon,
	ArrowUpRightIcon,
	PlusIcon,
} from '@phosphor-icons/react'
import { useCallback, useEffect, useRef } from 'react'

import { cn } from '@/lib/utils/ui'

import './base.css'

// ===== Content =====

export const guides = [
	{
		title: 'Hi, we are Skin Groove.',
		body: [
			'A virtual esthetics practice for people who want professional skincare guidance without visiting a treatment room.',
			'We help you understand your skin, simplify your routine, and choose products with more confidence.',
		],
	},
	{
		title: 'What guides the practice',
		body: [
			'Healthy skin is not built in a single appointment. It is built through consistency, honest guidance, and a plan designed around you.',
			'Skincare education is care, not correction.',
		],
	},
	{
		title: 'The experience',
		body: [
			'Every consultation begins with listening and ends with a routine that makes sense for real life.',
			'No rushed protocols. No crowded shelves. Just informed care and a plan you can actually follow.',
		],
	},
]

export const expectations = [
	{
		title: 'Personal guidance',
		body: 'No two consultations look alike. Advice is shaped around your skin, your goals, and your current shelf.',
	},
	{
		title: 'Useful routines',
		body: 'Practical steps you can follow on busy mornings and slow evenings, with a reason for each one.',
	},
	{
		title: 'A focused edit',
		body: 'Product picks that support your routine, without extra noise or unnecessary steps.',
	},
]

export const services = [
	{
		name: 'The consult',
		kind: 'Virtual consultation',
		body: 'A one-to-one video appointment about your skin, your goals, and the products you already own.',
	},
	{
		name: 'The routine edit',
		kind: 'Routine tune-up',
		body: 'A practical plan that keeps what works, removes what does not, and explains every step.',
	},
	{
		name: 'The shelf',
		kind: 'Curated retail · Coming soon',
		body: 'A small, considered product edit chosen to support your routine without adding clutter.',
	},
]

export const questions = [
	{
		question: 'How does a virtual consultation work?',
		answer:
			'You meet by video from wherever you are. We talk through your skin, your current routine, and your goals, then shape a plan around what we learn.',
	},
	{
		question: 'Do I need to overhaul my entire routine?',
		answer:
			'Probably not. If something works for you, keep it. We look at what you already use, simplify where needed, and fill the gaps that matter.',
	},
	{
		question: 'What do I leave with?',
		answer:
			'A clear routine you can follow at home, with an explanation for every step.',
	},
	{
		question: 'When can I book?',
		answer:
			'Booking and the online shop are coming soon. Until then, email Skin Groove to start the conversation.',
	},
]

// Mood photography from docs/esti_vision_board, resized into public/images/groove.
export const galleryRows = [
	[
		'01',
		'13',
		'37',
		'05',
		'41',
		'49',
		'18',
		'43',
		'62',
		'02',
		'50',
		'27',
		'15',
		'53',
		'39',
		'56',
		'06',
		'moodboard',
	],
	[
		'44',
		'03',
		'47',
		'52',
		'16',
		'38',
		'11',
		'42',
		'55',
		'25',
		'14',
		'66',
		'04',
		'48',
		'17',
		'40',
		'36',
		'59',
	],
]

export const allGalleryImages = galleryRows.flat()

export const imageSrc = (name: string) => `/images/groove/${name}.webp`

// ===== Building blocks =====

export function Flower({ className }: { className?: string }) {
	return (
		<svg
			aria-hidden="true"
			className={cn('gv-flower', className)}
			viewBox="0 0 100 100"
		>
			{[0, 45, 90, 135].map((angle) => (
				<ellipse
					cx="50"
					cy="50"
					key={angle}
					rx="15"
					ry="46"
					transform={`rotate(${angle} 50 50)`}
				/>
			))}
			<circle className="gv-flower-center" cx="50" cy="50" r="13" />
		</svg>
	)
}

export function BookPill({ className }: { className?: string }) {
	return (
		<button className={cn('gv-pill', className)} disabled type="button">
			Book now
			<span>Coming soon</span>
		</button>
	)
}

export function EmailPill({ className }: { className?: string }) {
	return (
		<a
			className={cn('gv-pill', className)}
			href="mailto:hello@skinbysmintz.com"
		>
			Email Skin Groove
			<ArrowUpRightIcon aria-hidden="true" weight="bold" />
		</a>
	)
}

export function FaqList({ className }: { className?: string }) {
	return (
		<div className={cn('gv-faq', className)}>
			{questions.map((item) => (
				<details key={item.question}>
					<summary>
						{item.question}
						<PlusIcon aria-hidden="true" />
					</summary>
					<p>{item.answer}</p>
				</details>
			))}
		</div>
	)
}

export function GalleryRows({
	className,
	rows = galleryRows,
}: {
	className?: string
	rows?: ReadonlyArray<ReadonlyArray<string>>
}) {
	return (
		<div className={cn('gv-rows', className)} aria-hidden="true">
			{rows.map((row, rowIndex) => (
				<div
					className={cn('gv-row', rowIndex % 2 === 1 && 'is-reverse')}
					key={rowIndex}
				>
					{[...row, ...row].map((image, index) => (
						<img
							alt=""
							height="360"
							key={index}
							loading="lazy"
							src={imageSrc(image)}
							width="270"
						/>
					))}
				</div>
			))}
		</div>
	)
}

/** Flags each `[data-reveal]` child once it scrolls into view. */
export function useReveal() {
	const ref = useRef<HTMLElement>(null)

	useEffect(() => {
		const root = ref.current
		if (!root) return

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (!entry.isIntersecting) continue
					entry.target.setAttribute('data-visible', '')
					observer.unobserve(entry.target)
				}
			},
			{ rootMargin: '0px 0px -10% 0px' },
		)

		for (const target of root.querySelectorAll('[data-reveal]')) {
			observer.observe(target)
		}
		root.setAttribute('data-reveal-ready', '')

		return () => observer.disconnect()
	}, [])

	return ref
}

// ===== Look switcher =====

export type Look<Key extends string> = { key: Key; name: string }

export function LookSwitcher<Key extends string>({
	looks,
	current,
	onSelect,
}: {
	looks: ReadonlyArray<Look<Key>>
	current: Key
	onSelect: (key: Key) => void
}) {
	const currentIndex = looks.findIndex((look) => look.key === current)

	const select = useCallback(
		(key: Key) => {
			window.scrollTo({ top: 0, behavior: 'instant' })
			onSelect(key)
		},
		[onSelect],
	)

	const move = useCallback(
		(offset: number) => {
			const next = looks[(currentIndex + offset + looks.length) % looks.length]
			if (next) select(next.key)
		},
		[currentIndex, looks, select],
	)

	useEffect(() => {
		const onKeyDown = (event: KeyboardEvent) => {
			if (
				event.target instanceof HTMLElement &&
				event.target.matches(
					'input, textarea, select, button, summary, [contenteditable="true"]',
				)
			)
				return

			if (event.key === 'ArrowLeft') move(-1)
			if (event.key === 'ArrowRight') move(1)
		}

		window.addEventListener('keydown', onKeyDown)
		return () => window.removeEventListener('keydown', onKeyDown)
	}, [move])

	return (
		<aside className="gv-switcher" aria-label="Choose a look">
			<button aria-label="Previous look" onClick={() => move(-1)} type="button">
				<ArrowLeftIcon aria-hidden="true" weight="bold" />
			</button>
			{looks.map((look) => (
				<button
					aria-current={look.key === current ? 'page' : undefined}
					className={cn(
						'gv-switcher-option',
						look.key === current && 'is-active',
					)}
					key={look.key}
					onClick={() => select(look.key)}
					type="button"
				>
					{look.name}
				</button>
			))}
			<button aria-label="Next look" onClick={() => move(1)} type="button">
				<ArrowRightIcon aria-hidden="true" weight="bold" />
			</button>
		</aside>
	)
}
