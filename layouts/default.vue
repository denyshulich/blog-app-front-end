<template>
    <div id="default">
        <Header />
        <LayoutDefault>
            <template #titelbar><BlockCategoriesList /></template>
            <template #content><Nuxt /></template>
            <template #sidebar>
                <BlockLatestPosts thema="white" />
                <BlockSearchFormAside />
                <BlockPopularTags thema="white" title="Popular Tags" />
            </template>
        </LayoutDefault>
        <BlockScrollTop />
        <Footer />
    </div>
</template>

<script>
import Header from '~/components/layouts/header';
import Footer from '~/components/layouts/footer';
import LayoutDefault from '~/components/layouts/LayoutDefault';
import BlockCategoriesList from '~/components/blocks/BlockCategoriesList';
import BlockLatestPosts from '~/components/blocks/BlockLatestPosts';
import BlockPopularTags from '~/components/blocks/BlockPopularTags';
import BlockScrollTop from '~/components/blocks/BlockScrollTop.vue';
import BlockSearchFormAside from '~/components/blocks/BlockSearchFormAside.vue';

export default {
    components: {
        Header,
        Footer,
        LayoutDefault,
        BlockCategoriesList,
        BlockLatestPosts,
        BlockPopularTags,
        BlockScrollTop,
        BlockSearchFormAside
    }
};
</script>

<style></style>
