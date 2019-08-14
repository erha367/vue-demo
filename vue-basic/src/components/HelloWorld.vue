<template>
    <!--    div外面不能写东西 否则会报错-->
    <div>
        <v-heads></v-heads>
        <v-news></v-news>
        <hr>
        <h2 @click="run()">这是一个首页组件 {{msg}}</h2>
        <h3>接收父组建传来的 [{{title}}]+[{{flag}}] </h3>
        <button @click="runs()">执行父组件方法</button>
        {{app.list2}}
        <hr>
        <button @click="getData()">+获取验证码+</button>
        <img :src="verifyCode" alt="">
        <hr>
    </div>
</template>

<script>
    import Heads from "./Heads";
    import News from "./News";
    export default {
        //接受父组件参数，无验证
        props:['title','flag','runs','app'],
        components: {
            'v-heads': Heads,
            'v-news': News,
        },
        data() {
            return {
                msg: 'demo',
                verifyCode : ''
            }
        },
        methods: {
            fatherCall(){
                alert('给爸爸调用的');
            },
            run() {
                //父组件方法
                this.$parent.getMsg();
            },
            getData(){
                var imgApi = 'http://127.0.0.1:7000/chapter_get';
                this.$http.get(imgApi).then(function (response) {
                //this.$http.jsonp(imgApi).then(function (response) {
                    console.log(response);
                    this.verifyCode = response.body.images;
                },function (err) {
                    console.log(err);
                });
            }
        },
        beforeCreate() {
            console.log('实例被创建');
        },
        created() {
            console.log('实例被创建完成 done');
        },
        mounted() {
            console.log('模板被编译完成，请求数据放在这里 done');
        },
        beforeUpdate() {
            console.log('数据更新之前');
        },
        updated() {
            console.log('数据更新完成');
        }


    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--作用于局部-->
<style scoped>
    h2 {
        color: aqua;
    }
</style>
