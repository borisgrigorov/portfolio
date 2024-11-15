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
        <h1
            class="font-bodoni text-7xl md:text-8xl font-black duration-300 transition-all opacity-0 translate-y-8"
            id="landing-header"
        >
            Boris Grigorov
        </h1>
        <h2
            class="font-mono text-2xl md:text-4xl text-secondary mt-4 opacity-0 -translate-y-8"
            id="landing-subtitle"
        >
            Software developer
        </h2>
    </div>
    <div class="w-full grid place-items-center mb-16">
        <img src={arrow} alt="Arrow" class="animate-bounce h-28" />
    </div>
</div>

<style>
    #landing-header {
        animation: appear-bottom 1s ease-in-out forwards;
    }
    #landing-subtitle {
        animation: appear-top 0.5s ease-in-out 0.5s forwards;
    }
    @keyframes appear-bottom {
        0% {
            opacity: 0;
            transform: translateY(32px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
    @keyframes appear-top {
        0% {
            opacity: 0;
            transform: translateY(-32px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>
