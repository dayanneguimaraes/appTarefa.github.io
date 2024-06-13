<template>
    <button :class="buttonClasses" @click="handleClick">
        <slot></slot>
    </button>
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
            emit("clickButton");
        }

        return {
            buttonClasses,
            handleClick,
        };
    },
};
</script>

<style lang="stylus" scoped>
.btn
    font-family: "facilita-bold";
    font-size: 16px;
    display: inline-block;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

.btn-primary
    background-color: #1AD18F;
    color: #fff;

.btn-secondary 
    background-color: #6c757d;
    color: #fff;

.btn-success 
    background-color: #28a745;
    color: #fff;

.btn-md
    font-size: 1rem;

.btn-sm 
    font-size: 0.875rem;

.btn-lg 
    font-size: 1.25rem;
</style>
