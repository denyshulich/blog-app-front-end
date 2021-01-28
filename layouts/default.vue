<template>
    <div id="default">
        <Header />
        <LayoutDefault>
            <template #titelbar><BlockCategoriesList /></template>
            <template #content><Nuxt /></template>
            <template #sidebar>
                <BlockLatestPosts />
                <BlockPopularTags />
            </template>
        </LayoutDefault>
    </div>
</template>

<script>
import Header from '~/components/layouts/header';
import LayoutDefault from '~/components/layouts/LayoutDefault';
import BlockCategoriesList from '~/components/blocks/BlockCategoriesList';
import BlockLatestPosts from '~/components/blocks/BlockLatestPosts';
import BlockPopularTags from '~/components/blocks/BlockPopularTags';

export default {
    components: {
        Header,
        LayoutDefault,
        BlockCategoriesList,
        BlockLatestPosts,
        BlockPopularTags
    }
};
</script>

<style></style>
