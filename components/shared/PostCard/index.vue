<template>
    <div class="post-layout">
        <div class="post-container">
            <div v-if="videoTumbler">
                <PostCardVideo :video="post.video" />
            </div>
            <div v-else>
                <PostCardImageCarousel v-if="imageTumbler" :images="post.images" />
                <PostCardImage v-else :image="post.images" />
            </div>
            <div class="post-wraper">
                <PostCardMeta :author="post.author || 'default'" :date="post.date || 'default'" />
                <PostCardContent :title="post.title" :text="post.shortDescription" />
                <PostCardBottom :categories="post.categories" :comments="post.comments || 0" />
            </div>
        </div>
    </div>
</template>

<script>
import PostCardBottom from './PostCardBottom';
import PostCardImage from './PostCardImage';
import PostCardImageCarousel from './PostCardImageCarousel';
import PostCardMeta from './PostCardMeta';
import PostCardContent from './PostCardContent';
import PostCardVideo from './PostCardVideo';

export default {
    components: {
        PostCardImage,
        PostCardMeta,
        PostCardImageCarousel,
        PostCardContent,
        PostCardBottom,
        PostCardVideo
    },
    props: {
        post: {
            type: Object,
            required: true
        }
    },
    computed: {
        imageTumbler() {
            if (Array.isArray(this.post.images) && this.post.images.length > 1) {
                return true;
            } else {
                return false;
            }
        },

        videoTumbler() {
            if (this.post.video !== null && this.post.video !== undefined) {
                return true;
            } else {
                return false;
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.post-layout {
    display: flex;
    padding: get-m-vw(15px) 0;

    @include mediaSize(tablet) {
        padding: get-t-vw(15px) 0;
    }

    @include mediaSize(desktop) {
        padding: get-vw(15px) 0;
    }
}

.post-wraper {
    padding: get-m-vw(20px) get-m-vw(38px) 0 get-m-vw(38px);

    @include mediaSize(tablet) {
        padding: get-t-vw(20px) get-t-vw(38px) 0 get-t-vw(38px);
    }

    @include mediaSize(desktop) {
        padding: get-vw(20px) get-vw(38px) 0 get-vw(38px);
    }
}

.post-container {
    position: relative;
    width: get-m-vw(270px);
    margin: 0 auto;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25);
    transition: top 0.6s ease-in-out, box-shadow 0.6s ease-in-out;

    @include mediaSize(tablet) {
        width: get-t-vw(300px);
    }

    @include mediaSize(desktop) {
        width: get-vw(400px);
    }

    &:hover {
        top: get-m-vw(1px);
        border: $border;
        box-shadow: none;
        transition: top 0.6s ease-in-out, box-shadow 0.6s ease-in-out;
    }
}
</style>
