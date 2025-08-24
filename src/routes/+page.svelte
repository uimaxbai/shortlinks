<script>
    import { onMount } from 'svelte';
    const LINK = "https://binimum.org";
    onMount(() => {
        window.location.replace(LINK);
        window.location.href = LINK;
        window.location = LINK;
    });
</script>

<svelte:head>
    <meta http-equiv="refresh" content="0;URL='{LINK}'" />
</svelte:head>

<main style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
    <h1 class="text-3xl">Redirecting...</h1>
    <p>If you are not redirected automatically, follow this <a style="cursor: pointer; text-decoration: underline; color: #6ea8fe;" href="{LINK}">link</a>.</p>
    <span style="color: #aaa"><a style="cursor: pointer; text-decoration: underline" href="{LINK}">{LINK}</a></span>
    <br>
    <i style="font-size: 10px;">The <a href="https://binimum.org">binimum.org</a> shortener</i>
</main>