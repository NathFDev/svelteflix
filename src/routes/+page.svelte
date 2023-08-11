<script lang="ts">
	import { views } from "$lib/views";
	import Carousel from "../components/Carousel.svelte";
	import Hero from "../components/Hero.svelte";

	export let data;
</script>

<h1 class="column">Top trending movies</h1>

<Hero movie={data.featured} />

<Carousel movies={data.trending.results} view={views.trending} href="/movies/trending"/>
<Carousel movies={data.nowPlaying.results} view={views.now_playing} href="/movies/now_playing"/>
<Carousel movies={data.upcoming.results} view={views.upcoming} href="/movies/upcoming"/>
