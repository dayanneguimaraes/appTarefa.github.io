<template>
    <div class="text-field">
        <label :for="id">{{ label }}</label>
        <input :type="type" :id="id" v-model="internalValue" @input="updateValue" />
    </div>
</template>

<script>
import { ref, watch } from "vue";

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
        type: {
            type: String,
            default: "text",
        },
        value: {
            type: [String, Number],
            default: "",
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

        watch(() => props.value, (newValue) => {
            internalValue.value = newValue;
        });

        return {
            internalValue,
            updateValue,
        };
    },
};
</script>

<style lang="stylus" scoped>
.text-field
    margin-bottom: 20px;

label
    font-family: 'tarefa-semiBold';
    color: #4E657B;
    font-size: 14px;
    display: block;
    margin-bottom: 5px;

input
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #BFDAEB;
    border-radius: 4px;
    box-sizing: border-box;
    height: 45px;

    &:focus
        outline: none;
        border-color: #2693FF;
</style>
