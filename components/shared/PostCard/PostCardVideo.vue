<template>
    <LazyYoutubeVideo :src="'https://www.youtube.com/embed/' + getVideoId" />
</template>

<script>
import LazyYoutubeVideo from 'vue-lazy-youtube-video';
import 'vue-lazy-youtube-video/dist/style.css';
export default {
    name: 'PostCardVideo',
    components: {
        LazyYoutubeVideo
    },
    props: {
        video: {
            type: [String],
            required: true
        }
    },
    computed: {
        getVideoId() {
            return this.video.split('=')[1];
        }
    }
};
</script>
