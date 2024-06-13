<template>
    <div :class="buttonClasses">
        <img class="avatar-imag" v-if="src" :src="src" :alt="altText" :style="{ width: size, height: size}" />
        <span v-if="!isSlot" class="icon-default">{{ inicial }}</span>
        <slot></slot>
    </div>
</template>

<script>
import { computed, ref } from "vue";

export default {
    name: 'Avatar',
    props: {
        isSlot: {
            type: Boolean,
            default: false
        },
        color: {
            type: String,
            default: 'primary'
        },
        size: {
            type: String,
            default: '10px'
        },
        src: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            default: 'avatar'
        },
    },
    setup(props, { emit }) {
        const { name, size, variant } = props;
        const buttonClasses = computed(() => {
            return ["avatar", `avatar-${variant}`, `avatar-${size}`];
        });
        
        const altText = computed(() => name || 'avatar');

        const inicial = computed(() =>{
            if (name) {
                const subName = name.split(' ');
                const inicial = subName.map((item) => item.charAt(0)).join('');
                return inicial.slice(0, 2).toUpperCase();
            }
        });

        return {
            buttonClasses,
            altText,
            inicial
        };
    },
};
</script>

<style lang="stylus" scoped>
.avatar 
    display: flex
    align-items: center
    justify-content: center
    overflow: hidden
    border-radius: 50%
    width: 45px
    height:45px
    color: #FFFFFF
    background-color: #424242
    .avatar-img
        border-radius: 50%
    .icon-default
        font-weight: bold
        font-size: 18px
</style>