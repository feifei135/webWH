// 将"2017-01-01 02:03" 转换为时间戳 1483207380(整数)
function dateToStamp(date){
    if(date.indexOf("-")>-1){
        date = date.replace(/-/g,'/');
    }
    return Date.parse(new Date(date));
}
// 时间戳转为年-月-日 时:分
function formatDate(dateTime){
    if(!dateTime) return;
    var dateStr;
    var d = new Date(parseFloat(dateTime));
    var year = d.getFullYear();     
    var month = d.getMonth()+1;     
    var date = d.getDate();
    var hour = d.getHours();
    var minute = d.getMinutes();
    var second = d.getSeconds();
    if(hour < 10){
        hour = "0" + hour;
    }
    if(minute < 10){
        minute = "0" + minute;
    }
    dateStr = year + "-" + month + "-" + date + " " + hour + ":" + minute;
    return dateStr;
}