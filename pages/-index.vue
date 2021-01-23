<template>
    <div class="container">
        <MasonryGrid
            ><PostCard v-for="post of posts" :key="post.date" :posts="post"></PostCard>
        </MasonryGrid>
    </div>
</template>

<script>
import PostCard from '../components/PostCard';
import MasonryGrid from '~/components/base/MasonryGrid.vue';
export default {
    name: 'Home',
    components: {
        PostCard,
        MasonryGrid
    },
    data() {
        return {
            posts: [
                {
                    img: 'https://picsum.photos/id/10/1000/750',
                    avtor: 'Zenia',
                    date: 'Novemder, 23 2021',
                    title: 'Movielike photo shoot – B&W',
                    text:
                        'Ut eget consectetur libero. Proin id porttitor leo. Curabitur porttitor, elit nec rutrum sagittis, velit tellus suscipit sem, luctus auctor est dolor in libero. Praesent egestas dapibus metus ac aliquet. Donec auctor risus lacus, non mollis tellus dictum a. Ut quis mauris in nulla ultricies dapibus ac ac ex. Ut ut pulvinar ligula, non scelerisque turpis. Mauris convallis augue non quam facilisis condimentum. Nunc at leo massa. Proin sit amet erat maximus nunc porta tempus ac et urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque ut neque nec sapien viverra egestas. Quisque auctor velit sed sapien dictum, non eleifend lacus cursus. Maecenas consequat, metus nec congue malesuada, dolor elit consequat nisi, vel lobortis purus turpis vel sapien.',
                    categories: ['sport', 'develop', 'bussines'],
                    comments: 0,
                    video: []
                },
                {
                    img: [
                        'https://picsum.photos/id/5/1000/750',
                        'https://picsum.photos/id/57/1000/750',
                        'https://picsum.photos/id/58/1000/750'
                    ],
                    avtor: 'Denis',
                    date: 'Novemder, 23 2021',
                    title: 'Craftsmen at work',
                    text:
                        'Nam egestas eros ut velit pellentesque sollicitudin eget sed diam. Duis mollis ipsum id urna luctus elementum. Nulla est odio, suscipit a neque vel, viverra feugiat lorem. Donec tempor neque id turpis hendrerit hendrerit. Sed in arcu at nulla sodales mattis ac pulvinar dolor. Ut vestibulum nibh felis, ut semper arcu volutpat id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat mattis leo, eget pulvinar mi pretium ac. Integer iaculis vulputate turpis et faucibus. Nulla ullamcorper malesuada nunc, quis congue justo porta vel. Suspendisse efficitur felis lorem, porttitor tristique sapien tempus in. Praesent efficitur imperdiet interdum. Aliquam pretium ante in urna pretium, vitae fermentum risus dignissim. Aenean dictum blandit mi non luctus. Quisque accumsan at mi ac porta.',
                    categories: ['travel'],
                    comments: 300,
                    video: []
                },
                {
                    img: [
                        'https://picsum.photos/id/5/1000/750',
                        'https://picsum.photos/id/57/1000/750',
                        'https://picsum.photos/id/58/1000/750'
                    ],
                    avtor: 'Vova',
                    date: 'Novemder, 25 2021',
                    title: 'Craftsmen at work',
                    text:
                        'Nam egestas eros ut velit pellentesque sollicitudin eget sed diam. Duis mollis ipsum id urna luctus elementum. Nulla est odio, suscipit a neque vel, viverra feugiat lorem. Donec tempor neque id turpis hendrerit hendrerit. Sed in arcu at nulla sodales mattis ac pulvinar dolor. Ut vestibulum nibh felis, ut semper arcu volutpat id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat mattis leo, eget pulvinar mi pretium ac. Integer iaculis vulputate turpis et faucibus. Nulla ullamcorper malesuada nunc, quis congue justo porta vel. Suspendisse efficitur felis lorem, porttitor tristique sapien tempus in. Praesent efficitur imperdiet interdum. Aliquam pretium ante in urna pretium, vitae fermentum risus dignissim. Aenean dictum blandit mi non luctus. Quisque accumsan at mi ac porta.',
                    categories: ['travel'],
                    comments: 300,
                    video: ['https://www.youtube.com/watch?v=c2SK1IlmYL8']
                }
            ]
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
