<template>
    <div id="nav-bar-mobile">
        <div class="nav-bar-top">
            <NuxtLink to="/" class="logo">SOME-LOGO</NuxtLink>
            <button
                v-b-toggle.mobile
                class="hamburger"
                :class="{ active: isActive }"
                @click="isActive = !isActive"
            >
                <span></span>
            </button>
        </div>

        <b-collapse id="mobile" class="drop-menu">
            <nav class="menu-container">
                <div class="menu">
                    <ul>
                        <li v-for="item of navigation" :key="item" class="menu-item">
                            <NuxtLink class="menu-link" to="/">{{ item }}</NuxtLink>
                        </li>
                    </ul>
                    <BaseSearchForm thema="dark" />
                </div>
                <div class="social-links">
                    <div class="social-link">
                        <a href="https://twitter.com/" target="_blank">
                            <SvgIcon name="twitter" class="social-icon" />
                        </a>
                    </div>
                    <div class="social-link">
                        <a href="https://www.facebook.com/" target="_blank">
                            <SvgIcon name="facebook" class="social-icon" />
                        </a>
                    </div>
                </div>
            </nav>
        </b-collapse>
    </div>
</template>

<script>
import BaseSearchForm from '~/components/base/BaseSearchForm.vue';
export default {
    components: { BaseSearchForm },
    data() {
        return {
            isActive: false,
            navigation: ['Home', 'People', 'Design', 'Travel', 'Comercial']
        };
    }
};
</script>

<style lang="scss" scoped>
.social-links {
    display: flex;
}

.social-link {
    display: flex;
    width: 50%;
    height: get-m-vw(60px);
    border-top: $border;

    @include mediaSize(tablet) {
        height: get-t-vw(60px);
    }

    &:not(:first-child) {
        border-left: $border;
    }

    a {
        display: flex;
        width: 100%;
        height: inherit;

        .social-icon {
            margin: auto;
        }
    }
}

.social-icon {
    width: get-m-vw(20px);
    height: get-m-vw(20px);
    color: #aaa;

    @include mediaSize(tablet) {
        width: get-t-vw(20px);
        height: get-t-vw(20px);
    }
}

.drop-menu {
    position: absolute;
    top: get-m-vw(60px);
    z-index: 3;
    display: flex;
    width: 100vw;
    background-color: #232323;

    @include mediaSize(tablet) {
        top: get-t-vw(60px);
    }
}

#nav-bar-mobile {
    position: absolute;
    top: 0;
    z-index: 1;
    display: flex;
    width: 100%;
    height: get-m-vw(60px);

    @include mediaSize(tablet) {
        height: get-t-vw(60px);
    }

    .nav-bar-top {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: get-m-vw(300px);
        margin: 0 auto;

        @include mediaSize(tablet) {
            width: 85%;
        }
    }
}

.menu-container {
    width: 100%;
}

.menu {
    box-sizing: border-box;
    width: 100%;
    padding: get-m-vw(18px) get-m-vw(37px);

    @include mediaSize(tablet) {
        padding: get-t-vw(18px) get-t-vw(37px);
    }
}

.menu-item {
    display: block;
    padding: get-m-vw(16px) 0;
    font-family: 'Relaway', sans-serif;
    font-size: get-m-vw(16px);
    font-weight: normal;

    @include mediaSize(tablet) {
        padding: get-t-vw(16px) 0;
        font-size: get-t-vw(16px);
    }

    .menu-link {
        color: #aaa;
    }

    &:not(:last-child) {
        border-bottom: $border;
    }
}

.logo {
    font-size: get-m-vw(20px);
    color: white;

    @include mediaSize(tablet) {
        font-size: get-t-vw(20px);
    }
}

.hamburger {
    position: relative;
    width: 24px;
    height: 24px;
    padding: 0;
    margin: 0;
    overflow: hidden;
    appearance: none;
    cursor: pointer;
}

.hamburger span {
    position: absolute;
    top: 9px;
    right: 0;
    left: 0;
    display: block;
    height: 2px;
    background: white;
}

.hamburger span::before,
.hamburger span::after {
    position: absolute;
    left: 0;
    display: block;
    width: 100%;
    height: 2px;
    content: '';
    background-color: #fff;
    transition-delay: 0.3s, 0s;
    transition-duration: 0.3s, 0.3s;
}

.hamburger span::before {
    top: -9px;
    transition-property: top, transform;
}

.hamburger span::after {
    bottom: -9px;
    transition-property: bottom, transform;
}

.hamburger.active span {
    background: none;
}

.hamburger.active span::before {
    top: 0;
    transform: rotate(45deg);
}

.hamburger.active span::after {
    bottom: 0;
    transform: rotate(-45deg);
}

.hamburger.active span::before,
.hamburger.active span::after {
    transition-delay: 0s, 0.3s;
}
</style>
