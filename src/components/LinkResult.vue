<template>
	<li class="bg-white rounded-lg lg:(py-4 px-6)">
		<div class="flex <lg:(flex-col divide-y divide-gray/50) lg:justify-between">
			<p class="text-dark font-medium text-xl my-auto truncate p-4">
				<slot />
			</p>
			<div class="flex <lg:(flex-col space-y-4 p-4) lg:space-x-6">
				<p class="text-cyan font-medium text-xl my-auto">
					{{ props.shortLink }}
				</p>
				<button v-if="copied" class="rounded-lg font-bold text-white bg-violet px-10 py-2">
					Copied!
				</button>
				<button v-else class="rounded-lg font-bold text-white bg-cyan hover:bg-[#9ae3e2] transition-colors duration-300 px-10 py-2" @click="copy(props.shortLink)">
					Copy
				</button>
			</div>
		</div>
	</li>
</template>

<script lang="ts" setup>
	const { copied, copy } = useClipboard();

	const props = defineProps({
		shortLink: {
			type: String,
			required: true
		}
	});
</script>
