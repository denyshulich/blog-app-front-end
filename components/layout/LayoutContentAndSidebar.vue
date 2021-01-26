<template>
    <div class="container-content-and-sidebar">
        <slot></slot>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container-content-and-sidebar {
    display: flex;
    flex-direction: column;

    @include mediaSize(desktop) {
        flex-direction: row;
    }
}
</style>
