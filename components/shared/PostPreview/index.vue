<template>
    <div id="post-preview" class="layout">
        <PostPreviewIcon :img="post.img" :comments="post.comments" />
        <PostPreviewContent :categories="post.categories" :title="post.title" :thema="thema" />
    </div>
</template>

<script>
import PostPreviewContent from './PostPreviewContent';
import PostPreviewIcon from './PostPreviewIcon';
export default {
    components: { PostPreviewIcon, PostPreviewContent },
    props: {
        post: {
            type: Object,
            required: true
        },
        thema: {
            type: String,
            required: true
        }
    }
};
</script>

<style lang="scss" scoped>
.layout {
    display: flex;
}
</style>
