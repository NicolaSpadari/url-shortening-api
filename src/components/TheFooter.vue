<template>
	<footer id="footer" class="bg-dark py-10 lg:py-20">
		<div class="container">
			<div class="row justify-between">
				<div class="col-12 col-lg-3">
					<Logo class="text-white <lg:(mx-auto mb-15)" />
				</div>
				<div class="col-12 col-lg-2">
					<page-column :pages="firstColPages">
						Features
					</page-column>
				</div>
				<div class="col-12 col-lg-2">
					<page-column :pages="secondColPages">
						Resources
					</page-column>
				</div>
				<div class="col-12 col-lg-2">
					<page-column :pages="thirdColPages">
						Company
					</page-column>
				</div>
				<div class="col-12 col-lg-2">
					<FooterIcons />
				</div>
			</div>
		</div>
	</footer>
</template>

<script lang="ts" setup>
	const firstColPages = ["Link Shortening", "Branded Links", "Analytics"];
	const secondColPages = ["Blog", "Developer", "Support"];
	const thirdColPages = ["About", "Our Team", "Careers", "Contact"];
</script>
