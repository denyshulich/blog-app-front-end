<template>
    <p class="base-widget-title" :class="thema">
        <slot></slot>
    </p>
</template>

<script>
export default {
    name: 'BaseTitleWidget',
    props: {
        thema: {
            type: String,
            required: true
        }
    }
};
</script>

<style lang="scss" scoped>
.base-widget-title {
    padding-bottom: 5%;
    font-size: get-m-vw(20px);
    color: #505050;

    @include mediaSize(tablet) {
        font-size: get-t-vw(20px);
    }

    @include mediaSize(desktop) {
        font-size: get-vw(20px);
    }

    &.dark {
        color: white;
    }
}
</style>
