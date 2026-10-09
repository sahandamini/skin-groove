import { useId } from 'react'

import { cn } from '@/lib/utils/ui'

// Each mark paints with the `lg-*` tone classes, so one SVG adapts to every surface.

type Tone =
	| 'ink'
	| 'paper'
	| 'vinyl'
	| 'garnet'
	| 'burnt'
	| 'amber'
	| 'apricot'
	| 'avocado'

const fill: Record<Tone, string> = {
	ink: 'lg-ink',
	paper: 'lg-paper',
	vinyl: 'lg-vinyl',
	garnet: 'lg-garnet',
	burnt: 'lg-burnt',
	amber: 'lg-amber',
	apricot: 'lg-apricot',
	avocado: 'lg-avocado',
}

const stroke: Record<Tone, string> = {
	ink: 'lg-stroke-ink',
	paper: 'lg-stroke-paper',
	vinyl: 'lg-stroke-vinyl',
	garnet: 'lg-stroke-garnet',
	burnt: 'lg-stroke-burnt',
	amber: 'lg-stroke-amber',
	apricot: 'lg-stroke-apricot',
	avocado: 'lg-stroke-avocado',
}

function Bloom({
	x,
	y,
	r,
	petals = 4,
	petal,
	center,
}: {
	x: number
	y: number
	r: number
	petals?: number
	petal: Tone | ReadonlyArray<Tone>
	center: Tone
}) {
	const angles = Array.from({ length: petals }, (_, i) => (i * 180) / petals)
	const petalTones = typeof petal === 'string' ? [petal] : petal

	return (
		<g>
			{angles.map((angle, index) => (
				<ellipse
					className={fill[petalTones[index % petalTones.length] ?? 'ink']}
					cx={x}
					cy={y}
					key={angle}
					rx={r * 0.32}
					ry={r}
					transform={`rotate(${angle} ${x} ${y})`}
				/>
			))}
			<circle className={fill[center]} cx={x} cy={y} r={r * 0.28} />
		</g>
	)
}

/** A full circle path that starts at the left and runs clockwise over the top. */
function circlePath(cx: number, cy: number, r: number) {
	return `M ${cx - r} ${cy} a ${r} ${r} 0 1 1 ${r * 2} 0 a ${r} ${r} 0 1 1 ${-r * 2} 0`
}

// ===== 1. Seal =====

export function SealMark() {
	const ringId = useId()

	return (
		<svg aria-hidden="true" viewBox="0 0 400 400">
			<defs>
				<path d={circlePath(200, 200, 158)} id={ringId} />
			</defs>
			<circle className={fill.ink} cx="200" cy="200" r="194" />
			<circle
				className={stroke.paper}
				cx="200"
				cy="200"
				fill="none"
				r="140"
				strokeWidth="2"
			/>
			<text className={fill.paper} fontSize="27" fontWeight="800">
				<textPath
					href={'#' + ringId}
					lengthAdjust="spacing"
					textLength={2 * Math.PI * 158 - 20}
				>
					SKIN GROOVE • VIRTUAL ESTHETICS •
				</textPath>
			</text>
			<Bloom center="amber" petal="burnt" r={105} x={200} y={200} />
		</svg>
	)
}

// ===== 2. Doorway =====

function DoorwayIcon() {
	const tones: ReadonlyArray<Tone> = [
		'garnet',
		'burnt',
		'amber',
		'apricot',
		'paper',
	]

	return (
		<g>
			{tones.map((tone, index) => {
				const left = 20 + index * 24
				const right = 260 - index * 24
				const radius = (right - left) / 2
				return (
					<path
						className={fill[tone]}
						d={`M ${left} 300 V 140 A ${radius} ${radius} 0 0 1 ${right} 140 V 300 Z`}
						key={tone}
					/>
				)
			})}
		</g>
	)
}

export function DoorwayMark({ iconOnly = false }: { iconOnly?: boolean }) {
	if (iconOnly) {
		return (
			<svg aria-hidden="true" viewBox="0 0 280 320">
				<DoorwayIcon />
			</svg>
		)
	}

	return (
		<svg aria-hidden="true" viewBox="0 0 900 320">
			<DoorwayIcon />
			<text
				className={cn('lg-display', fill.ink)}
				fontSize="96"
				x="304"
				y="196"
			>
				Skin Groove
			</text>
			<text
				className="lg-accent"
				fontSize="22"
				fontWeight="800"
				letterSpacing="8"
				x="310"
				y="250"
			>
				VIRTUAL ESTHETICS
			</text>
		</svg>
	)
}

// ===== 3. Record =====

