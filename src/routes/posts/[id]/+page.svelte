<script lang="ts">
	import GoBack from '$lib/components/GoBack.svelte';

	export let data;
	export let post;

	$: toc = data.toc;
	$: html_code = data.html_code;
	$: title = data.attributes.title;
	$: author = data.attributes.author;
	$: published = data.attributes.published?.toLocaleDateString();
	$: image = data.attributes.image;
</script>

<svelte:head>
	<title>Football Insider | {title}</title>
</svelte:head>

<div class="post-container">
	<GoBack />

	<div class="post-header">
		{#if image}
			<img src='/images/ball.jpg' alt={title} class="post-image" />
		{/if}
		<div class="post-meta">
			<h1>{title}</h1>
			<div class="meta">
				<div>By {author}</div>
				<div>Published: {published}</div>
			</div>
		</div>
	</div>
	

	{#if toc.length > 0}
		<details class="toc">
			<summary>Table of Contents</summary>
			<ol>
				{#each toc as item}
					<li>
						<a href="#{item.id}">{item.text}</a>
					</li>
				{/each}
			</ol>
		</details>

		<div class="outer-toc" class:long={toc.length > 15} aria-hidden="true">
			<ol>
				{#each toc as item}
					<li>
						<a tabindex="-1" href="#{item.id}">{item.text}</a>
					</li>
				{/each}
			</ol>
		</div>
	{/if}

	<article>
		{@html html_code}
	</article>
</div>

<style lang="scss">
	.post-container {
		max-width: 900px;
		margin: 0 auto;
		padding: 2rem;
		background-color: #fff;
		border-radius: 10px;
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
	}

	.post-header {
		position: relative;
		margin-bottom: 2rem;
	}

	.post-image {
		width: 100%;
		height: 350px;
		object-fit: cover;
		border-radius: 10px;
		filter: brightness(90%);
	}

	.post-meta {
		position: absolute;
		bottom: 1.5rem;
		left: 1.5rem;
		color: white;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
	}

	h1 {
		font-size: 2.5rem;
		color: #d32f2f;
		margin: 0 0 0.5rem 0;
	}

	.meta {
		display: flex;
		gap: 1rem;
		font-size: 1rem;
		color: white;
	}

	.toc {
		margin: 2rem 0;
		border: 1px solid #ddd;
		border-radius: 8px;
		padding: 1rem;
		background-color: #fafafa;

		summary {
			font-weight: bold;
			color: #d32f2f;
			cursor: pointer;
			font-size: 1.1rem;
		}

		ol {
			margin-top: 0.5rem;
			padding-left: 1.5rem;
		}

		li {
			margin-bottom: 0.5rem;
		}

		a {
			color: #1976d2;
			text-decoration: none;
		}

		a:hover {
			text-decoration: underline;
			color: #d32f2f;
		}
	}

	.outer-toc {
		opacity: 0;
		pointer-events: none;

		@media (min-width: 68rem) {
			opacity: 1;
			pointer-events: initial;
		}

		transition: opacity 250ms linear;
		position: fixed;
		top: 0;
		height: 100vh;
		transform: translateX(42rem);
		overflow-y: auto;
		display: flex;
		align-items: center;
		color: #666;

		ol {
			margin-left: 0;
			padding-left: 1.5rem;
			border-left: 2px solid #ddd;
		}

		a {
			color: #666;
			text-decoration: none;
			font-size: 0.9rem;
		}

		a:hover {
			color: #d32f2f;
		}

		&.long {
			align-items: start;

			li + li {
				margin-block: 0;
			}

			ol {
				padding-block: 1rem;
				height: 100vh;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
			}
		}
	}

	article {
		line-height: 1.8;
		color: #333;
		font-size: 1.1rem;

		:global(h2) {
			color: #d32f2f;
			font-size: 1.8rem;
			padding-top: 3rem;
			margin-top: -1.5rem;
			border-bottom: 2px solid #ddd;
			padding-bottom: 0.5rem;
		}

		:global(h3) {
			color: #d32f2f;
			font-size: 1.4rem;
		}

		:global(p) {
			margin-bottom: 1.5rem;
		}

		:global(blockquote) {
			margin: 1.5rem 0;
			padding: 1rem 1.5rem;
			background-color: #f9f9f9;
			border-left: 4px solid #d32f2f;
			color: #555;
			font-style: italic;
			line-height: 1.6;
		}

		:global(pre) {
			background-color: #1a1a1a;
			color: #f5f5f5;
			padding: 1.5rem;
			border-radius: 8px;
			overflow-x: auto;
			margin: 1.5rem 0;
			font-size: 0.95rem;

			scrollbar-width: thin;
			&::-webkit-scrollbar {
				height: 0.4rem;
			}
			&::-webkit-scrollbar-thumb {
				background-color: #666;
				border-radius: 10px;
			}
		}

		:global(code:not(pre code)) {
			font-family: 'Courier New', Courier, monospace;
			background-color: #f0f0f0;
			padding: 0.2rem 0.5rem;
			border-radius: 4px;
			font-size: 0.95rem;
			color: #d32f2f;
		}
	}
</style>