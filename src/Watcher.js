let uid = 0;

function Watcher(vm, node, name, type) {
    console.log('watcher实例化')
    Dep.target = this;

    this.name = name;
    this.id = ++uid;
    this.node = node;
    this.vm = vm;
    this.type = type;

    this.update(); //执行Render =》 使用到对应name

    Dep.target = null;
}

Watcher.prototype = {
    update: function () {
        //触发render => 获取
        this.get();

        if (!batcher) {
            batcher = new Batcher();
        }

        batcher.push(this);
    },
    cb: function () {
        console.log("dom update");
        console.dir(this.node)
        this.node[this.type] = this.value;
    },
    get: function () {
        this.value = this.vm[this.name]; //get触发，watcher =》 已经记录到电话本
    }
}