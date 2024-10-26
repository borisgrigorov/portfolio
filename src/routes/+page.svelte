<script>
    import Landing from "../components/Landing.svelte";
    import About from "../components/About/About.svelte";
    import Experiences from "../components/Experiences/Experiences.svelte";
    import Contact from "../components/Contact/Contact.svelte";
</script>

<Landing />
<div class="flex flex-col gap-20 md:gap-20">
    <About />
    <Experiences />
    <Contact />
</div>
