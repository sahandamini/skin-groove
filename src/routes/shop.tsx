import { BagIcon } from '@phosphor-icons/react'
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

import { cn } from '@/lib/utils/ui'

import './shop.css'

type Product = {
	brand: string
	name: string
	detail: string
	category: string
	price: string
	image: string
	alt: string
	tone: string
}

const products: Product[] = [
	{
		brand: 'MIXI SKINCARE',
		name: 'Mandelic Acid Serum',
		detail: '5% · 30 ml',
		category: 'Treatments',
		price: '$32',
		image: '/images/skincare-ritual.webp',
		alt: 'Skincare products arranged on a warm surface',
		tone: 'peach',
	},
	{
		brand: 'MIXI SKINCARE',
		name: 'Mandelic Acid Serum',
		detail: '10% · 30 ml',
		category: 'Treatments',
		price: '$36',
		image: '/images/skincare-ritual.webp',
		alt: 'Skincare products arranged on a warm surface',
		tone: 'cream',
	},
	{
		brand: 'MIXI SKINCARE',
		name: 'Mandelic Acid Serum',
		detail: '15% · 30 ml',
		category: 'Treatments',
		price: '$39',
		image: '/images/skincare-ritual.webp',
		alt: 'Skincare products arranged on a warm surface',
		tone: 'sage',
	},
	{
		brand: 'MIXI SKINCARE',
		name: 'Hydrating Cloud Mask',
		detail: 'Comforting moisture · 50 ml',
		category: 'Masks',
		price: '$32',
		image: '/images/skin-groove-lounge-still-life.webp',
		alt: 'A warm, sunlit skincare still life',
		tone: 'rose',
	},
	{
		brand: 'MIXI SKINCARE',
		name: 'Daily Veil SPF 30',
		detail: 'Everyday sun protection',
		category: 'Sun care',
		price: '$34',
		image: '/images/theme-sunken-lounge.webp',
		alt: 'Warm terracotta and cream tones',
		tone: 'butter',
	},
	{
		brand: 'MIXI SKINCARE',
		name: 'Gentle Reset Cleanser',
		detail: 'A soft start · 150 ml',
		category: 'Cleansers',
		price: '$29',
		image: '/images/hero-skin.webp',
		alt: 'Natural glowing skin in warm light',
		tone: 'peach',
	},
]

export const Route = createFileRoute('/shop')({
	head: () => ({
		meta: [
			{ title: 'Shop | Skin Groove' },
			{
				name: 'description',
				content: 'A small, considered edit of skincare from Skin Groove.',
			},
		],
	}),
	component: ShopPage,
})

function ShopPage() {
	const [activeCategory, setActiveCategory] = useState('Everything')
	const [bagCount, setBagCount] = useState(0)
	const categories = [
		'Everything',
		'Cleansers',
		'Treatments',
		'Masks',
		'Sun care',
	]
	const visibleProducts = products.filter(
		(product) =>
			activeCategory === 'Everything' || product.category === activeCategory,
	)

	return (
		<main className="shop-page">
			<header className="shop-header page-width">
				<a className="shop-wordmark" href="/" aria-label="Skin Groove home">
					Skin Groove
				</a>
				<nav aria-label="Primary navigation" className="shop-nav">
					<a href="/#services">Services</a>
					<a href="/shop" aria-current="page">
						Shop
					</a>
					<a href="/#approach">Approach</a>
					<a href="/#about">About</a>
				</nav>
				<button
					className="shop-bag"
					type="button"
					aria-label={`Shopping bag, ${bagCount} items`}
				>
					<BagIcon aria-hidden="true" weight="light" />
					<span>Bag ({bagCount})</span>
				</button>
			</header>

			<section
				className="shop-products page-width"
				id="shop-products"
				aria-labelledby="products-title"
			>
				<div className="shop-section-heading">
					<div>
						<p className="shop-eyebrow">THE SKIN GROOVE SHOP</p>
						<h1 id="products-title">Shop skincare</h1>
					</div>
					<span>{visibleProducts.length} products</span>
				</div>
				<div className="shop-toolbar">
					<div className="shop-categories" aria-label="Filter products">
						{categories.map((category) => (
							<button
								className={cn(activeCategory === category && 'is-active')}
								key={category}
								onClick={() => setActiveCategory(category)}
								type="button"
								aria-pressed={activeCategory === category}
							>
								{category}
							</button>
						))}
					</div>
				</div>
				<div className="shop-grid">
					{visibleProducts.map((product) => (
						<ProductCard
							key={`${product.name}-${product.detail}`}
							product={product}
							onAdd={() => setBagCount((count) => count + 1)}
						/>
					))}
				</div>
				<p className="shop-demo-note">
					Sample products and prices shown for design preview.
				</p>
			</section>

			<footer className="shop-footer page-width">
				<a className="shop-wordmark" href="/">
					Skin Groove
				</a>
				<span>Care, not correction.</span>
				<a href="/">Back to home</a>
			</footer>
		</main>
	)
}

function ProductCard({
	product,
	onAdd,
}: {
	product: Product
	onAdd: () => void
}) {
	return (
		<article className="shop-product-card">
			<div className={cn('shop-product-image', `tone-${product.tone}`)}>
				<img src={product.image} alt={product.alt} loading="lazy" />
				<button
					type="button"
					className="shop-quick-add"
					onClick={onAdd}
					aria-label={`Add ${product.name} ${product.detail} to bag`}
				>
					+
				</button>
			</div>
			<div className="shop-product-info">
				<div>
					<p className="shop-product-brand">{product.brand}</p>
					<h3>{product.name}</h3>
					<p className="shop-product-detail">{product.detail}</p>
				</div>
				<span className="shop-product-price">{product.price}</span>
			</div>
			<span className="shop-product-category">{product.category}</span>
		</article>
	)
}
