<script lang="ts">
  let name: string;

  const handleClick = () => {
    name = "Svelte";
  };
</script>

<div class="bg-white shadow-md rounded-lg p-5 mb-5">
  <div class="text-3xl">Hello, {name || "stranger"}!</div>

  <input class="border p-2" placeholder="name" bind:value={name} />
  <button on:click={() => handleClick()} class="bg-zinc-200 p-2"
    >click me</button
  >
</div>
