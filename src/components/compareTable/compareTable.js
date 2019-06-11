const diffPrograms1 = [];
const diffPrograms2 = [];
function compareTable(arr1, arr2) {
    diffPrograms1 = arr1.filter((item, index) => {
        return (JSON.stringify(item) !== JSON.stringify(arr2[index]))
    })
    diffPrograms2 = arr2
}


function compareTable(arr1, arr2) {
    const marketCompareArr1 = arr1.map((item, index) => {
        return (
            (JSON.stringify(item) === JSON.stringify(arr2[index])) ? (item.matchProgram = true) : (item.matchProgram = false)
        );
    });
    const marketCompareArr2 = arr2.map((item, index) => {
        return (
            (JSON.stringify(item) === JSON.stringify(arr1[index])) ? (item.matchProgram = true) : (item.matchProgram = false)
        );
    })
}




return a1.filter(i => !a2.includes(i))
    .concat(a2.filter(i => !a1.includes(i)))
[
    {
        "liveDateTime": "2019-06-05 07:00:00",
        "id": "PR597118",
        "liveTime": "8:35",
        "serialNumber": 45,
        "timing": "0:24:36"
    },
    {
        "id": "PR597119",
        "liveTime": "9:35",
        "programType": "Программа",
        "programName": "Дом-2. Lite",
        "serialNumber": 35,
        "timing": "0:25:36",
        "previousShow": "21.05.2019"
    },
    {
        "id": "PR597120",
        "liveTime": "9:35",
        "programType": "Программа",
        "programName": "Бородина против Бузовой",
        "serialNumber": 30,
        "timing": "0:30:36",
        "previousShow": "31.05.2019"
    }
]