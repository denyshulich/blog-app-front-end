<template>
    <div class="layout">
        <div class="container">
            <div>
                <post-card-image-carusel
                    v-if="imageTumbler"
                    :image="posts.img"
                ></post-card-image-carusel>
                <post-card-image v-else :image="posts.img"></post-card-image>
            </div>
            <div class="wraper">
                <post-card-subtitle :avtor="posts.avtor" :date="posts.date"></post-card-subtitle>
                <post-card-title :title="posts.title" :text="posts.text"></post-card-title>
                <post-card-buttom
                    :categories="posts.categories"
                    :comments="posts.comments"
                ></post-card-buttom>
            </div>
        </div>
    </div>
</template>

<script>
import PostCardButtom from './PostCardButtom.vue';
import PostCardImage from './PostCardImage.vue';
import PostCardImageCarusel from './PostCardImageCarusel.vue';
import PostCardSubtitle from './PostCardSubtitle';
import PostCardTitle from './PostCardTitle.vue';

export default {
    components: {
        PostCardImage,
        PostCardSubtitle,
        PostCardImageCarusel,
        PostCardTitle,
        PostCardButtom
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
}

.wraper {
    padding: get-m-vw(32px) get-m-vw(38px) 0 get-m-vw(38px);

    @include mediaSize(tablet) {
        padding: get-t-vw(32px) get-t-vw(38px) 0 get-t-vw(38px);
    }
}

.container {
    position: relative;
    width: get-m-vw(294px);
    height: max-content;
    margin: auto;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    transition: top 0.6s ease-in-out, box-shadow 0.6s ease-in-out;

    @include mediaSize(tablet) {
        width: get-t-vw(340px);
    }

    &:hover {
        top: get-m-vw(1px);
        border: $border;
        box-shadow: none;
        transition: top 0.6s ease-in-out, box-shadow 0.6s ease-in-out;
    }
}
</style>
