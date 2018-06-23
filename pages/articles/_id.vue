<template>
    <div class="container">
        <div id="sonicMaster"></div>
        <el-row>
            <el-col :xs="{span:24}" :sm="{span:24}" :md="{span:18,offset:3}" :lg="{span:16,offset:4}" :xl="{span:16,offset:4}">
                <div class="markdown-body" v-html="mdData"></div>
            </el-col>
        </el-row>
    </div>
</template>

<script>

// import 'highlight.js/styles/vs.css'
// import 'github-markdown-css/github-markdown.css'
import 'highlight.js/styles/solarized-light.css'

import hljs from 'highlight.js' // https://highlightjs.org/
import markdown_it from 'markdown-it'
var md = markdown_it({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return '<pre class="hljs"><code>' +
               hljs.highlight(lang, str, true).value +
               '</code></pre>';
      } catch (__) {}
    }

    return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
  }
});

export default {
    async asyncData(ctx){
        let resp=await ctx.app.$axios.$get('/api/articles/'+ctx.params.id)
        console.log(resp)
        return {
            mdData: md.render(resp.data.content),
        }
    },
    // data(){
    //     return {
    //         test: "# 1234",
    //     }
    // }
}
</script>


<style>
    .container{
        margin: 2% 5%;
    }
</style>