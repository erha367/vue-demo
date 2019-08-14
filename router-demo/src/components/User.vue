<template>
    <div id="user">
        <h1>用户中心</h1>
        <hr>
        <div class="user">
            <div class="left">
                <ul>
                    <li>
                        <router-link to="/user/user_add">增加用户</router-link>
                        </li>
                    <li> <router-link to="/user/user_list">用户列表</router-link></li>
                </ul>
            </div>
            <div class="right">
                内容
                <router-view></router-view>
            </div>
        </div>
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