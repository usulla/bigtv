function compareTable(arr1, arr2) {
    arr1.forEach((item, index) => { //массив
        for (var key in item) { // объект
            if (typeof item[key] === 'string') { // сравнение дня недели
                if (item[key] === arr2[index].key) { //
                    continue;
                }
                console.log("ERROR Дни недели не совпадают");
                break;
            }
            if (typeof item[key] === 'array') { // массив programs
                arr.filter((i, index) => {
                    JSON.stringify(i) === JSON.stringify(arr2[index].key)
                })
            }

        }
    }
    }
    }
    })
}

      // var marketCompareArr1 = arr1;
      // var marketCompareArr2 = arr2;
      // marketCompareArr1 = Array.from(marketCompareArr1).map((item, index) => {
      //   return (JSON.stringify(item) === JSON.stringify(arr2[index])
      //     ? (Object.assign(item, {matchProgram:true}))
      //     : (Object.assign(item, {matchProgram:false}))
      //   );
      // });
      // console.log(arr1, 'arr111')
      // marketCompareArr2 = Array.from(marketCompareArr2).map((item, index) => {
      //   return JSON.stringify(item) === JSON.stringify(arr1[index])
      //   ? (Object.assign(item, {matchProgram:true}))
      //   : (Object.assign(item, {matchProgram:false}))
      // });
      // console.log(marketCompareArr1, marketCompareArr2, 'resres');
