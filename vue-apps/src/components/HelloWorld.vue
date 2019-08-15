<template>
    <el-container>
        <el-header><i class="el-icon-setting"></i> C端开发测试小工具</el-header>
        <el-container>
            <el-aside width="200px"><i class="el-icon-s-promotion"></i> kafka 发射器</el-aside>
            <el-main>
                <el-row>
                    <el-col :span="4">
                        <div class="grid-content bg-purple"></div>
                    </el-col>
                    <el-col :span="16">
                        <div class="grid-content bg-purple-light">
                            <div style="margin: 20px;"></div>
                            <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
                                <el-form-item label="broker集群">
                                    <el-input v-model="formLabelAlign.broker"></el-input>
                                </el-form-item>
                                <el-form-item label="topic">
                                    <el-input v-model="formLabelAlign.topic"></el-input>
                                </el-form-item>
                                <el-form-item label="消息体">
                                    <el-input type="textarea" v-model="formLabelAlign.message"></el-input>
                                    <!--                <el-input v-model="formLabelAlign.message"></el-input>-->
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="primary" @click="sendMsg()">发送消息</el-button>
                                    <el-button>取消</el-button>
                                </el-form-item>
                            </el-form>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="grid-content bg-purple"></div>
                    </el-col>
                </el-row>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import Axios from 'axios';

    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },
        data() {
            return {
                labelPosition: 'right',
                formLabelAlign: {
                    broker: '',
                    topic: '',
                    message: ''
                },
                errMsg: '',
            };
        },
        methods: {
            sendMsg() {
                for (var x in this.formLabelAlign) {
                    if (this.formLabelAlign[x].length == 0) {
                        this.$message('请确保表单内容非空');
                        return false;
                    }
                }
                var kafkaApi = '/kafka_sender.php';

                Axios.post(kafkaApi, this.$qs.stringify(this.formLabelAlign))
                    .then((response)=>{
                        if(response.data.error){
                            this.$message('发送失败,错误码为 ：'+response.data.error);
                        }else{
                            this.$message('发送成功, partition + offset ：'+response.data.partition+':'+response.data.offset);
                        }
                    })
                    .catch((error)=> {
                        this.$message('发送失败,错误码为 ：'+error);
                    });
            }
        }
    }
</script>

<style scoped>
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }

</style>

