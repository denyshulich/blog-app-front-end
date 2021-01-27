<template>
    <div>
        <Header />
        <LayoutPage>
            <template #titelbar><BlockCategoriesList /></template>
            <template #content><Nuxt /></template>
            <template #sidebar>
                <BlockLatestPosts />
            </template>
        </LayoutPage>
    </div>
</template>

<script>
import Header from './header';
import LayoutPage from '~/components/layout/LayoutPage';
import BlockCategoriesList from '~/components/blocks/BlockCategoriesList';
import BlockLatestPosts from '~/components/blocks/BlockLatestPosts';

export default {
    components: {
        Header,
        LayoutPage,
        BlockCategoriesList,
        BlockLatestPosts
    }
};
</script>

<style></style>
