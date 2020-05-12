<template>
    <span class="spin-icon-wrapper">
        <svg class="spin-icon" aria-hidden="true" @click="$emit('click',$event)">
            <use v-bind:xlink:href="`#icon-${name}`"></use>
        </svg>
    </span>
</template>
<script>
/* eslint-disable */
import './svg'
export default {
    name: 'span-icon',
    props: { 
        name: { type: String }
    }
}
</script>
<style scoped lang="scss">
    .spin-icon-wrapper {
        width: 1em;
        height: 1em;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        .spin-icon {
            fill: currentColor;
            width: 100%;
            height: 100%;
            vertical-align: top;
            overflow: hidden;
        }
    }
</style>