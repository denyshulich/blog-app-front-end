<template>
    <FooterLayout>
        <template #widget><FooterWidget /></template>
        <template #recent-posts><FooterRecentPosts :posts="postsRecent" /></template>
        <template #tags><BlockPopularTags title="Tags" thema="dark" /></template>
    </FooterLayout>
</template>

<script>
import FooterWidget from './FooterWidget';
import FooterRecentPosts from './FooterRecentPosts';
import FooterLayout from './FooterLayout';
import BlockPopularTags from '~/components/blocks/BlockPopularTags.vue';
export default {
    components: {
        FooterWidget,
        FooterRecentPosts,
        FooterLayout,
        BlockPopularTags
    },

    data() {
        return {
            postsRecent: [
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
                }
            ]
        };
    }
};
</script>
