let processImgs = [
  require('../images/index/process1.png'),
  require('../images/index/process2.png'),
  require('../images/index/process3.png'),
  require('../images/index/process4.png'),
  require('../images/index/process5.png'),
  require('../images/index/process6.png'),
  require('../images/index/process7.png'),
  require('../images/index/process8.png'),
  require('../images/index/process9.png'),
  require('../images/index/process10.png')
];
let serviceData = [
  {
    title: 'APP定制开发',
    info: '原生定制开发，吸引更多用户、提高转化转化率、实现商业价值'
  },
  {
    title: '微信公众号开发',
    info: '推广到达率100%，用户分类多样化，分组实现精准推送'
  },
  {
    title: '小程序开发',
    info: '小程序具有出色的使用体验，它是未来的重要获客渠道，可被便捷地获取和传播'
  }
];
let processTextData = [
  {
    title: '初步沟通',
    subTitle: 'First communication',
    info: '在给官网的客服留下联系电话后，我们专业的商务会在3分钟以内与您取得联系'
  },
  {
    title: '梳理流程',
    subTitle: 'Carding process',
    info: '“好的公司聊项目”——软件开发并不是有统一规格的商品，靠谱的公司在报价前都会详细的询问客户项目的背景，业务逻辑，商业逻辑，以确保准确的勾勒出用户想要的软件雏形作为准确报价的依据'
  },
  {
    title: '评估报价',
    subTitle: 'Valuation offer',
    info: '在我们知道了用户想做什么项目，这个项目有多少角色参与，并且每个角色参与时都需要用到什么功能的情况下，我们才会综合开发工期进行报价'
  },
  {
    title: '签订合同',
    subTitle: 'Sign a contract',
    info: '如果有幸能为您服务，我们会跟您确定研发的阶段、工期和价格并签订正式合同，合作正式开始！'
  },
  {
    title: '原型设计',
    subTitle: 'Prototype design',
    info: '正式合作的第一阶段我们会让产品经理跟您沟通，从实际需求出发为您绘制原型图，原型图是软件开发最重要的部分，就像在家装之前需要设计师出设计稿一样，没有这一步我们就无法确保未来开发的软件符合您的要求，原型图通常是黑白或黑白灰三色'
  },
  {
    title: 'UI设计',
    subTitle: 'UI design',
    info: 'UI设计是指对软件的人机交互、操作逻辑、界面美观的整体设计。我们的设计师会根据要求制作符合软件主题的设计稿，这一步完成后，您就可以看到有颜色的软件设计图啦'
  },
  {
    title: '代码开发',
    subTitle: 'Code development',
    info: '程序员拿到设计图后会使用开发工具所支持的语言写出源文件，并且在制作时会遵循通用性、可扩充性、稳定性等原则以确保代码质量'
  },
  {
    title: '上线测试',
    subTitle: 'software test',
    info: '为了执行“一次就把事做对”的质量原则，在交付项目之前，我们的测试工程师会使用很多暴力测试来确保交付到客户手中的软件在任何情况下都保持优异的表现'
  },
  {
    title: '发布上线',
    subTitle: 'On-line preparation',
    info: '软件上线之前（通常会提前一个月），我们还会协助您申请服务器、软件著作权、支付账号等必要的资质，确保上线过程顺畅'
  },
  {
    title: '免费维护',
    subTitle: 'Free maintenance',
    info: '我们承诺：所有我们制作的软件皆为终生免费维护，这一条会写在与您签订的合同内，以视为我们对自己开发软件的质量有相当的信心'
  }
];
let exampleData = [
  {
    title: '乐融幼教',
    subTitle: '在线教育',
    info: '线上排课、整理教育资源和线上教学<br>系统加强了老师和家长之间的黏性<br>大幅减少校区的人力成本并增加了工作效率',
    icon: require('../images/index/example-icon1.png'),
    icona: require('../images/index/example-icon1-active.png'),
    color: '#15BE7B',
    exampleImg: require('../images/index/example1.png')
  },
  {
    title: '服务生活APP',
    subTitle: '移动电商',
    info: '为校区周围居民提供日常用品<br>网上下单免费配送的平台<br>使传统零售行业在社区中脱颖而出',
    icon: require('../images/index/example-icon2.png'),
    icona: require('../images/index/example-icon2-active.png'),
    color: '#15BE7B',
    exampleImg: require('../images/index/example2.png')
  },
  {
    title: '天下民安-消防救援',
    subTitle: '企业定制',
    info: '实时数据调配，指挥部联调，同步各级省市数据<br>救援队可以实时根据灾情做出最快速的响应',
    icon: require('../images/index/example-icon3.png'),
    icona: require('../images/index/example-icon3-active.png'),
    color: '#0D91FF',
    exampleImg: require('../images/index/example3.png')
  },
  {
    title: '美淘APP',
    subTitle: '美容品牌',
    info: '平台不仅拥有拼团、砍价等多种购物方式<br>还可以对美容项目进行分期付款<br>减轻消费者压力的同时提升了医院销售额',
    icon: require('../images/index/example-icon4.png'),
    icona: require('../images/index/example-icon4-active.png'),
    color: '#FF6F70',
    exampleImg: require('../images/index/example4.png')
  },
  {
    title: '越野车发烧友APP',
    subTitle: '硬件对接',
    info: '硬件对接实时检查车辆性能<br>还能分享行程和自己跑图成绩',
    icon: require('../images/index/example-icon5.png'),
    icona: require('../images/index/example-icon5-active.png'),
    color: '#CA5959',
    exampleImg: require('../images/index/example5.png')
  },
  {
    title: '嘟嘟顺风车',
    subTitle: '打车软件',
    info: '抓住市场车费较高且司机利润低的痛点<br>用轻资产的思路运行平台<br>压低客单价的同时提高车主收益',
    icon: require('../images/index/example-icon6.png'),
    icona: require('../images/index/example-icon6-active.png'),
    color: '#FEC10D',
    exampleImg: require('../images/index/example6.png')
  },
  {
    title: '工地集成-ERP系统',
    subTitle: '物资管理',
    info: '将传统物流行业信息化<br>让工作的每一个环节都可进行追溯<br>降低人力成本简化流程',
    icon: require('../images/index/example-icon7.png'),
    icona: require('../images/index/example-icon7-active.png'),
    color: '#154EE4',
    exampleImg: require('../images/index/example7.png')
  }
];

