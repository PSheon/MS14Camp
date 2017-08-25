# 台灣微軟 14 屆 領袖營-APP

使用 `react-simple-chatbot` , `socket.io` 的解任務型APP

---

目前完成NPC配置，Cache實作完成，但還沒匯入對話，但有時候太快關閉對話框會有timeout 問題，待解決，如果遇到解不開的bug有能是本地快取的問題

另外 NPC_Dialog 多了 API 規範  

   * @param String
   * 一般 NPC 的對話，接收使用者問題，比對預設提問相似度後回傳陣列
   * @returns [Array] 
   *  [0] 回應字串
   *  [1] 觸發對話 id
   *  [2] 問題加給分數
   

另外因為套件有更新(Chat-bot)

pull 下來之後記得要重新安裝相依套件

```
npm install  or  yarn
```

---

| 任務 | 勇者 | 完成度 |
| --- | --- | --- |
| 加入身分認證 | 寶哥 | O |
| 加入廣播進度 | Paul | - |
| APP Layout | 認養中 | X |
| NPC 對話匯入 | 寶哥，Paul | - |
| QR Code 實作 | 寶哥 | - |
| NPC 對話 Cache | Paul | X |

## NPC 名字對照

| 中文 | 英文 | 快取 |
| --- | --- | --- |
| 大長老 | elder | rsc_cache_elder|
| 艾斯霸斯 | isbs | rsc_cache_isbs |
| 沃德 | ward | rsc_cache_ward |
| 阿克 | arch | rsc_cache_arch |
| 柯塔娜 | cortana | rsc_cache_cortana |
| 神秘人 | mystery | rsc_cache_mystery |
| 溫德斯 | wendez | rsc_cache_wendez |
| 瑟菲斯 | severus | rsc_cache_severus |
| 歐菲斯 | ofeisi | rsc_cache_ofeisi |

-------


1. 安裝

```
npm install  or  yarn
```

2. 執行

```bash
npm run start  or  yarn start
```

3. `http://localhost:5000`


4. 開發

```bash
npm install -g concurrently
npm install --dev  or yarn --dev

npm run dev  or yarn dev
```
