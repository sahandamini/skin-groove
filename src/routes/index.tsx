import { createFileRoute } from '@tanstack/react-router'

import { Hero } from './-home/hero'
import { useReveal } from './-home/parts'
import { Sections } from './-home/sections'

export const Route = createFileRoute('/')({ component: HomePage })

function HomePage() {
	const pageRef = useReveal()

	return (
		<main ref={pageRef} id="top" className="gv">
			<Hero />
			<Sections />
		</main>
	)
}
