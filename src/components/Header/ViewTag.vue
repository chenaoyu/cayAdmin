<template>
    <div class="ViewTag">
        <el-tag 
        v-for="(item,index) in ViewTagStore.ViewTagList" 
        :closable="item.name=='DashBoard'?false:true "
        type="primary" 
        :effect="route.name==item.name?'dark':'light'" 
        @click="changeTag(item.name)" 
        @close="closeTag(item.name,index)">
            {{ item.meta.label }}
        </el-tag>
    </div>
</template>
<script setup>
import { watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { ViewTagState } from '@/store/modules/ViewTag.js'
const ViewTagStore = ViewTagState()
const router = useRouter()
const route = useRoute()


watch(route, (newvalue) => {
    ViewTagStore.add(newvalue)
})

const changeTag = (name) => {
    router.push({name})
}
const closeTag = (name,index) => {
    index+1==ViewTagStore.ViewTagList.length
    ?router.push({name:ViewTagStore.ViewTagList[index-1].name})
    :router.push({name:ViewTagStore.ViewTagList[index+1].name})
    ViewTagStore.del(name)
}
</script>
<style scoped lang="scss">
.ViewTag {
    padding: 0 10px;
    height: 30px;
    display: flex;
    align-items: center;
    gap: 10px;
    border-bottom: 1px solid #ccc;
    .el-tag{
        cursor: pointer;
    }
}
</style>