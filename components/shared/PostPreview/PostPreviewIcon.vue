<template>
    <div class="container">
        <NuxtLink to="/" class="icon">
            <img class="icon-image lazyload" :data-src="img" alt="" />
            <div class="icon-overlay">
                <SvgIcon name="url" class="icon-svg" />
            </div>
            <div class="icon-comment">
                <p>{{ comments }}</p>
            </div>
        </NuxtLink>
    </div>
</template>

<script>
export default {
    name: 'PostPreviewIcon',

    props: {
        img: {
            type: String,
            required: true
        },
        comments: {
            type: Number,
            required: true
        }
    }
};
</script>

<style lang="scss" scoped>
.container {
    position: relative;
}

.icon {
    position: relative;
    display: block;
    width: get-m-vw(76px);
    height: get-m-vw(76px);
    border-radius: 100px;

    @include mediaSize(tablet) {
        width: get-t-vw(66px);
        height: get-t-vw(66px);
    }

    @include mediaSize(desktop) {
        width: get-vw(76px);
        height: get-vw(76px);
    }

    .icon-overlay {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        visibility: hidden;
        background-color: rgba(71, 201, 229, 0.8);
        border-radius: 100px;
        opacity: 0;
        transition: visibility 0s, opacity 0.3s linear;
    }

    &:hover {
        .icon-overlay {
            display: flex;
            visibility: visible;
            opacity: 1;

            .icon-svg {
                width: 33%;
                height: 33%;
                margin: auto;
                color: white;
            }
        }
    }
}

.icon-image {
    object-fit: cover;
    width: inherit;
    height: inherit;
    object-position: center;
    border-radius: 100px;
}

.icon-comment {
    position: absolute;
    top: 2px;
    left: 70%;
    height: 14%;
    padding: 10%;
    cursor: pointer;
    background-color: $colorBlue;
    border-radius: 100px;

    p {
        margin: 0;
        font-size: get-m-vw(12px);
        color: white;

        @include mediaSize(tablet) {
            font-size: get-t-vw(10px);
        }

        @include mediaSize(desktop) {
            font-size: get-vw(10px);
        }
    }
}
</style>
