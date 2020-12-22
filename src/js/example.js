const exampleImgs = [
  [
    [
      require('../images/example/10-1.1.png'),
      require('../images/example/10-1.2.png'),
      require('../images/example/10-1.3.png'),
    ],
    [
      require('../images/example/10-3.1.png'),
      require('../images/example/10-3.2.png'),
      require('../images/example/10-3.3.png'),
    ],
    [
      require('../images/example/10-2.1.png'),
      require('../images/example/10-2.2.png'),
      require('../images/example/10-2.3.png'),
    ],
  ],
  [
    require('../images/example/1.1.png'),
    require('../images/example/1.2.png'),
    require('../images/example/1.3.png'),
    require('../images/example/1.4.png'),
    require('../images/example/1.5.png'),
    require('../images/example/1.6.png'),
    require('../images/example/1.7.png'),
    require('../images/example/1.8.png'),
    require('../images/example/1.9.png')
  ],
  [
    require('../images/example/2.1.png'),
    require('../images/example/2.2.png'),
    require('../images/example/2.3.png'),
    require('../images/example/2.4.png'),
    require('../images/example/2.5.png'),
    require('../images/example/2.6.png'),
    require('../images/example/2.7.png')
  ],
  [
    require('../images/example/3.1.png'),
    require('../images/example/3.2.png'),
    require('../images/example/3.3.png'),
    require('../images/example/3.4.png'),
    require('../images/example/3.5.png'),
    require('../images/example/3.6.png'),
    require('../images/example/3.7.png'),
    require('../images/example/3.8.png'),
    require('../images/example/3.9.png')
  ],
  [
    require('../images/example/5.1.png'),
    require('../images/example/5.2.png'),
    require('../images/example/5.3.png'),
    require('../images/example/5.4.png'),
    require('../images/example/5.5.png'),
    require('../images/example/5.6.png'),
    require('../images/example/5.7.png'),
    require('../images/example/5.8.png'),
    require('../images/example/5.9.png'),
    require('../images/example/5.10.png'),
  ],
  [
    require('../images/example/4.1.png'),
    require('../images/example/4.2.png'),
    require('../images/example/4.3.png'),
    require('../images/example/4.4.png'),
    require('../images/example/4.5.png'),
    require('../images/example/4.6.png'),
  ],
  [
    require('../images/example/6.1.png'),
    require('../images/example/6.2.png'),
    require('../images/example/6.3.png'),
    require('../images/example/6.4.png'),
    require('../images/example/6.5.png'),
    require('../images/example/6.6.png'),
    require('../images/example/6.7.png'),
  ],
  [
    require('../images/example/7.1.png'),
    require('../images/example/7.2.png'),
    require('../images/example/7.3.png'),
    require('../images/example/7.4.png'),
    require('../images/example/7.5.png'),
    require('../images/example/7.6.png'),
    require('../images/example/7.7.png'),
    require('../images/example/7.8.png'),
    require('../images/example/7.9.png'),
  ],
  [
    require('../images/example/8.1.png'),
    require('../images/example/8.2.png'),
    require('../images/example/8.3.png'),
    require('../images/example/8.4.png'),
    require('../images/example/8.5.png'),
    require('../images/example/8.6.png'),
    require('../images/example/8.7.png'),
    require('../images/example/8.8.png'),
    require('../images/example/8.9.png'),
  ],
  [
    require('../images/example/9.1.png'),
    require('../images/example/9.2.png'),
    require('../images/example/9.3.png'),
    require('../images/example/9.4.png'),
    require('../images/example/9.5.png'),
    require('../images/example/9.6.png'),
    require('../images/example/9.7.png'),
    require('../images/example/9.8.png'),
  ],
  [
    require('../images/example/11.1.png'),
    require('../images/example/11.2.png'),
    require('../images/example/11.3.png'),
    require('../images/example/11.4.png'),
  ],
  [
    require('../images/example/12.1.png'),
    require('../images/example/12.2.png'),
    require('../images/example/12.3.png'),
  ],
  [
    require('../images/example/13.1.png'),
    require('../images/example/13.2.png'),
    require('../images/example/13.3.png'),
  ],
  [
    require('../images/example/14.1.png'),
    require('../images/example/14.2.png'),
    require('../images/example/14.3.png'),
    require('../images/example/14.4.png'),
  ],
  [
    [
      require('../images/example/15-1.1.png'),
      require('../images/example/15-1.2.png'),
      require('../images/example/15-1.3.png'),
    ],
    [
      require('../images/example/15-2.1.png'),
      require('../images/example/15-2.2.png'),
      require('../images/example/15-2.3.png'),
    ],
  ],
]

