<template>
	<section id="shortener">
		<div class="bg-split">
			<div class="container">
				<div class="bg-pattern bg-violet rounded-lg bg-cover bg-no-repeat">
					<div class="p-12">
						<div class="row" :class="error != '' ? '<lg:space-y-7' : '<lg:space-y-4'">
							<div class="col-12 col-lg-10">
								<input v-model="input" type="text" class="rounded-lg w-full font-medium <lg:(py-3 max-h-12) px-6 h-full" :class="{'ring ring-red placeholder-red': error != ''}" placeholder="Shorten a link here...">
								<p v-show="error != ''" class="text-red italic mt-2">
									{{ error }}
								</p>
							</div>
							<div class="col-12 col-lg-2">
								<button type="button" class="rounded-lg text-xl font-bold text-white bg-cyan hover:bg-[#9ae3e2] transition-colors duration-300 w-full py-4" @click="validateUrl()">
									Shorten It!
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="bg-lightgray">
			<div class="container">
				<div v-if="results.length > 0" class="pt-5">
					<ul class="space-y-4">
						<LinkResult v-for="item in results" :key="item.code" :short-link="item.short_link">
							{{ item.original_link }}
						</LinkResult>
					</ul>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts" setup>
	const BASE_URL = "https://api.shrtco.de/v2/shorten";
	const input = ref("");
	const error = ref("");
	const loading = ref(false);
	const results = ref<ShortenedLink[]>([]);

	const shorten = async() => {
		loading.value = true;

		try {
			const { data: { result } } = await axios.get(`${BASE_URL}?url=${input.value}`);
			results.value.push(result);
		} catch (err) {
			console.error(`Error while fetching ${input.value}: `, err);
		} finally {
			loading.value = false;
		}
	};

	const validateUrl = (): void => {
		if (input.value === "") {
			error.value = "Please add a link";
		} else {
			let url;

			try {
				url = new URL(input.value);
			} catch {
				url = "";
			}

			if (url.protocol === "http:" || url.protocol === "https:") {
				error.value = "";
				input.value = "";
				shorten();
			} else {
				error.value = "Please enter a valid link";
			}
		}
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
