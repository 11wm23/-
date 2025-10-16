// 机场数据 - 包含全球主要机场和国家信息
const airports = [
    // 中国机场
    { code: 'ZBAA', name: '北京首都国际机场', country: 'china' },
    { code: 'ZSPD', name: '上海浦东国际机场', country: 'china' },
    { code: 'ZGGG', name: '广州白云国际机场', country: 'china' },
    { code: 'ZGSZ', name: '深圳宝安国际机场', country: 'china' },
    { code: 'ZUUU', name: '成都双流国际机场', country: 'china' },
    { code: 'ZPPP', name: '昆明长水国际机场', country: 'china' },
    { code: 'ZLXY', name: '西安咸阳国际机场', country: 'china' },
    { code: 'ZSSS', name: '上海虹桥国际机场', country: 'china' },
    { code: 'ZSHC', name: '杭州萧山国际机场', country: 'china' },
    { code: 'ZSNJ', name: '南京禄口国际机场', country: 'china' },
    { code: 'ZSQD', name: '青岛流亭国际机场', country: 'china' },
    { code: 'ZYTX', name: '沈阳桃仙国际机场', country: 'china' },
    { code: 'ZBTJ', name: '天津滨海国际机场', country: 'china' },
    { code: 'ZSAM', name: '厦门高崎国际机场', country: 'china' },
    { code: 'ZUCK', name: '重庆江北国际机场', country: 'china' },
    { code: "ZBNY", name: "北京南苑机场", country: "中国" },
    { code: "ZBAA", name: "北京首都国际机场", country: "中国" },
    { code: "ZBTJ", name: "天津滨海国际机场", country: "中国" },
    { code: "ZBZJ", name: "张家口宁远机场", country: "中国" },
    { code: "ZBHD", name: "邯郸机场", country: "中国" },
    { code: "ZBSH", name: "秦皇岛山海关机场", country: "中国" },
    { code: "ZBTS", name: "唐山三女河机场", country: "中国" },
    { code: "ZBXT", name: "邢台褡裢机场", country: "中国" },
    { code: "ZBSJ", name: "石家庄正定国际机场", country: "中国" },
    { code: "ZBYN", name: "太原武宿国际机场", country: "中国" },
    { code: "ZBLL", name: "吕梁机场", country: "中国" },
    
    
    // 日本机场
    { code: 'RJAA', name: '东京成田国际机场', country: 'japan' },
    { code: 'RJTT', name: '东京羽田国际机场', country: 'japan' },
    { code: 'RJBB', name: '大阪关西国际机场', country: 'japan' },
    { code: 'RJCC', name: '大阪伊丹国际机场', country: 'japan' },
    { code: 'RJGG', name: '名古屋中部国际机场', country: 'japan' },
    { code: 'ROAH', name: '北海道新千岁国际机场', country: 'japan' },
    
    // 韩国机场
    { code: 'RKSI', name: '首尔仁川国际机场', country: 'korea' },
    { code: 'RKSS', name: '首尔金浦国际机场', country: 'korea' },
    { code: 'RKPK', name: '釜山金海国际机场', country: 'korea' },
    
    // 泰国机场
    { code: 'VTBS', name: '曼谷素万那普国际机场', country: 'thailand' },
    { code: 'VTBD', name: '曼谷廊曼国际机场', country: 'thailand' },
    { code: 'VTSP', name: '普吉岛国际机场', country: 'thailand' },
    
    // 新加坡机场
    { code: 'WSSS', name: '新加坡樟宜国际机场', country: 'singapore' },
    
    // 印度机场
    { code: 'VIDP', name: '新德里英迪拉·甘地国际机场', country: 'india' },
    { code: 'VABB', name: '孟买贾特拉帕蒂·希瓦吉国际机场', country: 'india' },
    { code: 'VOMM', name: '钦奈国际机场', country: 'india' },
    { code: 'VECC', name: '加尔各答内塔吉·苏巴斯·钱德拉·鲍斯国际机场', country: 'india' },
    
    // 阿联酋机场
    { code: 'OMDB', name: '迪拜国际机场', country: 'uae' },
    { code: 'OMSJ', name: '沙迦国际机场', country: 'uae' },
    { code: 'OMAA', name: '阿布扎比国际机场', country: 'uae' },
    { code: 'OTHH', name: '多哈哈马德国际机场', country: 'uae' },
    
    // 英国机场
    { code: 'EGLL', name: '伦敦希思罗国际机场', country: 'uk' },
    { code: 'EGKK', name: '伦敦盖特威克机场', country: 'uk' },
    { code: 'EGSS', name: '伦敦斯坦斯特德机场', country: 'uk' },
    { code: 'EGCC', name: '曼彻斯特国际机场', country: 'uk' },
    { code: 'EGPH', name: '爱丁堡国际机场', country: 'uk' },
    
    // 法国机场
    { code: 'LFPG', name: '巴黎戴高乐国际机场', country: 'france' },
    { code: 'LFPO', name: '巴黎奥利机场', country: 'france' },
    { code: 'LFBO', name: '里昂圣埃克絮佩里机场', country: 'france' },
    { code: 'LFMN', name: '尼斯蓝色海岸机场', country: 'france' },
    
    // 德国机场
    { code: 'EDDF', name: '法兰克福国际机场', country: 'germany' },
    { code: 'EDDM', name: '慕尼黑国际机场', country: 'germany' },
    { code: 'EDDL', name: '杜塞尔多夫国际机场', country: 'germany' },
    { code: 'EDDB', name: '柏林泰格尔机场', country: 'germany' },
    { code: 'EDDT', name: '柏林舍讷费尔德机场', country: 'germany' },
    
    // 西班牙机场
    { code: 'LEMD', name: '马德里巴拉哈斯国际机场', country: 'spain' },
    { code: 'LEBL', name: '巴塞罗那埃尔普拉特机场', country: 'spain' },
    { code: 'LEPA', name: '马略卡岛帕尔马机场', country: 'spain' },
    { code: 'LEMG', name: '马拉加机场', country: 'spain' },
    
    // 荷兰机场
    { code: 'EHAM', name: '阿姆斯特丹史基浦机场', country: 'netherlands' },
    
    // 瑞士机场
    { code: 'LSZH', name: '苏黎世国际机场', country: 'switzerland' },
    { code: 'LSGG', name: '日内瓦国际机场', country: 'switzerland' },
    
    // 土耳其机场
    { code: 'LTFM', name: '伊斯坦布尔国际机场', country: 'turkey' },
    { code: 'LTBA', name: '伊斯坦布尔阿塔图尔克机场', country: 'turkey' },
    { code: 'LTFJ', name: '安塔利亚机场', country: 'turkey' },
    
    // 意大利机场
    { code: 'LIRF', name: '罗马菲乌米奇诺机场', country: 'italy' },
    { code: 'LIMC', name: '米兰马尔彭萨机场', country: 'italy' },
    { code: 'LIPE', name: '威尼斯马可·波罗机场', country: 'italy' },
    
    // 俄罗斯机场
    { code: 'UUDD', name: '莫斯科多莫杰多沃国际机场', country: 'russia' },
    { code: 'UUEE', name: '莫斯科谢列梅捷沃国际机场', country: 'russia' },
    { code: 'ULLI', name: '圣彼得堡普尔科沃机场', country: 'russia' },
    
    // 美国机场
    { code: 'KJFK', name: '纽约肯尼迪国际机场', country: 'usa' },
    { code: 'KLGA', name: '纽约拉瓜迪亚机场', country: 'usa' },
    { code: 'EWR', name: '纽瓦克自由国际机场', country: 'usa' },
    { code: 'KLAX', name: '洛杉矶国际机场', country: 'usa' },
    { code: 'KORD', name: '芝加哥奥黑尔国际机场', country: 'usa' },
    { code: 'KMDW', name: '芝加哥中途国际机场', country: 'usa' },
    { code: 'KATL', name: '亚特兰大哈茨菲尔德-杰克逊国际机场', country: 'usa' },
    { code: 'KDFW', name: '达拉斯-沃斯堡国际机场', country: 'usa' },
    { code: 'KSFO', name: '旧金山国际机场', country: 'usa' },
    { code: 'KLAS', name: '拉斯维加斯麦卡伦国际机场', country: 'usa' },
    { code: 'KPHX', name: '菲尼克斯天港国际机场', country: 'usa' },
    { code: 'KMIA', name: '迈阿密国际机场', country: 'usa' },
    { code: 'KBOS', name: '波士顿洛根国际机场', country: 'usa' },
    { code: 'KIAD', name: '华盛顿杜勒斯国际机场', country: 'usa' },
    
    // 加拿大机场
    { code: 'CYYZ', name: '多伦多皮尔逊国际机场', country: 'canada' },
    { code: 'CYVR', name: '温哥华国际机场', country: 'canada' },
    { code: 'CYUL', name: '蒙特利尔皮埃尔·埃利奥特·特鲁多国际机场', country: 'canada' },
    { code: 'CYOW', name: '渥太华麦克唐纳-卡蒂埃国际机场', country: 'canada' },
    
    // 澳大利亚机场
    { code: 'YSSY', name: '悉尼金斯福德·史密斯国际机场', country: 'australia' },
    { code: 'YMML', name: '墨尔本国际机场', country: 'australia' },
    { code: 'YBBN', name: '布里斯班机场', country: 'australia' },
    { code: 'YPPH', name: '珀斯机场', country: 'australia' },
    
    // 新西兰机场
    { code: 'NZAA', name: '奥克兰国际机场', country: 'newzealand' },
    { code: 'NZCH', name: '克赖斯特彻奇国际机场', country: 'newzealand' },
    
    // 巴西机场
    { code: 'SBGR', name: '圣保罗瓜鲁柳斯国际机场', country: 'brazil' },
    { code: 'SBBR', name: '里约热内卢加利昂国际机场', country: 'brazil' },
    { code: 'SBSP', name: '圣保罗孔戈尼亚斯机场', country: 'brazil' },
    
    // 阿根廷机场
    { code: 'SAEZ', name: '布宜诺斯艾利斯埃塞萨国际机场', country: 'argentina' },
    
    // 哥伦比亚机场
    { code: 'SKBO', name: '波哥大埃尔多拉多国际机场', country: 'colombia' },
    
    // 墨西哥机场
    { code: 'MMMX', name: '墨西哥城贝尼托·胡亚雷斯国际机场', country: 'mexico' },
    { code: 'MMGL', name: '瓜达拉哈拉国际机场', country: 'mexico' },
    
    // 南非机场
    { code: 'FAJS', name: '约翰内斯堡奥利弗·坦博国际机场', country: 'southafrica' },
    { code: 'FACT', name: '开普敦国际机场', country: 'southafrica' },
    
    // 沙特阿拉伯机场
    { code: 'OERK', name: '利雅得哈立德国王国际机场', country: 'saudiarabia' },
    { code: 'OEJN', name: '吉达阿卜杜勒-阿齐兹国王国际机场', country: 'saudiarabia' },
    
    // 卡塔尔机场
    { code: 'OTHH', name: '多哈哈马德国际机场', country: 'qatar' },
    { code: 'OTBD', name: '多哈旧机场（多哈国际机场）', country: 'qatar' },
    { code: 'OTMS', name: '乌姆赛义德军用机场', country: 'qatar' },
    { code: 'OTGL', name: '阿尔乌代德空军基地', country: 'qatar' },
    
    // 科威特机场
    { code: 'OKBK', name: '科威特国际机场', country: 'kuwait' },
    
    // 巴林机场
    { code: 'OBBI', name: '巴林国际机场', country: 'bahrain' }
];

