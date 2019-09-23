function check(result, error){
    if( !result && !error){
        return true
    }else if(error ){
        return false;
    }
} 

export default check;