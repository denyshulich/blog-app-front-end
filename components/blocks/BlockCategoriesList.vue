<template>
    <div class="container">
        <NuxtLink
            v-for="category of categories"
            :key="category"
            :to="'/category/' + category.toLowerCase()"
            class="categories__item"
        >
            {{ category }}
        </NuxtLink>
    </div>
</template>

<script>
export default {
    data() {
        return {
            categories: [
                'All',
                'Commercial',
                'Design',
                'Nature',
                'People',
                'Photography',
                'Tech',
                'Travel',
                'Uncategorized'
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
.categories__item {
    padding: 20px;
}
</style>
