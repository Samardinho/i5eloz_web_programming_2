# ⚽ Olamilekan Samard's Football Blog

**Course:** Web Programming II  
**Student:** Olamilekan Samard  
**Submission Date:** April 30, 2025

---

## 📌 Project Purpose

This project is a football-focused blog developed using **SvelteKit**. It showcases the fundamentals of web development including routing, component creation, API integration, and server-side data handling. The goal is to demonstrate the ability to independently build a feature-rich and well-structured application using modern web technologies.

---

## 🛠️ Implementation

The football blog allows users to:

- View a list of football-related blog posts written in markdown.
- Explore post details dynamically rendered on individual pages.
- Learn about the blog and its creator via an "About" page.
- Display external football data fetched using a public football API.
- View player or match data (loaded using both internal and external APIs).

---


---

## 🧩 Custom Components

This project uses more than **eight custom Svelte components**, including:

1. `Nav.svelte`
2. `GoBack.svelte`
3. `LoadProgress.svelte`
4. `PostPreview.svelte`
5. `ThemeToggler.svelte`
6. `ScrollUp.svelte`
7. `PreviewCard.svelte`
8. `PostDetail.svelte`

These are modular components designed for reusability and readability.

---

## 🌐 Routes Overview

- `/` – Home page with welcome message and blog highlights  
- `/about` – Information about the blog and its creator  
- `/posts` – A list of all markdown blog posts  
- `/posts/[id]` – Dynamic route rendering individual post content  

---

## 🌍 API Usage

### APIs:

1. `GET /posts` – Loads and parses all markdown files.  
2. `GET /posts/[id]` – Loads a specific post based on its slug.  
3. `GET /players` – Returns a list of local football player data (from JSON or text file).  
4. `GET /player/[id]` – Returns detailed player info from local storage.  
