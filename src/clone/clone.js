/*
 * @@file: JavaScript中的深拷贝和浅拷贝
 * @Author: majiaao
 * @Date: 2020-12-23 16:52:37
 */

let targetObj = {
    job: "RD",
    age: 23,
    sex: 'men',
    skill: {
        'JavaScript': 'A',
        'Vue': 'A',
        'React': {
            'tsx': 'A'
        }
    }
};

// 浅拷贝
let cloneObj = targetObj;
cloneObj.job = "FE";

// 深拷贝
// XXX JSON.stringify和JSON.parse的深拷贝会忽略源对象中undefined的值
let deepCloneObj = JSON.parse(JSON.stringify(targetObj));
deepCloneObj.job = "PM";

// 递归深拷贝
function deepClone (targetObj) {
    let deepCloneObj = {};
    Object.keys(targetObj).map((item) => {
        if (typeof targetObj[item] === 'object') {
            deepCloneObj[item] = Object.assign({}, deepClone(targetObj[item]));
        }
        else {
            deepCloneObj[item] = targetObj[item];
        }
    })
    return deepCloneObj;
};


console.log(targetObj, "源对象");
console.log(targetObj, "浅拷贝对象");
console.log(deepCloneObj, "深拷贝对象");
