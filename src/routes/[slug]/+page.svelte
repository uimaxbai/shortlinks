<script>
    import { onMount } from 'svelte';
    let { data } = $props();
    onMount(() => {
        window.location.replace(data.link);
        window.location.href = data.link;
        window.location = data.link;
    });
</script>

<svelte:head>
    <meta http-equiv="refresh" content="0;URL='{data.link}'" />
</svelte:head>

<main style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
    <h1 class="text-3xl">Redirecting...</h1>
    <p>If you are not redirected automatically, follow this <a style="cursor: pointer; text-decoration: underline; color: #6ea8fe;" href="{data.link}">link</a>.</p>
    <span style="color: #aaa"><a style="cursor: pointer; text-decoration: underline" href="{data.link}">{data.link}</a></span>
    <br>
    <i style="font-size: 10px;">The <a href="https://okit.works">okit.works</a> shortener</i>
</main>