class IndexPage {
  constructor(el) {
    let $els = $(el);
    let $el = $els.eq(0);
    if ($el) {
      this.$dom = $el;
    } else {
      this.$dom = $els;
    }
    this.exampleTimer = null;
    this.exampleIndex = -1;
    this.processIndex = 0;
    this.processAutoTimer = null;
    this.clickStr = '';
    this.formData = {
      name: '',
      contact: ''
    }
    this.init();
  }
  init() {
    this.initEvent();
    this.menuSwitch();
    // this.serviceTab();
    // this.userTouchmove();
    this.initPlayer();
    this.renderExampleIcons();
    this.initSwiper();
    let block = sessionStorage.getItem('blockName');
    if (block) {
      this.gotoBlock(block);
      sessionStorage.removeItem('blockName');
    }
    if (navigator.userAgent.indexOf('UCBrowser') > -1) {
      this.clearUcKeyword();
    }
  }
  initEvent() {
    this.$dom.on('click', () => {
      if (this.$moreMenu && this.$moreMenu.hasClass('active')) {
        this.$moreMenu.click();
      }
      if (window.isMobile && this.closeProcess) {
        this.closeProcess = false;
      }
    });
    this.$dom.find('#process-btn').on('click', this.gotoBlock.bind(this, 'process-btn'));
    this.$dom.find('#example-box .right_box .btn').click(this.showExampleDetails.bind(this));
    this.$dom.find('#video-play-btn').on('click', this.onPlayVideo.bind(this));
    this.$dom.find('#contact-btn').on('click', this.onSubmitUserInfo.bind(this));
    this.$dom.find('.contact_box input').on('blur', this.onValidateData.bind(this));
    this.$dom.find('#example_btn2').on('click', () => {
      this.onClickStatistics('other', 2);
      this.gotoBlock('example');
    });
    $('#message-box .ok-btn').on('click', () => {
      $('#message-box').fadeOut();
    });
    $('#example-details').click(this.hideExampleDetails.bind(this));
    window.onbeforeunload = () => {
      if (!this.isxend && this.player) {
        this.onPlayStatistics();
      }
    }
    let $caseBtn = this.$dom.find('#case-nav');
    let $caseBox = $caseBtn.find('.case_box');
    let caseTimer = null;
    $caseBtn.on('mouseenter', (e) => {
      e.stopPropagation();
      if (caseTimer) {
        clearTimeout(caseTimer);
        caseTimer = null;
      } else {
        $caseBox.css('display', 'block').removeClass('fadeOutUp').addClass('fadeInDown');
      }
      return false;
    });
    $caseBtn.on('mouseleave', (e) => {
      clearTimeout(caseTimer);
      caseTimer = setTimeout(() => {
        $caseBox.css('display', 'none');
        caseTimer = null;
      }, 500);
    });
  }

