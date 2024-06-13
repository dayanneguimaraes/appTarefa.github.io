<template>
    <div class="modal" v-if="show">
        <div class="modal-content">
            <font-awesome-icon class="close" :icon="['fas', 'xmark']" @click="closeModal"/>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    setup(props, { emit }) {
        function closeModal() {
            emit("close");
        }

        return {
            closeModal,
        };
    },
};
</script>

<style lang="stylus" scoped>
.modal
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);
    .modal-content 
        background-color: #fefefe;
        margin: 15% auto;
        padding: 20px;
        border: 1px solid #888;
        width: 660px;
        height: 458px;
        .close
            color: #4E657B;
            float: right;
            font-size: 28px;
            font-weight: bold;

        .close:hover,
        .close:focus
            color: #4E657B;
            text-decoration: none;
            cursor: pointer;

</style>
