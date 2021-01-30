<template>
    <div v-if="scrollTriger" v-scroll-to="options" class="scroll-container">
        <SvgIcon class="scroll-icon" name="left-arrow" />
    </div>
</template>

<script>
import VueScrollTo from 'vue-scrollto';
import Vue from 'vue';
Vue.use(VueScrollTo);
export default {
    data() {
        return {
            scrollPosition: 0,
            options: {
                el: 'body',
                duration: 500,
                lazy: false,
                easing: 'linear',
                offset: -200,
                force: true,
                cancelable: true,
                x: false,
                y: true
            }
        };
    },
    computed: {
        scrollTriger() {
            if (this.scrollPosition > 500) {
                return true;
            }
            return false;
        }
    },
    mounted() {
        if (!this.$isServer) {
            this._scrollListener();
            window.addEventListener('scroll', this._scrollListener);
        }
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this._scrollListener);
    },
    methods: {
        _scrollListener() {
            this.scrollPosition = Math.round(window.pageYOffset);
        }
    }
};
</script>

<style lang="scss" scoped>
.scroll-container {
    position: fixed;
    right: get-m-vw(30px);
    bottom: get-m-vw(30px);
    display: flex;
    width: get-m-vw(50px);
    height: get-m-vw(50px);
    cursor: pointer;
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 3px 13px 1px rgba(0, 0, 0, 0.12);

    &:hover {
        background-color: $colorBlue;

        .scroll-icon {
            color: white;
        }
    }

    @include mediaSize(tablet) {
        right: get-t-vw(30px);
        bottom: get-t-vw(30px);
        width: get-t-vw(50px);
        height: get-t-vw(50px);
    }

    @include mediaSize(desktop) {
        right: get-vw(30px);
        bottom: get-vw(30px);
        width: get-vw(50px);
        height: get-vw(50px);
    }
}

.scroll-icon {
    width: get-m-vw(20px);
    height: get-m-vw(20px);
    margin: auto;
    color: $colorGrey;
    transform: rotate(90deg);

    @include mediaSize(tablet) {
        width: get-t-vw(20px);
        height: get-t-vw(20px);
    }

    @include mediaSize(desktop) {
        width: get-vw(20px);
        height: get-vw(20px);
    }
}
</style>
