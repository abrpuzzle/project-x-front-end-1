<script>
	import Router from "svelte-spa-router";
	import routes from "./routes";
</script>

<!-- This part is always displayed -->
<nav class="navbar navbar-expand-lg navbar-light bg-light">
	<div class="container-fluid">
		<a class="navbar-brand" href="#/"
			><img
				src="favicon.png"
				alt=""
				width="30"
				height="24"
				class="d-inline-block align-text-top"
			/></a
		>
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarNavDropdown"
			aria-controls="navbarNavDropdown"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon" />
		</button>

		<div class="collapse navbar-collapse" id="navbarNavDropdown">
			<ul class="navbar-nav">
				<li class="nav-item">
					<a class="nav-link" href="#/tourists/Tourists">Tourists</a>
				</li>
				<li class="nav-item dropdown">
					<a
						class="nav-link dropdown-toggle"
						href="#/"
						id="navbarDropdownMenuLink"
						role="button"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						Trips
					</a>
					<ul
						class="dropdown-menu"
						aria-labelledby="navbarDropdownMenuLink"
					>
						<li>
							<a class="dropdown-item" href="#/Trips">Trips</a>
						</li>
						<li>
							<a class="dropdown-item" href="#/Routes">Routes</a>
						</li>
						<li>
							<a
								class="dropdown-item"
								href="#/Points_of_Interests"
								>Points of Interest</a
							>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</nav>

<div class="container mt-3">
	<!-- Here we load the page depending on the current URL -->
	<Router {routes} />
</div>

<style>
</style>
