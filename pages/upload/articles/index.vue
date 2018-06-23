<template>
    <el-container>
        <div id="sonicMaster"></div>
        <el-header>

        </el-header>
        <el-main>
            <el-form ref="form" v-model="form" label-width="5rem">
                <el-form-item>
                    文章上传后台
                </el-form-item>
                <el-form-item label="title">
                    <el-input v-model="form.title" placeholder="Please input title"></el-input>
                </el-form-item>
                <el-form-item label="content">
                    <el-input v-model="form.content" type="textarea" :rows="20" placeholder="Please input markdown text"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">submit</el-button>
                </el-form-item>
            </el-form>
        </el-main>
    </el-container>
</template>

<script>
export default {
    data(){
        return {
            form: {
                title: '',
                content: '',
            }
        }
    },
    methods: {
        async onSubmit(){
            // let tmp=this.$axios.setHeader(
            //     "Allow-Control-Allow-Origin",
            //     "*"
            // );
            // console.log("tmp: ", tmp)
            let resp=await this.$axios.$post(
                "http://wncbb.cn/api/articles",
                this.form
            )
            // console.log(resp)
            // let resp=this.$axios(
            //     {
            //         method: 'post',
            //         url: 'http://127.0.0.1:4444/api/upload/article',
            //         data: this.data,
            //     }
            // )
            console.log(resp)
        }
    }
}
</script>

<style>
.line{
    margin-top: 3rem;
}
</style>
