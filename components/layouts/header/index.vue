<template>
    <header>
        <HeaderNavBarDesktop />
        <HeaderBanner />
    </header>
</template>

<script>
import HeaderBanner from './HeaderBanner.vue';
import HeaderNavBarDesktop from './HeaderNavBarDesktop';
export default {
    components: {
        HeaderNavBarDesktop,
        HeaderBanner
    }
};
</script>

<style></style>
