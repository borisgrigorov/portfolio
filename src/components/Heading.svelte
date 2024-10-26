<script lang="ts">
    export let className: string = "";
</script>

<h2 class={className + " font-bodoni text-5xl md:text-7xl lg:text-8xl relative w-fit md:max-w-[50vw]"}>
    <slot />
    <div class="bg-accent h-0.5 w-3/4 right-0 absolute translate-x-1/4 -bottom-2"></div>
</h2>
