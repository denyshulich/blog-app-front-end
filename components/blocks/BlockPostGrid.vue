<template>
    <div>
        <div v-if="$device.isDesktopOrTablet" class="container">
            <MasonryGrid :options="macyOptions">
                <div id="catalogMasonryGrid">
                    <PostCard v-for="post of posts" :key="post.date" :posts="post" />
                </div>
            </MasonryGrid>
        </div>
        <div v-else class="container">
            <PostCard v-for="post of posts" :key="post.date" :posts="post" />
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
                waitForImages: true,
                margin: 10,
                columns: 2,
                breakAt: {
                    1020: {
                        margin: 5
                    },
                    550: {
                        columns: 1,
                        margin: {
                            y: 15
                        }
                    }
                }
            }
        };
    }
};
</script>

<style lang="scss" scoped>
.container {
    margin: 5vw auto;

    @include mediaSize(tablet) {
        width: 90%;
    }

    @include mediaSize(desktop) {
        width: 45%;
    }
}
</style>
