const app = function () {
    return {
        print: function(){
            console.log('hi');
            return 'hi';
        },
        cond: function(d){
            if(d>0){
                return true;
            }
            else{
                return false;
            }
        }
    };
};

// app();
export {app};