<template>
    <div class="container-recent-posts">
        <BaseTitleWidget thema="dark">Recent Posts</BaseTitleWidget>
        <div v-for="post of posts" :key="post.img" class="post-preview-inner">
            <PostPreview :post="post" thema="dark" />
        </div>
    </div>
</template>

<script>
import BaseTitleWidget from '~/components/base/BaseTitleWidget';
import PostPreview from '~/components/shared/PostPreview';
export default {
    components: {
        BaseTitleWidget,
        PostPreview
    },
    props: {
        posts: {
            type: Array,
            required: true
        }
    }
};
</script>

<style lang="scss" scoped>
.post-preview-inner {
    position: relative;
    padding-bottom: get-m-vw(15px);
    margin-bottom: get-m-vw(25px);

    &:not(:last-child) {
        border-bottom: $border;
    }

    @include mediaSize(tablet) {
        padding-bottom: get-t-vw(15px);
        margin-bottom: get-t-vw(25px);
    }

    @include mediaSize(desktop) {
        padding-bottom: get-vw(15px);
        margin-bottom: get-vw(25px);
    }
}

.container-recent-posts {
    padding-top: get-m-vw(25px);

    @include mediaSize(tablet) {
        padding-top: get-t-vw(25px);
    }

    @include mediaSize(desktop) {
        padding-top: 0;
    }
}
</style>
