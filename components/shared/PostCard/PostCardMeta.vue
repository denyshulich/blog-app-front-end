<template>
    <div class="post-meta">
        <NuxtLink class="post-author" to="/">By {{ author }} </NuxtLink>

        <NuxtLink class="post-date" to="/"> {{ date }} </NuxtLink>
    </div>
</template>

<script>
export default {
    name: 'PostCardMeta',
    props: {
        date: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        }
    }
};
</script>

<style lang="scss" scoped>
.post-meta {
    font-size: get-m-vw(13px);
    font-weight: normal;

    @include mediaSize(tablet) {
        font-size: get-t-vw(13px);
    }

    @include mediaSize(desktop) {
        font-size: get-vw(13px);
    }
}

.post-author {
    display: inline;
    color: $colorGrey;
    text-decoration: none;
    transition: color 0.3s ease-in-out;

    &:hover {
        color: black;
        transition: color 0.3s ease-in-out;
    }
}

.post-date {
    display: inline;
    padding-left: get-m-vw(10px);
    color: $colorGrey;
    text-decoration: none;

    @include mediaSize(tablet) {
        padding-left: get-t-vw(10px);
    }

    @include mediaSize(desktop) {
        padding-left: get-vw(10px);
    }
}
</style>
