<template>
	<div class="bg-white rounded-lg relative p-10">
		<div class="absolute flex rounded-full bg-violet w-20 h-20 -top-10 center-sm">
			<slot name="icon" />
		</div>

		<div class="pt-5 space-y-4">
			<p class="font-bold text-dark text-xl">
				<slot name="title" />
			</p>

			<p class="font-medium text-grayish">
				<slot name="description" />
			</p>
		</div>
	</div>
</template>

<style scoped>
    .center-sm{
        @apply <lg:transform <lg:-translate-x-1/2 <lg:left-1/2;
    }
</style>
