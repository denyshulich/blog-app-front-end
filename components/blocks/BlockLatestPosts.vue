<template>
    <div class="container">
        <BaseTitleWidget thema="white">Latest posts</BaseTitleWidget>
        <div v-for="post of posts" :key="post.img" class="post-preview-inner">
            <PostPreview thema="white" :post="post" />
        </div>
    </div>
</template>

<script>
import BaseTitleWidget from '../base/BaseTitleWidget';
import PostPreview from '~/components/shared/PostPreview';
export default {
    components: {
        PostPreview,
        BaseTitleWidget
    },
    data() {
        return {
            posts: [
                {
                    img: 'https://picsum.photos/id/10/100/100',
                    comments: 4,
                    categories: ['PEOPLE', 'TRAVEL'],
                    title: 'Movielike photo shoot – B&W'
                },
                {
                    img: 'https://picsum.photos/id/60/100/100',
                    comments: 55,
                    categories: ['PEOPLE', 'TRAVEL'],
                    title: 'Movielike photo'
                },
                {
                    img: 'https://picsum.photos/id/10/100/100',
                    comments: 300,
                    categories: ['PEOPLE', 'TRAVEL'],
                    title: 'Movielike photo shoot'
                },
                {
                    img: 'https://picsum.photos/id/60/1000/750',
                    comments: 0,
                    categories: ['PEOPLE', 'TRAVEL'],
                    title: 'Movielike photo shoot – B&W Movielike photo'
                }
            ]
        };
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

.container {
    padding-top: get-m-vw(50px);

    @include mediaSize(tablet) {
        padding-top: get-t-vw(100px);
    }

    @include mediaSize(desktop) {
        padding-top: get-vw(20px);
    }
}

.base-widget-title {
    font-size: get-m-vw(20px);
    color: #505050;

    @include mediaSize(tablet) {
        font-size: get-t-vw(20px);
    }

    @include mediaSize(desktop) {
        font-size: get-vw(20px);
    }
}
</style>
