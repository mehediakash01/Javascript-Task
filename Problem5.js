function  calculateSleepTime( times ) {

   
let totalTime =0;

    for (let time of times){
        if (typeof(time)!=="number"){
            return "Invalid";
        }
        totalTime += time;

    }
    const hour = Math.floor(totalTime/3600);
    const remainSecOfhour = totalTime%3600;
    const minute = Math.floor(remainSecOfhour/60);
    const remainSecOfMin = remainSecOfhour%60;
    const second = remainSecOfMin;
    return { hour: hour, minutes: minute, seconds: second};

   
}
console.log(calculateSleepTime([100, 3800, "90" ]));