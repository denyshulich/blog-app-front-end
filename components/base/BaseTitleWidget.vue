<template>
    <p class="title">
        <slot></slot>
    </p>
</template>

<script>
export default {
    name: 'BaseTitleWidget'
};
</script>

<style lang="scss" scoped>
.title {
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
