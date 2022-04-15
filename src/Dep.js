function Dep() {
    this.subs = []; //
}
Dep.prototype = {
    addsub: function(sub) {
        this.subs.push(sub);//watcher
    },
    notify: function() {
        this.subs.forEach((sub) => {
            sub.update(); //执行watch更新dom
        })
    }
}