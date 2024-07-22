import { ref } from "vue";
import { defineStore } from "pinia";
const option={
  persist: {
    enabled: true, //Store中数据持久化生效
    storage:sessionStorage
  },
}
export const ViewTagState = defineStore("ViewTag", () => {

  const ViewTagList=ref([{name:'DashBoard',meta:{label:'看板'}}])

  const add=(value)=>{
    if(value.name=='DashBoard') return 

    ViewTagList.value.some(item=>item.name==value.name)
      ?null
      :ViewTagList.value.push({name:value.name,meta:{label:value.meta.label}})
  }

  const del=(name)=>{
    ViewTagList.value=ViewTagList.value.filter(item=>item.name!=name)
  }

  return {
    ViewTagList,
    del,
    add,
  }
},option);