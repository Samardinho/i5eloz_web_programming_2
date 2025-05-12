// src/routes/posts/+page.server.ts
import type { posts } from './types';
import { get_frontmatter } from '$lib/server';
import { error } from '@sveltejs/kit'; // Make sure error is imported

export const load = async () => {
	console.log('--- Running /posts load function ---'); // 1. Log start
	try {
		const unsorted_posts_data = import.meta.glob('/src/data/posts/**/*.md', {
			as: 'raw',
			eager: true
		});
		console.log('Raw glob data fetched:', Object.keys(unsorted_posts_data).length, 'files'); // 2. Log glob result count

		const unsorted_posts = get_frontmatter<posts>(unsorted_posts_data);
		console.log('Posts after get_frontmatter:', unsorted_posts.length); // 3. Log after get_frontmatter

		const posts = unsorted_posts.map((post, index) => {
			console.log(`Processing post ${index}:`, { id: post.id, title: post.title, publishedRaw: post.published, imageRaw: post.image }); // 4. Log raw data for each post

			let publishedDate = new Date(); // Default to current date
			if (post.published) {
				try {
					// Attempt to parse the date
					const parsed = new Date(post.published);
					// Check if the parsing resulted in a valid date
					if (isNaN(parsed.getTime())) {
						console.warn(`---> Invalid date string for post "${post.title || 'Untitled'}": "${post.published}". Using current date.`);
						// Keep publishedDate as new Date()
					} else {
						publishedDate = parsed; // Use the valid parsed date
					}
				} catch (err) {
					console.error(`---> Error parsing date for post "${post.title || 'Untitled'}": "${post.published}". Using current date.`, err);
					// Keep publishedDate as new Date() in case of error
				}
			} else {
				console.warn(`---> Missing published date for post "${post.title || 'Untitled'}". Using current date.`);
			}

			// Construct the image path correctly
			// Assumes post.image is just the filename like 'my-image.jpg'
			// and images are in /static/images/
			const imagePath = post.image ? `/images/${post.image}` : '/images/default-post.jpg';

			const processedPost = {
				//...post, // Spread original post data carefully if needed, but define explicitly below
				id: post.id || String(index), // Ensure ID is always a string, use index as fallback
				title: post.title || 'Untitled',
				author: post.author || 'Olamilekan Samard',
				description: post.description || 'No description available',
				image: imagePath, // Use the constructed image path
				published: publishedDate // Use the validated/defaulted date object
			};
			console.log(`Processed post ${index}:`, { id: processedPost.id, title: processedPost.title, published: processedPost.published.toISOString(), image: processedPost.image }); // 5. Log processed post
			return processedPost;
		});

		console.log('Attempting to sort posts...'); // 6. Log before sort
		// Sort posts - Ensure 'published' is always a valid Date object before this point
		const sortedPosts = posts.sort((p, q) => {
			// Add safety checks for getTime()
			const timeP = p.published?.getTime?.() || 0;
			const timeQ = q.published?.getTime?.() || 0;
			return timeQ - timeP;
		});
		console.log('Posts sorted successfully.'); // 7. Log after sort

		const meta = {
			title: 'Football Insider - Latest Posts',
			description: 'Latest football news, match analyses, and player insights by Olamilekan Samard.'
		};

		console.log('--- /posts load function finished successfully ---'); // 8. Log success
		return { meta, posts: sortedPosts }; // Return the sorted posts

	} catch (err: any) { // Catch any error during the process
		console.error('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
		console.error('--- ERROR IN /posts load function ---:', err.message); // 9. Log the specific error
		console.error(err.stack); // Log the full stack trace
		console.error('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
		// Throw a SvelteKit error to display an error page
		throw error(500, `Failed to load posts: ${err.message}`);
	}
};