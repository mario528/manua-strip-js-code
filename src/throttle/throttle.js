/** 
 * 函数节流
*/
const throttleFunc = (fn, throttleTime = 1000) => {
    let isValid = true;
    return function () {
        if (!isValid) {
            return;
        }
        else {
            isValid = false
            setTimeout(() => {
                fn();
                isValid = true;
            }, throttleTime)
        }
    }
}