export function RecordMark() {
	const topId = useId()
	const bottomId = useId()
	const grooves = Array.from({ length: 9 }, (_, i) => 176 - i * 9)

	return (
		<svg aria-hidden="true" viewBox="0 0 400 400">
			<defs>
				<path d="M 134 200 A 66 66 0 0 1 266 200" id={topId} />
				<path d="M 125 200 A 75 75 0 0 0 275 200" id={bottomId} />
			</defs>
			<circle className={fill.vinyl} cx="200" cy="200" r="194" />
			{grooves.map((radius) => (
				<circle
					className="lg-groove"
					cx="200"
					cy="200"
					fill="none"
					key={radius}
					r={radius}
					strokeWidth="1.5"
				/>
			))}
			<path
				className="lg-sheen"
				d="M200 200 L 330 40 A 194 194 0 0 1 375 95 Z"
			/>
			<path
				className="lg-sheen"
				d="M200 200 L 70 360 A 194 194 0 0 1 25 305 Z"
			/>
			<circle className={fill.amber} cx="200" cy="200" r="86" />
			<Bloom center="garnet" petal="burnt" r={40} x={200} y={200} />
			<text
				className="lg-label-text"
				fontSize="13"
				fontWeight="800"
				letterSpacing="3"
				textAnchor="middle"
			>
				<textPath href={'#' + topId} startOffset="50%">
					SKIN GROOVE
				</textPath>
			</text>
			<text
				className="lg-label-text"
				fontSize="10"
				fontWeight="800"
				letterSpacing="2.5"
				textAnchor="middle"
			>
				<textPath href={'#' + bottomId} startOffset="50%">
					VIRTUAL ESTHETICS
				</textPath>
			</text>
		</svg>
	)
}

// ===== 4. Swoosh =====

export function SwooshMark() {
	const tones: ReadonlyArray<Tone> = ['apricot', 'amber', 'burnt', 'garnet']

	return (
		<svg aria-hidden="true" viewBox="0 0 800 300">
			{tones.map((tone, index) => {
				const radius = 34 + index * 17
				return (
					<path
						className={stroke[tone]}
						d={`M 34 ${150 + radius} H 660 A ${radius} ${radius} 0 0 0 ${660 + radius} 150 V 36`}
						fill="none"
						key={tone}
						strokeLinecap="round"
						strokeWidth="12"
					/>
				)
			})}
			<text
				className={cn('lg-display', fill.ink)}
				fontSize="100"
				x="28"
				y="150"
			>
				Skin Groove
			</text>
		</svg>
	)
}

// ===== 5. Echo =====

export function EchoMark() {
	const waveId = useId()
	const layers: ReadonlyArray<{ tone: Tone; offset: number }> = [
		{ tone: 'apricot', offset: 12 },
		{ tone: 'burnt', offset: 6 },
		{ tone: 'ink', offset: 0 },
	]

	return (
		<svg aria-hidden="true" viewBox="0 0 800 280">
			<defs>
				<path
					d="M 20 165 C 200 125, 300 125, 400 150 S 600 180, 780 140"
					id={waveId}
				/>
			</defs>
			{layers.map((layer) => (
				<text
					className={cn('lg-display', fill[layer.tone])}
					fontSize="108"
					key={layer.tone}
					textAnchor="middle"
					transform={`translate(${layer.offset} ${layer.offset})`}
				>
					<textPath href={'#' + waveId} startOffset="50%">
						skin groove
					</textPath>
				</text>
			))}
		</svg>
	)
}

// ===== 6. Bloom monogram =====

export function BloomMark() {
	return (
		<svg aria-hidden="true" viewBox="0 0 400 400">
			<Bloom
				center="garnet"
				petal={['amber', 'apricot']}
				petals={8}
				r={192}
				x={200}
				y={200}
			/>
			<circle className={fill.garnet} cx="200" cy="200" r="98" />
			<text
				className={cn('lg-display', 'lg-monogram')}
				fontSize="116"
				textAnchor="middle"
				x="200"
				y="236"
			>
				sg
			</text>
		</svg>
	)
}

// ===== 7. Sunrise =====

export function SunriseMark() {
	const arcId = useId()
	const bands: ReadonlyArray<{ tone: Tone; radius: number }> = [
		{ tone: 'garnet', radius: 130 },
		{ tone: 'burnt', radius: 104 },
		{ tone: 'amber', radius: 78 },
		{ tone: 'apricot', radius: 52 },
	]

	return (
		<svg aria-hidden="true" viewBox="0 0 400 380">
			<defs>
				<path d="M 30 300 A 170 170 0 0 1 370 300" id={arcId} />
			</defs>
			<text
				className={cn('lg-display', fill.ink)}
				fontSize="50"
				textAnchor="middle"
			>
				<textPath href={'#' + arcId} startOffset="50%">
					SKIN GROOVE
				</textPath>
			</text>
			{bands.map((band) => (
				<path
					className={fill[band.tone]}
					d={`M ${200 - band.radius} 300 A ${band.radius} ${band.radius} 0 0 1 ${200 + band.radius} 300 Z`}
					key={band.tone}
				/>
			))}
			<rect className={fill.ink} height="6" rx="3" width="320" x="40" y="300" />
			<text
				className={fill.ink}
				fontSize="20"
				fontWeight="800"
				letterSpacing="6"
				textAnchor="middle"
				x="203"
				y="348"
			>
				VIRTUAL ESTHETICS
			</text>
		</svg>
	)
}

// ===== 8. Flower O's =====

function FlowerO() {
	return (
		<svg aria-hidden="true" className="lg-flower-o" viewBox="0 0 100 100">
			<Bloom center="amber" petal="burnt" r={48} x={50} y={50} />
		</svg>
	)
}

export function FlowerOsMark() {
	return (
		<div aria-hidden="true" className="lg-flower-os">
			<p>
				skin gr
				<FlowerO />
				<FlowerO />
				ve
			</p>
			<p className="lg-flower-os-sub">virtual esthetics</p>
		</div>
	)
}
