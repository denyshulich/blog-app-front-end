<template>
    <header>
        <HeaderNavBarDesktop v-if="$device.isDesktop" />
        <HeaderNavBarMobile v-else />
        <HeaderBanner />
    </header>
</template>

<script>
import HeaderBanner from './HeaderBanner.vue';
import HeaderNavBarDesktop from './HeaderNavBarDesktop';
import HeaderNavBarMobile from './HeaderNavBarMobile.vue';
export default {
    components: {
        HeaderNavBarDesktop,
        HeaderBanner,
        HeaderNavBarMobile
    }
};
</script>

<style></style>
