<template>
    <div class="page-container">
        <slot name="titelbar"></slot>
        <div class="container-content-and-sidebar">
            <slot name="content"></slot>
            <div class="container-sidebar">
                <slot name="sidebar"></slot>
            </div>
        </div>
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

.container-content-and-sidebar {
    display: flex;
    flex-direction: column;

    @include mediaSize(desktop) {
        flex-direction: row;
    }
}

.container-sidebar {
    width: 100%;
    padding: get-m-vw(15px) 0;
    margin: 0 auto;

    @include mediaSize(tablet) {
        padding: get-t-vw(15px) 0;
    }

    @include mediaSize(desktop) {
        width: get-vw(310px);
        padding: 0;
    }
}
</style>
