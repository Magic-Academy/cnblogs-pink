/*
 * @Descripttion: 
 * @version: 
 * @Author: 松岛川树
 * @Date: 2021-10-08 12:43:14
 * @LastEditors: 松岛川树
 * @LastEditTime: 2021-10-08 14:19:04
 * @FilePath: \blackwhiteTone-Admin\static\a.js
 */


const getJson = async () => {
  let res = await axios.get("https://mock.mengxuegu.com/mock/606f08eeb43557571f7269a4/shequ/links")
  return res.data;
}


(async function () {
  const jsonList = await getJson();
  for (let i of jsonList) {
    const str = `
  <div class="item">
    <div class='avatar'><img src="${i.avatar}"></div>
    <div class='name'>${i.name}</div>
    <div class='introduction'>${i.introduction}<a href='${i.url}' target="view_window">访问</a></div>
  </div>
  `;

    $('#links-body').append(str)
  }
}())
