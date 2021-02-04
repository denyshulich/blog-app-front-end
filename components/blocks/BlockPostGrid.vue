<template>
    <div class="container">
        <div v-if="$device.isDesktopOrTablet">
            <MasonryGrid :options="macyOptions">
                <div id="catalogMasonryGrid">
                    <PostCard v-for="post of posts" :key="post.id" :post="post" />
                </div>
            </MasonryGrid>
        </div>

        <div v-else-if="$device.isMobile">
            <PostCard v-for="post of posts" :key="post.id" :post="post" />
        </div>
    </div>
</template>

<script>
import PostCard from '~/components/shared/PostCard';
import MasonryGrid from '~/components/renderless/MasonryGrid';
export default {
    name: 'Home',
    components: {
        PostCard,
        MasonryGrid
    },
    props: {
        posts: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            macyOptions: {
                container: '#catalogMasonryGrid',
                trueOrder: true,
                waitForImages: false,
                margin: 10,
                columns: 2,
                breakAt: {
                    1020: {
                        margin: 5
                    },
                    550: {
                        columns: 1,
                        margin: 0
                    }
                }
            }
        };
    }
};
</script>

<style lang="scss" scoped>
.container {
    width: get-m-vw(375px);

    @include mediaSize(tablet) {
        width: get-t-vw(700px);
    }

    @include mediaSize(desktop) {
        width: get-vw(850px);
    }
}
</style>
