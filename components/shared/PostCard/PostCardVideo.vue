<template>
    <div class="post-card__video-player">
        <LazyYoutubeVideo :src="'https://www.youtube.com/embed/' + getVideoId" />
    </div>
</template>

<script>
import LazyYoutubeVideo from 'vue-lazy-youtube-video';
import 'vue-lazy-youtube-video/dist/style.css';
export default {
    name: 'PostCardVidep',
    components: {
        LazyYoutubeVideo
    },
    props: {
        video: {
            type: [Array, String],
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

<style lang="scss">
.post-card__video-player {
    position: relative;
    width: 100%;
    overflow: hidden;
}

.post-card__video-player iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
