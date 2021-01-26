<template>
    <div class="page-container">
        <slot></slot>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.page-container {
    width: 100%;
    margin: 0 auto;

    @include mediaSize(tablet) {
        width: 90%;
    }

    @include mediaSize(desktop) {
        width: 60%;
    }
}
</style>
