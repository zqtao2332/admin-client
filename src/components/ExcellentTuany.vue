<template>
  <div>
    <header class="bar bar-nav">
      <h1 class='title'>团员推优</h1>
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
                  <input type="text" v-model="excellentEntity.college" placeholder="请输入学院">
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
                  <input type="text" v-model="excellentEntity.major" placeholder="请输入专业">
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
                  <input type="text" v-model="excellentEntity.className" placeholder="请输入班级">
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
                  <input type="text" v-model="excellentEntity.studentId" placeholder="请输入学号">
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
                  <input type="text" v-model="excellentEntity.lname" placeholder="请输入姓名">
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
                  <select v-model="excellentEntity.sex">
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
                  <input type="date" placeholder="Birth day" v-model="excellentEntity.date">
                </div>
              </div>
            </div>
          </li>

          <li class="item-content item-link">
            <div class="item-media"><i class="icon icon-f7"></i></div>
            <div class="item-inner">
              <div class="item-title label">身份证号</div>
              <div class="item-input">
                <input type="text" v-model="excellentEntity.idnumber" placeholder="请输入身份证号">
              </div>
            </div>
          </li>

          <li>
            <div class="item-content">
              <div class="item-media"><i class="icon icon-form-name"></i></div>
              <div class="item-inner">
                <div class="item-title label">民族</div>
                <div class="item-input">
                  <input type="text" v-model="excellentEntity.nation" placeholder="请输入民族">
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
                  <input type="text" id='city-picker' v-on:click="city_picker" v-model="excellentEntity.nativePlace" value="" />
                </div>
              </div>
            </div>
          </li>

          <li>
            <div class="item-content">
              <div class="item-media"><i class="icon icon-form-gender"></i></div>
              <div class="item-inner">
                <div class="item-title label">政治面貌</div>
                <div class="item-input">
                  <select v-model="excellentEntity.politicalStatus">
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
                <div class="item-title label">入团时间</div>
                <div class="item-input">
                  <input type="date" placeholder="Birth day" v-model="excellentEntity.years">
                </div>
              </div>
            </div>
          </li>

          <li>
            <div class="item-content">
              <div class="item-media"><i class="icon icon-form-calendar"></i></div>
              <div class="item-inner">
                <div class="item-title label">申请入党时间</div>
                <div class="item-input">
                  <input type="date" placeholder="Birth day" v-model="excellentEntity.adtime">
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="item-content">
              <div class="item-media"><i class="icon icon-form-name"></i></div>
              <div class="item-inner">
                <div class="item-title label">所获荣誉</div>
                <div class="item-input">
                  <input type="text" v-model="excellentEntity.honor" placeholder="请输入入团地点">
                </div>
              </div>
            </div>
          </li>

          <li>
            <div class="item-content">
              <div class="item-media"><i class="icon icon-form-gender"></i></div>
              <div class="item-inner">
                <div class="item-title label">团员推优</div>
                <div class="item-input">
                  <select v-model="excellentEntity.yesOrNot">
                    <option>是</option>
                    <option>否</option>
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
                <input type="text" v-model="excellentEntity.phone" placeholder="请输入手机号">
              </div>
            </div>
          </li>

          <li class="item-content item-link">
            <div class="item-media"><i class="icon icon-f7"></i></div>
            <div class="item-inner">
              <div class="item-title label">QQ</div>
              <div class="item-input">
                <input type="text" v-model="excellentEntity.qq" placeholder="请输入QQ">
              </div>
            </div>
          </li>

          <li class="item-content item-link">
            <div class="item-media"><i class="icon icon-f7"></i></div>
            <div class="item-inner">
              <div class="item-title label">挂科门数</div>
              <div class="item-input">
                <input type="text" v-model="excellentEntity.sum" placeholder="请输入挂科门数">
              </div>
            </div>
          </li>

          <li>
            <div class="item-content">
              <div class="item-media"><i class="icon icon-form-name"></i></div>
              <div class="item-inner">
                <div class="item-title label">备注</div>
                <div class="item-input">
                  <input type="text" v-model="excellentEntity.remark" placeholder="备注 / 非必填">
                </div>
              </div>
            </div>
          </li>

        </ul>
      </div>
      <div class="content-block">
        <div class="row">
          <div class="col-50"><a href="#"  @click="canceledit()" class="button button-big button-fill button-danger">取消</a></div>
          <div class="col-50"><a href="#" @click="addNewTuany()" class="button button-big button-fill button-success">提交</a></div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "ExcellentTuany",
    mounted (){ // 绑定监听事件
      this.getexcellentByStudentId()
    },
    data() {
      return {
        excellentTmp: {
          // excellentEntity: {
          "excellentId": "1475044b-2e4e-497d-af5b-0bfa193ab836",
          "college": "计算机与信息工程",
          "major": "计算机科学与技术",
          "className": "计科2班",
          "studentId": "1606915055",
          "lname": "恩超",
          "sex": "女",
          "date": "1997-10-12",
          "idnumber": "411524133202033612",
          "nation": "汉族",
          "nativePlace": "北京 东城区",
          "politicalStatus": "共青团员",
          "years": "2018-01-02",
          "adtime": "2018-01-02",
          "honor": "无",
          "yesOrNot": "是",
          "phone": "15139081588",
          "qq": "453395685",
          "sum": "2",
          "remark": "无",
          "createTime": "2018-09-09",
          "lastEditTime": "2018-09-09"
        },
        excellentEntity: {}

      }
    },
    methods: {
      canceledit() {
        this.excellentEntity = {};
      },
      addNewTuany() {
        axios({
          method: 'post',
          url: '/excellent/addnewexcellent',
          data: this.excellentEntity
        }).then(resp => {
          var data = resp.data
          $.toast(data.msg);
        })
      },
      getexcellentByStudentId() {
        axios.get('/excellent/selectexcellentbysid?sid=1606915055')
          .then(resp => {
            console.log(resp.data.data)
            this.excellentEntity = resp.data.data;
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
