/*
 * @@file: 防抖
 * @Author: majiaao
 * @Date: 2020-12-22 19:37:56
 */

// 防抖函数
const debounceFunc = (func, delay = 1500) => {
    let debunceTimer = null;
    return function () {
        if (debounceFunc) {
            // 当JavaScript执行机进入该分支时，说明已经有一次开始计时了
            // 通过防抖函数 将上一次的倒计时定时器清零 重新开始一次倒计时
            clearTimeout(debunceTimer);
            debunceTimer = setTimeout(func, delay);
        }
        else {
            // 第一次触发事件 开始倒计时
            debunceTimer = setTimeout(func, delay);
        }
    }
};
