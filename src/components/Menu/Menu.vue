<template>
    <el-menu 
    class="el-menu-vertical-demo" 
    active-text-color="#ffd04b" 
    background-color="#545c64" 
    text-color="#fff"
    :collapse="collapse"
    :router="true"
    :class="{conceal:!isShow}"
    :default-active="route.name"
    @select="emits('select',$event)"
    >
        <el-menu-item  
        v-for="item in MenuList"
        :index="item.name"
        :route="{name:item.name}"
        :key="item.name"
        >
            <el-icon><location /></el-icon>
            <span>{{ item.meta.label }}</span>
        </el-menu-item>
    </el-menu>
</template>

<script setup>
import { Location } from '@element-plus/icons-vue'
import {useRouter,useRoute} from 'vue-router'
const props=defineProps(['collapse','isShow'])
const emits=defineEmits(['select'])
const router =useRouter()
const route=useRoute()
const MenuList=router.options.routes.find(item=>item.name=='Home').children
</script>
<style scoped lang="scss">
.el-menu-vertical-demo{
    height: 100%;
    overflow-y: auto;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
.conceal{
    transition: all 0.3s linear;
    width: 0;
    overflow: hidden;
}
</style>