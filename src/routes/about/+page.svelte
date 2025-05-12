<svelte:head>
	<title>Football Insider | About Olamilekan Samard</title>
	<meta name="description" content="Learn more about Olamilekan Samard, the football enthusiast and author behind Football Insider, a blog dedicated to football news, match analyses, and player insights." />
</svelte:head>

<div class="about-container">
	<div class="about-header">
		{#if profileImage}
			<img src="/images/my_image.jpg" alt="Olamilekan Samard" class="profile-image" />
		{/if}
		<div class="header-content">
			<h1>About Olamilekan Samard</h1>
			<p class="tagline">Your Football Insider</p>
		</div>
	</div>

	<div class="about-content">
		<p>
			Hi, I’m Olamilekan Samard, a passionate football enthusiast and the author behind <strong>Football Insider</strong>. I’ve been following the beautiful game for over a decade, from the electric atmosphere of the UEFA Champions League to the intense rivalries of the Premier League.
		</p>
		<p>
			On this blog, I share my insights on the latest football news, in-depth match analyses, and updates on your favorite players. Whether it’s breaking down Erling Haaland’s latest goal-scoring spree or speculating on Kylian Mbappé’s next transfer, I’m here to bring you the stories that matter in the world of football.
		</p>
		<p>
			When I’m not writing about football, you can find me cheering for my favorite team, Manchester City, or playing a pickup game with friends. I believe football is more than just a sport—it’s a way to connect, inspire, and celebrate.
		</p>
		<p>
			Follow along as I dive into the heart of the game. Have a story or topic you’d like me to cover? Feel free to reach out on <a href="https://x.com/lekside_x?s=21&t=kUSEcnF1BRdNknuvVpRINQ" target="_blank">X</a>!
		</p>
	</div>
</div>

<script lang="ts">
	const profileImage = '/images/my_image.jpg';
</script>

<style lang="scss">
	.about-container {
		max-width: 900px;
		margin: 0 auto;
		padding: 2rem;
		background-color: #fff;
		border-radius: 10px;
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
	}

	.about-header {
		position: relative;
		margin-bottom: 2rem;
		text-align: center;
	}

	.profile-image {
		width: 100%;
		max-height: 300px;
		object-fit: cover;
		border-radius: 10px;
		filter: brightness(90%);
	}

	.header-content {
		position: absolute;
		bottom: 1.5rem;
		left: 50%;
		transform: translateX(-50%);
		color: white;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
	}

	h1 {
		font-size: 2.5rem;
		color: white;
		margin: 0 0 0.5rem 0;
	}

	.tagline {
		font-size: 1.2rem;
		color: white;
	}

	.about-content {
		line-height: 1.8;
		color: #333;
		font-size: 1.1rem;
	}

	p {
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
		.about-header {
			.profile-image {
				max-height: 200px;
			}

			h1 {
				font-size: 2rem;
			}

			.tagline {
				font-size: 1rem;
			}
		}

		.about-content {
			font-size: 1rem;
		}
	}
</style>