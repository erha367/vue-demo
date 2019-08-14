<!--根组件-->
<template>
    <div id="app">
        <router-link to="/heads">heads</router-link> |
        <router-link to="/news">news</router-link>
        <hr>
        <v-hello :title="title" :flag="flag" :runs="getMsg" :app="this" ref="hello"></v-hello>
        <!--  绑定属性-->
        <h2 v-bind:title="title">你好 {{msg}}</h2>
        <!--  双向数据绑定-->
        <input type="text" v-model="msg">
        <button v-on:click="getMsg()">提交 get</button>
        <button @click="setMsg()">提交 set</button>
        <hr>
        <!--      ref获取dom节点-->
        <input type="text" ref="userInfo">
        <button v-on:click="getInputValue()">获取表单2数据</button>
        <hr>
        <img v-bind:src="imgUrl" alt="赵丽颖" height="100" width="70">
        <img :src="imgUrl" alt="赵丽颖" height="100" width="70" @click="getCode()">
        <hr>
        <input type="text" v-model="todo">
        <button @click="doAdd()">增加+</button>
        <br>
        <h2>进行中</h2>
        <ul>
            <li v-for="(v,k) in todoList" v-if="!v.checked">{{v.title}} <input type="checkbox" v-model="v.checked"
                                                                               @change="addCache()">
                <button @click="delAdd(k)">delete</button>
            </li>
        </ul>
        <h2>已完成</h2>
        <ul>
            <li v-for="(v,k) in todoList" v-if="v.checked">{{v.title}} <input type="checkbox" v-model="v.checked"
                                                                              @change="addCache()">
                <button @click="delAdd(k)">delete</button>
            </li>
        </ul>
        <hr>
        <!--  绑定html-->
        <div v-html="h" ref="box"></div>
        <!--  绑定数据-->
        <div v-text="msg" v-bind:class="{'red':flag}"></div>
        <!--  循环操作-->
        <br>
        ==这是一个根组件 {{obj.name}}==
        <hr>
        <button @click="requestData()">远程获取数据</button>
        <button @click="deleteData(2222)">方法传值</button>
        <button data-aid="10086" @click="eventFn($event)">事件对象</button>
        <ul>
            <li v-for="(v,k) in list" :class="{'red':k==0}">
                {{k}} : {{v}}
            </li>
        </ul>
        <hr>
        <ul>
            <li v-for="item in list1">
                {{item.title}}
            </li>
        </ul>
        <hr>
        <ul>
            <li v-for="item in list2">
                {{item.cate}}
                <ol>
                    <li v-for="news in item.list">{{news.title}}</li>
                </ol>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
    import storage from "./model/storage";
    import HelloWorld from "./components/HelloWorld";
    import Axios from 'axios';

    export default {
        name: 'app',
        components: {
            'v-hello': HelloWorld,
        },
        //生命周期函数，页面刷新触发
        mounted() {
            //var ret = localStorage.getItem('key');
            var lst = storage.get('key');
            console.log(lst);
            if (lst) {
                this.todoList = lst;
            }
        },
        //方法
        methods: {
            getCode() {
                var imgApi = 'http://127.0.0.1:7000/chapter_get';
                Axios.get(imgApi).then((res) => {
                    console.log(res);
                    this.imgUrl = res.data.images;
                }).catch((err) => {
                    console.log(err);
                });
            },
            addCache() {
                storage.set('key', this.todoList);
                //console.log(this.todoList);
            },
            delAdd(k) {
                //从数组中删除
                this.todoList.splice(k, 1);
                storage.set('key', this.todoList);
            },
            doAdd() {
                //获取文本框输入，push到todoList
                this.todoList.push({
                    title: this.todo,
                    checked: false
                });
                storage.set('key', this.todoList);
                this.todo = '';
            },
            eventFn(e) {
                console.log(e);
                e.srcElement.style.background = 'blue';
                console.log(e.srcElement.dataset.aid);
            },
            deleteData(val) {
                alert('delete ' + val);
            },
            requestData() {
                this.list = [];
                for (var i = 0; i < 5; i++) {
                    this.list.push('我是' + i + '条数据');
                }
            },
            getInputValue() {
                console.log(this.$refs.userInfo);
                alert(this.$refs.userInfo.value);
                this.$refs.box.style.background = 'red';
            },
            setMsg() {
                //儿子组建方法
                this.$refs.hello.fatherCall();
                this.msg = 'www.pronhub.com';
            },
            getMsg() {
                //方法获取数据
                alert(this.msg);
            }
        },
        data() {
            /*业务逻辑定义的数据*/
            return {
                todo: '',
                todoList: [],
                msg: 'yang sen first demo ..',
                title: '我是一个title',
                imgUrl: 'http://pic1.win4000.com/tj/2017-12-07/5a28ba185fe96.jpg',
                h: '<h3>我是绑定html</h3>',
                obj: {name: "husky", age: 18},
                list: [],
                flag: true,
                list1: [
                    {'title': 1111},
                    {'title': 1112},
                    {'title': 1113},
                    {'title': 1114}
                ],
                list2: [
                    {
                        'cate': '国内新闻',
                        'list': [
                            {'title': '国内新闻1'},
                            {'title': '国内新闻2'}
                        ]
                    }, {
                        'cate': '国外新闻',
                        'list': [
                            {'title': '国外新闻1'},
                            {'title': '国外新闻2'}
                        ]
                    }
                ]
            }
        }
    }
</script>

<style lang="css">
    .red {
        color: red;
    }
</style>
