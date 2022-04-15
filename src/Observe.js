function defineReactive(vm, key, val) {
    var dep = new Dep(); //初始化依赖收集

    Object.defineProperty(vm, key, {
        get: function() {
            console.log('触发get')
            if (Dep.target) { //watcher
                dep.addsub(Dep.target);
            }
            return val;
        },
        set: function(newVal) {
            console.log('触发set')
            if (newVal === val) return;
            val = newVal;
            dep.notify();
        }
    })
}

function observe(obj, vm) {
    Object.keys(obj).forEach(function(key) {
        defineReactive(vm, key, obj[key]);
    })
}