<template>
	<section id="hero" class="relative flex <lg:flex-col overflow-x-hidden h-[85vh]">
		<div class="lg:hidden mt-25">
			<img src="/illustration-working.svg" class="w-[120%] transform translate-x-30">
		</div>
		<div class="container mb-auto mt-10 lg:my-auto">
			<div class="row">
				<div class="col-12 col-lg-6 text-center lg:text-left">
					<div class="space-y-4 mb-8">
						<p class="text-asphalt text-5xl lg:text-[5rem] font-bold tracking-tight">
							More than just shorter links
						</p>
						<p class="text-xl font-medium text-grayish leading-8">
							Build your own brand's recognition and get detailed insights on how your links are performing.
						</p>
					</div>

					<a href="#" class="inline-block rounded-full text-xl font-bold text-white bg-cyan hover:bg-cyan/60 transition-colors duration-300 px-10 py-3">
						Get Started
					</a>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
    #hero:after{
        content: "";
        background-image: url("/illustration-working.svg");
        @apply <lg:hidden absolute bg-contain bg-no-repeat bg-right h-full w-full lg:w-[50vw] lg:-right-20 top-0;
    }
</style>
