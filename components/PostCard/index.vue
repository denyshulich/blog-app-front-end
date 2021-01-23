<template>
    <div class="layout">
        <div class="container">
            <div v-if="videoTumbler">
                <PostCardVideo :video="posts.video"></PostCardVideo>
            </div>
            <div v-else>
                <PostCardImageCarousel
                    v-if="imageTumbler"
                    :image="posts.img"
                ></PostCardImageCarousel>
                <post-card-image v-else :image="posts.img"></post-card-image>
            </div>
            <div class="wraper">
                <PostCardSubtitle :avtor="posts.avtor" :date="posts.date"></PostCardSubtitle>
                <PostCardTitle :title="posts.title" :text="posts.text"></PostCardTitle>
                <PostCardButtom
                    :categories="posts.categories"
                    :comments="posts.comments"
                ></PostCardButtom>
            </div>
        </div>
    </div>
</template>

<script>
import PostCardButtom from './PostCardButtom.vue';
import PostCardImage from './PostCardImage.vue';
import PostCardImageCarousel from './PostCardImageCarousel.vue';
import PostCardSubtitle from './PostCardSubtitle';
import PostCardTitle from './PostCardTitle.vue';
import PostCardVideo from './PostCardVideo.vue';

export default {
    components: {
        PostCardImage,
        PostCardSubtitle,
        PostCardImageCarousel,
        PostCardTitle,
        PostCardButtom,
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
            if (Array.isArray(this.posts.img)) {
                return true;
            } else {
                return false;
            }
        },

        videoTumbler() {
            if (this.posts.video.length !== 0 || this.posts.video === undefined) {
                return true;
            } else {
                return false;
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.layout {
    display: flex;
    padding: get-m-vw(15px) 0;

    @include mediaSize(tablet) {
        padding: get-t-vw(15px) 0;
    }

    @include mediaSize(desktop) {
        padding: get-vw(15px) 0;
    }
}

.wraper {
    padding: get-m-vw(32px) get-m-vw(38px) 0 get-m-vw(38px);

    @include mediaSize(tablet) {
        padding: get-t-vw(32px) get-t-vw(38px) 0 get-t-vw(38px);
    }

    @include mediaSize(desktop) {
        padding: get-vw(32px) get-vw(38px) 0 get-vw(38px);
    }
}

.container {
    position: relative;
    top: 0;
    width: get-m-vw(330px);
    height: max-content;
    margin: auto;
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