// 获取DOM元素
const drawBtn = document.getElementById('draw-btn');
const departureAirport = document.getElementById('departure-airport');
const arrivalAirport = document.getElementById('arrival-airport');
const departureCountry = document.getElementById('departure-country');
const arrivalCountry = document.getElementById('arrival-country');
const stopoverCountry = document.getElementById('stopover-country');
const stopoverCountryContainer = document.getElementById('stopover-country-container');
const aircraftType = document.getElementById('aircraft-type');
const historyList = document.getElementById('history-list');
const flightInfo = document.getElementById('flight-info');
const includeStopover = document.getElementById('include-stopover');
const stopoverContainer = document.getElementById('stopover-container');
const stopoverAirport = document.getElementById('stopover-airport');

// 获取DOM元素并确保它们存在
let flightTimeRange;
try {
    flightTimeRange = document.getElementById('flight-time-range');
    // 如果元素不存在或无法访问，创建一个具有默认值的对象
    if (!flightTimeRange) {
        flightTimeRange = { value: 'all' };
    }
} catch (e) {
    flightTimeRange = { value: 'all' };
}

// 历史记录数组
let history = [];

// 为机场添加经纬度数据（估算值）
const airportCoordinates = {
    // 中国机场坐标
    'ZBAA': { lat: 40.08, lng: 116.58 }, // 北京
    'ZSPD': { lat: 31.14, lng: 121.80 }, // 上海浦东
    'ZGGG': { lat: 23.39, lng: 113.29 }, // 广州
    'ZGSZ': { lat: 22.64, lng: 113.81 }, // 深圳
    'ZUUU': { lat: 30.58, lng: 103.94 }, // 成都
    'ZPPP': { lat: 25.08, lng: 102.92 }, // 昆明
    'ZLXY': { lat: 34.44, lng: 108.75 }, // 西安
    'ZSSS': { lat: 31.19, lng: 121.33 }, // 上海虹桥
    'ZSHC': { lat: 30.20, lng: 120.40 }, // 杭州
    'ZSNJ': { lat: 31.73, lng: 118.86 }, // 南京
    'ZSQD': { lat: 36.11, lng: 120.38 }, // 青岛
    'ZYTX': { lat: 41.79, lng: 123.43 }, // 沈阳
    'ZBTJ': { lat: 39.36, lng: 117.42 }, // 天津
    'ZSAM': { lat: 24.53, lng: 118.10 }, // 厦门
    'ZCKG': { lat: 29.54, lng: 106.59 }, // 重庆
    
    // 日本机场坐标
    'RJAA': { lat: 35.76, lng: 140.38 }, // 东京成田
    'RJTT': { lat: 35.54, lng: 139.78 }, // 东京羽田
    'RJBB': { lat: 34.43, lng: 135.23 }, // 大阪关西
    'RJCC': { lat: 34.74, lng: 135.43 }, // 大阪伊丹
    'RJOO': { lat: 35.28, lng: 136.90 }, // 名古屋中部
    'ROAH': { lat: 43.12, lng: 141.67 }, // 北海道新千岁
    
    // 韩国机场坐标
    'RKSI': { lat: 37.46, lng: 126.45 }, // 首尔仁川
    'RKSS': { lat: 37.55, lng: 126.79 }, // 首尔金浦
    'RKPK': { lat: 35.22, lng: 128.91 }, // 釜山金海
    
    // 泰国机场坐标
    'VTBS': { lat: 13.69, lng: 100.75 }, // 曼谷素万那普
    'VTBD': { lat: 13.92, lng: 100.61 }, // 曼谷廊曼
    'VTSP': { lat: 7.95, lng: 98.33 }, // 普吉岛
    
    // 新加坡机场坐标
    'WSSS': { lat: 1.35, lng: 103.99 }, // 新加坡樟宜
    
    // 印度机场坐标
    'VIDP': { lat: 28.56, lng: 77.10 }, // 新德里
    'VABB': { lat: 19.09, lng: 72.86 }, // 孟买
    'VOMM': { lat: 12.99, lng: 80.17 }, // 钦奈
    'VECC': { lat: 22.65, lng: 88.44 }, // 加尔各答
    
    // 阿联酋机场坐标
    'OMDB': { lat: 25.26, lng: 55.36 }, // 迪拜
    'OMSJ': { lat: 25.32, lng: 55.51 }, // 沙迦
    'OMAA': { lat: 24.43, lng: 54.65 }, // 阿布扎比
    'OTHH': { lat: 25.27, lng: 51.60 }, // 多哈
    
    // 英国机场坐标
    'EGLL': { lat: 51.47, lng: -0.46 }, // 伦敦希思罗
    'EGKK': { lat: 51.15, lng: -0.19 }, // 伦敦盖特威克
    'EGSS': { lat: 51.88, lng: 0.23 }, // 伦敦斯坦斯特德
    'EGCC': { lat: 53.35, lng: -2.28 }, // 曼彻斯特
    'EGPH': { lat: 55.96, lng: -3.36 }, // 爱丁堡
    
    // 法国机场坐标
    'LFPG': { lat: 49.01, lng: 2.54 }, // 巴黎戴高乐
    'LFPO': { lat: 48.73, lng: 2.38 }, // 巴黎奥利
    'LFBO': { lat: 45.73, lng: 5.07 }, // 里昂圣埃克絮佩里
    'LFMN': { lat: 43.71, lng: 7.26 }, // 尼斯蓝色海岸
    
    // 德国机场坐标
    'EDDF': { lat: 50.03, lng: 8.57 }, // 法兰克福
    'EDDM': { lat: 48.35, lng: 11.78 }, // 慕尼黑
    'EDDL': { lat: 51.28, lng: 6.76 }, // 杜塞尔多夫
    'EDDB': { lat: 52.56, lng: 13.29 }, // 柏林泰格尔
    'EDDT': { lat: 52.38, lng: 13.51 }, // 柏林舍讷费尔德
    
    // 西班牙机场坐标
    'LEMD': { lat: 40.47, lng: -3.56 }, // 马德里
    'LEBL': { lat: 41.29, lng: 2.08 }, // 巴塞罗那
    'LEPA': { lat: 39.55, lng: 2.74 }, // 马略卡岛帕尔马
    'LEMG': { lat: 36.67, lng: -4.49 }, // 马拉加
    
    // 荷兰机场坐标
    'EHAM': { lat: 52.30, lng: 4.76 }, // 阿姆斯特丹史基浦
    
    // 瑞士机场坐标
    'LSZH': { lat: 47.46, lng: 8.54 }, // 苏黎世
    'LSGG': { lat: 46.23, lng: 6.10 }, // 日内瓦
    
    // 土耳其机场坐标
    'LTFM': { lat: 40.97, lng: 28.82 }, // 伊斯坦布尔
    'LTBA': { lat: 40.98, lng: 28.81 }, // 伊斯坦布尔阿塔图尔克
    'LTFJ': { lat: 36.89, lng: 30.71 }, // 安塔利亚
    
    // 意大利机场坐标
    'LIRF': { lat: 41.80, lng: 12.24 }, // 罗马菲乌米奇诺
    'LIMC': { lat: 45.63, lng: 8.72 }, // 米兰马尔彭萨
    'LIPE': { lat: 45.43, lng: 12.30 }, // 威尼斯马可·波罗
    
    // 俄罗斯机场坐标
    'UUDD': { lat: 55.41, lng: 37.90 }, // 莫斯科多莫杰多沃
    'UUEE': { lat: 55.97, lng: 37.41 }, // 莫斯科谢列梅捷沃
    'ULLI': { lat: 59.80, lng: 30.26 }, // 圣彼得堡普尔科沃
    
    // 美国机场坐标
    'KJFK': { lat: 40.64, lng: -73.78 }, // 纽约肯尼迪
    'KLGA': { lat: 40.77, lng: -73.87 }, // 纽约拉瓜迪亚
    'EWR': { lat: 40.69, lng: -74.18 }, // 纽瓦克自由
    'KLAX': { lat: 33.94, lng: -118.40 }, // 洛杉矶
    'KORD': { lat: 41.98, lng: -87.90 }, // 芝加哥奥黑尔
    'KMDW': { lat: 41.78, lng: -87.75 }, // 芝加哥中途
    'KATL': { lat: 33.64, lng: -84.42 }, // 亚特兰大
    'KDFW': { lat: 32.89, lng: -97.04 }, // 达拉斯-沃斯堡
    'KSFO': { lat: 37.62, lng: -122.38 }, // 旧金山
    'KLAS': { lat: 36.08, lng: -115.15 }, // 拉斯维加斯
    'KPHX': { lat: 33.43, lng: -112.01 }, // 菲尼克斯
    'KMIA': { lat: 25.79, lng: -80.28 }, // 迈阿密
    'KBOS': { lat: 42.36, lng: -71.01 }, // 波士顿
    'KIAD': { lat: 38.95, lng: -77.46 }, // 华盛顿杜勒斯
    
    // 加拿大机场坐标
    'CYYZ': { lat: 43.67, lng: -79.63 }, // 多伦多皮尔逊
    'CYVR': { lat: 49.19, lng: -123.18 }, // 温哥华
    'CYUL': { lat: 45.47, lng: -73.75 }, // 蒙特利尔
    'CYOW': { lat: 45.32, lng: -75.67 }, // 渥太华
    
    // 澳大利亚机场坐标
    'YSSY': { lat: -33.94, lng: 151.17 }, // 悉尼
    'YMML': { lat: -37.67, lng: 144.84 }, // 墨尔本
    'YBBN': { lat: -27.39, lng: 153.12 }, // 布里斯班
    'YPPH': { lat: -31.94, lng: 115.96 }, // 珀斯
    
    // 新西兰机场坐标
    'NZAA': { lat: -37.00, lng: 174.79 }, // 奥克兰
    'NZCH': { lat: -43.48, lng: 172.54 }, // 克赖斯特彻奇
    
    // 巴西机场坐标
    'SBGR': { lat: -23.43, lng: -46.47 }, // 圣保罗瓜鲁柳斯
    'SBBR': { lat: -22.81, lng: -43.24 }, // 里约热内卢加利昂
    'SBSP': { lat: -23.63, lng: -46.64 }, // 圣保罗孔戈尼亚斯
    
    // 阿根廷机场坐标
    'SAEZ': { lat: -34.82, lng: -58.54 }, // 布宜诺斯艾利斯
    
    // 哥伦比亚机场坐标
    'SKBO': { lat: 4.70, lng: -74.10 }, // 波哥大
    
    // 墨西哥机场坐标
    'MMMX': { lat: 19.43, lng: -99.07 }, // 墨西哥城
    'MMGL': { lat: 20.63, lng: -103.34 }, // 瓜达拉哈拉
    
    // 南非机场坐标
    'FAJS': { lat: -26.13, lng: 28.24 }, // 约翰内斯堡
    'FACT': { lat: -33.97, lng: 18.60 }, // 开普敦
    
    // 沙特阿拉伯机场坐标
    'OERK': { lat: 24.96, lng: 46.71 }, // 利雅得
    'OEJN': { lat: 21.64, lng: 39.15 }, // 吉达
    
    // 卡塔尔机场坐标
    'OTHH': { lat: 25.27, lng: 51.60 }, // 多哈哈马德国际机场
    'OTBD': { lat: 25.36, lng: 51.55 }, // 多哈旧机场
    'OTMS': { lat: 25.20, lng: 51.48 }, // 乌姆赛义德军用机场
    'OTGL': { lat: 25.03, lng: 51.21 },  // 阿尔乌代德空军基地
    
    // 科威特机场坐标
    'OKBK': { lat: 29.37, lng: 47.97 }, // 科威特
    
    // 巴林机场坐标
    'OBBI': { lat: 26.28, lng: 50.60 } // 巴林
};

