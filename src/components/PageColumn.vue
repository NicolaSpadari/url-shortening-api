<template>
	<div class="text-center lg:text-left space-y-6 <lg:mb-8">
		<p class="text-white font-bold text-xl">
            <slot />
        </p>
		<div class="space-y-3">
			<a v-for="page in props.pages" :key="page" href="#" class="block text-grayish font-medium hover:text-cyan transition-colors duration-300">
				{{ page }}
			</a>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import type { PropType } from "vue";

	const props = defineProps({
		pages: {
			type: Array as PropType<Array<string>>,
			required: true
		}
	});
</script>
