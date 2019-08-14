//封装loacalstorage方法
var storage = {
    set(k,v){
     localStorage.setItem(k,JSON.stringify(v));
    },
    get(k){
       return JSON.parse(localStorage.getItem(k));
    },
    remove(k){
        localStorage.removeItem(k);
    }
};

export default storage;