// 机型详细数据（包含更准确的巡航速度和爬升/下降因素）
const aircraftData = {
    // 波音系列
    'b737-300': { cruiseSpeed: 828, climbFactor: 1.07 },
    'b737-700': { cruiseSpeed: 830, climbFactor: 1.06 },
    'b737-800': { cruiseSpeed: 835, climbFactor: 1.06 },
    'b737-max8': { cruiseSpeed: 840, climbFactor: 1.05 },
    'b747-400': { cruiseSpeed: 910, climbFactor: 1.08 },
    'b747-8': { cruiseSpeed: 915, climbFactor: 1.07 },
    'b757-200': { cruiseSpeed: 875, climbFactor: 1.06 },
    'b767-300': { cruiseSpeed: 860, climbFactor: 1.07 },
    'b777-200': { cruiseSpeed: 905, climbFactor: 1.08 },
    'b777-300er': { cruiseSpeed: 910, climbFactor: 1.08 },
    'b777x': { cruiseSpeed: 950, climbFactor: 1.07 },
    'b787-8': { cruiseSpeed: 905, climbFactor: 1.06 },
    'b787-9': { cruiseSpeed: 910, climbFactor: 1.06 },
    'b787-10': { cruiseSpeed: 915, climbFactor: 1.05 },
    'b797': { cruiseSpeed: 885, climbFactor: 1.06 },
    
    // 空客系列
    'a319': { cruiseSpeed: 830, climbFactor: 1.06 },
    'a320': { cruiseSpeed: 830, climbFactor: 1.06 },
    'a320neo': { cruiseSpeed: 835, climbFactor: 1.05 },
    'a321': { cruiseSpeed: 830, climbFactor: 1.06 },
    'a321neo': { cruiseSpeed: 835, climbFactor: 1.05 },
    'a330-200': { cruiseSpeed: 875, climbFactor: 1.07 },
    'a330-300': { cruiseSpeed: 875, climbFactor: 1.07 },
    'a330neo': { cruiseSpeed: 880, climbFactor: 1.06 },
    'a340-300': { cruiseSpeed: 885, climbFactor: 1.08 },
    'a340-600': { cruiseSpeed: 880, climbFactor: 1.08 },
    'a350-900': { cruiseSpeed: 910, climbFactor: 1.06 },
    'a350-1000': { cruiseSpeed: 915, climbFactor: 1.06 },
    'a380': { cruiseSpeed: 910, climbFactor: 1.09 },
    
    // 其他制造商
    'embraer-190': { cruiseSpeed: 830, climbFactor: 1.07 },
    'embraer-e195': { cruiseSpeed: 830, climbFactor: 1.07 },
    'embraer-175': { cruiseSpeed: 825, climbFactor: 1.07 },
    'crj-900': { cruiseSpeed: 820, climbFactor: 1.08 },
    'atr-72': { cruiseSpeed: 500, climbFactor: 1.15 },
    'dhc-8': { cruiseSpeed: 520, climbFactor: 1.12 },
    'tu-204': { cruiseSpeed: 855, climbFactor: 1.09 },
    'il-96': { cruiseSpeed: 875, climbFactor: 1.08 },
    'c919': { cruiseSpeed: 830, climbFactor: 1.06 },
    'comac-c929': { cruiseSpeed: 905, climbFactor: 1.07 },
    'an-124': { cruiseSpeed: 865, climbFactor: 1.10 },
    'concorde': { cruiseSpeed: 2179, climbFactor: 1.05 }
};

