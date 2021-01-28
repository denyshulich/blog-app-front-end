<template>
    <p class="base-widget-title">
        <slot></slot>
    </p>
</template>

<script>
export default {
    name: 'BaseTitleWidget'
};
</script>

<style lang="scss" scoped>
.base-widget-title {
    font-size: get-m-vw(20px);
    color: #505050;

    @include mediaSize(tablet) {
        font-size: get-t-vw(20px);
    }

    @include mediaSize(desktop) {
        font-size: get-vw(20px);
    }
}
</style>
