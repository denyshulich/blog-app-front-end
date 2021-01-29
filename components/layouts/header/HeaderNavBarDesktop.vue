<template>
    <div id="nav-bar-desktop">
        <div class="nav-bar-desktop">
            <NuxtLink to="/" class="logo">SOME-LOGO</NuxtLink>
            <nav class="container">
                <ul class="menu">
                    <li v-for="item of navigation" :key="item" class="menu-item">
                        <NuxtLink to="/">{{ item }}</NuxtLink>
                    </li>
                    <li>
                        <SvgIcon v-b-toggle.collapse-1 class="menu-search menu-item" name="loupe" />
                    </li>
                </ul>
            </nav>
        </div>
        <b-collapse id="collapse-1" class="search">
            <div class="search-container">
                <b-form action="" @submit="onSubmit">
                    <b-form-input
                        id="site-search"
                        v-model="search"
                        class="search-form"
                        name="search"
                        placeholder="Search Here.."
                        required
                    />

                    <button type="submit">
                        <SvgIcon class="form-icon-loupe form-icon" name="loupe" />
                    </button>
                    <button><SvgIcon v-b-toggle.collapse-1 name="X" class="form-icon" /></button>
                </b-form>
            </div>
        </b-collapse>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
    data() {
        return {
            navigation: ['Home', 'People', 'Design', 'Travel', 'Comercial'],
            search: ''
        };
    },
    methods: {
        onSubmit(event) {
            event.preventDefault();
            this.search = '';
        }
    }
};
</script>

<style lang="scss" scoped>
@include mediaSize(desktop) {
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

    .menu-search {
        width: get-vw(18px);
        height: get-vw(18px);
        color: white;
        cursor: pointer;
    }

    .form-icon {
        width: get-vw(18px);
        height: get-vw(18px);
        padding-right: get-vw(15px);
        cursor: pointer;
    }

    .form-icon-loupe {
        color: $colorBlue;
    }

    .search {
        position: absolute;
        right: 0;
        z-index: 3;
        display: flex;
        width: 100%;
        height: get-vw(100px);
        background-color: white;
    }

    .search-container {
        display: flex;
        width: get-vw(1200px);
        margin: auto;
    }

    .search-form {
        width: get-vw(1120px);
        font-family: 'Raleway', sans-serif;
        font-size: get-vw(25px);
        font-weight: normal;
        border: none;
    }
}
</style>