// 用于兼容旧代码的映射
const aircraftSpeeds = {};
for (const [key, data] of Object.entries(aircraftData)) {
    aircraftSpeeds[key] = data.cruiseSpeed;
}

// 使用Haversine公式计算两个坐标之间的距离（公里）
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // 地球半径（公里）
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const distance = R * c; // 距离（公里）
    return distance;
}

// 计算飞行时间（小时）- 包含爬升/下降因素以提高准确性
function calculateFlightTime(distance, aircraftType) {
    // 获取机型数据，如果没有找到则使用默认值
    const aircraft = aircraftData[aircraftType];
    let cruiseSpeed = 850; // 默认巡航速度
    let climbFactor = 1.07; // 默认爬升/下降因素
    
    if (aircraft) {
        cruiseSpeed = aircraft.cruiseSpeed;
        climbFactor = aircraft.climbFactor;
    }
    
    // 根据距离调整爬升/下降因素（短距离航线爬升/下降占比更大）
    let adjustedClimbFactor = climbFactor;
    if (distance < 1000) {
        adjustedClimbFactor = climbFactor + 0.03; // 短距离航线增加额外因素
    } else if (distance < 3000) {
        adjustedClimbFactor = climbFactor + 0.01; // 中距离航线小幅增加
    }
    
    // 计算巡航时间
    const cruiseTime = distance / cruiseSpeed;
    
    // 考虑爬升、下降和空中等待时间（通常为15-30分钟）
    const additionalTime = 0.25 + (distance * 0.0001); // 基础额外时间+距离相关额外时间
    
    // 返回总飞行时间（包括爬升/下降因素和额外时间）
    return cruiseTime * adjustedClimbFactor + additionalTime;
}

