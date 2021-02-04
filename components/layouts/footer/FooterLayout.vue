<template>
    <div class="footer-container">
        <div class="footer-content">
            <div class="container">
                <slot name="widget"></slot>
            </div>
            <div class="container">
                <slot name="recent-posts"></slot>
            </div>
            <div class="container">
                <slot name="tags"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer-container {
    padding: get-m-vw(100px) 0;
    background-color: #262626;

    @include mediaSize(tablet) {
        padding: get-t-vw(100px) 0;
    }

    @include mediaSize(desktop) {
        padding: get-vw(100px) 0;
    }
}

.footer-content {
    display: flex;
    flex-direction: column;
    width: 95%;
    margin: 0 auto;

    @include mediaSize(desktop) {
        flex-direction: row;
        width: 60%;
    }
}

.container {
    box-sizing: border-box;
    width: 100%;
    padding: 0 get-m-vw(15px);

    @include mediaSize(tablet) {
        padding: 0 get-t-vw(70px);
    }

    @include mediaSize(desktop) {
        width: 33%;
        padding: 0 get-vw(15px);
    }
}
</style>
