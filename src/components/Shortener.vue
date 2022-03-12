<template>
	<section id="shortener" class="bg-split">
		<div class="container">
			<div class="bg-pattern bg-violet rounded-lg bg-cover bg-no-repeat">
				<form class="p-12" @submit="validate($event)">
					<div class="row <lg:space-y-4">
						<div class="col-12 col-lg-10">
							<input v-model="url" type="text" class="rounded-lg w-full font-medium <lg:py-3 px-6 h-full" placeholder="Shorten a link here...">
						</div>
						<div class="col-12 col-lg-2">
							<button class="rounded-lg text-xl font-bold text-white bg-cyan hover:bg-[#9ae3e2] transition-colors duration-300 w-full py-4">
								Shorten It!
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	</section>
</template>

<script lang="ts" setup>
	const BASE_URL = "https://api.shrtco.de/v2/";
	const url = ref("");

	const validate = (e: Event) => {
		e.preventDefault();

		axios.get(url.value).then((res) => {
			console.log("res is ", res);
		});
	};

	const shorten = async() => {
		const { data } = await axios.get(`${BASE_URL}?url=${url.value}`);

		console.log(data);
	};
</script>

<style scoped>
    .bg-pattern{
        @apply bg-shortener-pattern-mobile lg:bg-shortener-pattern-desktop;
    }
    .bg-split{
        background: linear-gradient(to bottom, white 50%, #eff1f7 50%);
    }
</style>
