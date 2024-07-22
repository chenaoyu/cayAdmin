<template>
    <Container>
        <template #aside> <Menu :collapse="collapse" :isShow="isShow"/> </template>
        <template #header> <Header :collapse="collapse" @changeCollapse="changeCollapse"/> </template>

        <router-view v-slot="{ Component }">
            <transition :name="randomTransition()" mode="out-in">
                <component :is="Component" />
            </transition>
        </router-view>

        <el-drawer
        v-model="drawer"
        direction="ltr"
        :show-close="false"
        :with-header="false"
        size="150"
        >
        <Menu @select="drawer=false"/>
        </el-drawer>
    </Container>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Menu from "@/components/Menu/Menu.vue";
import Header from "@/components/Header/Header.vue";

const collapse = ref(false);       // 是否折叠
const isShow = ref(true);         // 是否显示
const drawer = ref(false);         // 左侧抽屉是否显示

const changeResize = () => {
    if (window.innerWidth < 450) {
        isShow.value = false;
    } else {
        isShow.value = true;
        drawer.value = false;
    }
    collapse.value = window.innerWidth < 999 ? true : false;
};


const changeCollapse = (value) => {
    if(isShow.value){
        collapse.value = value;
    }else{
        drawer.value=true
    }
};


const randomTransition=()=>{
    const ary=['scale','fade','slide','scale-slide']
    const random=Math.floor(Math.random()*ary.length)
    return ary[random]
}

onMounted(() => {
    window.addEventListener('resize', changeResize);
    changeResize();
});

onUnmounted(() => {
    window.removeEventListener('resize', changeResize);
});



</script>
<style lang="scss">


.el-drawer__body{
    padding: 0;
}


//缩放
.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}
.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}



// 淡出淡入
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

//滑动
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease-out;
}
 
 
.slide-enter-to {
  position: absolute;
  right: 0;
}
 
 
.slide-enter-from {
  position: absolute;
  right: -100%;
}
 
 
.slide-leave-to {
  position: absolute;
  left: -100%;
}
 
 
.slide-leave-from {
  position: absolute;
  left: 0;
}

//滑动加缩放
.scale-slide-enter-active,
.scale-slide-leave-active {
  position: absolute;
  transition: all 0.4s ease;
}
 
.scale-slide-enter-from {
  left: -100%;
}
 
.scale-slide-enter-to {
  left: 0%;
}
 
.scale-slide-leave-from {
  transform: scale(1);
}
 
.scale-slide-leave-to {
  transform: scale(0.8);
}
</style>