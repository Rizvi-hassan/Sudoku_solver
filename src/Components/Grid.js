import React, { useEffect, useState } from 'react';
import { oneEmptyCheck, findOneNo } from '../modules/oneElement';
import { elimination, maxRepetation } from '../modules/findThird';
import {row_Prob, col_Prob, box_Prob} from '../modules/Probability';
import cross from '../cross.png'


export default function Grid(props) {


    let values = [[0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
    // props.changeMode({left: '0px', width: '80px'})

    useEffect(() => {
        for (let i = 3; i < 9; i += 3) {
            document.getElementById(`r${i}`).style.borderBottom = '2px solid black';
        }
        for (let i = 3; i <= 6; i += 3) {
            for (let j = 1; j <= 9; j++) {
                document.getElementById(`r${j}c${i}`).style.borderRight = '2px solid black';
            }
        }
    }, [])

    const set_value = async () => {
        // console.log("set_value working")
        let i = 0
        let j = 0
        let grid = await document.getElementsByClassName("inp");
        for (let k = 0; k < 81; k++) {
            values[i][j] = (grid[k].value === "") ? 0 : parseInt(grid[k].value);
            j++;
            if (j === 9) {
                j = 0;
                i++
            }
        }
        // console.log(values)
    }

    const isValid = (id) => {
        let row = parseInt(id.charAt(1)) - 1;
        let col = parseInt(id.charAt(3)) - 1;
        let flag = false;
        let value = parseInt(document.getElementById(id).value);
        // console.log(`row:${row} and col:${col} and flag:${flag} and value:${value}`)
        for (let i = 0; i < 9; i++) {
            if (value === values[row][i] || value === values[i][col]) {
                flag = true;
                break
            }
        }
        if (!flag) {
            // console.log(parseInt(row/3)*3, parseInt(col/3)*3)
            for (let i = parseInt(row / 3) * 3; i < parseInt(row / 3) * 3 + 3; i++) {
                for (let j = parseInt(col / 3) * 3; j < parseInt(col / 3) * 3 + 3; j++) {
                    flag = (value === values[i][j]) ? true : flag;
                }
            }
        }
        if (flag === true) {
            // alert("Wrong input");
            document.getElementById(id).style.color = "red";
            // document.getElementById(id).border = "";
        }
        else {
            document.getElementById(id).style.color = "black";
            set_value()
        }
    }

    const reset_no = async() =>{
        values = [[0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0]
        ]
        let grid = await document.getElementsByClassName("inp");
        for (let k = 0; k < 81; k++) {
            grid[k].value = '';
            grid[k].style.color = 'black';

        }
    }

    const lock_no = async () => {
        for (let i = 1; i <= 9; i++) {
            for (let j = 1; j <= 9; j++) {
                if (document.getElementById(`r${j}c${i}`).value !== '') {
                    document.getElementById(`r${j}c${i}`).style.color = 'blue';
                    document.getElementById(`r${j}c${i}`).disabled = true;
                }
                else {
                    document.getElementById(`r${j}c${i}`).style.color = 'green';
                }
            }
        }
    }

    let logicLoop = () => {
        console.log("start")
        // console.log("values: "+values)
        console.log("\n One empty check")
        let isOneEmpty = oneEmptyCheck(values);
        console.log(isOneEmpty);
        if (isOneEmpty) {
            findOneNo(isOneEmpty, values)
            // update_value()
        }
        console.log("checked one time\n\n maxRepetation check")
        
        let toCheck = maxRepetation(values);
        for (let i in toCheck) {
            elimination(toCheck[i], values)
        }
        console.log("checked max repetation\n\n row probability")
        row_Prob(values)
        console.log("checked row probability \n\n col probability")
        col_Prob(values)
        console.log("checked col probability \n\n box probability")
        box_Prob(values)
        console.log("checked box probability")

        // console.log(values)
        
        // if (oneEmptyCheck(values)){continue}
        console.log("stop")

    }

    return (<>
    {props.info && <div className="info" id='info'>
        <h3>How To Solve?</h3>
        <img src={cross} alt="error" className="close" onClick={() => { document.getElementById('info').style.display = 'none'; props.changeInfo(false); console.log(info) }} />
        <p>1.Enter all the numbers of the questions in their corresponding boxes.</p>
        <p>2.Click on <kbd>Lock</kbd> to lock the numbers.</p>
        <p>3.Click on <kbd>Next</kbd> until all the boxes are filled with answers.</p>
      </div>}
        <div className="container text-center" style={{ width: '359px', border: '4px solid black' }}>
            <div className="row row-css" id="r1">
                <div className="col col-css" ><input id="r1c1" onInput={() => { isValid('r1c1') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css" ><input id="r1c2" onInput={() => { isValid('r1c2') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css" ><input id="r1c3" onInput={() => { isValid('r1c3') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css" ><input id="r1c4" onInput={() => { isValid('r1c4') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css" ><input id="r1c5" onInput={() => { isValid('r1c5') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css" ><input id="r1c6" onInput={() => { isValid('r1c6') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css" ><input id="r1c7" onInput={() => { isValid('r1c7') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css" ><input id="r1c8" onInput={() => { isValid('r1c8') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css" ><input id="r1c9" onInput={() => { isValid('r1c9') }} type="number" className="inp" autoComplete="off" /></div>
            </div>
            <div className="row row-css" id="r2">
                <div className="col col-css" ><input id="r2c1" onInput={() => { isValid('r2c1') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css" ><input id="r2c2" onInput={() => { isValid('r2c2') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css" ><input id="r2c3" onInput={() => { isValid('r2c3') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css" ><input id="r2c4" onInput={() => { isValid('r2c4') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css" ><input id="r2c5" onInput={() => { isValid('r2c5') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css" ><input id="r2c6" onInput={() => { isValid('r2c6') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css" ><input id="r2c7" onInput={() => { isValid('r2c7') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css" ><input id="r2c8" onInput={() => { isValid('r2c8') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css" ><input id="r2c9" onInput={() => { isValid('r2c9') }} type="number" className="inp" autoComplete="off" /></div>
            </div>
            <div className="row row-css" id="r3">
                <div className="col col-css" ><input id="r3c1" onInput={() => { isValid('r3c1') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css" ><input id="r3c2" onInput={() => { isValid('r3c2') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css" ><input id="r3c3" onInput={() => { isValid('r3c3') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css" ><input id="r3c4" onInput={() => { isValid('r3c4') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css" ><input id="r3c5" onInput={() => { isValid('r3c5') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css" ><input id="r3c6" onInput={() => { isValid('r3c6') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css" ><input id="r3c7" onInput={() => { isValid('r3c7') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css" ><input id="r3c8" onInput={() => { isValid('r3c8') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css" ><input id="r3c9" onInput={() => { isValid('r3c9') }} type="number" className="inp" autoComplete="off" /></div>
            </div>
            <div className="row row-css" id="r4">
                <div className="col col-css" ><input id="r4c1" onInput={() => { isValid('r4c1') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css" ><input id="r4c2" onInput={() => { isValid('r4c2') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css" ><input id="r4c3" onInput={() => { isValid('r4c3') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css" ><input id="r4c4" onInput={() => { isValid('r4c4') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css" ><input id="r4c5" onInput={() => { isValid('r4c5') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css" ><input id="r4c6" onInput={() => { isValid('r4c6') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css" ><input id="r4c7" onInput={() => { isValid('r4c7') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css" ><input id="r4c8" onInput={() => { isValid('r4c8') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css" ><input id="r4c9" onInput={() => { isValid('r4c9') }} type="number" className="inp" autoComplete="off" /></div>
            </div>
            <div className="row row-css" id="r5">
                <div className="col col-css" ><input id="r5c1" onInput={() => { isValid('r5c1') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css" ><input id="r5c2" onInput={() => { isValid('r5c2') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css" ><input id="r5c3" onInput={() => { isValid('r5c3') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css" ><input id="r5c4" onInput={() => { isValid('r5c4') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css" ><input id="r5c5" onInput={() => { isValid('r5c5') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css" ><input id="r5c6" onInput={() => { isValid('r5c6') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css" ><input id="r5c7" onInput={() => { isValid('r5c7') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css" ><input id="r5c8" onInput={() => { isValid('r5c8') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css" ><input id="r5c9" onInput={() => { isValid('r5c9') }} type="number" className="inp" autoComplete="off" /></div>
            </div>
            <div className="row row-css" id="r6">
                <div className="col col-css" ><input id="r6c1" onInput={() => { isValid('r6c1') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css" ><input id="r6c2" onInput={() => { isValid('r6c2') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css" ><input id="r6c3" onInput={() => { isValid('r6c3') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css" ><input id="r6c4" onInput={() => { isValid('r6c4') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css" ><input id="r6c5" onInput={() => { isValid('r6c5') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css" ><input id="r6c6" onInput={() => { isValid('r6c6') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css" ><input id="r6c7" onInput={() => { isValid('r6c7') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css" ><input id="r6c8" onInput={() => { isValid('r6c8') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css" ><input id="r6c9" onInput={() => { isValid('r6c9') }} type="number" className="inp" autoComplete="off" /></div>
            </div>
            <div className="row row-css" id="r7">
                <div className="col col-css" ><input id="r7c1" onInput={() => { isValid('r7c1') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css" ><input id="r7c2" onInput={() => { isValid('r7c2') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css" ><input id="r7c3" onInput={() => { isValid('r7c3') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css" ><input id="r7c4" onInput={() => { isValid('r7c4') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css" ><input id="r7c5" onInput={() => { isValid('r7c5') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css" ><input id="r7c6" onInput={() => { isValid('r7c6') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css" ><input id="r7c7" onInput={() => { isValid('r7c7') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css" ><input id="r7c8" onInput={() => { isValid('r7c8') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css" ><input id="r7c9" onInput={() => { isValid('r7c9') }} type="number" className="inp" autoComplete="off" /></div>
            </div>
            <div className="row row-css" id="r8">
                <div className="col col-css" ><input id="r8c1" onInput={() => { isValid('r8c1') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css" ><input id="r8c2" onInput={() => { isValid('r8c2') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css" ><input id="r8c3" onInput={() => { isValid('r8c3') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css" ><input id="r8c4" onInput={() => { isValid('r8c4') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css" ><input id="r8c5" onInput={() => { isValid('r8c5') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css" ><input id="r8c6" onInput={() => { isValid('r8c6') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css" ><input id="r8c7" onInput={() => { isValid('r8c7') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css" ><input id="r8c8" onInput={() => { isValid('r8c8') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css" ><input id="r8c9" onInput={() => { isValid('r8c9') }} type="number" className="inp" autoComplete="off" /></div>
            </div>
            <div className="row row-css" id="r9">
                <div className="col col-css" ><input id="r9c1" onInput={() => { isValid('r9c1') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css" ><input id="r9c2" onInput={() => { isValid('r9c2') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css" ><input id="r9c3" onInput={() => { isValid('r9c3') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css" ><input id="r9c4" onInput={() => { isValid('r9c4') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css" ><input id="r9c5" onInput={() => { isValid('r9c5') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css" ><input id="r9c6" onInput={() => { isValid('r9c6') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css" ><input id="r9c7" onInput={() => { isValid('r9c7') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css" ><input id="r9c8" onInput={() => { isValid('r9c8') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css" ><input id="r9c9" onInput={() => { isValid('r9c9') }} type="number" className="inp" autoComplete="off" /></div>
            </div>
        </div>
        <div className="container" style={{textAlign: 'center'}}>
            <button id="btn-lock" onClick={reset_no}>Reset</button>
            <button id="btn-lock" onClick={lock_no}>Lock</button>
            <button id="btn-logic" onClick={logicLoop}>Next</button>
        </div>
    </>
    )
}