const exampleInfos = [{
    type: '汽车服务',
    children: [{
        name: '鸿日电动',
        platform: '小程序端、APP端',
        trade: '汽车服务',
        content: '鸿日电动是一款简单实用为汽修行业量身打造的专业汽修管理系统。系统可以建立车辆维保档案、维修开单管理、销售管理、库存管理、维修过程追溯、会员管理制度，管理决策支持，微信宣传推广，车主微信推送等功能。车主可通过微信预约进场。',
      },
      {
        name: 'Benzol小程序',
        platform: '小程序',
        trade: '汽车服务',
        content: '汽车保养服务站是一款简单实用为汽修行业量身打造的汽车综合养护管理系统。系统可以建立车辆维保档案、维修开单管理、道路救援管理、客户管理、财务管理、微信宣传推广，车主微信推送等功能。车主可通过微信预约进场。',
      },
      {
        name: '三国洗车',
        platform: '公众号',
        trade: '汽车服务',
        content: '三国洗车定位于为车主提供全面的汽车服务！品牌下设上门洗车和汽车美容装潢两大服务体系，致力于汽车服务产业链的整合及相关服务方式的创新与推广。 三国洗车上门洗车经营形式为车主提供上门洗车服务，让车主足不出户即可享受五合一价值洗车服务，包括清洗，车身上光，玻璃防雾，轮胎增黑，车内消毒；汽车美容装潢店经营形式为给车主提供专职清洗，汽车全方位保养，装潢改装及汽车饰品销售一体化的综合汽车服务。两种服务体系在三国洗车品牌统一带领下并驾齐驱，以灵活的经营模式和好的服务效果赢得了各省市各地车主的认可，并一如既往的真诚服务和扎实技术赢得了各省市各地服务商的一致好评！',
      },
    ]
  },
  {
    type: '教育管理',
    name: '乐融幼儿园',
    platform: '小程序端',
    trade: '教育培训 学校管理',
    content: '“幼教+互联网”安全服务平台，可为幼教机构提供实时监控、安全接送、健康防护、智慧办公、校园智育整体化解决方案，适配不同角色定制,同样爱不释手,园长/教师/家长各取所需。家长端：把幼儿园装进口袋，不再错失孩子珍贵的成长瞬间。教师端：校园共育实时沟通，海量教学资源精准推送，教学工作轻松自如。园长端：随时随地管理幼儿园。将幼儿园琐碎的工作转移到云端，实现移动办公、园所宣传、考勤管理、招生报名、园务管理等的信息化，极大地提高园长和老师的办公效率。'
  },
  {
    type: '餐饮配送',
    name: '鼠仆仆',
    platform: 'APP端',
    trade: '外卖配送',
    content: '随着外卖业务覆盖率的不断提高，本地生活服务市场正在被激活，不论是商场超市、便利店还是传统餐厅，都在积极的互联网化、进一步提高外卖+配送服务的比例以获得更多用户，那么为了更好的盈利，选择自建外卖配送平台不容置疑是一个最合适的选择。'
  },
  {
    type: '国家政企',
    name: '天下民安',
    platform: 'APP端、pc端',
    trade: '国家政企、消防救援、其他',
    content: '随着国民经济的快速发展，国内大多数消防、反恐、安检等单位使用的救援通讯设备已经不能满足移动互联网时代高效、安全、精确、便捷的需求，“天下民安”是----为解决这一问题而自主研发设计的一款智能消防定位指挥调度系统，可实现实时数据调配，指挥部联调，同步各级省市数据，救援队可以实时根据灾情做出最快速的响应。'
  },
  {
    type: '医疗美容',
    name: '美淘APP',
    platform: 'APP端',
    trade: '医美、美容护肤、移动电商',
    content: '伴随着移动互联网的崛起和医学美容市场需求的发展，互联网医学美容行业应运而生，随之越来越多的医学美容营销采取线上咨询，预约，购买，分享的方式，引导求美者进行线下的整形美容，实现线上线下结合，这样一来也解决了用户与医院信息不对称的问题，提升用户信任度，平台对医院，医生严格认证，可起到第三方监督平台作用，同时价格也透明化，降低了渠道利润。'
  },
  {
    type: '软硬件',
    name: '越野车发烧友app',
    platform: 'APP端',
    trade: '物联网、智能软硬件',
    content: '随着科技的不断进步，越来越多的智能科技产品来到我们身边，例如智能手表，智能门锁，智能扫地机等，这些科技产品确实给我们带来了很大的便利，不过单单只有硬件是不够的，想要使用好这些产品也需要软件的配合。而智能硬件APP开发则是联系智能硬件与用户之间的一个枢纽，当企业研究出一款智能硬件后，需要通过手机客户端将其功能展示给用户，这样的手机客户端便是智能硬件APP。'
  },
  {
    type: '生活服务',
    name: '打车软件',
    platform: '小程序端、APP端',
    trade: '生活服务、交通出行',
    content: '结合国内互联网出行服务市场行业现状，所研发的原生互联网出行服务软件。'
  },
  {
    type: '物流运输',
    name: '工地集成',
    platform: 'APP端',
    trade: '物流运输、ERP系统',
    content: '当下，物流行业竞争异常激烈，对于任何一家物流企业而言，降低物流成本无疑是提高利润的关键，开发物流APP能为企业搭建专属物流O2O平台，将现有物流资源同互联网技术相结合，利用移动互联网优势，在管理监控、运营作业、金融支付等方面实现信息共享，降低平台物流成本。而车辆运输管理一直是一个头疼的问题，物流APP便能轻松解决这一问题，货车车主通过查看物流APP便能即时了解所在地货物情况，以便合理安排出车。'
  },
  {
    type: '社交通讯',
    name: '即时通信',
    platform: 'APP端',
    trade: '企业服务、聊天软件、社区服务',
    content: '社交app开发是专门为手机、平板等移动设备用户打造的移动社交平台，虽然线上社交出现已经有很多年，但是社交APP无疑是当下受众最广的线上社交平台。不管是在功能还是便捷性上都要好很多，社交APP不仅能实现实时通讯，而且还能打造“圈子社交”、“兴趣社交”、“场景社交”等新社交模式。与传统的PC端社交相比，移动社交既能够让用户完成即时聊天，又能随时随地分享自己的生活点滴，最大化的让网络最大程度地服务于个人的现实生活。'
  },
  {
    type: '技能培训',
    name: '德语说',
    platform: 'APP端',
    trade: '语言文化、教育技能培训',
    content: '随着网络时代的发展，网络上学习也成了一个便利优势，优秀人才都要具备第二门语言的能力，如何学好第二门语言，是每一个学习外语的人经常思考的问题，因此“德语说”针对德语学习制做了满足听,读,说,写,测全场景教育管理需求的在线学习培训软件。'
  },
  {
    type: '物联网',
    name: '贝克森云灌溉',
    platform: '小程序端、APP端',
    trade: '物联网',
    content: '随着5G时代和物联网的不断发展，智能化电子产品也呈现出日新月异的发展势头，各产品制造商之间的竞争也变得更加激烈与残酷。市场对于产品的规划设计、技术研发的实力要求也越来越高，猎龙科技结合多年的开发经验可提供了产品规划设计、用户调研、项目实施等全面的专业技术支持，帮助传统制造商转型与变革。'
  },
  {
    type: '网站建设',
    name: '卓航航空官网',
    platform: '网站',
    trade: '校区服务',
    content: '成都卓航航空官网建设，着重抓住学校培训特点，提供合适的官网设计方案。通过网站目标定位，针对性选择布局，重点展示了客户所关心的内容；并以简洁明朗的设计风格，清晰展现公司水平实力，确保一秒抓住目标用户眼球，给用户留下良好的第一印象。集中创建页面图片的排版大小，智能根据用户行为及使用的设备环境进行相应布局。猎龙科技以先进的前端开发框架，为企业打造响应精准，切换高效的响应式网站。无论网站在哪一种终端下，都能够灵活转换，弹性伸缩，随时向用户展现完美优雅的布局和设计。'
  },
  {
    type: '内部管理',
    name: '盛裕生产管理系统',
    platform: 'PC端',
    trade: '内部管理',
    content: '生产管理系统是指建立在信息技术基础上以系统化的管理思想企业决策及员工提供决策运行手段的管理平台；实际应用中更重要的是应该体现其“管理工具”的本质。生产管理系统主要宗旨是对企业所拥有的人、财、物、信息、时间和空间等综合资源进行综合平衡和优化管理，协调企业各管理部门，围绕市场导向开展业务活动，提高企业的核心竞争力，从而取得最好的经济效益。因此，生产管理系统首先是一个软件系统，同时是一个管理工具。它是IT技术与管理思想的融合体，也就是先进的管理思想借助电脑，来达成企业的管理目标。'
  },
  {
    type: '金融系统',
    name: '医美贷款',
    platform: 'APP端',
    trade: '金融',
    content: '金融  产品简介：猎龙贷款业务管理系统是一款针对传统小贷企业、资产管理机构、供应链金融平台等企业、机构贷款管理的高端综合贷款管理系统，致力于解决传统贷款贷款管理混乱、效率低、成本高等问题，支持多个公司、多个部门、多种贷款业务类型配置，通过系统组织架构及角色数据权限配置实现公司、部门、个人数据分离，保障数据隐私性，且支持引入第三方风控数据报告，进行筛选过滤不良借款信息等，为贷款业务提供高效管理及审批处理等操作。'
  },
  {
    type: '供需平台',
    children: [{
        name: '海啰(网红)APP',
        platform: 'APP端',
        trade: '聊天直播带货',
        content: '网红直播带货系统，以直播平台为依托，是一款集成了商店运营和商城管理功能的电商应用系统，为运营方和主播方轻松打造“变直播变卖货”营销方案，提供收益新入口，在展现优质视频内容的同时，拉动平台消费，从而体现出巨大的商业价值',
      },
      {
        name: '赞赞羊APP',
        platform: 'APP端',
        trade: '供需平台',
        content: '供需平台  产品简介：短视频点赞任务系统是通过给短视频点赞赚钱的工具，用户可以在短视频点赞平台上面找到任务接单，这些任务都是给短视频点赞任务。如果自身有需要，也可以通过短视频点赞平台来帮助自己发布点赞任务。',
      }
    ]
  },
]
const jsonStr = [
  `<div class="swiper-container" id="container_1"><div class="swiper-wrapper"><div class="swiper-slide"><img src="./images/ef3a776c95f1fc326bbf49d74dd90f21.png"></div> <div class="swiper-slide">
           <img src="./images/024a0f41303a7dd2a787507489d81cad.png"> </div><div class="swiper-slide"><img src="./images/8fcbe8020519d408c1c26565ddc3582c.png"> </div></div><div class="swiper-pagination"></div>
          </div>`,
  `<div class="swiper-container" id="container_2">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="./images/84fa0781df14bc5d788664ea0ebed357.png">
        </div>
        <div class="swiper-slide">
          <img src="./images/d422b55d32b25c470cba9b7e8dbe3a92.png">
        </div>
        <div class="swiper-slide">
          <img src="./images/c157c1b98eadbe2058af9abba33d3a6f.png">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>`,
  `<div class="swiper-container" id="container_3">
   <div class="swiper-wrapper">
     <div class="swiper-slide">
       <img src="./images/aeb45c3f79a991eb29af9dfd31bd0b32.png">
     </div>
     <div class="swiper-slide">
       <img src="./images/693958c0d4bf81bee6d569904f2a67b6.png">
     </div>
     <div class="swiper-slide">
       <img src="./images/b48397ba7e821a7ff2966c73789f6e26.png">
     </div>
   </div>
   <div class="swiper-pagination"></div>
 </div>`
]
const jsonStr1 = [
  `<div class="swiper-container">
  <div class="swiper-wrapper">
    <div class="swiper-slide">
      <img src="./images/d86ab3347d68f7029e4bf1a1028f2b4c.png">
    </div>
    <div class="swiper-slide">
      <img src="./images/8b4ba29331b25f488fd712ec43327823.png">
    </div>
    <div class="swiper-slide">
      <img src="./images/f0667ae87aab9c7384ca0c072fa554d4.png">
    </div>
  </div>
  <div class="swiper-pagination"></div>
</div>`,
  `<div class="swiper-container">
  <div class="swiper-wrapper">
    <div class="swiper-slide">
      <img src="./images/4ca8057451771ff91c5e67ac9b68e8c5.png">
    </div>
    <div class="swiper-slide">
      <img src="./images/dcc6c053dcbbb25920e1c6bb0a81933b.png">
    </div>
    <div class="swiper-slide">
      <img src="./images/ef596304505b231bb440a71c677c69a9.png">
    </div>
  </div>
  <div class="swiper-pagination"></div>
</div>`
]
const btnStr = ['qichefuwufanganbaojia','jiaoyuguanlifanganbaojia','canyinpeisongfanganbaojia','guojiazhengqifanganbaojia',
                'yiliaomeirongfanganbaojia', 'ruanyingjianfanganbaojia', 'shenghuofuwufanganbaojia','wuliuyunshufanganbaojia',
                'shejiaotongxunfanganbaojia', 'jinengpeixunfanganbaojia', 'wulianwangfanganbaojia', 'wangzhanjianshefanganbaojia',
                'neibuguanlifanganbaojia', 'jinrongxitongfanganbaojia', 'gongxupingtaifanganbaojia', 'gengduofanganbaojia'
]
var indexClick = 0;
class ExamplePage {
  constructor(el) {
    let $els = $(el);
    let $el = $els.eq(0);
    if ($el) {
      this.$dom = $el;
    } else {
      this.$dom = $els;
    }
    this.init();
  }
  init() {
    this.menuSwitch();
    if (navigator.userAgent.indexOf('UCBrowser') > -1) {
      this.clearUcKeyword();
    }
    this.getUrlQuery();
    this.renderProjectList();
    this.scrollPage();
    this.initEvent();
    this.initSwiper();
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
    window.onunload = () => {
      window.scrollTo(0, 0);
    };
    // this.$dom.find('#use-btn').on('click', () => {
    //    onClickContact();
    // })
    // this.$dom.find('.btnM').on('click', () => {
    //   // onClickContact();
    // })

    $(document).on('click', '#use-btn',function(){
      onClickContact(btnStr[indexClick]+ '=PC',);
    });
    $(document).on('click', '.btnM',function(){
      onClickContact(btnStr[indexClick]);
    });  
  }