// 格式化飞行时间显示
function formatFlightTime(hours) {
    const totalMinutes = Math.round(hours * 60);
    const h = Math.floor(totalMinutes / 60);
    const m = totalMinutes % 60;
    return `${h}小时${m}分钟`;
}

// 根据国家筛选机场
function filterAirportsByCountry(airportsList, countryCode) {
    if (countryCode === 'all') {
        return airportsList;
    }
    return airportsList.filter(airport => airport.country === countryCode);
}

// 随机选择两个不同的机场，确保飞行时间在两小时以上
function selectRandomRoute() {
    try {
        // 获取用户选择的国家
        const departureCountryCode = departureCountry.value || 'all';
        const arrivalCountryCode = arrivalCountry.value || 'all';
        
        // 筛选机场
        const filteredDepartureAirports = filterAirportsByCountry(airports, departureCountryCode);
        const filteredArrivalAirports = filterAirportsByCountry(airports, arrivalCountryCode);
        
        // 确保有足够的机场可供选择
        if (filteredDepartureAirports.length === 0 || filteredArrivalAirports.length === 0) {
            alert('所选国家没有可用的机场，请选择其他国家。');
            return null;
        }
        
        // 检查是否需要包含中转机场
        const shouldIncludeStopover = includeStopover && includeStopover.value === 'yes';
        
        // 生成所有可能的航线组合，并计算飞行时间
        const possibleRoutes = [];
        
        if (shouldIncludeStopover) {
            // 包含中转机场的航线生成
            for (const departure of filteredDepartureAirports) {
                // 获取用户选择的中转机场国家
                const stopoverCountryCode = stopoverCountry ? stopoverCountry.value || 'all' : 'all';
                // 筛选中转机场，考虑国家选择和起飞机场
                const possibleStopoverAirports = airports.filter(airport => 
                    airport.code !== departure.code && 
                    airportCoordinates[airport.code] &&
                    (stopoverCountryCode === 'all' || airport.country === stopoverCountryCode)
                );
                
                for (const stopover of possibleStopoverAirports) {
                    // 筛选降落机场，确保与起飞机场和中转机场都不同
                    let validArrivalAirports = filteredArrivalAirports.filter(airport => 
                        airport.code !== departure.code && airport.code !== stopover.code
                    );
                    
                    for (const arrival of validArrivalAirports) {
                        // 确保所有机场坐标都存在
                        if (!airportCoordinates[departure.code] || !airportCoordinates[stopover.code] || !airportCoordinates[arrival.code]) {
                            continue;
                        }
                        
                        // 计算第一段（起飞机场到中转机场）的距离和时间
                        const depCoords = airportCoordinates[departure.code];
                        const stopoverCoords = airportCoordinates[stopover.code];
                        const distance1 = calculateDistance(depCoords.lat, depCoords.lng, stopoverCoords.lat, stopoverCoords.lng);
                        const flightTime1 = calculateFlightTime(distance1, aircraftType.value);
                        
                        // 计算第二段（中转机场到降落机场）的距离和时间
                        const arrCoords = airportCoordinates[arrival.code];
                        const distance2 = calculateDistance(stopoverCoords.lat, stopoverCoords.lng, arrCoords.lat, arrCoords.lng);
                        const flightTime2 = calculateFlightTime(distance2, aircraftType.value);
                        
                        // 计算总距离和总时间（总时间包含1小时中转时间）
                        const totalDistance = distance1 + distance2;
                        const totalFlightTime = flightTime1 + flightTime2 + 1; // 加1小时中转时间
                        
                        // 添加到可能的航线中
                        possibleRoutes.push({
                            departure,
                            stopover,
                            arrival,
                            distance1,
                            distance2,
                            totalDistance,
                            flightTime1,
                            flightTime2,
                            totalFlightTime
                        });
                    }
                }
            }
        } else {
            // 直飞航线生成
            for (const departure of filteredDepartureAirports) {
                // 筛选降落机场，确保起飞机场和降落机场不同
                let validArrivalAirports = filteredArrivalAirports.filter(airport => airport.code !== departure.code);
                
                for (const arrival of validArrivalAirports) {
                    // 确保机场坐标存在
                    if (!airportCoordinates[departure.code] || !airportCoordinates[arrival.code]) {
                        continue; // 跳过没有坐标的机场
                    }
                    
                    // 计算距离和飞行时间
                    const depCoords = airportCoordinates[departure.code];
                    const arrCoords = airportCoordinates[arrival.code];
                    const distance = calculateDistance(depCoords.lat, depCoords.lng, arrCoords.lat, arrCoords.lng);
                    const flightTime = calculateFlightTime(distance, aircraftType.value);
                    
                    // 添加到可能的航线中
                    possibleRoutes.push({
                        departure,
                        arrival,
                        distance,
                        flightTime
                    });
                }
            }
        }
        
        if (possibleRoutes.length === 0) {
            alert('无法生成有效的航线，请尝试调整筛选条件。');
            return null;
        }
        
        // 根据用户选择的飞行时间范围筛选航线
        let timeRange;
        try {
            timeRange = (flightTimeRange && typeof flightTimeRange.value === 'string') ? flightTimeRange.value : 'all';
        } catch (e) {
            timeRange = 'all';
        }
        
        let filteredRoutes = possibleRoutes;
        
        if (timeRange !== 'all') {
            try {
                filteredRoutes = possibleRoutes.filter(route => {
                    // 根据是否有中转机场选择相应的时间字段
                    const hours = Number(route.totalFlightTime || route.flightTime) || 0;
                    switch (timeRange) {
                        case 'ultrashort':
                            return hours >= 1 && hours <= 2;
                        case 'short':
                            return hours > 2 && hours <= 5;
                        case 'medium':
                            return hours > 5 && hours <= 12;
                        case 'long':
                            return hours > 12 && hours <= 20;
                        case 'ultralong':
                            return hours > 20;
                        default:
                            return true;
                    }
                });
            } catch (e) {
                // 如果筛选出错，使用所有可能的航线
                filteredRoutes = possibleRoutes;
            }
        }
        
        if (filteredRoutes.length === 0) {
            alert('没有找到符合所选飞行时间范围的航线，请尝试其他时间范围。');
            return null;
        }
        
        // 从筛选后的航线中随机选择一条
        const selectedRoute = filteredRoutes[Math.floor(Math.random() * filteredRoutes.length)];
        
        // 格式化时间
        if (selectedRoute.stopover) {
            // 有中转机场的情况
            const formattedTime1 = formatFlightTime(selectedRoute.flightTime1);
            const formattedTime2 = formatFlightTime(selectedRoute.flightTime2);
            const formattedTotalTime = formatFlightTime(selectedRoute.totalFlightTime);
            
            return {
                departure: selectedRoute.departure,
                stopover: selectedRoute.stopover,
                arrival: selectedRoute.arrival,
                aircraft: aircraftType.options ? aircraftType.options[aircraftType.selectedIndex].text : aircraftType.value,
                timestamp: new Date().toLocaleString('zh-CN'),
                distance1: Math.round(selectedRoute.distance1),
                distance2: Math.round(selectedRoute.distance2),
                totalDistance: Math.round(selectedRoute.totalDistance),
                flightTime1: formattedTime1,
                flightTime2: formattedTime2,
                flightTime: formattedTotalTime // 保留flightTime作为总时间的别名
            };
        } else {
            // 直飞情况
            const formattedTime = formatFlightTime(selectedRoute.flightTime);
            
            return {
                departure: selectedRoute.departure,
                arrival: selectedRoute.arrival,
                aircraft: aircraftType.options ? aircraftType.options[aircraftType.selectedIndex].text : aircraftType.value,
                timestamp: new Date().toLocaleString('zh-CN'),
                distance: Math.round(selectedRoute.distance),
                flightTime: formattedTime
            };
        }
    } catch (error) {
        console.error('抽签过程中发生错误:', error);
        alert('抽签过程中发生错误，请刷新页面后重试。');
        return null;
    }
}

