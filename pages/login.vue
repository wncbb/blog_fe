<template>
  <el-container>
    <!-- <div id="sonicMaster"></div> -->
    <el-header>
    </el-header>
    <el-main>

      <!-- <el-row>
      <el-col :span=6 :offset=8> -->

      <el-form ref="form" label-width="80px" class="mid">
        <el-form-item label="Account">
          <el-input v-model="account"></el-input>
        </el-form-item>
        <el-form-item label="Password">
          <el-input v-model="password"></el-input>
        </el-form-item>
        <el-form-item label="Captcha">
          <el-row>
          <el-col :span=8>
          <img class="full" v-bind:src=captchaData style="witdh:100px;height:40px;" >
          </el-col>
          <el-col :span=16>
          <el-input v-model="captchaCode"></el-input>
          </el-col>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit()">submit</el-button>
        </el-form-item>
        <el-form-item class="display-none">
            <el-input v-model="captchaId" ></el-input>
        </el-form-item>
      </el-form>

      <!-- </el-col>
      </el-row> -->

    </el-main>
  </el-container>
</template>

<script>
export default {
  async asyncData(ctx){
    let resp=await ctx.app.$axios.$get('/api/captcha')
    console.log(resp)
    return {
      captchaData: resp.data.captchaData,
      captchaId: resp.data.captchaId,
    };
  },
  data() {
    return {
        account: "",
        password: "",
        captchaId: "",
        captchaCode: "",
    };
  },
  methods: {
    async onSubmit(){

      let resp=await this.$axios.$post(
        "http://wncbb.cn/api/login",
        {
            "captchaId": this.captchaId,
            "account": this.account,
            "password": this.password,
            "captchaCode": this.captchaCode,
        }
      );
      console.log(resp);
      alert(resp);
    },
  },
};
</script>

<style>
  .full{
    width: 100%;
    height: 100%;
  }
  .mid{
    max-width: 26rem;
    margin: 5% auto;
  }
  .display-none{
      display: none;
  }
</style>