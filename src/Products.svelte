<script>
	import { onMount } from 'svelte'

	export let href
	export let link = o => `/item/${o.name.toLowerCase().replaceAll(' ', '-')}`
	let products = []

	$: path = href + (href.slice(-1) != '/' ? '/' : '') + 'list_products'

	onMount(async () => {
		const res = await fetch( path )
		products = await res.json()
	})

</script>

<div class="ezipe-products">
	{#each products as p}
		<div 
			class:ezipe-active={p.active}
			class:ezipe-inactive={!p.active}
			id={`ezipe-product-${p.id}`} >

			<div class="ezipe-product-images">
				{#each p.images as img, i}
					<a href={ link(p) }>
						<img src={img} alt={p.name + ' ' + i} title={p.name + ' ' + i} />
					</a>
				{/each}
			</div>

			<h3 class="ezipe-title">
				<a href={ link(p) }>{p.name}</a>
			</h3>
			<div class="ezipe-unit-label">{p.unit_label}</div>

		</div>

	{/each}
</div>