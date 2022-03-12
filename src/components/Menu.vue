<template>
	<Transition enter-active-class="duration-200 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
		<div v-show="props.state" ref="menu" class="fixed top-0 inset-x-0 px-6 transition transform origin-top-right lg:hidden top-23 z-60">
			<div class="rounded-lg shadow-lg bg-violet divide-y divide-lightgray/30 px-6 py-8">
				<ul class="text-center space-y-6 mb-8">
					<li>
						<a href="#" class="text-white font-bold text-lg">
							Features
						</a>
					</li>
					<li>
						<a href="#" class="text-white font-bold text-lg">
							Pricing
						</a>
					</li>
					<li>
						<a href="#" class="text-white font-bold text-lg">
							Resources
						</a>
					</li>
				</ul>
				<ul class="text-center space-y-6 pt-8">
					<li>
						<a href="#" class="text-white font-bold text-lg">
							Features
						</a>
					</li>
					<li>
						<a href="#" class="block rounded-full font-bold text-white bg-cyan px-6 py-3">
							Sign Up
						</a>
					</li>
				</ul>
			</div>
		</div>
	</Transition>
</template>

<script lang="ts" setup>
	const menu = ref(null);

	const props = defineProps({
		state: {
			type: Boolean,
			required: true
		}
	});

	const emits = defineEmits(["close"]);

	onClickOutside(menu, () => {
		if (props.state) {
			emits("close");
		}
	});
</script>
