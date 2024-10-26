<script lang="ts">
    import { page } from "$app/stores";

    export let title: string;
    export let description: string;
    export let image: string;
    export let sitename: string;
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og_site_name" content={sitename} />
    <meta property="og:title" content={title} />
    <meta property="og:url" content="{$page.url.host}/{$page.url.pathname.toString()}" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />

    <meta name="twitter:card" content="summary_large_image" />
    <meta property="twitter:domain" content={$page.url.host} />
    <meta property="twitter:url" content="{$page.url.host}/{$page.url.pathname.toString()}" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
    {@html `  <script type="application/ld+json">{
   "@context": "https://schema.org",
   "@type": "Website",
   "name": "${title}",
   "url": "${$page.url.host}/${$page.url.pathname}",
   "logo": ${image}}</script>`}
</svelte:head>
