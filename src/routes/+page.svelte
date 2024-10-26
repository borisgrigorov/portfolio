<script>
    import Landing from "../components/Landing.svelte";
    import About from "../components/About/About.svelte";
    import Experiences from "../components/Experiences/Experiences.svelte";
    import Contact from "../components/Contact/Contact.svelte";
    import Seo from "../components/Seo.svelte";
    import {page}from "$app/stores";
</script>

<Landing />
<div class="flex flex-col gap-20 md:gap-20">
    <About />
    <Experiences />
    <Contact />
</div>

<Seo
    title="Boris Grigorov | Software Engineer"
    description="Creative developer focused on building impactful web and mobile applications with seamless user experiences. Explore my portfolio to see projects that blend innovation with real-world usability"
    image="{$page.url.host}/images/og.svg"
    sitename="Boris Grigorov"
/>
