<template>
    <div>
        <header-v></header-v>

        <!-- FIXME: Main should be contained for each page separately, leave only <Nuxt /> -->
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
