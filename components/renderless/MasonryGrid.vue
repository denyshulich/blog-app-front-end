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

    beforeDestroy() {
        this.macy.remove();
    },

    methods: {
        initilazeMacy() {
            this.macy = window.Macy(this.options);
        }
    },

    render() {
        return this.$scopedSlots.default();
    }
};
</script>

<style></style>
