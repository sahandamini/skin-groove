import { createFileRoute } from '@tanstack/react-router'

import { ArchesLook } from './-groove/arches'
import { NightLook } from './-groove/night'
import { OriginalLook } from './-groove/original'
import { PosterLook } from './-groove/poster'
import { LookSwitcher, type Look } from './-groove/shared'

type LookKey = 'original' | 'arches' | 'night' | 'poster'

const looks: ReadonlyArray<Look<LookKey>> = [
	{ key: 'original', name: 'Original' },
	{ key: 'arches', name: 'Arches' },
	{ key: 'night', name: 'Jewel Night' },
	{ key: 'poster', name: 'Poster' },
]

export const Route = createFileRoute('/prototype/groove')({
	validateSearch: (search: Record<string, unknown>): { look: LookKey } => ({
		look: looks.find((item) => item.key === search.look)?.key ?? 'original',
	}),
	head: () => ({
		meta: [
			{ title: 'Skin Groove | Virtual Esthetics' },
			{
				name: 'description',
				content:
					'Virtual skin consultations, practical routines, and a curated skincare shop.',
			},
		],
	}),
	component: GroovePage,
})

function GroovePage() {
	const { look } = Route.useSearch()
	const navigate = Route.useNavigate()

	return (
		<>
			<LookSwitcher
				current={look}
				looks={looks}
				onSelect={(key) =>
					void navigate({ search: { look: key }, replace: true })
				}
			/>
			{look === 'original' && <OriginalLook />}
			{look === 'arches' && <ArchesLook />}
			{look === 'night' && <NightLook />}
			{look === 'poster' && <PosterLook />}
		</>
	)
}
