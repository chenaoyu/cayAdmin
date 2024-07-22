<template>
    <nav class="NavBar">

        <div class="left">
            <el-icon size="24" @click="emits('changeCollapse',false)" v-if="collapse"><Expand /></el-icon>
            <el-icon size="24" @click="emits('changeCollapse',true)" v-else><Fold /></el-icon>
            <p class="navigation">
                <span @click="router.push({name:'Home'})" class="home">首页</span> 
                <span v-if="route.name!='DashBoard'">{{' / ' + route.meta.label }}</span>
            </p>
        </div>

        <div class="right">

            <el-icon @click="changeFullScreen"><FullScreen /></el-icon>

            <el-dropdown >
            <el-icon size="26"><User /></el-icon>
                 <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item @click="changeUser">个人中心</el-dropdown-item>
                        <el-dropdown-item divided @click="logOut">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>

            <el-dropdown >
            <el-icon size="26"><MoreFilled /></el-icon>
                 <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>中文</el-dropdown-item>
                        <el-dropdown-item>英文</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </nav>
</template>
<script setup>

import { Expand,Fold,FullScreen,User,MoreFilled } from '@element-plus/icons-vue'
import { useRoute,useRouter } from 'vue-router';
import {launchFullscreen} from '@/utils/tool.js'
import {cookie} from "@/utils/cookie.js"
const route=useRoute()
const router=useRouter()
console.log(route.name)
const props=defineProps(['collapse'])
const emits=defineEmits(['changeCollapse'])
const changeUser=()=>{
    console.log('个人中心')
}
const logOut=()=>{
    console.log('退出登录')
    cookie.del('token')
    router.go(0)
}
const changeFullScreen=()=>launchFullscreen(document.documentElement); //网页全屏
</script>
<style scoped lang="scss">
.NavBar {
    height: 50px;
    padding: 0 10px;
    padding-right: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 -1px 3px #aaa;
    .left{
        display: flex;
        align-items: center;
        gap: 10px;
        .navigation{
            font-size: 14px;
            color: #97a8be;
            .home{
                cursor: pointer;
                &:hover{
                    color: dodgerblue;
                }
            }
        }
    }
    .right{
        display: flex;
        align-items: center;
        font-size: 26px;
        gap: 20px;
    }
    .el-icon{
        cursor: pointer;
    }
}
</style>