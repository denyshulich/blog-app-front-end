<template>
    <div class="post__meta-tumb">
        <img :src="image" class="post__one-image" />
        <div class="overlay">
            <nuxt-link to="/" class="overlay__link link-url">
                <div class="link-item__container">
                    <svg-icon name="url" class="post__icon" />
                </div>
            </nuxt-link>
            <nuxt-link v-img="{ src: `${image}` }" to="/" class="overlay__link link-loupe">
                <div class="link-item__container">
                    <svg-icon name="loupe" class="post__icon" />
                </div>
            </nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        image: {
            type: String,
            required: true
        }
    }
};
</script>

<style lang="scss" scoped>
.post__one-image {
    z-index: 1;
    object-fit: cover;
    width: get-m-vw(294px);
    height: max-content;
    max-height: get-m-vw(300px);
    object-position: center;
    transition: 1s;

    @include mediaSize(tablet) {
        width: get-t-vw(340px);
        max-height: get-t-vw(300px);
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
            transform: scale(1.2);
        }
    }
}

.overlay__link {
    width: 50%;
}

.post__icon {
    width: get-m-vw(50px);
    height: get-m-vw(50px);
    color: white;

    @include mediaSize(tablet) {
        width: get-t-vw(50px);
        height: get-t-vw(50px);
    }
}

.link-url,
.link-loupe {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    &:hover {
        .link-item__container {
            position: relative;
            display: flex;
            width: get-m-vw(75px);
            height: get-m-vw(75px);
            background-color: white;
            transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
            animation-name: icon-animation;
            animation-duration: 0.6s;

            @include mediaSize(tablet) {
                width: get-t-vw(75px);
                height: get-t-vw(75px);
            }

            .post__icon {
                margin: auto;
                color: black;
            }
        }
    }
}

.link-item__container {
    border-radius: 50%;
    transition: background-color 0.1s ease-in-out, color 0.1s ease-in-out;
}

.link-loupe {
    justify-content: flex-start;

    .link-item__container {
        margin-left: get-m-vw(15px);

        @include mediaSize(tablet) {
            margin-left: get-t-vw(15px);
        }
    }
}

.link-url .link-item__container {
    margin-right: get-m-vw(15px);

    @include mediaSize(tablet) {
        margin-right: get-t-vw(15px);
    }
}

@keyframes icon-animation {
    from {
        top: 5vw;
    }

    to {
        top: 0;
    }
}
</style>
