import stringSimilarity from 'string-similarity';

const compare = (userQuestion, defaultQuestion) => {
  return stringSimilarity.compareTwoStrings(userQuestion, defaultQuestion);
}

  /**
   ******** 請遵循 API 規範 **********
   * 一般 NPC 的對話，接收使用者問題，比對預設提問相似度後回傳陣列
   *
   * @returns [Array] 
   *  [0] 回應字串
   *  [1] 觸發對話 id
   *  [2] 問題加給分數
   */

// 這邊可以設定 相似度要多高
const SIMILAR_RATE = 0.55;

// 大長老 對話
export const elder_dialog = userQuestion => {
  if (compare(userQuestion, '大長老，要如何才能變得更幽默') > SIMILAR_RATE) {
    return ['這個嘛，我覺得你可以去問問看我們大家最愛的、風靡全王國的艾斯霸斯！', '3', 5];
  } 
  else if (compare(userQuestion, '為什麼艾斯霸斯不說話') > SIMILAR_RATE) {
    return ['怎麼突然這樣？他失去笑容了嗎？還是你要不要去問問歐菲斯司令，她前幾天才跟我說艾斯霸斯和劍…', '3', 5];
  } 
  else if (compare(userQuestion, '阿克在哭怎麼辦') > SIMILAR_RATE) {
    return ['你們怎麼可以欺負阿克！這下糟糕了這時候只有艾斯霸斯可以逗阿克笑，你們帶著這頂搞笑的假髮去找艾斯霸斯讓他增加自信心，並告訴她', '3', 5];
  } 
  else if (compare(userQuestion, '你是最聰明的人嗎？要怎麼樣才可以找到熱情？') > SIMILAR_RATE) {
    return ['我建議你，現在去找一位小男孩，他會是你的貴人。', '3', 10];
  }
  else if (compare(userQuestion, '清除對話') > SIMILAR_RATE) {
    return ['', '4'];
  }
  else {
    return ['恩 ... 恩 ...', '3', 0];
  }
};

// 艾斯霸斯 對話
export const isbs_dialog = userQuestion => {
  if (compare(userQuestion, '艾斯霸斯！你可以教我如何變幽默嘛？') > SIMILAR_RATE) {
    return ['不語', '3', 5];
  }
  else if (compare(userQuestion, '艾斯霸斯這個衣服給你穿') > SIMILAR_RATE) {
    return ['謝謝…可是我覺得我好像喪失我的幽默能力了…我好像不如從前了…怎麼辦…可不可以幫幫我…沃德是消息通，他會不會知道該怎麼辦？', '3', 5];
  }
  else if (compare(userQuestion, '這個假髮給你，阿克需要你，你本身就擁有能力可以去幫助阿克阿！') > SIMILAR_RATE) {
    return ['好！我試試看，謝謝你們的鼓勵！我好像被充電了一樣，現在帶著我幽默的魔法去找阿克吧！而且我知道他喜歡玩遊戲！', '3', 5];
  }
  else if (compare(userQuestion, '清除對話') > SIMILAR_RATE) {
    return ['', '4'];
  } 
  else {
    return ['...', '3', 0];
  }
};
// TODO 
// 沃德 對話
export const ward_dialog = userQuestion => {
  if (compare(userQuestion, '艾斯霸斯他說他不如從前了怎麼辦？') > SIMILAR_RATE) {
    return ['這個嘛，他是失去搞笑能力是不是，那我們來玩個遊戲好笑一下，晚點我跟你說要怎麼辦！', '3', 5];
  } 
  else if (compare(userQuestion, '你是沃德嗎？我想要問你一些問題。') > SIMILAR_RATE) {
    return ['是誰叫你來找我的？雖然我知曉很多事，但我想有些事必須要跟你澄清，神秘人並不是柯塔娜的父親。看來你的識人程度有必要再加強，這樣好了我建議你拍照記錄吧!這樣你就不會忘記了。', '3', 5];
  } 
  else if (compare(userQuestion, '清除對話') > SIMILAR_RATE) {
    return ['', '4'];
  }  
  else {
    return ['...', '3', 0];
  }
}
// TODO
// 阿克 對話
export const arch_dialog = userQuestion => {
  if (compare(userQuestion, '123') > SIMILAR_RATE) {
    return ['123', '3', 5];
  }
  else if (compare(userQuestion, '321') > SIMILAR_RATE) {
    return ['321', '3', 5];
  }
  else if (compare(userQuestion, '清除對話') > SIMILAR_RATE) {
    return ['', '4'];
  }  
  else {
    return ['...', '3', 0];
  }
}

// TODO 
// 柯塔娜 對話
export const cortana_dialog = userQuestion => {
  if (compare(userQuestion, '123') > SIMILAR_RATE) {
    return ['123', '3', 5];
  }
  else if (compare(userQuestion, '321') > SIMILAR_RATE) {
    return ['321', '3', 5];
  }
  else if (compare(userQuestion, '清除對話') > SIMILAR_RATE) {
    return ['', '4'];
  }
  else {
    return ['...', '3', 0];
  }
}

// TODO 
// 神秘人 對話
export const mystery_dialog = userQuestion => {
  if (compare(userQuestion, '123') > SIMILAR_RATE) {
    return ['123', '3', 5];
  }
  else if (compare(userQuestion, '321') > SIMILAR_RATE) {
    return ['321', '3', 5];
  }
  else if (compare(userQuestion, '清除對話') > SIMILAR_RATE) {
    return ['', '4'];
  }
  else {
    return ['...', '3', 0];
  }
}

// TODO 
// 溫德斯將軍之靈 對話
export const wendez_dialog = userQuestion => {
  if (compare(userQuestion, '123') > SIMILAR_RATE) {
    return ['123', '3', 5];
  }
  else if (compare(userQuestion, '321') > SIMILAR_RATE) {
    return ['321', '3', 5];
  }
  else if (compare(userQuestion, '清除對話') > SIMILAR_RATE) {
    return ['', '4'];
  }
  else {
    return ['...', '3', 0];
  }
}

// TODO 
// 瑟菲斯 對話
export const severus_dialog = userQuestion => {
  if (compare(userQuestion, '123') > SIMILAR_RATE) {
    return ['123', '3', 5];
  }
  else if (compare(userQuestion, '321') > SIMILAR_RATE) {
    return ['321', '3', 5];
  }
  else if (compare(userQuestion, '清除對話') > SIMILAR_RATE) {
    return ['', '4'];
  }
  else {
    return ['...', '3', 0];
  }
}

// TODO 
// 歐菲斯司令 對話
export const ofeisi_dialog = userQuestion => {
  if (compare(userQuestion, '123') > SIMILAR_RATE) {
    return ['123', '3', 5];
  }
  else if (compare(userQuestion, '321') > SIMILAR_RATE) {
    return ['321', '3', 5];
  }
  else if (compare(userQuestion, '清除對話') > SIMILAR_RATE) {
    return ['', '4'];
  }
  else {
    return ['...', '3', 0];
  }
}