<template>
    <div>
        <Header />
        <LayoutPage>
            <BlockCategoriesList />
            <LayoutContentAndSidebar>
                <Nuxt />
                <LayoutSidebar></LayoutSidebar>
            </LayoutContentAndSidebar>
        </LayoutPage>
    </div>
</template>

<script>
import Header from './header';
import LayoutPage from '~/components/layout/LayoutPage';
import LayoutContentAndSidebar from '~/components/layout/LayoutContentAndSidebar.vue';
import LayoutSidebar from '~/components/layout/LayoutSidebar.vue';
import BlockCategoriesList from '~/components/blocks/BlockCategoriesList.vue';

export default {
    components: {
        Header,
        LayoutPage,
        LayoutContentAndSidebar,
        LayoutSidebar,
        BlockCategoriesList
    }
};
</script>

<style></style>
