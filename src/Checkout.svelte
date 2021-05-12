<script>
	import { onMount } from 'svelte'

	export let publishable_key = 'pk_test_51HdmNOLcl0oc7Ec7rdXHzEjCjN4UChDtzcBq1uwAuvkm5pLF3H862bmC4stnUcdQPaD9BeyWSlkDxkAyavxIPbT8007myZUOOH'
	export let href

	$: path = href + (href.slice(-1) != '/' ? '/' : '') + 'create_session'

	let stripe
	onMount(async () => {
		stripe = Stripe( publishable_key )
	})

	async function onClick() {

		const session = await (await fetch('/api/create_session')).json()
		console.log('using session', session)
		stripe.redirectToCheckout({ 
			sessionId: session.id
		})
	} 


</script>

<button on:click={onClick}>
	<slot />
</button>