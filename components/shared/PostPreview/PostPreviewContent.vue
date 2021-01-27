<template>
    <div class="container">
        <div class="categories">
            <NuxtLink v-for="ctg in categories" :key="ctg" class="category" to="/">
                {{ ctg.toUpperCase() }}
            </NuxtLink>
        </div>

        <NuxtLink class="title" to="/">
            {{ title }}
        </NuxtLink>
    </div>
</template>

<script>
export default {
    props: {
        categories: {
            type: Array,
            required: true
        },
        title: {
            type: String,
            required: true
        }
    }
};
</script>

<style lang="scss" scoped>
.container {
    padding-top: 1%;
    padding-left: get-m-vw(20px);

    @include mediaSize(tablet) {
        padding-left: get-t-vw(20px);
    }

    @include mediaSize(desktop) {
        padding-left: get-vw(20px);
    }
}

.categories {
    padding-bottom: get-m-vw(5px);
    margin: 0;

    @include mediaSize(tablet) {
        padding-bottom: get-t-vw(5px);
    }

    @include mediaSize(desktop) {
        padding-bottom: get-vw(5px);
    }
}

.category {
    font-size: get-m-vw(13px);
    font-weight: normal;
    color: $colorGrey;

    @include mediaSize(tablet) {
        font-size: get-t-vw(13px);
    }

    @include mediaSize(desktop) {
        font-size: get-vw(13px);
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

        @include mediaSize(desktop) {
            padding-right: get-vw(5px);
        }
    }
}

.title {
    font-size: get-m-vw(16px);

    @include mediaSize(tablet) {
        font-size: get-t-vw(16px);
    }

    @include mediaSize(desktop) {
        font-size: get-vw(16px);
    }

    &:hover {
        color: $colorBlue;
    }
}
</style>
