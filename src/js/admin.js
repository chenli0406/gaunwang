import MD5 from 'md5.js';

class AdminPage {
  constructor(el) {
    let $els = $(el);
    let $el = $els.eq(0);
    if ($el) {
      this.$dom = $el;
    } else {
      this.$dom = $els;
    }
    this.username = 'admin';
    this.password = '53ddca250accc17207eaf05cff4c715a';
    this.pageNum = 0;
    if (sessionStorage.getItem('userid')) {
      this.init();
    } else {
      let _self = this;
      this.$dom.find('.login_wrap').show();
      this.$dom.find('#login_btn').on('click', this.login.bind(this));
      $(document).keyup(function (event) {
        if (event.keyCode == 13) {
          _self.login();
        }
      });
    }
  }
  init() {
    this.initEvent();
    this.$dom.find('.login_wrap').remove();
    this.initPagination();
  }
  initEvent() {
    let _slef = this;
    let $lis = this.$dom.find('.left_wrap li');
    $lis.click(function (e) {
      let $el = $(this);
      let index = $el.data('index');
      $lis.removeClass('active');
      $el.addClass('active');
      if (index == 4) {
        _slef.onChangePagination.call(_slef, _slef.pageNum);
      } else {
        _slef.getData(index);
      }
      if (index == 5) {

      } else {

      }
    });
    this.$dom.find('#logout-btn').on('click', this.onLogout);
    $lis.eq(0).click();


  }
  initPagination() {
    Pagination.init($(".ht-page"), this.onChangePagination.bind(this));
    Pagination.init($(".sr-page"), this.onChangePaginationM.bind(this));
    this.pageNum = 0;
    this.pageTotal = 0;
    this.pageCount = 10;
    this.page = 0;
    this.limit = 10;
    this.total = 0;
  }
  onChangePagination(index) {
    this.pageNum = index;
    this.getData(4);
  }
  onChangePaginationM(index){
    console.log(index);
    this.page = index;
    this.getSourceList();
  }
  getData(index) {
    if (this.dataIndex == index && index != 4) {
      return false;
    }
    this.dataIndex = index;
    let urls = [
      '/statistics/content',
      '/statistics/dev',
      '/statistics/case',
      '/statistics/video',
      '/customer/list'
    ]
    let url = 'http://148.70.37.198:8808' + urls[index];
    if (index <= 3) {
      $.ajax({
        url: url,
        type: 'GET',
        success: (res) => {
          if (res.code == 200) {
            this.renderData(index, res.data);
          }
        }
      })
    } else if (index == 4) {
      $.ajax({
        url: url,
        type: 'POST',
        data: {
          limit: this.pageCount,
          page: this.pageNum + 1
        },
        success: (res) => {
          this.renderData(index, res);
        }
      })
    } else if (index == 5) {
      this.renderData(index);
    }
  }
  renderData(index, data) {
    let $el;
    if (index == 0) {
      $el = this.$dom.find('#home_wrap');
      // this.changeClick();
    } else if (index == 1) {
      $el = this.$dom.find('#dev_wrap');
    } else if (index == 2) {
      $el = this.$dom.find('#case_wrap');
    } else if (index == 3) {
      $el = this.$dom.find('#video_wrap');
    } else if (index == 4) {
      $el = this.$dom.find('#user_wrap');
    } else if (index == 5) {
      $el = this.$dom.find('#source_wrap');
      this.sourceEcharts()
    }
    if (this.$content) {
      this.$content.hide();
    }
    this.$content = $el;
    this.$content.show();
    if (index <= 3) {
      let $datas = $el.find('.data');
      $datas.each((index, item) => {
        $(item).text(data['t' + (parseInt(index) + 1)]);
      })
    } else if (index == 4) {
      let html = '';
      this.pageTotal = data.count;
      data = data.data;
      data.map(item => {
        let timeStr = new Date(parseInt(item.createTime)).toLocaleString().replace(/:\d{1,2}$/, ' ');
        html += `<tr><td>${item.name}</td><td>${item.mobile}</td><td>${item.wechat}</td><td>${item.projectType}</td><td>${item.demand}</td><td>${timeStr}</td><td>${item.province}/${item.city}</td><td>${item.ipAddress}</td></tr>`;
      });
      $el.find('#user-list').html(html);
      if (this.pageTotal <= this.pageCount) {
        $(".ht-page").hide();
      } else {
        Pagination.Page($(".ht-page"), this.pageNum, this.pageTotal, this.pageCount);
      }
    } else if (index == 5) {
    }
  }
  login() {
    let username = this.$dom.find('#username').val();
    let password = this.$dom.find('#password').val();
    password = new MD5().update(password).digest('hex');
    if (username == this.username && password == this.password) {
      sessionStorage.setItem('userid', '1');
      this.init();
    } else {
      alert('账号密码错误');
    }
    return false;
  }
  onLogout() {
    sessionStorage.removeItem('userid');
    window.location.reload();
  }
  homeEcharts() {
    var myChart = echarts.init(document.getElementById('echartsBox'));
    // 指定图表的配置项和数据
    var option = {
      title: {
        text: '统计'
      },
      tooltip: {},
      legend: {
        data: ['销量']
      },
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  }
  sourceEcharts() {
    let _this = this;
    $(document).ready(function () {
      var time = new Date();
      var day = ("0" + time.getDate()).slice(-2);
      var month = ("0" + (time.getMonth() + 1)).slice(-2);
      var today = time.getFullYear() + "-" + (month) + "-" + (day);
      var date2 = new Date(time);
      date2.setDate(time.getDate() - 7);
      var time2 = date2.getFullYear() + "-" + (date2.getMonth() + 1) + "-" + date2.getDate();
      $('#startTime').val(time2);
      $('#endTime').val(today);
      $('#search').on('click', function (e) {
        _this.getSource();
        _this.getCity();
      });
    })
    _this.getSource();
    _this.getCity();
    _this.getCityPie();
    _this.getSourcePie();
    _this.getSourceList();

  }
  changeClick() {
    let _this = this;
    _this.homeEcharts()
    $('.data-line .home-page').on('click', function (e) {
      let $el = $(this).index()
      switch ($el) {
        case 0:
          console.log("0");
          break;
        case 1:
          console.log("1");
          break;
        case 2:
          console.log("2");
          break;
        case 3:
          console.log("3");
          break;
        case 4:
          console.log("4");
          break;
        default:
          console.log("1");
      }
    })
  }
  getSource() {
    let urlPath = 'http://192.168.0.193:8808';
    let legend = [];
    let seriesData = [];
    let xAxisData = [];
    let data = "";
    let startTime = $('#startTime').val()
    let endTime = $('#endTime').val();
    let para = new Object();
    para.startTime = startTime;
    para.endTime = endTime;
    if (startTime && endTime) {
      $.ajax({
        url: urlPath + `/browse/source/statistics`,
        type: 'POST',
        dataType: 'json',
        data: para,
        success: (res) => {
          if (res.code == 200) {
            data = res.data
            for (let key in res.data) {
              legend.push(key);
              seriesData.push({
                name: key,
                data: res.data[key],
                type: 'line'
              })
              for (let i = 0; i < res.data[key].length; i++) {
                xAxisData.push(res.data[key][i].key);

              }
            }
          }
          let xAxis = Array.from(new Set(xAxisData));
          var myChart = echarts.init(document.getElementById('sourceBox'));
          // 指定图表的配置项和数据
          var option = {
            title: {
              text: '分类时间统计',
              textStyle: {
                fontSize: 14,
                fontWeight: '',
                color: '#333',
              },
            },
            tooltip: {
              trigger: 'axis'
            },
            legend: {
              data: legend
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: xAxis
            },
            yAxis: {
              type: 'value'
            },
            series: seriesData
          };
          myChart.setOption(option);
        }
      })

    }
  }
  getCity() {
    let urlPath = 'http://192.168.0.193:8808';
    let legend = [];
    let seriesData = [];
    let xAxisData = [];
    let data = "";
    let startTime = $('#startTime').val()
    let endTime = $('#endTime').val();
    let para = new Object();
    para.startTime = startTime;
    para.endTime = endTime;
    if (startTime && endTime) {
      $.ajax({
        url: urlPath + `/browse/city/statistics`,
        type: 'POST',
        dataType: 'json',
        data: para,
        success: (res) => {
          if (res.code == 200) {
            data = res.data
            if(data.length>0){
              for (let key in res.data) {
                legend.push(key);
                seriesData.push({
                  name: key,
                  data: res.data[key],
                  type: 'line'
                })
                for (let i = 0; i < res.data[key].length; i++) {
                  xAxisData.push(res.data[key][i].key);
                }
              }
              let xAxis = Array.from(new Set(xAxisData));
              var myChart = echarts.init(document.getElementById('cityBox'));
              // 指定图表的配置项和数据
              var option = {
                title: {
                  text: '城市时间统计',
                  textStyle: {
                    fontSize: 14,
                    fontWeight: '',
                    color: '#333'
                  },
                },
                tooltip: {
                  trigger: 'axis'
                },
                legend: {
                  data: legend
                },
                grid: {
                  left: '3%',
                  right: '4%',
                  bottom: '3%',
                  containLabel: true
                },
                xAxis: {
                  type: 'category',
                  boundaryGap: false,
                  data: xAxis
                },
                yAxis: {
                  type: 'value'
                },
                series: seriesData
              };
              myChart.setOption(option);
            }else{
               document.getElementById('cityBox').style.display = "none"
            }
          }
        }
      })
    }

  }
  getCityPie() {
    let urlPath = 'http://192.168.0.193:8808';
    let data = "";
    $.ajax({
      url: urlPath + `/browse/city/total`,
      type: 'POST',
      success: (res) => {
        if (res.code == 200) {
          res.data.map((value, index, arry) => {
            data.push({
              'value': value.value,
              'name': value.key
            })
          })
        }
        if(data.length>0){
          var myChart = echarts.init(document.getElementById('cityPie'));
          var option = {
            title: {
              text: '城市统计',
              top: 'bottom',
              left: 'center',
              textStyle: {
                fontSize: 14,
                fontWeight: '',
                color: '#333'
              },
            },
            tooltip: {
              trigger: 'item',
              formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            series: [{
              name: '城市统计',
              type: 'pie',
              radius: '50%',
              data: data,
            }]
          };
          myChart.setOption(option);
        }else{
           document.getElementById('cityPie').style.display = 'none'
        }
      
      }
    })
  }
  getSourcePie() {
    let urlPath = 'http://192.168.0.193:8808';
    let data = [];
    $.ajax({
      url: urlPath + `/browse/source/total`,
      type: 'POST',
      success: (res) => {
        if (res.code == 200) {
          res.data.map((value, index, arry) => {
            data.push({
              'value': value.value,
              'name': value.key
            })
          })
        }
        var myChart = echarts.init(document.getElementById('sourcePie'));
        var option = {
          title: {
            text: '分类统计',
            top: 'bottom',
            left: 'center',
            textStyle: {
              fontSize: 14,
              fontWeight: '',
              color: '#333'
            },
          },
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          series: [{
            name: '分类统计',
            type: 'pie',
            radius: '50%',
            data: data,
          }]
        };
        myChart.setOption(option);
      }
    })
  }
  getSourceList(){
    let para = new Object();
    para.limit = this.limit;
    para.page = this.page;
    let data = "";
    let urlPath = 'http://192.168.0.193:8808';
    $.ajax({
      url: urlPath + `/browse/list`,
      type: 'POST',
      dataType: 'json',
      data: para,
      success: (res) => {
          data = res.data;
          let html = '';
          this.total = res.count;
          data.map(item => {
            let timeStr = new Date(parseInt(item.createTime)).toLocaleString().replace(/:\d{1,2}$/, ' ');
            html += `<tr><td>${item.city}</td><td>${timeStr}</td><td>${item.ipAddress}</td><td>${item.province}</td><td>${item.sourceWeb}</td><td>${item.totalTime}</tr>`;
          });
          $('#source-list').html(html);
          if (this.total <= this.count) {
            $(".sr-page").hide();
          } else {
            Pagination.Page($(".sr-page"), this.page, this.total, this.limit);
          }
        }
    })
  }
}
new AdminPage('.layout_wrap');