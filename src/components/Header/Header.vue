<template>
    <div class="header">
        <NavBar :collapse="collapse" @changeCollapse="emits('changeCollapse',$event)"/>
        <ViewTag/>
    </div>
</template>
<script setup>
import NavBar from "./NavBar.vue"
import ViewTag from "./ViewTag.vue"
const props=defineProps(['collapse'])
const emits=defineEmits(['changeCollapse'])
</script>
<style scoped lang="scss">

</style>