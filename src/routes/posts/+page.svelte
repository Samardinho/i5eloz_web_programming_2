<script lang="ts">
	import PostPreview from './PostPreview.svelte';

	export let data;
	const { posts } = data;
</script>

<svelte:head>
	<title>Football Insider | Latest Posts</title>
	<meta name="description" content="Stay updated with the latest football news, match analyses, and player insights on Football Insider." />
</svelte:head>

<div class="posts-container">
	<div class="banner-section">
		<img src="/images/Haaland.jpeg" alt="Football Pitch" class="banner-image" />
		<div class="banner-text">
			<h1>Latest Football Posts</h1>
			<p>
				Stay in the game with Football Insider! Get the latest match analyses, player insights, and transfer rumors from Olamilekan Samard.
			</p>
		</div>
	</div>

	<ol class="post-list">
		{#each posts as post (post.id)}
		  <PostPreview {post} />
		{/each} </ol>
</div>

<style lang="scss">
	.posts-container {
		max-width: 900px;
		margin: 0 auto;
		padding: 2rem;
	}

	.banner-section {
		position: relative;
		margin-bottom: 2rem;
	}

	.banner-image {
		width: 100%;
		height: 250px;
		object-fit: cover;
		border-radius: 10px;
		filter: brightness(80%);
	}

	.banner-text {
		position: absolute;
		bottom: 1.5rem;
		left: 1.5rem;
		color: white;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
	}

	h1 {
		color: #d32f2f;
		font-size: 2.5rem;
		margin-bottom: 0.5rem;
	}

	.banner-text p {
		font-size: 1.1rem;
		line-height: 1.6;
		max-width: 70%;
	}

	.post-list {
		list-style: none;
		padding: 0;
	}
</style>