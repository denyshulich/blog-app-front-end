<script>
export default {
    props: {
        options: { type: Object, required: true }
    },

    data() {
        return {
            macy: null
        };
    },

    async mounted() {
        await this.$loadScript('https://cdn.jsdelivr.net/npm/macy@2');

        this.initilazeMacy();
    },

    methods: {
        initilazeMacy() {
            this.macy = window.Macy(this.options);

            this.$root.$on('hook:update', () => {
                this.macy.reInit();
            });

            this.$root.$once('hook:beforeDestroy', () => {
                this.macy.remove();
            });
        }
    },

    render() {
        return this.$scopedSlots.default();
    }
};
</script>

<style></style>
