<script lang="ts">
	import type { posts } from './types';

	export let post: posts;

	$: draft = post.id.startsWith('_draft');

	// Use post.image if it exists, otherwise use the default.
	// This ensures imageUrl ALWAYS has a string value.
	$: imageUrl = post.image || '/images/default-post.jpg';

	// REMOVED the problematic reactive $: if block for now
	// $: if (!post.image) {
	//  console.warn(`Missing image for post "${post.title}", using default image: ${imageUrl}`);
	// }

</script>

<li class="post-preview">
	<!-- REMOVED the {#if} block entirely -->
	<img src={imageUrl} alt={post.title || 'Football Post'} class="post-image" />

	<div class="post-content">
		<h3 class:draft={draft}>{post.title || 'Untitled Post'}</h3>
		<p class="meta">
			By {post.author || 'Unknown Author'} | Published: {new Date(post.published).toLocaleDateString()}
		</p>
		<p>{post.description || 'No description available.'}</p>
		<a href={`/posts/${post.id}`} class="read-more">Read More</a>
	</div>
</li>


<style lang="scss">
	/* ... Your existing styles ... */
	.post-image.placeholder { /* Example placeholder style */
		width: 120px;
		height: 120px;
		border: 1px dashed #ccc;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #f0f0f0;
		color: #999;
		text-align: center;
		font-size: 0.8em;
	}
</style>