<template>
    <div id="heads">
        我是首页组件2 -- heads
        <br>
        <button @click="jumps()"> 通过js跳转</button>
    </div>
</template>

<script>

    export default {
        data(){
            return {

            }
        },
        methods:{
            jumps(){
                //js跳转路由
                this.$router.push({path:'news'})
                //动态路由
                //this.$router.push({name:'news',params:{userId:123}})
            },
        }
    }
</script>