<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--<router-view/>-->
    <button @click="test_get">get</button>
    <button @click="test_post">get</button>

  </div>
</template>

<script>
  import axios from 'axios'
export default {
  name: 'App',
  methods: {
    test_get: function () {
      axios.get('/league/selectleaguebyid?sid=1606915055').then(resp => {
        console.log(resp)
      })
    },
    test_post: function () {
      axios({
        method: 'post',
        url: '/league/test',
        data: {
          "leagueId": "63ef4747e5744a5e990f92a76f586790",
          "college": "计算机与信息工程",
          "major": "计算机科学与技术",
          "className": "计科2班",
          "studentId": "1606915055",
          "lname": "恩超",
          "sex": "女",
          "date": "1997/10/12",
          "idnumber": "411524133202033612",
          "nation": "汉族·",
          "nativePlace": "河南南阳宛城区",
          "politicalStatus": "团员",
          "years": "2018/01/02",
          "place": "南阳理工学院",
          "letter": "有",
          "zheng": "有",
          "memberProfile": "有",
          "phone": "15139081588",
          "qq": "453395685",
          "remark": "班长",
          "register": "是",
          "createTime": "2018/09/09",
          "lastEditTime": "2018/10/10"
        }
      }).then(resp => {
        console.log(resp)
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
