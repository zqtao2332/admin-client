<template>
  <div>
    <header class="bar bar-nav">
      <h1 class='title'>新人注册</h1>
    </header>

    <div class="content">
      <div class="list-block">
        <ul>
          <!-- Text inputs -->
          <li>
            <div class="item-content">
              <div class="item-media"><i class="icon icon-form-name"></i></div>
              <div class="item-inner">
                <div class="item-title label">学院</div>
                <div class="item-input">
                  <input type="text" v-model="leagueEntity.college" placeholder="请输入学院">
                </div>
              </div>
            </div>
          </li>

          <li>
            <div class="item-content">
              <div class="item-media"><i class="icon icon-form-name"></i></div>
              <div class="item-inner">
                <div class="item-title label">专业</div>
                <div class="item-input">
                  <input type="text" v-model="leagueEntity.major" placeholder="请输入专业">
                </div>
              </div>
            </div>
          </li>

          <li>
            <div class="item-content">
              <div class="item-media"><i class="icon icon-form-name"></i></div>
              <div class="item-inner">
                <div class="item-title label">班级</div>
                <div class="item-input">
                  <input type="text" v-model="leagueEntity.className" placeholder="请输入班级">
                </div>
              </div>
            </div>
          </li>

          <li>
            <div class="item-content">
              <div class="item-media"><i class="icon icon-form-name"></i></div>
              <div class="item-inner">
                <div class="item-title label">学号</div>
                <div class="item-input">
                  <input type="text" v-model="leagueEntity.studentId" placeholder="请输入学号">
                </div>
              </div>
            </div>
          </li>

          <li>
            <div class="item-content">
              <div class="item-media"><i class="icon icon-form-name"></i></div>
              <div class="item-inner">
                <div class="item-title label">姓名</div>
                <div class="item-input">
                  <input type="text" v-model="leagueEntity.lname" placeholder="请输入姓名">
                </div>
              </div>
            </div>
          </li>

          <li>
            <div class="item-content">
              <div class="item-media"><i class="icon icon-form-gender"></i></div>
              <div class="item-inner">
                <div class="item-title label">性别</div>
                <div class="item-input">
                  <select v-model="leagueEntity.sex">
                    <option>男</option>
                    <option>女</option>
                  </select>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div class="item-content">
              <div class="item-media"><i class="icon icon-form-calendar"></i></div>
              <div class="item-inner">
                <div class="item-title label">出生年月</div>
                <div class="item-input">
                  <input type="date" placeholder="Birth day" v-model="leagueEntity.date">
                  <!--<input type="date" placeholder="Birth day" v-model="leagueEntity.date">-->
                </div>
              </div>
            </div>
          </li>

          <li class="item-content item-link">
            <div class="item-media"><i class="icon icon-f7"></i></div>
            <div class="item-inner">
              <div class="item-title label">身份证号</div>
              <div class="item-input">
                <input type="text" v-model="leagueEntity.idnumber" placeholder="请输入身份证号">
              </div>
            </div>
          </li>

          <li>
            <div class="item-content">
              <div class="item-media"><i class="icon icon-form-name"></i></div>
              <div class="item-inner">
                <div class="item-title label">民族</div>
                <div class="item-input">
                  <input type="text" v-model="leagueEntity.nation" placeholder="请输入民族">
                </div>
              </div>
            </div>
          </li>

          <li>
            <div class="item-content">
              <div class="item-media"><i class="icon icon-form-name"></i></div>
              <div class="item-inner">
                <div class="item-title label">籍贯</div>
                <div class="item-input">
                  <input type="text" id='city-picker' v-on:click="city_picker" v-model="leagueEntity.nativePlace" value="" />
                </div>
              </div>
            </div>
            {{leagueEntity.nativePlace}}
          </li>

          <li>
            <div class="item-content">
              <div class="item-media"><i class="icon icon-form-gender"></i></div>
              <div class="item-inner">
                <div class="item-title label">政治面貌</div>
                <div class="item-input">
                  <select v-model="leagueEntity.politicalStatus">
                    <option >党员</option>
                    <option>共青团员</option>
                  </select>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div class="item-content">
              <div class="item-media"><i class="icon icon-form-calendar"></i></div>
              <div class="item-inner">
                <div class="item-title label">入团年月</div>
                <div class="item-input">
                  <input type="date" placeholder="Birth day" v-model="leagueEntity.years">
                </div>
              </div>
            </div>
          </li>

          <li>
            <div class="item-content">
              <div class="item-media"><i class="icon icon-form-name"></i></div>
              <div class="item-inner">
                <div class="item-title label">入团地点</div>
                <div class="item-input">
                  <input type="text" v-model="leagueEntity.place" placeholder="请输入入团地点">
                </div>
              </div>
            </div>
          </li>

          <li>
            <div class="item-content">
              <div class="item-media"><i class="icon icon-form-gender"></i></div>
              <div class="item-inner">
                <div class="item-title label">介绍信</div>
                <div class="item-input">
                  <select v-model="leagueEntity.letter">
                    <option>有</option>
                    <option>无</option>
                  </select>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div class="item-content">
              <div class="item-media"><i class="icon icon-form-gender"></i></div>
              <div class="item-inner">
                <div class="item-title label">团员证</div>
                <div class="item-input">
                  <select v-model="leagueEntity.zheng">
                    <option>有</option>
                    <option>无</option>
                  </select>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div class="item-content">
              <div class="item-media"><i class="icon icon-form-gender"></i></div>
              <div class="item-inner">
                <div class="item-title label">团员档案</div>
                <div class="item-input">
                  <select v-model="leagueEntity.memberProfile">
                    <option>有</option>
                    <option>无</option>
                  </select>
                </div>
              </div>
            </div>
          </li>

          <li class="item-content item-link">
            <div class="item-media"><i class="icon icon-f7"></i></div>
            <div class="item-inner">
              <div class="item-title label">手机号</div>
              <div class="item-input">
                <input type="text" v-model="leagueEntity.phone" placeholder="请输入手机号">
              </div>
            </div>
          </li>

          <li class="item-content item-link">
            <div class="item-media"><i class="icon icon-f7"></i></div>
            <div class="item-inner">
              <div class="item-title label">QQ</div>
              <div class="item-input">
                <input type="text" v-model="leagueEntity.qq" placeholder="请输入">
              </div>
            </div>
          </li>

          <li>
            <div class="item-content">
              <div class="item-media"><i class="icon icon-form-name"></i></div>
              <div class="item-inner">
                <div class="item-title label">备注</div>
                <div class="item-input">
                  <input type="text" v-model="leagueEntity.remark" placeholder="备注 / 非必填">
                </div>
              </div>
            </div>
          </li>

        </ul>
      </div>
      <div class="content-block">
        <div class="row">
          <div class="col-50"><a href="#"  @click="cancel_edit()" class="button button-big button-fill button-danger">重置</a></div>
          <!--<div class="col-50"><a href="#"  @click="getLeagueByStudentId()" class="button button-big button-fill button-danger">模拟</a></div>-->
          <div class="col-50"><a href="#" @click="addNewTuany()" class="button button-big button-fill button-success">提交</a></div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "NewTuany",
    mounted (){ // 绑定监听事件

    },
    data() {
      return {
        leagueTmp: {
        // leagueEntity: {
          "college": "计算机与信息工程",
          "major": "计算机科学与技术",
          "className": "计科2班",
          "studentId": "1606915055",
          "lname": "恩超",
          "sex": "女",
          "date": "1997-10-12",
          "idnumber": "411524133202033612",
          "nation": "汉族·",
          "nativePlace": "北京 东城区",
          "politicalStatus": "共青团员",
          "years": "2018-01-02",
          "place": "南阳理工学院",
          "letter": "有",
          "zheng": "有",
          "memberProfile": "有",
          "phone": "15139081588",
          "qq": "453395685",
          "remark": "班长",
          "register": "是"
        },
        leagueEntity: {}

      }
    },
    methods: {
      cancel_edit() {
        this.leagueEntity = {}
      },
      addNewTuany() {
        axios({
          method: 'post',
          url: '/league/addnewleague',
          data: this.leagueEntity
        }).then(resp => {
          var data = resp.data;
          $.toast(data.msg);
        })
      },
      getLeagueByStudentId() {
        axios.get('/league/selectleaguebyid?sid=1606915055')
          .then(resp => {
            var data = resp.data;
            console.log(data)
            var success = data.success;
            $.toast(data.msg);
            if (success){
              this.leagueEntity = data.data;
            }

          })
      },
      city_picker: function (event) {

        $("#city-picker").cityPicker({
          toolbarTemplate: '<header class="bar bar-nav">\
          <button class="button button-link pull-right close-picker">确定</button>\
          <h1 class="title">选择籍贯地址</h1>\
          </header>'
        });

      }

    }
  }


</script>

<style scoped>

</style>