  initSwiper() {
    let swiper = new Swiper('.swiper-container', {
      loop : true,
      autoplay: {
        delay: 5000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    });
  }

  onValidateData(e) {
    let $el = $(e.target);
    let type = $el.data('type');
    let value = $el.attr('value');
    if (!value || value.length<=0) {
      $el.addClass('no-data');
      return false;
    }
    if (type == 'value') {
      let telReg1 = /^1[3456789]\d{9}$/;
      let telReg2 = /0\d{2}-\d{7,8}/;
      let emailReg = /[a-zA-Z0-9]{1,10}@[a-zA-Z0-9]{1,5}\.[a-zA-Z0-9]{1,5}/;
      if (telReg1.test(value) || telReg2.test(value) || emailReg.test(value)) {
        $el.removeClass('no-data');
        this.formData.contact = value;
      } else {
        $el.addClass('no-data');
      }
    }
  }
  showMessage() {
    let $message = $('#message-box');
    $message.fadeIn();
  }
  onSubmitUserInfo() {
    let $contactInputs = this.$dom.find('input');
    if (this.formData.contact.length<=0) {
      $contactInputs.eq(0).addClass('no-data');
      return false;
    }
    $contactInputs.removeClass('no-data');
    // 提交数据
    let _self = this;
    $.ajax({
      url: 'http://148.70.37.198:8808/customer/info',
      type: 'POST',
      contentType: 'application/json;charset=UTF-8',
      dataType: 'json',
      data: JSON.stringify({
        mobile: this.formData.contact
      }),
      success: function(res) {
        _self.formData = {
          name: '',
          contact: ''
        }
        $contactInputs.eq(0).attr('value', '');
        $contactInputs.eq(1).attr('value', '');
        _self.showMessage();
      }
    });
  }
  onClickStatistics(classify, type) {
    let clickStr = classify + type;
    if (this.clickStr == clickStr || process.env.NODE_ENV === 'development') {
      console.log(classify, type);
      return false;
    }
    this.clickStr = clickStr;
    let url = 'http://148.70.37.198:8808/click/' + classify + '/' + type;
    $.ajax({
      url: url,
      type: 'GET'
    });
  }
  onPlayStatistics() {
    if (!this.player) {
      return;
    }
    let currentTime = parseInt(this.player.currentTime());
    if (currentTime) {
      $.ajax({
        url: 'http://148.70.37.198:8808/video/play/record',
        type: 'POST',
        contentType: 'application/json;charset=UTF-8',
        dataType: 'json',
        data: JSON.stringify({
          userIp: returnCitySN['cip'] || '0.0.0.0',
          playTime: currentTime
        })
      });
    }
  }
  renderExampleIcons() {
    let $exampleIcons = this.$dom.find('#example_icon-box');
    let tpl = '';
    for (let i in exampleData) {
      let item = exampleData[i];
      tpl += `
        <div class="example_icon" data-index='${i}'>
          <img src="${item.icon}"/>
          <img src="${item.icona}"/>
          <p>${item.subTitle}</p>
        </div>
      `;
    }
    tpl += '<div class="example_icon">咨询更多经典案例</div>'
    $exampleIcons.html(tpl);

    let $icons = this.$dom.find('.example_icon[data-index]');
    $icons.click((e) => {
      let $el = $(e.currentTarget);
      let index = $el.data('index');
      $icons.removeClass('active');
      $el.addClass('active');
      this.exampleSwitch(index);
      clearInterval(this.autoExampleTimer);
    });
    $icons.eq(0).click();
    this.autoExampleSwitch($icons);
  }
  menuSwitch() {
    let $moreMenu = this.$dom.find('#more-btn');
    let $navList = this.$dom.find('#nav-list');
    let $navItems = $navList.find('a');
    $moreMenu.on('click', e => {
      e.stopPropagation();
      if (window.isMinScreen) {
        let isopen = $moreMenu.hasClass('active');
        if (isopen) {
          $moreMenu.removeClass('active');
          $navList.removeClass('fadeInRight').addClass('fadeOutRight');
        } else {
          $moreMenu.addClass('active');
          $navList.removeClass('fadeOutRight').addClass('fadeInRight').css('display', 'block');
        }
      }
      return false;
    });
    $navList.on('click', e => {
      let $el = $(e.target);
      let index = $el.data('index');
      if (index == '1') {
        this.gotoBlock('process');
      } else if (index == '2') {
        this.gotoBlock('video');
      } else if (index == '3') {
        this.gotoBlock('example');
      } else {
        this.gotoBlock('home');
      }
      $navItems.removeClass('active');
      if (index > 0) {
        $navItems.eq(index).addClass('active');
      }
    });
    // 滚动检测菜单
    let $block1 = this.$dom.find('#block1');
    let $block2 = this.$dom.find('#block2');
    let $block3 = this.$dom.find('#block3');
    let $block4 = this.$dom.find('#block4');
    let $block5 = this.$dom.find('#block5');
 
    let $header = this.$dom.find('.header_wrap').eq(0);

    let $doc = $(document);
    let topNavTop = $block1.height() + 10;
    let headerHeight = 0;
    if (window.isMinScreen) {
      headerHeight = $header.height() * 0.5;
    }
    let blockTop1 = $block2.offset().top + headerHeight;
    let blockTop2 = $block3.offset().top + headerHeight;
    let blockTop3 = $block4.offset().top + headerHeight;
    let blockTop4 = $block5.offset().top + headerHeight;
    $doc.on('scroll', e => {
      let top = $doc.scrollTop();
      console.log(top);

      // if (top > topNavTop) {
      //   if ($doc.attr('isTopNav') != '1') {
      //     $doc.attr('isTopNav', '1');
      //     $block1.addClass('fixed fadeInDown');
      //   }
      // } else {
      //   if ($doc.attr('isTopNav') != '0') {
      //     $doc.attr('isTopNav', '0');
      //     $block1.removeClass('fixed fadeInDown');
      //   }
      // }
      // if (this.isGotoBlock) {
      //   return false;
      // }
      // $navItems.removeClass('active');
      // if (top > blockTop1 && !$process.data('isShow')) {
      //   $process.data('isShow', 1);
      //   $process.find('#p-title').addClass('fadeIn');
      //   $process.find('#p-info').addClass('fadeIn');
      //   this.processInit();
      // }
      // if (top > blockTop1 && top < blockTop2) {
      //   this.onClickStatistics('ep', 1);
      // } else if (top > blockTop2 && top < blockTop3) {
      //   if (this.closeProcess && this.isProcessInit) {
      //     this.processAutoShow();
      //   }
      //   $navItems.eq(1).addClass('active');
      //   this.onClickStatistics('ep', 2);
      // } else if (top > blockTop4 && top < blockTop5) {
      //   $navItems.eq(2).addClass('active');
      //   this.onClickStatistics('ep', 4);
      // } else if (top > blockTop5) {
      //   $navItems.eq(3).addClass('active');
      //   this.onClickStatistics('ep', 3);
      // }
    });
    this.$moreMenu = $moreMenu;
    return false;
  }
  serviceTab() {
    let $parent = this.$dom.find('.service_box').eq(0);
    let $tli = $parent.find('#tab-nav li');
    let $lists = $parent.find('.service-list');
    let $title = $parent.find('.s-title');
    let $info = $parent.find('.s-info');
    let timer = null;
    $tli.on('click', function(e) {
      $tli.removeClass('active');
      let $el = $(this);
      let index = parseInt($el.data('index'));
      let data = serviceData[index];
      $title.text(data.title).addClass('fadeInRight');
      $info.text(data.info).addClass('fadeInRight');
      clearTimeout(timer);
      timer = setTimeout(() => {
        $info.removeClass('fadeInRight');
        $title.removeClass('fadeInRight');
        clearTimeout(timer);
      }, 500);
      $el.addClass('active');
      $lists
        .hide()
        .eq(index)
        .css('display', 'flex');
    });
    $tli.eq(0).click();
  }
  processAutoShow() {
    this.closeProcess = false;
    let $processItems = this.$dom.find('#process-box li[class!=before-item]');
    function autoShow() {
      clearTimeout(this.processAutoTimer);
      this.processAutoTimer = setTimeout(() => {
        this.processIndex++;
        let index = this.processIndex % $processItems.length;
        this.isAutoClick = true;
        $processItems.eq(index).click();
        if (this.closeProcess) {
          return false;
        }
        autoShow.call(this);
      }, 3000);
    }
    autoShow.call(this);
  }
  processInit() {
    if (this.isProcessInit) {
      return false;
    }
    this.isProcessInit = true;
    let $parent = this.$dom.find('#process-box');
    let $processContent = $parent.find('.process-content').eq(0);
    if ($processContent.data('ishow')) {
      return false;
    }
    let $processUl = $parent.find('ul').eq(0);
    let $processItems = $processUl.find('li[class!=before-item]');
    let $processSpan = $parent.find('.decorate_box span');
    let timer = null;
    let delay = 1;
    $processSpan.eq(0).addClass('fadeIn');
    $processSpan.eq(1).addClass('fadeIn');
    $processItems.each((index, item) => {
      delay += 0.1;
      $(item).data('index', index);
    });
    for (let i in processImgs) {
      let item = processImgs[i];
      let eimg = new Image();
      eimg.src = item;
      $processContent.append(eimg);
    }
    let $pimgs = $processContent.find('img');
    let $ptitle = $processContent.find('.title').eq(0);
    let $pSubtitle = $processContent.find('.sub-title').eq(0);
    let $ptitleInfo = $processContent.find('.title-info').eq(0);
    let _self = this;
    $processItems.click(function(e) {
      let $el = $(this);
      let index = $el.data('index');
      $processContent.css('opacity', 0);
      $processItems.removeClass('active');
      $el.addClass('active');
      _self.processIndex = index;
      timer = setTimeout(() => {
        $processContent.css('opacity', 1);
        $pimgs.css('display', 'none');
        $pimgs.eq(index).css('display', 'block');
        $ptitle.text(processTextData[index].title);
        $pSubtitle.text(processTextData[index].subTitle);
        $ptitleInfo.text(processTextData[index].info);
        clearTimeout(timer);
      }, 800);
      if (!_self.isAutoClick) {
        _self.onClickStatistics('dev', index + 1);
      }
      _self.isAutoClick = false;
      e.stopPropagation();
      if (window.isMobile) {
        this.closeProcess = true;
      }
    });
    $processUl.mouseenter(e => {
      this.closeProcess = true;
      clearTimeout(this.processAutoTimer);
    });
    $processUl.mouseleave(e => {
      this.processAutoShow();
    });
    this.isAutoClick = true;
    $processItems.eq(0).click();
    $processContent.data('ishow', 1);
    setTimeout(() => {
      this.processAutoShow();
    }, delay * 1000);
  }

  gotoBlock(index) {
    let $el = null;
    let $top = this.$dom.find('.top-nav_box').eq(0);
    if (!label) {
      return false;
    }
    this.isGotoBlock = true;

    if (index == 1)
    if (label == 'process') {
      $el = this.$dom.find('#block' );
      this.onClickStatistics('top', 2);
    } else if (label == 'process-btn') {
      $el = this.$dom.find('#process-box');
      this.onClickStatistics('other', 1);
    } else if (label == 'example') {
      $el = this.$dom.find('#example-box');
      this.onClickStatistics('top', 3);
    } else if (label == 'video') {
      $el = this.$dom.find('#video-box');
      this.onClickStatistics('top', 4);
    } else {
      this.onClickStatistics('top', 1);
    }
    let top = 1;
    if ($el) {
      top = $el.offset().top - $top.height() - 10;
      if (window.isMinScreen) {
        top -= $top.height();
      }
    }
    if (top) {
      $('html,body').animate(
        {
          scrollTop: top
        },
        300,
        () => {
          this.isGotoBlock = false;
        }
      );
    }
  }
  autoExampleSwitch($icons) {
    this.autoExampleTimer = setInterval(() => {
      let index = this.exampleIndex + 1;
      if (index >= $icons.length) {
        index = 0;
      }
      $icons.eq(index).click();
    }, 5000);
  }
  exampleSwitch(index) {
    if (index < 0 || index == this.exampleIndex) {
      return false;
    }
    let $el1 = this.$dom.find('#example1');
    let $el2 = this.$dom.find('#example2');
    if ($el2.css('opacity') == '1') {
      let temp = $el2;
      $el2 = $el1;
      $el1 = temp;
    }
    let width = $el1.width();
    width *= -2;
    $el2.attr('style', '');
    // $el1.attr('style', '');
    $el2.css({
      'z-index': 5,
      left: 'auto',
      right: 'auto'
    });
    $el2.removeClass('fadeOut');
    $el2.css('right', width);
    $el1.addClass('fadeOut').css('z-index', 4);
    this.exampleIndex = index;
    clearTimeout(this.exampleTimer);
    this.exampleTimer = setTimeout(() => {
      $el2.css({
        opacity: 1,
        display: 'flex',
        transition: 'right 1s ease, left 1s ease'
      });
      $el2.css('right', 0);
      $el2.find('img').attr('src', exampleData[index].exampleImg);
      $el2.find('.title').eq(0).text(exampleData[index].title);
      let $tinfos = $el2.find('.title-info');
      $tinfos.eq(0).html(exampleData[index].info);
      // $tinfos.eq(0).html(exampleData[index].subTitle);
    }, 100);
  }
  showExampleDetails() {
    // let $eDetails = $('#example-details');
    // let $pimg = $eDetails.find('#phone-img');
    // let $dimg = $eDetails.find('#detail-img');
    // $pimg.attr('src', exampleImg[this.exampleIndex]);
    // $dimg.attr('src', exampleDetailsImg[this.exampleIndex]);
    // this.domScrollTop = $(document).scrollTop();
    // this.$dom.css('display', 'none');
    // $eDetails.fadeIn();
    // window.scrollTo(0, 0);
    this.onClickStatistics('other', 2);
    window.location.href = './example.html?eid=' + this.exampleIndex;
  }
  hideExampleDetails() {
    let $eDetails = $('#example-details');
    $eDetails.fadeOut();
    this.$dom.css('display', 'block');
    window.scrollTo(0, this.domScrollTop);
  }
  userTouchmove() {
    let $example = this.$dom.find('#example-box');
    let startX = 0;
    let startY = 0;
    let isStart = false;
    let isEnd = true;
    $example.on('touchstart', e => {
      startX = e.originalEvent.changedTouches[0].pageX;
      startY = e.originalEvent.changedTouches[0].pageY;
      isStart = true;
    });
    $example.on('touchmove', e => {
      if (!isStart) {
        return;
      }
      let moveX = e.originalEvent.changedTouches[0].pageX;
      let moveY = e.originalEvent.changedTouches[0].pageY;
      let distanceX = moveX - startX;
      let distanceY = moveY - startY;
      if (Math.abs(distanceX) > 80) {
        isEnd = false;
      }
      if (Math.abs(distanceY) > 30) {
        isEnd = true;
      }
      if (isEnd) {
        return;
      }
      if (distanceX > 80) {
        this.exampleSwitch('left');
        isEnd = true;
        isStart = false;
      } else if (distanceX < -80) {
        this.exampleSwitch('right');
        isEnd = true;
        isStart = false;
      }
    });
    $example.on('touchend', e => {
      isEnd = true;
      isStart = false;
    });
  }
  clearUcKeyword() {
    $('a').each(function(index, element) {
      try {
        var thishref = $(this).attr('href');
        var thisText = $(this).html();
        if (thishref.indexOf('uc.cn') >= 0) {
          $(this).replaceWith(thisText);
        }
      } catch (e) {
        console.error('清除关键字错误');
      }
    });
    $('script').each(function(index, element) {
      try {
        var thissrc = $(this).attr('src');
        if (thissrc.indexOf('ucbrowser') >= 0) {
          $(this).remove();
        }
      } catch (e) {
        console.error('清除关键字错误');
      }
    });
  }
  initPlayer() {
    let $playBtn = this.$dom.find('#video-play-btn');
    let _self = this;
    this.player = videojs('my-video', { fluid: true }, function onPlayerReady() {
      this.on('play', function() {
        $playBtn.fadeOut();
      });
      this.on('pause', function() {
        $playBtn.fadeIn();
      });
      this.on('ended', function() {
        $playBtn.fadeIn();
        if (!this.isxend) {
          _self.onPlayStatistics();
          _self.isxend = true;
        }
      });
    });
  }
  onPlayVideo() {
    this.player.play();
  }
}

new IndexPage('.layout_wrap');