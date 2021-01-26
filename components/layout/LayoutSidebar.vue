<template>
    <div class="container-sidebar">
        <slot></slot>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container-sidebar {
    width: 100%;
    padding: get-m-vw(15px) 0;

    @include mediaSize(tablet) {
        padding: get-t-vw(15px) 0;
    }

    @include mediaSize(desktop) {
        width: get-vw(310px);
        padding: 0;
    }
}
</style>
