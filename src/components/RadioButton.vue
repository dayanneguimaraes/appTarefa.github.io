<template>
    <div class="radio-container">
        <label v-if="label">{{ label }}</label>
        <div v-for="option in options" :key="option.value" class="radio-option">
            <input
                type="radio"
                :id="option.value"
                :value="option.value"
                v-model="selectedValue"
                @change="updateValue"
            />
            <label :for="option.value">{{ option.text }}</label>
        </div>
    </div>
</template>

<script>
import { computed } from "vue";

export default {
    name: "RadioButton",
    props: {
        modelValue: {
            type: [String, Number],
        },
        options: {
            type: Array,
            required: true,
        },
        label: {
            type: String,
        }
    },
    data() {
        return {
            selectedValue: this.modelValue,
        };
    },
    watch: {
        modelValue(newValue) {
            this.selectedValue = newValue;
        },
    },
    methods: {
        updateValue() {
            this.$emit("update:modelValue", this.selectedValue);
        },
    },
};
</script>

<style lang="stylus" scoped>
.radio-container
    display: flex;
    margin-bottom: 1rem;
.radio-option
    display: flex;
    align-items: center;
    input
        margin-right: 0.5rem;
    label
        font-family: 'tarefa-semiBold';
        font-size: 14px;
        color: #4E657B;
        padding-top: 7px
</style>
