<script lang="ts">
    import Link from "./Link.svelte";

    export let links: {
        name: string;
        href: string;
        active?: boolean;
    }[] = [];
</script>

<div class="flex flex-row items-center gap-8 w-full justify-end flex-wrap">
    {#each links as link}
        <Link {...link} />
    {/each}
</div>
