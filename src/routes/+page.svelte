<script>
    let { data } = $props();
  </script>

  <ul>
    {#each data.links as link}
      <li>{link.sourceLink}, {link.destLink}</li>
    {/each}
  </ul>