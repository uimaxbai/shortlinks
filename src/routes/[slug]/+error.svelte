<script>
    import { page } from '$app/stores';
    let expand = false;
</script>

<main class="container mx-auto px-4 mt-2">
    {#if $page?.status === 404}
        <h1 class="text-4xl mb-1"><b>404</b>. Looks like this link doesn't exist.</h1>
        <p>We can't find any records for this link.</p>
    {/if}
    <button class="border border-slate-200 p-1 rounded mt-2" on:click={() => { expand = !expand; }}>
        {#if expand}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill inline" viewBox="0 0 16 16">
                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
            </svg>
            Hide advanced details
        {:else}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill inline" viewBox="0 0 16 16">
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
            </svg>
            Show advanced details
        {/if}
        
        
    </button>
    {#if $page?.error && expand}
        <div class="mt-4 p-4 border-y-2">
            {#if $page?.status}
                <p><code>status</code>: {$page?.status}</p>
            {/if}
            {#if $page?.error?.message}
                <p><code>message</code>: {$page?.error?.message}</p>
            {/if}
            <br>
            <b>Full details:</b>
            <pre class="w-full overflow-x-scroll p-2 bg-slate-200 rounded">{JSON.stringify($page)}</pre>
        </div>
    {/if}
</main>