// 国家代码到中文名称的映射
const countryMap = {
    'china': '中国',
    'japan': '日本',
    'korea': '韩国',
    'thailand': '泰国',
    'singapore': '新加坡',
    'india': '印度',
    'uae': '阿联酋',
    'uk': '英国',
    'france': '法国',
    'germany': '德国',
    'spain': '西班牙',
    'netherlands': '荷兰',
    'switzerland': '瑞士',
    'turkey': '土耳其',
    'italy': '意大利',
    'russia': '俄罗斯',
    'usa': '美国',
    'canada': '加拿大',
    'australia': '澳大利亚',
    'newzealand': '新西兰',
    'brazil': '巴西',
    'argentina': '阿根廷',
    'colombia': '哥伦比亚',
    'mexico': '墨西哥',
    'southafrica': '南非',
    'saudiarabia': '沙特阿拉伯',
    'qatar': '卡塔尔',
    'kuwait': '科威特',
    'bahrain': '巴林'
};

// 更新机场显示
function updateAirportDisplay(element, airport) {
    // 添加动画效果
    element.style.opacity = '0';
    
    // 获取国家名称，如果没有映射则使用原始代码
    const countryName = countryMap[airport.country] || airport.country;
    
    setTimeout(() => {
        if (element === arrivalAirport) {
            element.innerHTML = `
                <h3>降落机场</h3>
                <p class="code">${airport.code}</p>
                <p class="name">${airport.name}（${countryName}）</p>
            `;
        } else if (element === stopoverAirport) {
            element.innerHTML = `
                <p class="code">${airport.code}</p>
                <p class="name">${airport.name}（${countryName}）</p>
            `;
        } else {
            element.innerHTML = `
                <p class="code">${airport.code}</p>
                <p class="name">${airport.name}（${countryName}）</p>
            `;
        }
        element.style.opacity = '1';
    }, 300);
}

