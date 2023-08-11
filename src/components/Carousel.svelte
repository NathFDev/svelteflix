<script lang="ts">
	import { media } from "$lib/api";
	import type { MovieListResult } from "$lib/types";
	import type { View } from "$lib/views";

	export let movies: MovieListResult[];
	export let view: View;
	export let href: string | null;
</script>

<h2 class="column">
	{view.title}
	{#if href}
		<a {href}>see all</a>
	{/if}
</h2>

<div class="carousel">
	{#each movies as movie}
		<a href="movies/{movie.id}">
			<img src={media(movie.poster_path, 500)} alt={movie.title} />
		</a>
	{/each}
</div>

<style>
	.carousel {
		display: flex;
		height: 10rem;
		gap: 1rem;
		overflow-x: scroll;
		overflow-y: hidden;
		scroll-snap-type: both mandatory;
		scroll-padding-left: max(var(--side), calc(var(--side) + (100vw - var(--column)) / 2));
		padding: 0 max(var(--side), calc(var(--side) + (100vw - var(--column)) / 2));
		&::-webkit-scrollbar {
			display: none;
		}
	}

	a {
		height: 100%;
	}

	img {
		height: 100%;
	}
</style>
