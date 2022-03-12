<template>
	<nav id="header" class="fixed w-full top-0 inset-x-0 z-50 font-text transition-all duration-300" :class="navClasses">
		<div class="container py-8">
			<div class="flex items-center justify-between">
				<div class="flex">
					<div class="brand">
						<p class="text-dark font-bold text-4xl">
							Shortly
						</p>
					</div>
					<div class="<lg:hidden pages ml-12">
						<div class="flex items-center space-x-12 h-full">
							<div class="page">
								<nav-link>
									Features
								</nav-link>
							</div>
							<div class="page">
								<nav-link>
									Pricing
								</nav-link>
							</div>
							<div class="page">
								<nav-link>
									Resources
								</nav-link>
							</div>
						</div>
					</div>
				</div>
				<div class="flex items-center space-x-12 h-full">
					<div class="<lg:hidden page">
						<nav-link>
							Login
						</nav-link>
					</div>
					<div class="<lg:hidden page">
						<button class="rounded-full font-bold text-white bg-cyan hover:bg-cyan/60 transition-colors duration-300 px-6 py-2">
							Sign Up
						</button>
					</div>
					<div class="lg:hidden">
						<button class="align-middle" :class="{'pointer-events-none': isOpen}" @click="isOpen = true">
							<MenuIcon class="text-grayish align-middle w-8" />
						</button>
					</div>
				</div>
			</div>
		</div>

		<Menu :state="isOpen" @close="isOpen = false" />
	</nav>
</template>

<script lang="ts" setup>
	const navClasses = ref("");
	const isOpen = ref(false);

	useEventListener(document, "scroll", () => {
		window.scrollY > 150 ? navClasses.value = "bg-white shadow-lg" : navClasses.value = "";
	});
</script>
