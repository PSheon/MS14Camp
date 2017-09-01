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
   *  [1] 觸發對話 id  繼續讓使用者發言 => 2-3 ， 結束對話 => 3-1
   */

// 這邊可以設定 相似度要多高
const SIMILAR_RATE = 0.55;

export const chatbot_dialog = userQuestion => {
  if (compare(userQuestion, '微軟RD都是帥哥') > SIMILAR_RATE) {
    return ['真的！！！', '2-3'];
  }
  else if (compare(userQuestion, '你好') > SIMILAR_RATE) {
    return ['哩賀阿勇者', '2-3'];
  }
  // TODO:  加入對話彩蛋
  else if (userQuestion.trim() === '') {
    return ['你是不是有話想說..', '2-3'];
  }
  else if (compare(userQuestion, '再見') > SIMILAR_RATE) {
    localStorage.removeItem('chatbotIsFound');
    return ['', '3-1'];
  } 
  else {
    return ['這裡黑到我不知道要說甚麼了...', '2-3'];
  }
}