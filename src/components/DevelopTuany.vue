<template>
  <div>
    <header class="bar bar-nav">
      <h1 class='title'>发展团员</h1>
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
                  <input type="text" v-model="developEntity.college" placeholder="请输入学院">
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
                  <input type="text" v-model="developEntity.major" placeholder="请输入专业">
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
                  <input type="text" v-model="developEntity.className" placeholder="请输入班级">
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
                  <input type="text" v-model="developEntity.studentId" placeholder="请输入学号">
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
                  <input type="text" v-model="developEntity.lname" placeholder="请输入姓名">
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
                  <select v-model="developEntity.sex">
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
                  <input type="date" placeholder="Birth day" v-model="developEntity.date">
                  <!--<input type="date" placeholder="Birth day" v-model="developEntity.date">-->
                </div>
              </div>
            </div>
          </li>

          <li class="item-content item-link">
            <div class="item-media"><i class="icon icon-f7"></i></div>
            <div class="item-inner">
              <div class="item-title label">身份证号</div>
              <div class="item-input">
                <input type="text" v-model="developEntity.idnumber" placeholder="请输入身份证号">
              </div>
            </div>
          </li>

          <li>
            <div class="item-content">
              <div class="item-media"><i class="icon icon-form-name"></i></div>
              <div class="item-inner">
                <div class="item-title label">民族</div>
                <div class="item-input">
                  <input type="text" v-model="developEntity.nation" placeholder="请输入民族">
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
                  <input type="text" id='city-picker' v-on:click="city_picker" v-model="developEntity.nativePlace" value="" />
                </div>
              </div>
            </div>
          </li>

          <li>
            <div class="item-content">
              <div class="item-media"><i class="icon icon-form-calendar"></i></div>
              <div class="item-inner">
                <div class="item-title label">入团申请时间</div>
                <div class="item-input">
                  <input type="date" placeholder="Birth day" v-model="developEntity.applyTime">
                </div>
              </div>
            </div>
          </li>

          <li>
            <div class="item-content">
              <div class="item-media"><i class="icon icon-form-calendar"></i></div>
              <div class="item-inner">
                <div class="item-title label">团支部推优时间</div>
                <div class="item-input">
                  <input type="date" placeholder="Birth day" v-model="developEntity.time">
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
                  <input type="text" v-model="developEntity.honor" placeholder="请输入所获荣誉">
                </div>
              </div>
            </div>
          </li>

          <li>
            <div class="item-content">
              <div class="item-media"><i class="icon icon-form-name"></i></div>
              <div class="item-inner">
                <div class="item-title label">挂科门数</div>
                <div class="item-input">
                  <input type="text" v-model="developEntity.sum" placeholder="请输入挂科门数">
                </div>
              </div>
            </div>
          </li>

          <li class="item-content item-link">
            <div class="item-media"><i class="icon icon-f7"></i></div>
            <div class="item-inner">
              <div class="item-title label">手机号</div>
              <div class="item-input">
                <input type="text" v-model="developEntity.phone" placeholder="请输入手机号">
              </div>
            </div>
          </li>

          <li class="item-content item-link">
            <div class="item-media"><i class="icon icon-f7"></i></div>
            <div class="item-inner">
              <div class="item-title label">QQ</div>
              <div class="item-input">
                <input type="text" v-model="developEntity.qq" placeholder="请输入">
              </div>
            </div>
          </li>

          <li>
            <div class="item-content">
              <div class="item-media"><i class="icon icon-form-name"></i></div>
              <div class="item-inner">
                <div class="item-title label">备注</div>
                <div class="item-input">
                  <input type="text" v-model="developEntity.remark" placeholder="备注 / 非必填">
                </div>
              </div>
            </div>
          </li>

        </ul>
      </div>
      <div class="content-block">
        <div class="row">
          <div class="col-50"><a href="#"  @click="getdevelopByStudentId()" class="button button-big button-fill button-danger">取消</a></div>
          <div class="col-50"><a href="#" @click="addNewTuany()" class="button button-big button-fill button-success">提交</a></div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "DevelopTuany",
    mounted (){ // 绑定监听事件

    },
    data() {
      return {
        developTmp: {
          // developEntity: {
          "college": "计算机与信息工程",
          "major": "计算机科学与技术",
          "className": "计科2班",
          "studentId": "1606915058",
          "lname": "彭超",
          "sex": "男",
          "date": "1997-09-09",
          "idnumber": "411524199702033333",
          "nation": "满族",
          "nativePlace": "河南 南阳",
          "applyTime": "1997-09-09",
          "time": "2018-08-08",
          "honor": "数学建模第一名",
          "sum": "5",
          "phone": "15139081588",
          "qq": "453395854",
          "remark": "无",
          "developId": "1475044b-2e4e-497d-af5b-0bfa193ab836",
          "createTime": "2018-05-06",
          "lastEditTime": "2018-12-08"
        },
        developEntity: {}

      }
    },
    methods: {
      addNewTuany() {
        axios({
          method: 'post',
          url: '/develop/addnewdevelop',
          data: this.developEntity
        }).then(resp => {
          var data = resp.data
          $.toast(data.msg);
        })
      },
      getdevelopByStudentId() {
        axios.get('/develop/selectdevelopbysid?sid=1606915058')
          .then(resp => {
            console.log(resp.data.data)
            this.developEntity = resp.data.data;
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
