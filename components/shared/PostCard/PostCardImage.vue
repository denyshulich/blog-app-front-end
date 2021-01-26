<template>
    <div>
        <div class="post__meta-tumb">
            <img :src="image || image[0]" class="post__one-image" />
            <div class="overlay">
                <div class="overlay__link link-url">
                    <NuxtLink to="/" class="link-item__container">
                        <SvgIcon name="url" class="post__icon" />
                    </NuxtLink>
                    <NuxtLink class="link-item__container_desktop" to="/" />
                </div>
                <div class="overlay__link link-loupe">
                    <div v-img="{ src: `${image || image[0]}` }" class="link-item__container">
                        <SvgIcon name="loupe" class="post__icon" />
                    </div>
                    <div
                        v-img="{ src: `${image || image[0]}` }"
                        class="link-item__container_desktop"
                    />
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
            type: [String, Array],
            required: true
        }
    }
};
</script>

<style lang="scss" scoped>
.post__one-image {
    z-index: 1;
    object-fit: cover;
    width: get-m-vw(330px);
    height: max-content;
    max-height: get-m-vw(300px);
    object-position: center;
    transition: 1s;

    @include mediaSize(tablet) {
        width: get-t-vw(300px);
        max-height: get-t-vw(300px);
    }

    @include mediaSize(desktop) {
        width: get-vw(400px);
        max-height: get-vw(300px);
    }
}

.overlay {
    position: absolute;
}

.post__meta-tumb {
    position: relative;
    overflow: hidden;

    &:hover {
        .overlay {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            display: flex;
            background-color: rgba(71, 201, 229, 0.8);
        }

        .post__one-image {
            transform: scale(1.1);
        }
    }
}

.overlay__link {
    width: 50%;
}

.post__icon {
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

    .post__icon {
        margin: auto;
    }

    .link-item__container_desktop {
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
        .link-item__container {
            &:hover {
                background-color: white;
                box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
                transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
                animation-name: icon-animation;
                animation-duration: 0.3s;

                .post__icon {
                    color: black;
                }
            }

            @include mediaSize(desktop) {
                background-color: white;
                box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
                transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
                animation-name: icon-animation;
                animation-duration: 0.3s;

                .post__icon {
                    color: black;
                }
            }
        }
    }
}

.link-item__container {
    position: relative;
    display: flex;
    width: get-m-vw(60px);
    height: get-m-vw(60px);
    border-radius: 50%;
    transition: background-color 0.1s ease-in-out, color 0.1s ease-in-out;

    @include mediaSize(tablet) {
        width: get-t-vw(60px);
        height: get-t-vw(60px);
    }

    @include mediaSize(desktop) {
        width: get-vw(60px);
        height: get-vw(60px);
    }
}

.link-loupe {
    justify-content: flex-start;

    .link-item__container {
        // margin-left: get-m-vw(15px);

        @include mediaSize(tablet) {
            margin-left: get-t-vw(15px);
        }

        @include mediaSize(desktop) {
            margin-left: get-vw(15px);
        }
    }
}

.link-url .link-item__container {
    // margin-right: get-m-vw(15px);

    @include mediaSize(tablet) {
        margin-right: get-t-vw(15px);
    }

    @include mediaSize(desktop) {
        margin-right: get-vw(15px);
    }
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
