function isBaseAvatar(rank){
    if((rank == 2) || (rank == 3)){
        return true;
    }
    return false;
}


function isModifying(rank){
    if(rank ==2 || rank==3){
        return true;
    }
    return false;
}


function encoder(rank,option){
    var ltr = ["a","b","c","d","e","f","g","h","i","j","k","l"];
    var ls = [];
    if(rank == 2){
        if(option == "أنثى"){
            return "f";
        }
        return "m";
    }else if(rank == 3){
        if(option == "اصغر من 18 سنة"){
            return "y";
        }else if(option == "18-35 سنة"){
            return "a";
        }
        return "s";
    }else if(rank == 4){
        if(option == "أردني"){
            return "j";
        }else if(option == "سوري"){
            return "s";
        }
        return "o";
    }else if(rank == 5){
        ls = ["اربد","المفرق","جرش","عجلون","عمان","البلقاء","الزرقاء","مادبا","الكرك","الطفيلة","معان","العقبة"];
        return ltr[ls.findIndex(object)];
    }else if(rank == 9){
        var num = Number(option);
        if(num < 34000){
            return "s";
        }else if( num < 66000){
            return "m";}
        return "l";
    }else if(rank == 10){
        if(option == "لا"){
            return "n";
        }
        return "y";
    }else if(rank == 11 || rank == 16){
        var num = Number(option);
        if(num < 4){
            return "s";
        }else if( num < 7){
            return "m";}
        return "l";
    }else if(rank == 12 || rank == 20){
        var num = Number(option);
        if(num < 5){
            return "s";
        }else if( num < 9){
            return "m";}
        return "l";  
    }else if(rank == 13){
        ls = ["سأخسر وظيفتي أو ستنتهي مدة عقدي","أسباب عائلية","وجدت وظيفة أفضل","صعوبة الوصول لمكان العمل","لم اعد محاج للمال","لا احب عملي الحالي","أخرى","لا أعرف","رفض الاجابة"];
        return ltr[ls.findIndex(option)];
    }else if(rank == 14){
        ls = ["الزراعة","الخدمات الالكترونية","البناء","أعمال الصيانة","الصناعة","التعليم","المواد الاستهلاكية","المطاعم/الأغذية والمشروبات","أخرى"];
        return ltr[ls.findIndex(other)];
    }else if(rank == 15){
        var num = Number(ans);
        if(num < 21){
            return "s";
        }else if (num < 41){
            return "m";
        }
        return "l";
    }else if(rank == 17){
        ls = ["أنا أتقاضى راتبي نقدًا","أنا أحصل على شيك أجر","عن طريق حوالات إلى حسابي المصرفي","أتقاضى راتبي رقميًا (المحفظة الإلكترونية)","لا أعرف","رفض الإجابة"];
        return ltr[ls.findIndex(option)];
    }else if(rank == 18){
        ls = ["نعم ، عملي ثابت ومستقر","لا ، عملي ليس ثابت أو مستقر","لا أعرف","رفض الإجابة"];
        return ltr[ls.findIndex(option)];
    }else if(rank == 19){
        ls = ["نعم ، إنه موسمي","لا ، إنه ليس موسميً ولكنه غير مستقر","لا أدري، لا أعرف","رفض الإجابة"];
        return ltr[ls.findIndex(option)];
    }else if(rank == 21){
        ls = ["لا يمكن الاعتماد عليه على الإطلاق","يعتمد إلى حد ما","يمكن الاعتماد عليه بدرجة كبيرة","لا أدري، لا أعرف","رفض الإجابة"];
        return ltr[ls.findIndex(option)];
    }else if(rank < 38){
        return option;
    }else{
        ls = ["veryweak","weak","normal","strong","verystrong"];
        return String(ls.findIndex(option)+1);
    }
}


function updateBaseAvatar(curr,rank,option){
    rank = Number(rank);
    var val = encoder(rank,option);
    var newstr = "";
    for(var i = 0; i < curr.length; i++){
        if( i == rank){
            newstr += val;
        }else{
            newstr += curr[i];
        }
    }
    return newstr;
}


//a function executes once the question is loaded
//uses the stored answers and generates the base avatar
function getBaseAvatar(myjson){
    var str = "";
    var ans2 = myjson["ans2"];
    if(ans2 != undefined){
        str += encoder(2,ans2);
    } 
    var ans3 = myjson["ans3"];
    if(ans3 != undefined){
        str += encoder(3,ans3);
    } 
    str+=".png";
    return str;
}

function createImg(rank,baseStr,ansjson){
    var temp="ans"+rank;
    if(ansjson[temp] != undefined){
        baseStr += encoder(rank,ansjson[temp]);
        return baseStr;
    }else{
        return baseStr;
    }
}

function updateImg(rank,ans,myjson,option,base){
    var answered = false;
    if(myjson != undefined){
   
        var len = Object.keys(myjson).length;
    }
    base = base.split(".")[0];
    if(ans == ""){

        temp = base+encoder(rank,option);
    
        return temp;
    }else{
        //loop over json
        var tempstr = "";
        for(var i= 0; i < len; i++){
            if (isBaseAvatar(i)){
                tempstr += encoder(i,myjson["ans"+i]);
            }
            if(i == rank){
                tempstr += encoder(i,option);
            }
        }
    
        return tempstr;
    }

}

//function that turns list of answers in JSON
function listToJSON(list){

    var ansJson = {};
    for(var i = 4; i < list.length; i+=2){
      
        ansJson[list[i]] = list[i+1];
    }

    return ansJson;
}



//at next, if isBaseAvatar, update string in database

function updateImgDB(newImgStr){
    $.post("/changeBaseAvatar", {newImg : newImgStr});
}





