<template>
    <nav class="container">
        <ul>
            <li class="categories-item">
                <NuxtLink exact active-class="active" to="/" class="categories-link">
                    All
                </NuxtLink>
            </li>
            <li class="categories-item">
                <NuxtLink
                    active-class="active"
                    :to="'/category/' + category.slug"
                    class="categories-link"
                >
                    {{ category.title }}
                </NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<script>
import gql from 'graphql-tag';
export default {
    data() {
        return {
            category: ''
        };
    },

    apollo: {
        category: {
            prefetch: true,
            query: gql`
                query {
                    category(slug: "home") {
                        id
                        title
                        slug
                    }
                }
            `
        }
    }
};
</script>

<style lang="scss" scoped>
.container {
    width: 85%;
    padding: get-m-vw(30px) 0;
    margin: 0 auto;
    text-align: center;

    @include mediaSize(tablet) {
        width: 90%;
        padding: get-t-vw(30px) 0;
    }

    @include mediaSize(desktop) {
        padding: get-vw(50px) 0 get-vw(40px) 0;
    }
}

.categories-item {
    display: inline-block;
    padding: get-m-vw(5px) get-m-vw(8px);

    @include mediaSize(tablet) {
        padding: get-t-vw(5px) get-t-vw(8px);
    }

    @include mediaSize(desktop) {
        padding: get-vw(5px) get-vw(8px);
    }

    &:hover {
        .categories-link {
            color: white;
            background-color: $colorBlue;
            border-color: $colorBlue;
        }
    }
}

.categories-link {
    display: inline-block;
    padding: get-m-vw(6px) get-m-vw(15px);
    font-size: get-m-vw(13px);
    font-weight: normal;
    color: $colorGrey;
    border: $border;
    border-radius: 100px;

    @include mediaSize(tablet) {
        padding: get-t-vw(6px) get-t-vw(15px);
        font-size: get-t-vw(13px);
    }

    @include mediaSize(desktop) {
        padding: get-vw(8px) get-vw(15px);
        font-size: get-vw(15px);
    }
}

.active {
    font-weight: bold;
    color: white;
    background-color: $colorBlue;
    border-color: $colorBlue;
}
</style>
