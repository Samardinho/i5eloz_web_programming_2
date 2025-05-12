<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import LoadProgress from '$lib/components/LoadProgress.svelte';
	import ScrollUp from '$lib/components/ScrollUp.svelte';
	import './app.css';
</script>

<svelte:head>
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
	<meta name="description" content="Welcome to Football Insider, your go-to blog for the latest football news, match analyses, and player insights by Olamilekan Samard." />
	<!-- No default <title> here, only description common to whole site. -->
</svelte:head>

<LoadProgress />
<ScrollUp />

<div class="wrapper">
	<Nav />

	<main>
		<slot />
	</main>
</div>

<style>
    /* ... your existing wrapper and main styles ... */
</style>