<template>
    <main id="home-page"><BlockPostGrid :posts="posts" /></main>
</template>

<script>
import gql from 'graphql-tag';
import BlockPostGrid from '~/components/blocks/BlockPostGrid';
export default {
    name: 'Home',
    components: { BlockPostGrid },
    data() {
        return {
            posts: [],
            routeParam: this.$route.params.slug
        };
    },
    apollo: {
        posts: {
            prefetch: true,
            query: gql`
                query PostSlug($slug: String!) {
                    posts(slug: $slug) {
                        slug
                        id
                        title
                        description
                        shortDescription
                        images {
                            src
                            alt
                        }
                        video
                        categories {
                            slug
                        }
                    }
                }
            `,
            variables() {
                return {
                    slug: this.routeParam
                };
            }
        }
    }
};
</script>
