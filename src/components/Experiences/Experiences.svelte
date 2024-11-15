<script lang="ts">
    import Heading from "../Heading.svelte";
    import Experience from "./Experience.svelte";
</script>

<div class="w-full flex flex-col px-6 md:px-12 justify-center md:items-center" id="experience">
    <div class="md:-translate-x-1/2">
        <Heading>Experience</Heading>
    </div>
    <div class="mt-10 md:mt-20 md:translate-x-1/2 md:w-1/2 lg:w-2/5 flex flex-col gap-10">
        <Experience
            title="Lead Software Engineer"
            link="https://airmobis.com"
            company="Airmobis s.r.o."
            date="09/2023 - Present"
            description="Development of mobile and web application with complex backend services for platform geoWork for connection drones and in-field workers with wide variety of use cases. When time matters or resources are limited..."
        />
        <Experience
            title="Full Stack Engineer"
            link="https://g-yachts.com"
            company="G-Yachts"
            date="05/2024 - 10/2024"
            description="At G-Yachts, a yacht brokerage company, I developed the company website and an administration panel with integration to external data providers."
        />
        <span class="text-accent text-5xl">
            ...
        </span>
    </div>
</div>
