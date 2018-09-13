<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    document.documentElement.style.fontSize = window.innerWidth / 750 * 100 + 'px';
    export default {
        name: 'App'
    }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    
    html,
    body {
        width: 100%;
        height: 100%;
        font-size:.3rem;
    }
</style>
