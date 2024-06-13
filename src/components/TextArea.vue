<template>
    <div class="text-area">
        <label :for="id">{{ label }}</label>
        <textarea 
            :id="id"
            v-model="internalValue" 
            @input="updateValue" 
            :rows="rows" 
            :cols="cols"
            :disabled="disabled"
        />
    </div>
</template>

<script>
import { ref } from "vue";

export default {
    props: {
        label: {
            type: String,
            required: true,
        },
        id: {
            type: String,
            required: true,
        },
        value: {
            type: [String, Number],
            default: "",
        },
        rows: {
            type: Number,
            default: 3
        },
        cols: {
            type: Number,
            default: 30
        },
        disabled: {
            type: Boolean,
            default: false
        },
        errors: {
            type: String,
            default: "",
        }
    },
    setup(props, { emit }) {
        const internalValue = ref(props.value);

        const updateValue = (event) => {
            internalValue.value = event.target.value;
            emit("update:modelValue", internalValue.value);
        };

        return {
            internalValue,
            updateValue,
        };
    },
};
</script>

<style lang="stylus" scoped>
.text-area
    margin-bottom: 20px;

label
    font-family: 'facilita-semiBold';
    color: #4E657B;
    font-size: 14px;
    display: block;
    margin-bottom: 5px;

textarea
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #BFDAEB;
    border-radius: 4px;
    box-sizing: border-box;
    resize: vertical;
    &:focus
        outline: none;
        border-color: #2693FF;
</style>
