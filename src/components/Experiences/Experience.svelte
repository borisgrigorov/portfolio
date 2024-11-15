<script lang="ts">
    export let title: string;
    export let company: string;
    export let date: string;
    export let description: string;
    export let link: string | undefined;
</script>

<div class="flex flex-col gap-2 text-right md:text-left">
    <h3 class="font-mono text-3xl md:text-4xl">{title}</h3>
    <div class="flex flex-row items-center gap-2 text-lg md:text-xl justify-end md:justify-start">
        <a href={link} target="_blank" class="text-accent">{company}</a>
        <span class="text-secondary">•</span>
        <span class="text-secondary">{date}</span>
    </div>
    <span class="text-secondary text-lg font-inter mt-1 text-justify">{description}</span>
</div>
