<template>
    <div id="post-card-content">
        <NuxtLink to="/">
            <h2 class="post-title">{{ title }}</h2>
        </NuxtLink>

        <p class="post-text">{{ textLenght }}</p>
    </div>
</template>

<script>
export default {
    name: 'PostCardContent',
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
.post-title {
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
        font-size: get-t-vw(30px);
    }

    @include mediaSize(desktop) {
        margin: get-vw(14px) 0;
        font-size: get-vw(30px);
    }
}

.post-text {
    padding-bottom: get-m-vw(10px);
    font-family: 'Relaway', sans-serif;
    font-size: get-m-vw(14px);
    font-weight: normal;
    color: $colorGrey;

    @include mediaSize(tablet) {
        padding-bottom: get-t-vw(10px);
        font-size: get-t-vw(14px);
    }

    @include mediaSize(desktop) {
        padding-bottom: get-vw(10px);
        font-size: get-vw(14px);
    }
}
</style>
