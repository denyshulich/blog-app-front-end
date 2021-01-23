<template>
    <div>
        <NuxtLink class="none-decoration" to="/">
            <h2 class="title">{{ title }}</h2>
        </NuxtLink>

        <p class="text">{{ textLenght }}</p>
    </div>
</template>

<script>
export default {
    name: 'PostCardTitle',
    props: {
        title: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        }
    },
    computed: {
        textLenght() {
            return this.text.length > 100 ? this.text.slice(0, 99) + '…' : this.text;
        }
    }
};
</script>

<style lang="scss" scoped>
.title {
    margin: get-m-vw(14px) 0;
    font-size: get-m-vw(28px);
    color: black;
    text-decoration: none;
    transition: color 0.3s ease-in-out;

    &:hover {
        color: $colorBlue;
        transition: color 0.3s ease-in-out;
    }

    @include mediaSize(tablet) {
        margin: get-t-vw(14px) 0;
        font-size: get-t-vw(28px);
    }

    @include mediaSize(desktop) {
        margin: get-vw(14px) 0;
        font-size: get-vw(28px);
    }
}

.text {
    padding-bottom: get-m-vw(28px);
    font-size: get-m-vw(18px);
    color: $colorGrey;

    @include mediaSize(tablet) {
        padding-bottom: get-t-vw(28px);
        font-size: get-t-vw(18px);
    }

    @include mediaSize(desktop) {
        padding-bottom: get-vw(28px);
        font-size: get-vw(18px);
    }
}
</style>
