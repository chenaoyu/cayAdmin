<template>
    <div class="login-page">
        <div class="form">
            <span class="title">代理后台</span>
            <label for="userName" class="label">userName</label>
            <input type="text" id="userName" name="userName" class="input" v-model="form.userName">
            <label for="password" class="label">Password</label>
            <input type="password" id="password" name="password" class="input" v-model="form.password">
            <button @click="submit" class="submit">Register</button>
        </div>
    </div>
</template>
<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router';
import { cookie } from "@/utils/cookie.js"
const router = useRouter()
const form = reactive({
    userName: 'CAY',
    password: '12345678',
})
const submit = async () => {
    if (form.userName && form.password) {
        cookie.set('token','admin')
        router.push({name:'Home'})
        ElMessage({
            message: '登录成功',
            type: 'success',
        })
    } else {
        ElMessage({
            message: '请将将表单填写完整',
            type: 'warning',
        })
    }
}

</script>
<style scoped>
.login-page {
    background-color: #f2f2f2;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    background: lightblue;
    position: relative;
    overflow: hidden;
}

.login-page::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, #3498db 10%, transparent 20%),
        radial-gradient(circle, transparent 10%, #3498db 20%);
    background-size: 30px 30px;
    /* Adjust the size of the pattern */
    animation: moveBackground 8s linear infinite;
    /* Adjust the animation duration and timing function */
}

@keyframes moveBackground {
    0% {
        transform: translate(0, 0);
    }

    100% {
        transform: translate(20%, 20%);
    }
}

.form {
    z-index: 1;
    max-width: 320px;
    width: 100%;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 0px 4px rgba(52, 52, 53, 0.185);
    display: flex;
    flex-direction: column;
    border-radius: 10px;
}

.title {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 20px;
    color: #1a202c;
}

.label {
    color: rgb(0, 0, 0);
    margin-bottom: 4px;
}

.input {
    padding: 10px;
    margin-bottom: 20px;
    width: 100%;
    font-size: 1rem;
    color: #4a5568;
    outline: none;
    border: 1px solid transparent;
    border-radius: 4px;
    transition: all 0.2s ease-in-out;
}

.input:focus {
    background-color: #fff;
    box-shadow: 0 0 0 2px #cbd5e0;
}

.input:valid {
    border: 1px solid green;
}

.input:invalid {
    border: 1px solid rgba(14, 14, 14, 0.205);
}

.submit {
    background-color: #3498db;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
}

.submit:hover {
    box-shadow: 0 0 0 2px #cbd5e0;
}

.submit:active {
    box-shadow: 0 0 8px #000;
}
</style>