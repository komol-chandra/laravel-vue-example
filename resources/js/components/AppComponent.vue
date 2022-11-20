<template>
	<div class="container">
		<header class="d-flex justify-content-center py-3">
			<ul class="nav nav-pills">
				<li class="nav-item">
					<router-link class="nav-link" to="/">Home</router-link>
				</li>
				<li class="nav-item">
					<router-link class="nav-link" to="/about">About</router-link>
				</li>
			</ul>
		</header>
		<router-view></router-view>
	</div>
</template>

<script>
export default {};
</script>

<style>
</style>