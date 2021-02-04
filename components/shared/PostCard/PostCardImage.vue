<template>
    <div>
        <div class="post-tumb">
            <img data-sizes="auto" :data-src="image[0].src" class="lazyload tumb-image" />
            <div class="tumb-overlay">
                <div class="overlay-link link-url">
                    <NuxtLink to="/" class="link-item">
                        <SvgIcon name="url" class="link-icon" />
                    </NuxtLink>
                    <NuxtLink class="link-item-desktop" to="/" />
                </div>
                <div class="overlay-link link-loupe">
                    <div v-img="{ src: `${image[0].src}` }" class="link-item">
                        <SvgIcon name="loupe" class="link-icon" />
                    </div>
                    <div v-img="{ src: `${image[0].src}` }" class="link-item-desktop" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import VueImg from 'v-img';
const vueImgConfig = {
    altAsTitle: false,
    sourceButton: false,
    openOn: 'click',
    thumbnails: false
};
Vue.use(VueImg, vueImgConfig);

export default {
    name: 'PostCardImage',
    props: {
        image: {
            type: [Array],
            required: true
        }
    }
};
</script>

<style lang="scss" scoped>
.tumb-image {
    z-index: 1;
    object-fit: cover;
    width: get-m-vw(270px);
    height: max-content;
    max-height: get-m-vw(300px);
    object-position: center;

    @include mediaSize(tablet) {
        width: get-t-vw(300px);
        max-height: get-t-vw(300px);
    }

    @include mediaSize(desktop) {
        width: get-vw(400px);
        max-height: get-vw(300px);
    }
}

.tumb-overlay {
    position: absolute;
    visibility: hidden;
    background-color: rgba(71, 201, 229, 0.8);
    opacity: 0;
    transition: visibility 0s, opacity 0.3s linear;
}

.post-tumb {
    position: relative;
    overflow: hidden;

    &:hover {
        .tumb-overlay {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            display: flex;
            visibility: visible;
            opacity: 1;
        }

        .tumb-image {
            transform: scale(1.1);
        }
    }
}

.overlay-link {
    width: 50%;
}

.link-icon {
    width: get-m-vw(30px);
    height: get-m-vw(30px);
    color: white;

    @include mediaSize(tablet) {
        width: get-t-vw(30px);
        height: get-t-vw(30px);
    }

    @include mediaSize(desktop) {
        width: get-vw(30px);
        height: get-vw(30px);
    }
}

.link-url,
.link-loupe {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .link-icon {
        margin: auto;
    }

    .link-item-desktop {
        display: none;

        @include mediaSize(desktop) {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            display: block;
            cursor: pointer;
        }
    }

    &:hover {
        .link-item {
            &:hover {
                background-color: white;
                box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
                transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
                animation-name: icon-animation;
                animation-duration: 0.3s;

                .link-icon {
                    color: black;
                }
            }

            @include mediaSize(desktop) {
                background-color: white;
                box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
                transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
                animation-name: icon-animation;
                animation-duration: 0.3s;

                .link-icon {
                    color: black;
                }
            }
        }
    }
}

.link-item {
    position: relative;
    display: flex;
    width: get-m-vw(60px);
    height: get-m-vw(60px);
    border-radius: 50%;
    transition: background-color 0.1s ease-in-out, color 0.1s ease-in-out;

    @include mediaSize(tablet) {
        width: get-t-vw(60px);
        height: get-t-vw(60px);
        margin-right: get-t-vw(15px);
    }

    @include mediaSize(desktop) {
        width: get-vw(60px);
        height: get-vw(60px);
        margin-right: get-vw(15px);
    }
}

.link-loupe {
    justify-content: flex-start;
}

@keyframes icon-animation {
    from {
        top: 1vw;
    }

    to {
        top: 0;
    }
}
</style>
