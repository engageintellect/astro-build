<script lang="ts">
  let name = "";
</script>

<div class="bg-amber-200 shadow-md p-2 rounded-lg">
  <div>Hello from {name || "Svelte"}.</div>
  <input bind:value={name} type="text" placeholder="enter name" />
</div>
