const createColArr = (col, values) => {
    let arr = [];
    for (let j = 0; j < 9; j++) {
        arr.push(values[j][col]);
    }
    return arr
}
export const oneEmptyCheck = ( values) => {
    const count = (arr) => {
        let c = 0;
        for (let i in arr) {
            c = (arr[i] === 0) ? c + 1 : c;
        }
        return c;
    }

    for (let i = 0; i < 9; i++) {
        if (count(values[i]) === 1) {
            return { which: 'r', where: i, index: values[i].indexOf(0) };
        }
    }

    for (let i = 0; i < 9; i++) {
        let arr = createColArr(i, values)
        if (count(arr) === 1) {
            return { which: 'c', where: i, index: arr.indexOf(0) };
        }
    }

    for (let k = 0; k < 9; k++) {
        let [r, c] = [[0, 0], [0, 3], [0, 6], [3, 0], [3, 3], [3, 6], [6, 0], [6, 3], [6, 6]][k];
        let container = []
        let emp = 0;
        for (let i = r; i < r + 3; i++) {
            emp += count(values[i].slice(c, c + 3))
            if (count(values[i].slice(c, c + 3)) === 1) {
                container.push([k, i, values[i].slice(c, c + 3).indexOf(0)])
            }
        }
        if (emp === 1){
            return { which: 'b', where: container[0][0], row: container[0][1], col: container[0][2] };
        }
    }
    return false;
}

export const findOneNo = (info, values) => {
    let nos = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let missingInRow = (value) => {
        for (let i in values[info.where]) {
            if (values[info.where][i] === value) {
                return false;
            }
        }
        return true
    }
    let missingInCol = (value) => {
        let arr = createColArr(info.where, values)
        for (let i in arr) {
            if (arr[i] === value) {
                return false;
            }
        }
        return true
    }
    let missingInBox = (value) => {
        let [r, c] = [[0, 0], [0, 3], [0, 6], [3, 0], [3, 3], [3, 6], [6, 0], [6, 3], [6, 6]][info.where];
        for (let i = r; i < r + 3; i++) {
            for (let j = c; j < c + 3; j++) {
                if (value === values[i][j]) {
                    return false;
                }
            }
        }
        return true
    }

    if (info.which === 'r') {
        let filtered = nos.filter(missingInRow);
        values[info.where][info.index] = filtered[0];
        // console.log(info)
        document.getElementById(`r${info.where+1}c${info.index+1}`).value = filtered[0];
        console.log(filtered+" written in r")

        return
    }
    if (info.which === 'c') {
        let filtered = nos.filter(missingInCol)[0];
        values[info.index][info.where] = filtered;
        document.getElementById(`r${info.index+1}c${info.where+1}`).value = filtered;
        console.log(filtered+" written c")

        return
    }
    if (info.which === 'b') {
        let filtered = nos.filter(missingInBox)[0];
        values[info.row][info.col] = filtered;
        document.getElementById(`r${info.row+1}c${info.col+1}`).value = filtered;
        console.log(filtered+" written b")
        return
    }
    console.log("ENDING ONE ELEMENT")
    return false
}