  initSwiper() {
    let swiper = new Swiper('.swiper-container', {
      loop: true,
      autoplay: {
        delay: 5000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      touchRatio: 0.5,
    });
  }
  scrollPage() {
    let theight = this.$dom.find('.header_wrap').height();
    let $content = this.$dom.find('.contnet_wrap')
    let $leftinfo = this.$dom.find('.left-info').height();
    const $doc = $(document);
    let blockTops = [];
    let $topbar = this.$dom.find('.top-nav_box');
    $doc.on('scroll', (e) => {
      const top = $doc.scrollTop();
      const hasclass = this.$dom.hasClass('fixed2');
      const hasclass1 = this.$dom.hasClass('fixed1');
      const cheight = $content.height();
      if (exampleInfos[this.eid].children) {
        this.$dom.removeClass('fixed1');
        if (theight < top && top < cheight) {
          this.$dom.find('.project-list').addClass('fixed2');
        } else if (hasclass || hasclass1 || (top <= theight || top >= cheight)) {
          this.$dom.find('.project-list').removeClass('fixed2');
        }
      } else {
        this.$dom.find('.project-list').removeClass('fixed2');
        if (theight < top && top < cheight) {
          this.$dom.addClass('fixed1');
        } else if (hasclass || hasclass1 || (top <= theight || top >= cheight)) {
          this.$dom.removeClass('fixed1');
        }
      }
      if(window.location.href.indexOf("mobile=true") > -1 && exampleInfos[this.eid].children){
        if (theight < top && top < $leftinfo) {
          this.$dom.find('.project-list').addClass('fixed2');
        } else if (hasclass || hasclass1 || (top <= theight || top >= $leftinfo)) {
          this.$dom.find('.project-list').removeClass('fixed2');
        }
       
      }
      if(window.location.href.indexOf("mobile=true") > -1){
        if (top < 100) {
          $topbar.removeClass('fixed');
          return;
        } 
        else{
          $topbar.addClass('fixed');
        }
      }

    });
  }
  renderProjectList() {
    let html = '';
    for (let i in exampleInfos) {
      let item = exampleInfos[i];
      html += `<li data-index="${i}">${item.type}</li>`
    }
    if (window.location.href.indexOf("mobile=true") < 0) {
      html += '<li data-index="more">更多</li>';
    }
    this.$dom.find('.project-list').html(html);
    let that = this;
    let $plis = this.$dom.find('.project-list li');
    $plis.on('click', function () {
     
      let $el = $(this);
      let index = $el.data('index');
      indexClick = index;
      if (index == 'more') {
        onClickContact();
        return;
      }
      $plis.removeClass('active');
      that.eid = index;
      that.renderContent();
      $el.addClass('active');
      $('html,body').animate({
        scrollTop: 0
      }, 300);
    })
    $plis.eq(this.eid).click();
  }
  onClickContact() {
    let $btn = $('.pc-new.pc-title-btn');
    if ($btn.length > 0) {
      $btn.click();
    } else {
      $('div[53kf_icon_versions]').click();
    }
  }
  getUrlQuery() {
    let query = window.location.search.substring(1);
    let vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      this[pair[0]] = pair[1];
    }
  }
  menuSwitch() {
    let $moreMenu = this.$dom.find('#more-btn');
    let $navList = this.$dom.find('#nav-list');
    $moreMenu.on('click', e => {
      e.stopPropagation();
      if (window.isMinScreen) {
        let isopen = $moreMenu.hasClass('active');
        if (isopen) {
          $moreMenu.removeClass('active');
          $navList.removeClass('fadeInRight').addClass('fadeOutRight');
        } else {
          $moreMenu.addClass('active');
          $navList
            .removeClass('fadeOutRight')
            .addClass('fadeInRight')
            .css('display', 'block');
        }
      }
      return false;
    });
    $navList.on('click', e => {
      let $el = $(e.target);
      let index = $el.data('index');
      this.gotoBlock(index);
    });
    let $header = this.$dom.find('.header_wrap');
    let $top = this.$dom.find('.top-nav_box').eq(0);
    let topNavTop = $header.height();
    let $doc = $(document);
    // $doc.on('scroll', e => {
    //   let top = $doc.scrollTop();

    //   if (top > topNavTop) {
    //     if ($doc.attr('isTopNav') != '1') {
    //       $doc.attr('isTopNav', '1');
    //       $top.addClass('fixed fadeInDown');
    //     }
    //   } else {
    //     if ($doc.attr('isTopNav') != '0') {
    //       $doc.attr('isTopNav', '0');
    //       $top.removeClass('fixed fadeInDown');
    //     }
    //   }
    // });
    $header.height(topNavTop);
    this.$moreMenu = $moreMenu;
    return false;
  }
  gotoBlock(label) {
    if(window.location.href.indexOf("mobile=true") > -1){
      window.location.href = './index.html';
    }else{
      if (label == 2) {
        window.location.href = './product.html';
        return true;
      } else if (label == 3) {
        window.location.href = './example.html?eid=0';
        return true;
      } 
    }
    
    sessionStorage.setItem('blockName', label);
    window.location.href = './index.html';
  }
  isMultiArr(arr) {
    return arr.every(function (element) {
      return element instanceof Array && (element.length == 2 || element.length == 3);
    })
  }
  renderContent() {
    let html = '';
    let $content = this.$dom.find('.contnet_wrap');
    let arrImg = exampleImgs[this.eid];
    let data = exampleInfos[this.eid];
    if (!arrImg) {
      this.gotoBlock('#block4');
      return;
    }
    $content.html('');
    if (this.isMultiArr(arrImg)) {
      // for (let item of arrImg) {
      //   for (let key of item) {
      //     let eimg = new Image();
      //     eimg.src = key;
      //     $content.append(eimg);
      //   }
      //   $content.append(`<img style="height: 1px;margin-bottom: 100px;border:none"></img>`)
      // }

      if (window.location.href.indexOf("mobile=true") < 0) {
        if (data.children.length == 3) {
          $.ajax({
            url: "http://www.llwlhyd.com/carServe.html",
            type: "get",
            success: (res) => {
              $content.html(res);
              this.initSwiper();
            }
          })
        } else if (data.children.length == 2) {
          $.ajax({
            url: "http://www.llwlhyd.com/supply.html",
            type: "get",
            success: (res) => {
              $content.html(res);
              this.initSwiper();
            }
          })
        }
      }
      if (window.location.href.indexOf("mobile=true") > -1) {

        if (data.children.length == 3) {
          for (let [index, item] of new Map(data.children.map((item, i) => [i, item]))) {
            html += `
         <div style=" display: flex;justify-content: space-between; align-items: center;">
         <p style="font-size:16px;margin:10px 0">${item.name}</p> 
         <div class="btn btnM"  id="use-btnM" style="background-color:#F78C2D">立即领取方案报价</div>
         </div> 
         <p>开发平台：<span>${item.platform}</span></p>
         <p>所属行业：<span>${item.trade}</span></p>
         <p>产品简介：<span>${item.content}</span></p>
          ${jsonStr[index]}
         `
          }
          this.$dom.find('.left-info').html(html);
          this.initSwiper();
        } else if (data.children.length == 2) {
          for (let [index, item] of new Map(data.children.map((item, i) => [i, item]))) {
            html += `
         <div style=" display: flex;justify-content: space-between; align-items: center;">
         <p style="font-size:16px;margin:10px 0">${item.name}</p> 
         <div class="btn btnM"  id="use-btnM" style="background-color:#F78C2D">立即领取方案报价</div>
         </div> 
         <p>开发平台：<span>${item.platform}</span></p>
         <p>所属行业：<span>${item.trade}</span></p>
         <p>产品简介：<span>${item.content}</span></p>
          ${jsonStr1[index]}
         `
          }
          this.$dom.find('.left-info').html(html);
          this.initSwiper();
        }

      } else {
        for (let i of data.children) {
          html += `<p>案例名称：<span>${i.name}</span></p>
          <p>开发平台：<span>${i.platform}</span></p>
          <p>所属行业：<span>${i.trade}</span></p>
          <p>产品简介： </p>
          <p><span>${i.content}</span></p>
          <div class="btn" id="use-btn" style="margin-bottom:320px;">在线领取免费试用地址</div> `
        }
        this.$dom.find('.left-info').html(html);
      }


    } else {
      for (let item of arrImg) {
        let eimg = new Image();
        eimg.src = item;
        $content.append(eimg);
      }
      let item = exampleInfos[this.eid];
      if (window.location.href.indexOf("mobile=true") > -1) {
        html += `
        <div style=" display: flex;justify-content: space-between; align-items: center;">
        <p style="font-size:16px;margin:10px 0">${item.name}</p> 
        <div class="btn btnM" id="use-btnM" style="background-color:#F78C2D">立即领取方案报价</div>
        </div> 
        <p>开发平台：<span>${item.platform}</span></p>
        <p>所属行业：<span>${item.trade}</span></p>
        <p>产品简介：<span>${item.content}</span></p>`
        this.$dom.find('.left-info').html(html);
      } else {
        html += `<p>案例名称：<span>${item.name}</span></p>
        <p>开发平台：<span>${item.platform}</span></p>
        <p>所属行业：<span>${item.trade}</span></p>
        <p>产品简介：</p>
        <p><span>${item.content}</span></p>
        <div class="btn" id="use-btn">在线领取免费试用地址</div> `
        this.$dom.find('.left-info').html(html);
      }

      // let $infos = this.$dom.find('.left-info span');
      // $infos.eq(0).text(exampleInfos[this.eid].name);
      // $infos.eq(1).text(exampleInfos[this.eid].platform);
      // $infos.eq(2).text(exampleInfos[this.eid].trade);
      // $infos.eq(3).text(exampleInfos[this.eid].content);
    }
  }
  clearUcKeyword() {
    $('a').each(function (index, element) {
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
    $('script').each(function (index, element) {
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
}



new ExamplePage('.layout_wrap');