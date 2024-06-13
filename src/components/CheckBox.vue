<template>
    <input class="check" type="checkbox">
</template>

<script>
import { computed } from "vue";

export default {
    props: {
        variant: {
            type: String,
            default: "primary",
        },
        size: {
            type: String,
            default: "md",
        },
    },
    setup(props, { emit }) {
        const buttonClasses = computed(() => {
            return ["btn", `btn-${props.variant}`, `btn-${props.size}`];
        });

        function handleClick() {
            emit("click");
        }

        return {
            buttonClasses,
            handleClick,
        };
    },
};
</script>

<style lang="stylus" scoped>
.check
    border: 0
    appearance: none
    -webkit-appearance: none
    width: 33px
    height: 33px
    background-color: #E2EEF5
    border-radius: 3px
    cursor: pointer
    position: relative
    &:checked
        background-color: #0ED984
        &::after
            content: ''
            position: absolute
            left: 12px
            top: 6px
            width: 6px
            height: 13px
            border: solid white
            border-width: 0 3px 3px 0
            transform: rotate(45deg)
</style>
