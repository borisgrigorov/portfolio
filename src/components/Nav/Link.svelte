<script lang="ts">
    export let name: string;
    export let href: string;
    export let active: boolean = false;
</script>

<a {href} class="relative group"
    ><span
        class="text-primary group-hover:text-accent font-bodoni md:text-xl transition-colors duration-300"
        >{name}</span
    >
    <div
        class="absolute -bottom-1 group-hover:-bottom-2 w-1/2 group-hover:w-full h-0.5 bg-primary group-hover:bg-accent transition-all duration-300"
        class:active
    ></div>
</a>

<style>
    .active {
        @apply text-accent bg-accent -bottom-2 w-full;
    }
</style>
