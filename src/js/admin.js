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
      $(document).keyup(function(event){
        if(event.keyCode == 13){
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
    $lis.click(function(e) {
      let $el = $(this);
      let index = $el.data('index');
      $lis.removeClass('active');
      $el.addClass('active');
      if (index == 4) {
        _slef.onChangePagination.call(_slef, _slef.pageNum);
      } else {
        _slef.getData(index);
      }
    });
    this.$dom.find('#logout-btn').on('click', this.onLogout);
    $lis.eq(0).click();
  }
  initPagination() {
    Pagination.init($(".ht-page"), this.onChangePagination.bind(this));
    this.pageNum = 0;
    this.pageTotal = 0;
    this.pageCount = 10;
  }
  onChangePagination(index) {
    this.pageNum = index;
    this.getData(4);
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
    } else {
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
    }
  }
  renderData(index, data) {
    let $el;
    if (index == 0) {
      $el = this.$dom.find('#home_wrap');
    }else if (index == 1) {
      $el = this.$dom.find('#dev_wrap');
    }else if (index == 2) {
      $el = this.$dom.find('#case_wrap');
    }else if (index == 3) {
      $el = this.$dom.find('#video_wrap');
    }else if (index == 4) {
      $el = this.$dom.find('#user_wrap');
    }
    if (this.$content) {
      this.$content.hide();
    }
    this.$content =  $el;
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
        let timeStr = new Date(parseInt(item.createTime)).toLocaleString().replace(/:\d{1,2}$/,' ');
        html += `<tr><td>${item.name}</td><td>${item.mobile}</td><td>${item.wechat}</td><td>${item.projectType}</td><td>${item.demand}</td><td>${timeStr}</td><td>${item.province}/${item.city}</td><td>${item.ipAddress}</td></tr>`;
      });
      $el.find('#user-list').html(html);
      if (this.pageTotal <= this.pageCount ) {
        $(".ht-page").hide();
      } else {
        Pagination.Page($(".ht-page"), this.pageNum, this.pageTotal, this.pageCount);
      }
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
}
new AdminPage('.layout_wrap');