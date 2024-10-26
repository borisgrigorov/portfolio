<script lang="ts">
</script>

<h3 class="font-mono text-3xl md:text-4xl text-secondary">Contact form</h3>
<form class="flex flex-col gap-4" action="?/sendMessage" method="post">
    <input
        type="text"
        placeholder="Name"
        autocomplete="name"
        name="name"
        class="p-2 bg-background border-b-2 focus:outline-none focus:border-accent transition-colors duration-300 rounded-none"
    />
    <input
        type="text"
        placeholder="Email"
        autocomplete="email"
        name="email"
        class="p-2 bg-background border-b-2 focus:outline-none focus:border-accent transition-colors duration-300 rounded-none"
    />
    <textarea
        placeholder="Message"
        autocomplete="off"
        name="message"
        class="p-2 bg-background border-b-2 focus:outline-none focus:border-accent transition-colors duration-300 rounded-none"
    ></textarea>
    <button
        class="bg-background hover:bg-primary hover:text-background text-primary border hover:border-primary border-accent p-2 w-full mt-4 rounded-md transition-colors duration-300"
    >
        Send message
    </button>
</form>
