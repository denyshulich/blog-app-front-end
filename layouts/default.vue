<template>
    <div>
        <Header />
        <LayoutPage>
            <template #titelbar><BlockCategoriesList /></template>
            <template #content><Nuxt /></template>
        </LayoutPage>
    </div>
</template>

<script>
import Header from './header';
import LayoutPage from '~/components/layout/LayoutPage';
import BlockCategoriesList from '~/components/blocks/BlockCategoriesList.vue';

export default {
    components: {
        Header,
        LayoutPage,
        BlockCategoriesList
    }
};
</script>

<style></style>
