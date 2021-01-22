<template>
    <div class="subtitle">
        <nuxt-link class="post__avtor" to="/">By {{ avtor }} </nuxt-link>

        <nuxt-link class="post__data" to="/"> {{ date }} </nuxt-link>
    </div>
</template>

<script>
export default {
    props: {
        date: {
            type: String,
            required: true
        },
        avtor: {
            type: String,
            required: true
        }
    }
};
</script>

<style lang="scss" scoped>
.subtitle {
    font-size: get-m-vw(17px);

    @include mediaSize(tablet) {
        font-size: get-t-vw(17px);
    }
}

.post__avtor {
    display: inline;
    color: $colorGrey;
    text-decoration: none;
    transition: color 0.3s ease-in-out;

    &:hover {
        color: black;
        transition: color 0.3s ease-in-out;
    }
}

.post__data {
    display: inline;
    padding-left: get-m-vw(10px);
    color: $colorGrey;
    text-decoration: none;

    @include mediaSize(tablet) {
        padding-left: get-t-vw(10px);
    }
}
</style>
