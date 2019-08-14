<template>
    <div id="add_user">
        <h1>增加用户</h1>
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

<style lang="scss" rel="stylesheet/scss" scoped>
    .user{
        display: flex;
        .left{
            width: 200px;
            min-height: 400px;
            border-right: 1px solid blue;
        }

        .right{
            flex: 1;
        }
    }
</style>