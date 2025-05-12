export type Frontmatter = {
	title?: string;
	published?: string; // Raw ISO string from Markdown
	author?: string;
	description?: string;
	image?: string;
};

export type posts = {
	id: string;
	title: string;
	published: Date; // Parsed Date
	author?: string;
	description: string;
	image?: string;
};