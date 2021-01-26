<template>
    <div class="post-card__video-player"><div id="player"></div></div>
</template>

<script>
export default {
    name: 'PostCardVidep',
    props: {
        video: {
            type: [Array, String],
            required: true
        }
    },
    data() {
        return {
            videoId: ''
        };
    },

    mounted() {
        this.getVideoId();
        this.addPlayerVideo();
        window.onYouTubeIframeAPIReady = this.onYouTubeIframeAPIReady;
    },
    methods: {
        getVideoId() {
            this.videoId = this.video.split('=')[1];
        },

        addPlayerVideo() {
            const tag = document.createElement('script');

            tag.src = 'https://www.youtube.com/iframe_api';
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        },

        onYouTubeIframeAPIReady() {
            // eslint-disable-next-line
            const player = new YT.Player('player', {
                height: 'unset',
                width: '100%',
                videoId: this.videoId
            });
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

.post-card__video-player::after {
    display: block;
    padding-top: 56.25%;
    content: '';
}

.post-card__video-player iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
