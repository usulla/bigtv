// export function compareTable(arr1, arr2) {
//     if (checkTypes(arguments, ["array", "array"])) {
//         var diffCompareArr = [];
//         Array.from(arguments).forEach((item, index) => {
//             var timeLiveDifferent;
//             diffCompareArr.push(
//                 item.filter((obj, i) => {
//                     //Compare difference live time and idec. Live time don't must to be more than 60000ms 
//                     if(index === 0){
//                     timeLiveDifferent = Math.abs(Date.parse(obj.datetime) - Date.parse(arr2[i].datetime))
//                     return (obj.IDEC !== arr2[i].IDEC ||  timeLiveDifferent >= 60000)
//                         ? true
//                         : false;
//                     } else{
//                         timeLiveDifferent = Math.abs(Date.parse(obj.datetime) - Date.parse(arr1[i].datetime))
//                         return (obj.IDEC !== arr1[i].IDEC ||  timeLiveDifferent >= 60000)
//                         ? true
//                         : false;
//                     }
//                 })
//             );
//         });
//     } else {
//         console.error("Arguments are not arrays");
//     }
//     return diffCompareArr;
// }

export function compareTable(arr) {
    if (checkTypes(arguments, ["array", "array"])) {
        var comparedTables = arr;
        var timeLiveDifferent;
        comparedTables[0].forEach((obj, i) => {
            //Compare difference live time and idec. Live time don't must to be more than 60000ms                 
            timeLiveDifferent = Math.abs(Date.parse(obj.datetime) - Date.parse(comparedTables[1][i].datetime));
            if ((obj.IDEC !== comparedTables[1][i].IDEC) || (timeLiveDifferent >= 60000)) {
                obj.compare = false;
                comparedTables[1][i].compare = false;
             //   diffCompareArr.push([obj, arr2[i]]);
            }
            else {
                obj.compare = true;
                comparedTables[1][i].compare = true;
            }
        })
    } else {
        console.error("Arguments are not arrays");
    }
console.log(comparedTables, 'comparedTables')
    return comparedTables;
}

function getType(obj) {
    // Object.prototype.toString.call( [1,2,3] ) => [Object Array] => array
    return Object.prototype.toString
        .call(obj)
        .match(/\s(\w+)/)[1]
        .toLowerCase();
}

function checkTypes(args, types) {
    //args === arguments
    //var args = [].slice.call( args );
    var args = Array.from(args);
    args.forEach((item, index) => {
        if (getType(item) != types[index]) {
            throw new TypeError(
                "param " + index + " must be of type " + types[index]
            );
        }
    });
    return true;
}
