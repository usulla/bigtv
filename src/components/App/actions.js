export function compareTable(arr) {
    if (checkTypes(arguments, ["array", "array"])) {
        var comparedTables = [];
        var timeLiveDifferent;
        var lastEl;
        arr[0].forEach((obj, i) => {
            comparedTablesaddEl(obj);
            addLicensedProps(i);
            addAirTime(obj.datetime, i);
            //Compare difference live time and idec. Live time don't must to be more than 60000ms                 
            timeLiveDifferent = Math.abs(Date.parse(obj.datetime) - Date.parse(arr[1][i].datetime));
            if ((obj.IDEC !== arr[1][i].IDEC) || (timeLiveDifferent >= 60000)) {
                addPropsWithError(i);
                addObjectWithErrorRow(i);
            }
            else {
                comparedTables[lastEl].compare = true;
            }
        })
    } else {
        console.error("Arguments are not arrays");
    }
    function comparedTablesaddEl(obj) {
        comparedTables.push(obj);
        lastEl = comparedTables[0] !== undefined ? comparedTables.length - 1 : undefined;
    }
    function addPropsWithError(numRow) {
        comparedTables[lastEl].compare = false;
        comparedTables[lastEl].compareId = numRow;
    }
    function addObjectWithErrorRow(numRow) {
        comparedTablesaddEl(arr[1][numRow])
        comparedTables[lastEl].compare = false;
        comparedTables[lastEl].compareId = numRow;
    }
    function addLicensedProps(numRow) {
        comparedTables[numRow].licensed = true;
    }
    function addAirTime(datetime, numRow) {
        var airTime = datetime.split(' ')[1];
        var airDate = datetime.split(' ')[0];
        comparedTables[numRow].airTime = airTime;
        comparedTables[numRow].airDate = airDate;
    }

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
