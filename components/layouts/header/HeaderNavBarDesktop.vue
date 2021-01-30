<template>
    <div id="nav-bar-desktop">
        <div class="nav-bar-desktop">
            <NuxtLink to="/" class="logo">SOME-LOGO</NuxtLink>
            <nav class="container">
                <ul class="menu">
                    <li v-for="item of navigation" :key="item" class="menu-item">
                        <NuxtLink class="menu-link" to="/">{{ item }}</NuxtLink>
                    </li>
                    <li class="menu-item">
                        <SvgIcon v-b-toggle.collapse-1 class="menu-search" name="loupe" />
                    </li>
                    <li>
                        <a href="https://twitter.com/" target="_blank">
                            <SvgIcon name="twitter" class="menu-icon menu-item" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/" target="_blank">
                            <SvgIcon name="facebook" class="menu-icon" />
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
        <HeaderSearchForm class="menu-item" />
    </div>
</template>

<script>
import HeaderSearchForm from './HeaderSearchForm.vue';
export default {
    name: 'NavBar',
    components: { HeaderSearchForm },
    data() {
        return {
            navigation: ['Home', 'People', 'Design', 'Travel', 'Comercial']
        };
    }
};
</script>

<style lang="scss" scoped>
@include mediaSize(desktop) {
    .menu-icon {
        width: get-vw(18px);
        height: get-vw(18px);
        color: white;
        cursor: pointer;
    }

    .nav-bar-desktop {
        position: absolute;
        top: 0;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: get-vw(1200px);
        height: get-vw(100px);
        margin: 0 get-vw(360px);
    }

    .logo {
        font-size: get-vw(30px);
        color: white;
    }

    .menu {
        display: flex;
    }

    .menu-item {
        padding: 0 get-vw(15px);
    }

    .menu-link {
        color: rgba(255, 255, 255, 0.85);

        &:hover {
            color: white;
        }
    }

    .menu-search {
        width: get-vw(18px);
        height: get-vw(18px);
        color: white;
        cursor: pointer;
    }
}
</style>
