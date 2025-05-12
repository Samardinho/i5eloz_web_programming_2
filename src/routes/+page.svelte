<svelte:head>
	<title>Football Insider | Home</title>
	<meta name="description" content="Welcome to Football Insider, your go-to blog for the latest football news, match analyses, and player insights by Olamilekan Samard." />
</svelte:head>

<div class="home-container">
	<div class="hero-section">
		{#if bannerImage}
			<img src="/images/ball.jpg" alt="Football Insider Banner" class="hero-image" />
		{/if}
		<div class="hero-content">
			<h1>Welcome to Football Insider</h1>
			<p class="tagline">Your Source for Football News & Insights</p>
			<a href="/posts" class="cta-button">Explore Latest Posts</a>
		</div>
	</div>

	<div class="intro-section">
		<h2>Bringing You the Heart of the Game</h2>
		<p>
			Hi, I’m Olamilekan Samard, the football enthusiast behind <strong>Football Insider</strong>. Here, I share the latest updates, in-depth match analyses, and stories about your favorite players—from the drama of the Champions League to the thrill of the Premier League.
		</p>
		<p>
			Whether you’re a die-hard fan or just love a good football story, there’s something here for you. Check out my latest posts or learn more <a href="/about">about me</a> and my passion for the beautiful game.
		</p>
	</div>
</div>

<script lang="ts">
	const bannerImage = '/images/ball.jpg';
</script>

<style lang="scss">
	.home-container {
		max-width: 900px;
		margin: 0 auto;
		padding: 2rem;
	}

	.hero-section {
		position: relative;
		text-align: center;
		margin-bottom: 2rem;
	}

	.hero-image {
		width: 100%;
		max-height: 400px;
		object-fit: cover;
		border-radius: 10px;
		filter: brightness(80%);
	}

	.hero-content {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: white;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
	}

	h1 {
		font-size: 3rem;
		color: white;
		margin: 0 0 0.5rem 0;
	}

	.tagline {
		font-size: 1.5rem;
		color: white;
		margin-bottom: 1rem;
	}

	.cta-button {
		display: inline-block;
		padding: 0.75rem 1.5rem;
		background-color: #d32f2f;
		color: white;
		text-decoration: none;
		border-radius: 5px;
		font-weight: bold;
		transition: background-color 0.3s ease;
	}

	.cta-button:hover {
		background-color: #b71c1c;
	}

	.intro-section {
		background-color: #fff;
		border-radius: 10px;
		padding: 2rem;
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
	}

	h2 {
		font-size: 2rem;
		color: #d32f2f;
		margin-bottom: 1rem;
	}

	p {
		line-height: 1.8;
		color: #333;
		font-size: 1.1rem;
		margin-bottom: 1.5rem;
	}

	strong {
		color: #d32f2f;
	}

	a {
		color: #1976d2;
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
		color: #d32f2f;
	}

	@media (max-width: 768px) {
		.hero-section {
			.hero-image {
				max-height: 300px;
			}

			h1 {
				font-size: 2rem;
			}

			.tagline {
				font-size: 1.2rem;
			}

			.cta-button {
				padding: 0.5rem 1rem;
				font-size: 0.9rem;
			}
		}

		.intro-section {
			padding: 1.5rem;
			h2 {
				font-size: 1.5rem;
			}

			p {
				font-size: 1rem;
			}
		}
	}
</style>