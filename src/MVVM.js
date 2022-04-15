function Vue(options) {
    //init
    this.data = options.data;
    var data = this.data;
    observe(data, this);

    //$mount   compile render => vnode
    var id = options.el;//app
    var dom = new Compile(document.getElementById(id), this);

    //真实dom， watcher
    document.getElementById(id).appendChild(dom)
}