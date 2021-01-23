<template>
    <section id="macy">
        <slot></slot>
    </section>
</template>

<script>
export default {
    async mounted() {
        await this.$loadScript('https://cdn.jsdelivr.net/npm/macy@2');
        this.initilazeMacy();
    },

    methods: {
        initilazeMacy() {
            // eslint-disable-next-line
            const macy = Macy({
                container: '#macy',
                trueOrder: true,
                waitForImages: true,
                margin: 10,
                columns: 2,
                breakAt: {
                    1200: {
                        margin: 5
                    },
                    750: {
                        columns: 1,
                        margin: {
                            y: 15
                        }
                    }
                }
            });
        }
    }
};
</script>

<style></style>
