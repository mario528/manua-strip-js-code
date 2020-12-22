<!--
 * @@file: 
 * @Author: majiaao
 * @Date: 2020-12-22 19:31:50
-->
# 手撸JavaScript代码
一天一段JS代码 冲鸭！

### 函数防抖


``` JavaScript
    const debounceFunc = (func, delay = 1000) => {
        let debounceTimer = null;
        return function () {
            if (debounceTimer) {
                clearTimeOut(debounceTimer);
                debounceTimer = setTimeOut(func, delay);
            }
            else {
                debounceTimer = setTimeOut(func, delay);
            }
        }
    };
```

### 函数节流
``` JavaScript
const throttleFunc = (fn, throttleTime = 1000) => {
    let isValid = true;
    return () => {
        if (!isValid) {
            return;
        }
        else {
            isValid = false;
            setTimeOut(() => {
                fn();
                isValid = true;
            })
        }
    };
};
```