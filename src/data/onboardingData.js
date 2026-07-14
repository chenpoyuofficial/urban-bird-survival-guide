import page1Image from "../assets/illustrations/page1.png"
import page2Image from "../assets/illustrations/page2.png"
import page3Image from "../assets/illustrations/page3.png"
import page4Image from "../assets/illustrations/page4.png"
import page5Image from "../assets/illustrations/page5.png"

export const onboardingPages = [
  {
    id: "page-1",
    title: "熱絡的文章討論",
    subtitles: ["高雄鳥友的專屬聚落", "分享每一次與羽毛朋友的驚喜相遇"],
    description: "不論是在衛武營拍到鳥友飛翔的英姿，還是在家門口撿到落巢小麻雀的驚慌，這裡有一群最懂鳥、最熱心的在地鳥友。發文、留言、交換心得，讓我們一起用文字紀錄港都最繽紛的翼下生態！",
    illustration: page1Image,
    illustrationAlt: "小鳥們聚集在手機上互動的插畫",
  },
  {
    id: "page-2",
    title: "即時的地圖資訊",
    subtitles: ["只要打開地圖", "城市裡的鳥類情報一目了然"],
    description: "哪裡的構樹果實熟了？哪裡正在修剪路樹需要注意？透過精準的 GPS 定位與多彩膠囊標籤，輕鬆掌握附近的救難、食物、資源與警示事件。因地制宜，讓你隨時化身守護城市野鳥的巡邏員。",
    illustration: page2Image,
    illustrationAlt: "地圖上標示著各種鳥類相關地標",
  },
  {
    id: "page-3",
    title: "輕鬆的親友聯繫",
    subtitles: ["藉由地緣結交新隊友", "讓賞鳥、救鳥的路上不再孤單"],
    description: "「手邊備有紙箱與毛巾，澄清湖附近需要支援請啾我！」設定你的常用棲地與個人簡介，一鍵發現身邊志同道合的附近鳥友。無論是交流攝影設備，還是緊急出動支援，最可靠的夥伴就在你身邊。",
    illustration: page3Image,
    illustrationAlt: "兩隻小鳥站在樹枝上互相問候",
  },
  {
    id: "page-4",
    title: "危險的緊急通報",
    subtitles: ["生命關鍵時刻", "全區長按，黃金救援秒速出動"],
    description: "遇到危急困難、或是需要重大野鳥救援？一鍵啟動 SOS 避難系統。系統會自動帶入你的精準經緯度與白話文地點，第一時間向你的 6 位黃金救援隊友直接發送通報。全螢幕橘色長按撤銷設計，慌亂中也能安心操作。",
    illustration: page4Image,
    illustrationAlt: "多隻小鳥圍繞著 SOS 徽章",
  },
];

export const finalPage = {
  id: "page-5",
  title: "事不宜遲，趕快加入",
  subtitles: ["張開雙翼團結萬名在地鳥友", "一起成為港都野鳥最強大的後盾"],
  illustration: page5Image,
  illustrationAlt: "眾多小鳥堆疊聚集成拱門形狀",
};