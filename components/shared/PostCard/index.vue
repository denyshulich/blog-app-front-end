<template>
    <div class="post-layout">
        <div class="post-container">
            <div v-if="videoTumbler">
                <PostCardVideo :video="posts.video" />
            </div>
            <div v-else>
                <PostCardImageCarousel v-if="imageTumbler" :image="posts.img" />
                <PostCardImage v-else :image="posts.img" />
            </div>
            <div class="post-wraper">
                <PostCardMeta :author="posts.author" :date="posts.date" />
                <PostCardContent :title="posts.title" :text="posts.text" />
                <PostCardBottom :categories="posts.categories" :comments="posts.comments" />
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
        posts: {
            type: Object,
            required: true
        }
    },
    computed: {
        imageTumbler() {
            if (Array.isArray(this.posts.img) && this.posts.img.length > 1) {
                return true;
            } else {
                return false;
            }
        },

        videoTumbler() {
            if (this.posts.video !== undefined) {
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
