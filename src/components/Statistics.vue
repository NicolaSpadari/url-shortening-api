<template>
	<section id="statistics" class="bg-lightgray">
		<div class="container space-y-25 py-30">
			<div class="row justify-center">
				<div class="col-12 col-lg-5">
					<div class="text-center space-y-6">
						<p class="text-dark font-bold text-4xl">
							Advanced Statistics
						</p>
						<p class="text-grayish font-medium">
							Track how your links are performing across the web with our advanced statistics dashboard
						</p>
					</div>
				</div>
			</div>

			<div class="row relative statistics">
				<div class="col-12 col-lg-4">
					<Card>
						<template #icon>
							<ChartIcon class="w-10 text-cyan m-auto" />
						</template>
						<template #title>
							Brand Recognition
						</template>
						<template #description>
							Boost your brand recognition with each link. Generic links don't mean a thing. Branded links help instil confidence in your content.
						</template>
					</Card>
				</div>
				<div class="col-12 col-lg-4">
					<Card>
						<template #icon>
							<GaugeIcon class="w-10 text-cyan m-auto" />
						</template>
						<template #title>
							Detailed records
						</template>
						<template #description>
							Boost your brand recognition with each link. Generic links don't mean a thing. Branded links help instil confidence in your content.
						</template>
					</Card>
				</div>
				<div class="col-12 col-lg-4">
					<Card>
						<template #icon>
							<CustomIcon class="w-10 text-cyan m-auto" />
						</template>
						<template #title>
							Fully customizable
						</template>
						<template #description>
							Boost your brand recognition with each link. Generic links don't mean a thing. Branded links help instil confidence in your content.
						</template>
					</Card>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
    .statistics {
        &:before{
            content: "";
            @apply absolute w-2 lg:w-[90%] h-full lg:h-2 bg-cyan transform -translate-x-1/2 left-1/2 -translate-y-1/3 top-1/3;
        }

        .col-12:not(:first-child){
            @apply <lg:mt-20;
        }

        > div{
            @apply lg:mt-0;

            + div{
                @apply lg:mt-10;

                + div{
                    @apply lg:mt-20;
                }
            }
        }
    }
</style>
