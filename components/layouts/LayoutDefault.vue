<template>
    <div class="page-container">
        <slot name="titelbar"></slot>
        <div class="entry-content">
            <slot name="content"></slot>
            <aside class="sidebar">
                <slot name="sidebar"></slot>
            </aside>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LayoutDefault'
};
</script>

<style lang="scss" scoped>
.page-container {
    position: relative;
    width: 100%;
    margin: 0 auto;

    @include mediaSize(tablet) {
        width: 90%;
    }

    @include mediaSize(desktop) {
        width: 60%;
    }
}

.entry-content {
    display: flex;
    flex-direction: column;

    @include mediaSize(desktop) {
        flex-direction: row;
    }
}

.sidebar {
    width: 70%;
    padding: get-m-vw(15px) 0;
    margin: 0 auto;

    @include mediaSize(tablet) {
        width: 94%;
        padding: get-t-vw(15px) 0;
    }

    @include mediaSize(desktop) {
        width: get-vw(310px);
        padding: 0 0 0 3%;
    }
}
</style>
