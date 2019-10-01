const app = function () {
    return {
        print: function(){
            console.log('hi');
            return 'hi';
        },
        cond: function(d){
            if(d>0){
                return this.fun1();
            }
            else{
                return false;
            }
        },
        fun1: function(){
            console.log('test');
            return true;
        }
    };
};

// app();
export {app};