// 添加到历史记录
function addToHistory(route) {
    // 添加到历史记录数组
    history.unshift(route); // 最新的记录放在最前面
    
    // 限制历史记录数量
    if (history.length > 10) {
        history.pop();
    }
    
    // 更新历史记录显示
    updateHistoryDisplay();
    
    // 保存到localStorage
    localStorage.setItem('flightDrawHistory', JSON.stringify(history));
}

// 更新历史记录显示
function updateHistoryDisplay() {
    if (history.length === 0) {
        historyList.innerHTML = '<p class="no-history">暂无历史记录</p>';
        return;
    }
    
    let html = '';
    history.forEach((route, index) => {
        let routeHtml = `${route.departure.code} → ${route.arrival.code}`;
        let routeNameHtml = `${route.departure.name} → ${route.arrival.name}`;
        let distanceHtml = `<p>飞行距离: ${route.distance} km</p>`;
        let timeHtml = `<p>预计飞行时间: ${route.flightTime}</p>`;
        let stopoverHtml = '';
        
        if (route.stopover) {
            const stopoverCountry = countryMap[route.stopover.country] || route.stopover.country;
            routeHtml = `${route.departure.code} → ${route.stopover.code} → ${route.arrival.code}`;
            routeNameHtml = `${route.departure.name} → ${route.stopover.name}（${stopoverCountry}）→ ${route.arrival.name}`;
            distanceHtml = `
                <p>第一段距离: ${route.distance1} km</p>
                <p>第二段距离: ${route.distance2} km</p>
                <p>总距离: ${route.totalDistance} km</p>
            `;
            timeHtml = `
                <p>第一段时间: ${route.flightTime1}</p>
                <p>第二段时间: ${route.flightTime2}</p>
                <p>总时间: ${route.flightTime}（含1小时中转）</p>
            `;
            stopoverHtml = `<p><small>中转机场: ${route.stopover.code} - ${route.stopover.name}（${stopoverCountry}）</small></p>`;
        }
        
        html += `
            <div class="history-item">
                <p><strong>航线 ${index + 1}:</strong> ${routeHtml}</p>
                <p>${routeNameHtml}</p>
                ${stopoverHtml}
                <p>机型: ${route.aircraft}</p>
                ${distanceHtml}
                ${timeHtml}
                <p class="timestamp">${route.timestamp}</p>
            </div>
        `;
    });
    
    historyList.innerHTML = html;
}

// 抽签按钮点击事件
// 显示各段飞行信息在对应的机场下方
function displayFlightInfo(route) {
    // 获取各个信息显示元素
    const firstSegmentInfo = document.getElementById('first-segment-info');
    const secondSegmentInfo = document.getElementById('second-segment-info');
    const totalFlightInfo = document.getElementById('total-flight-info');
    const middleFlightInfo = document.getElementById('flight-info');
    
    // 重置所有信息显示区域
    if (firstSegmentInfo) firstSegmentInfo.innerHTML = '';
    if (secondSegmentInfo) secondSegmentInfo.innerHTML = '';
    if (totalFlightInfo) totalFlightInfo.innerHTML = '';
    if (middleFlightInfo) middleFlightInfo.innerHTML = '';
    
    if (!route) return;
    
    if (route.stopover) {
        // 中转模式：在各个机场下方显示对应信息
        if (firstSegmentInfo) {
            firstSegmentInfo.style.opacity = '0';
            setTimeout(() => {
                firstSegmentInfo.innerHTML = `
                    <p class="segment-label">第一段飞行</p>
                    <p class="distance">距离: ${route.distance1} km</p>
                    <p class="time">时间: ${route.flightTime1}</p>
                `;
                firstSegmentInfo.style.opacity = '1';
            }, 300);
        }
        
        if (secondSegmentInfo) {
            secondSegmentInfo.style.opacity = '0';
            setTimeout(() => {
                secondSegmentInfo.innerHTML = `
                    <p class="segment-label">第二段飞行</p>
                    <p class="distance">距离: ${route.distance2} km</p>
                    <p class="time">时间: ${route.flightTime2}</p>
                `;
                secondSegmentInfo.style.opacity = '1';
            }, 300);
        }
        
        if (totalFlightInfo) {
            totalFlightInfo.style.opacity = '0';
            setTimeout(() => {
                totalFlightInfo.innerHTML = `
                    <p class="segment-label">全程信息</p>
                    <p class="distance">总距离: ${route.totalDistance} km</p>
                    <p class="time">总时间: ${route.flightTime}</p>
                `;
                totalFlightInfo.style.opacity = '1';
            }, 300);
        }
        
        // 隐藏中间的信息区域
        if (middleFlightInfo) {
            middleFlightInfo.style.display = 'none';
        }
    } else {
        // 非中转模式：在中间显示全程信息
        if (middleFlightInfo) {
            middleFlightInfo.style.opacity = '0';
            middleFlightInfo.style.display = 'block';
            setTimeout(() => {
                middleFlightInfo.innerHTML = `
                    <p class="distance">飞行距离: ${route.distance} km</p>
                    <p class="time">预计飞行时间: ${route.flightTime}</p>
                `;
                middleFlightInfo.style.opacity = '1';
            }, 300);
        }
        
        // 隐藏各段信息显示区域
        if (firstSegmentInfo) firstSegmentInfo.innerHTML = '';
        if (secondSegmentInfo) secondSegmentInfo.innerHTML = '';
        if (totalFlightInfo) totalFlightInfo.innerHTML = '';
    }
}

