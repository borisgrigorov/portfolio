<script lang="ts">
    import Heading from "../Heading.svelte";
    import github from "../../lib/assets/github.svg";
    import linkedin from "../../lib/assets/linkedin.svg";
    // import Form from "./Form.svelte";

    // let showForm = false;
</script>

<div class="w-full flex flex-col p-4 justify-center md:items-center gap-10" id="contact">
    <Heading>Get in touch</Heading>
    <!-- {#if showForm}
        <Form />
    {:else}
        <button
            class="w-fit bg-background border border-primary py-3 px-10 rounded-sm shadow-md hover:bg-primary hover:text-background transition-colors mt-10 duration-300 ease-in-out mx-auto"
            on:click={() => (showForm = true)}
        >
            Contact me
        </button>
    {/if} -->
    <span class="text-center text-primary font-mono text-sm">
        I'm always open to new opportunities and collaborations. Feel free to reach out to me.
    </span>
    <span class="italic text-center"> mailbox ( at ) vvveb.cz </span>
    <div class="flex flex-row gap-6 my-6 justify-center">
        <a
            href="https://linkedin.com/in/borisgrigorov"
            target="_blank"
            rel="noopener noreferrer"
            class="w-fit"
        >
            <img src={linkedin} alt="LinkedIn" class="w-10 fill-primary text-primary" />
        </a>
        <a
            href="https://github.com/borisgrigorov"
            target="_blank"
            rel="noopener noreferrer"
            class="w-fit"
        >
            <img src={github} alt="GitHub" class="w-10 fill-primary text-primary" />
        </a>
    </div>
    <hr class="mt-20 border-secondary" />
    <span class="text-center text-primary font-mono text-xs mb-8">
        Made with Svelte and &lt;3 in {new Date().getFullYear()} by Boris Grigorov
    </span>
</div>
