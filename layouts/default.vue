<template>
    <div>
        <header-v></header-v>

        <main>
            <div class="container">
                <Nuxt />
            </div>
        </main>
    </div>
</template>

<script>
import headerV from '../components/header';

export default {
    components: {
        headerV
    }
};
</script>

<style></style>
