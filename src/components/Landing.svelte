<script lang="ts">
    import arrow from "$lib/assets/arrow.svg";
    import Nav from "./Nav/Nav.svelte";
    let links: {
        name: string;
        href: string;
        active?: boolean;
    }[] = [
        {
            name: "Home",
            href: "#home",
            active: true,
        },
        {
            name: "About me",
            href: "#about",
        },
        {
            name: "Experience",
            href: "#experience",
        },
        {
            name: "Contact",
            href: "#contact",
        },
    ];
</script>

<div class="h-screen w-full flex flex-col justify-between md:items-center p-5" id="home">
    <Nav {links} />
    <div class="flex flex-col md:items-center">
        <h1 class="font-bodoni text-7xl md:text-8xl font-black">Boris Grigorov</h1>
        <h2 class="font-mono text-2xl md:text-4xl text-secondary mt-4">Software development</h2>
    </div>
    <div class="w-full grid place-items-center mb-16">
        <img src={arrow} alt="Arrow" class="animate-bounce h-28" />
    </div>
</div>
