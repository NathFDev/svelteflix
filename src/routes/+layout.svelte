<script lang="ts">
	import { page } from "$app/stores";
	import "../styles.css";
	import logo from "$lib/images/logo.svg";
	import tmdb from "$lib/images/tmdb.svg";
</script>

<nav>
	<a href="/">
		<img src={logo} alt="Svelteflix logo" />
	</a>

	<div class="links">
		<a href="/search">Search</a>
		<a href="/watchlist">Watchlist</a>
		<a href="/login">Sign in</a>
	</div>
</nav>

<main class:infinite={$page.data.infinite}>
	<slot />
</main>

<footer>
	<p>
		Data provided by <a href="https://developer.themoviedb.org">
			<img src={tmdb} alt="tmdb logo" />
		</a>
	</p>
</footer>

<style>
	nav {
		display: flex;
		width: 100%;
		height: 3rem;
		align-items: center;
		justify-content: space-between;
		max-width: var(--column);
		padding: 0 var(--side);
		color: var(--accent);
		align-self: center;
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	img {
		height: 1rem;
	}

	.links {
		display: flex;
		gap: 1rem;
	}

	main.infinite {
		height: 0;
		flex: 1;
		overflow: hidden;
	}

    footer {
        display: flex;
        justify-content: center;
        height: 3rem;
    }
</style>