function handleDrawClick() {
    try {
        // 获取随机航线
        const route = selectRandomRoute();
        
        if (!route) {
            return;
        }
        
        // 更新显示
        updateAirportDisplay(departureAirport, route.departure);
        updateAirportDisplay(arrivalAirport, route.arrival);
        
        // 处理中转机场显示
        if (route.stopover) {
            stopoverContainer.style.display = 'block';
            updateAirportDisplay(stopoverAirport, route.stopover);
        } else {
            stopoverContainer.style.display = 'none';
        }
        
        // 显示飞行信息在正确的位置
        displayFlightInfo(route);
        
        // 添加到历史记录
        addToHistory(route);
        
        // 添加按钮动画效果
        drawBtn.classList.add('btn-secondary');
        drawBtn.disabled = true;
        
        setTimeout(() => {
            drawBtn.classList.remove('btn-secondary');
            drawBtn.disabled = false;
        }, 1000);
    } catch (error) {
        console.error('处理抽签点击事件时出错:', error);
        alert('操作过程中发生错误，请重试。');
        // 确保按钮可以再次点击
        drawBtn.classList.remove('btn-secondary');
        drawBtn.disabled = false;
    }
}

// 初始化历史记录
function initHistory() {
    const savedHistory = localStorage.getItem('flightDrawHistory');
    if (savedHistory) {
        history = JSON.parse(savedHistory);
        // 只保留最近10条历史记录
        if (history.length > 10) {
            history = history.slice(0, 10);
        }
        updateHistoryDisplay();
    }
}

// 初始化事件监听器
function init() {
    // 添加事件监听器
    drawBtn.addEventListener('click', handleDrawClick);
    
    // 中转机场选项变化时的处理
        if (includeStopover) {
            includeStopover.addEventListener('change', function() {
                if (this.value === 'yes') {
                stopoverContainer.style.display = 'block';
                // 显示中转机场国家选择器
                if (stopoverCountryContainer) {
                    stopoverCountryContainer.style.display = 'block';
                }
                // 为机场卡片添加过渡效果
                if (stopoverAirport) {
                    stopoverAirport.style.transition = 'opacity 0.3s ease-in-out';
                }
                // 隐藏中间的信息显示区域
                const middleFlightInfo = document.getElementById('flight-info');
                if (middleFlightInfo) {
                    middleFlightInfo.style.display = 'none';
                }
                
                // 禁用并隐藏超短途时间选项
                if (flightTimeRange) {
                    const ultrashortOption = Array.from(flightTimeRange.options).find(option => option.value === 'ultrashort');
                    if (ultrashortOption) {
                        ultrashortOption.disabled = true;
                        ultrashortOption.style.display = 'none';
                        // 如果当前选中的是超短途，切换到其他选项
                        if (flightTimeRange.value === 'ultrashort') {
                            flightTimeRange.value = 'all';
                        }
                    }
                }
            } else {
                stopoverContainer.style.display = 'none';
                // 隐藏中转机场国家选择器
                if (stopoverCountryContainer) {
                    stopoverCountryContainer.style.display = 'none';
                }
                // 显示中间的信息显示区域
                const middleFlightInfo = document.getElementById('flight-info');
                if (middleFlightInfo) {
                    middleFlightInfo.style.display = 'block';
                }
                
                // 启用并显示超短途时间选项
                if (flightTimeRange) {
                    const ultrashortOption = Array.from(flightTimeRange.options).find(option => option.value === 'ultrashort');
                    if (ultrashortOption) {
                        ultrashortOption.disabled = false;
                        ultrashortOption.style.display = '';
                    }
                }
            }
        });
    }
    
    // 为机场卡片添加过渡效果
    const airportElements = document.querySelectorAll('.airport-info');
    airportElements.forEach(el => {
        el.style.transition = 'opacity 0.3s ease-in-out';
    });
    
    // 初始化历史记录
    initHistory();
    
    // 确保选择器有默认值
    if (!departureCountry.value) departureCountry.value = 'all';
    if (!arrivalCountry.value) arrivalCountry.value = 'all';
    if (stopoverCountry && !stopoverCountry.value) stopoverCountry.value = 'all';
    if (!aircraftType.value) aircraftType.value = 'b737-300';
    if (!flightTimeRange.value) flightTimeRange.value = 'all';
    
    // 初始化CSS过渡效果
    const segmentInfoElements = document.querySelectorAll('.flight-segment-info');
    segmentInfoElements.forEach(el => {
        el.style.transition = 'opacity 0.3s ease-in-out';
    });
    
    // 初始化：根据中转选项状态显示或隐藏相应元素
    const middleFlightInfo = document.getElementById('flight-info');
    if (middleFlightInfo) {
        middleFlightInfo.style.display = includeStopover && includeStopover.value === 'yes' ? 'none' : 'block';
        middleFlightInfo.style.transition = 'opacity 0.3s ease-in-out';
    }
    
    // 初始化：根据中转选项状态显示或隐藏中转机场国家选择器
    if (stopoverCountryContainer && includeStopover) {
        stopoverCountryContainer.style.display = includeStopover.value === 'yes' ? 'block' : 'none';
    }
    
    // 初始化：根据中转选项状态设置超短途时间选项的可用性
    if (includeStopover && includeStopover.value === 'yes' && flightTimeRange) {
        const ultrashortOption = Array.from(flightTimeRange.options).find(option => option.value === 'ultrashort');
        if (ultrashortOption) {
            ultrashortOption.disabled = true;
            ultrashortOption.style.display = 'none';
            // 如果当前选中的是超短途，切换到其他选项
            if (flightTimeRange.value === 'ultrashort') {
                flightTimeRange.value = 'all';
            }
        }
    }
}

// 页面加载完成后初始化
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}