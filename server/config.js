/**
 * 奖品设置
 * type: 唯一标识，0是默认特别奖的占位符，其它奖品不可使用
 * count: 奖品数量
 * title: 奖品描述
 * text: 奖品标题
 * img: 图片地址
 */
const prizes = [
  {
    type: 1,
    count: 2,
    text: "Raffle ended",
    title: "mysterious gift",
    img: "../img/secrit.jpg"
  },
  {
    type: 2,
    count: 5,
    text: " ",
    title: "1 BIRTH token per claim",
    img: "../img/mbp.jpg"
  }
];

/**
 * The number of prizes drawn at one time corresponds to prizes
 */
const EACH_COUNT = [1, 1, 5, 6, 7, 8, 9, 10];

/**
 * Card company name logo
 */
const COMPANY = "NFT";

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY
};
