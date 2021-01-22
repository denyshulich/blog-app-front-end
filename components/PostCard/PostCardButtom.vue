<template>
    <div class="category-container">
        <p class="categories">
            <nuxt-link v-for="ctg in categories" :key="ctg" class="none-decoration category" to="/">
                {{ ctg.toUpperCase() }}
            </nuxt-link>
        </p>
        <button-blue class="position-button" url="/">
            <svg-icon name="speech-bubble" class="icon-bubble" />
            <div class="comment__number">
                <span> {{ comments }} </span>
            </div>
        </button-blue>
    </div>
</template>

<script>
import ButtonBlue from '../base/ButtonBlue.vue';
export default {
    components: { ButtonBlue },
    props: {
        categories: {
            type: Array,
            required: true
        },
        comments: {
            type: Number,
            required: true
        }
    },
    computed: {}
};
</script>

<style lang="scss" scoped>
.category-container {
    position: relative;
    padding: auto 0;
    padding-left: get-m-vw(38px);
    margin-right: get-m-vw(92px);
    margin-left: get-m-vw(-38px);
    border-top: $border;

    @include mediaSize(tablet) {
        padding-left: get-t-vw(38px);
        margin-right: get-t-vw(92px);
        margin-left: get-t-vw(-38px);
    }
}

.category {
    font-size: get-m-vw(13px);
    color: $colorGrey;

    @include mediaSize(tablet) {
        font-size: get-t-vw(13px);
    }

    &:hover {
        color: black;
    }
}

.category:not(:last-child) {
    &::after {
        padding-right: get-m-vw(5px);
        content: ',  ';

        @include mediaSize(tablet) {
            padding-right: get-t-vw(5px);
        }
    }
}

.position-button {
    position: absolute;
    top: get-m-vw(-20px);
    right: get-m-vw(-80px);
    height: get-m-vw(40px);
    padding: 0 get-m-vw(17px);
    color: $colorGrey;
    border-radius: get-m-vw(100px);
    transition: 0.3s color ease-in-out;

    @include mediaSize(tablet) {
        top: get-t-vw(-20px);
        right: get-t-vw(-80px);
        height: get-t-vw(40px);
        padding: 0 get-t-vw(17px);
        border-radius: get-t-vw(100px);
    }
}

.icon-bubble {
    width: get-m-vw(25px);
    height: get-m-vw(25px);
    color: inherit;

    @include mediaSize(tablet) {
        width: get-t-vw(25px);
        height: get-t-vw(25px);
    }
}

.comment__number {
    display: flex;
    padding-left: get-m-vw(10px);

    @include mediaSize(tablet) {
        padding-left: get-t-vw(10px);
    }

    span {
        margin: auto;
        font-size: get-m-vw(20px);

        @include mediaSize(tablet) {
            font-size: get-t-vw(20px);
        }
    }
}
</style>
