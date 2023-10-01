import React, { useEffect, useState } from 'react';


export default function GridManual() {
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
    // let [disable, setDisable] = useState(true);

    useEffect(() => {
        for (let i = 3; i < 9; i += 3) {
            document.getElementById(`r${i}`).style.borderBottom = '2px solid black';
        }
        // for (let i = 3; i <= 6; i += 3) {
        //     for (let j = 1; j <= 9; j++) {
        //         document.getElementById(`r${j}c${i}`).style.borderRight = '2px solid black';
        //     }
        // }
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
        if (activePen === true) {
            document.getElementById(id).classList.add('pencil-clicked');
            console.log('on ' + activePen)
        }
        else {
            document.getElementById(id).classList.remove('pencil-clicked');
            console.log('pencil off' + activePen)

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
    }

    const reset_no = async () => {
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

    let [activePen, setActivePen] = useState(false);
    const pencil_click = () => {
        if (activePen) {
            setActivePen(false)
            let a = document.getElementById('btn_pencil')
            a.style.background = '#9ae3e7';
            a.style.boxShadow = '5px 5px black';
            a.style.transform = 'translate(0px, 0px)'        }
        else {
            let a = document.getElementById('btn_pencil')
            a.style.background = 'yellow';
            a.style.boxShadow = 'none';
            a.style.transform = 'translate(5px, 5px)'
            setActivePen(true)
        }
    }
    let hboxes = [];
    const hlighted = (id) => {
        if (highlighter){
            document.getElementById(id).style.background='yellow';
            hboxes.push(id)
        }

    }
    
    let [highlighter, setHighlighter] = useState(false)
    const hlight_click = ()=> {
        if (highlighter){
            let a = document.getElementById('btn_highlight')
            a.style.background = '#9ae3e7';
            a.style.boxShadow = '5px 5px black';
            a.style.transform = 'translate(0px, 0px)'
            let len = hboxes.length;
            for (let i = len-1; i >= 0 ; i--){
                document.getElementById(hboxes[i]).style.background = 'transparent';
                hboxes.pop();
            }
            setHighlighter(false)
        }
        else{
            let a = document.getElementById('btn_highlight')
            a.style.background = 'yellow';
            a.style.boxShadow = 'none';
            a.style.transform = 'translate(5px, 5px)'
            
            setHighlighter(true)
        }
    }

    return (<>
        <div className="container text-center" style={{ width: '359px', border: '4px solid black' }}>
            <div className="row row-css" id="r1">
                <div className="col col-css pos-rel" ><input id="r1c1" onClick={() => {hlighted('r1c1')}} onInput={() => { isValid('r1c1') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css pos-rel" ><input id="r1c2" onClick={() => {hlighted('r1c2')}} onInput={() => { isValid('r1c2') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css pos-rel thickBorder" ><input id="r1c3" onClick={() => {hlighted('r1c3')}} onInput={() => { isValid('r1c3') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css pos-rel" ><input id="r1c4" onClick={() => {hlighted('r1c4')}} onInput={() => { isValid('r1c4') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css pos-rel" ><input id="r1c5" onClick={() => {hlighted('r1c5')}} onInput={() => { isValid('r1c5') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css pos-rel thickBorder" ><input id="r1c6" onClick={() => {hlighted('r1c6')}} onInput={() => { isValid('r1c6') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css pos-rel" ><input id="r1c7" onClick={() => {hlighted('r1c7')}} onInput={() => { isValid('r1c7') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css pos-rel" ><input id="r1c8" onClick={() => {hlighted('r1c8')}} onInput={() => { isValid('r1c8') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css pos-rel " ><input id="r1c9" onClick={() => {hlighted('r1c9')}} onInput={() => { isValid('r1c9') }} type="number" className="inp" autoComplete="off" /></div>
            </div>
            <div className="row row-css" id="r2">
                <div className="col col-css pos-rel" ><input id="r2c1" onClick={() => {hlighted('r2c1')}} onInput={() => { isValid('r2c1') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css pos-rel" ><input id="r2c2" onClick={() => {hlighted('r2c2')}} onInput={() => { isValid('r2c2') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css pos-rel thickBorder" ><input id="r2c3" onClick={() => {hlighted('r2c3')}} onInput={() => { isValid('r2c3') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css pos-rel" ><input id="r2c4" onClick={() => {hlighted('r2c4')}} onInput={() => { isValid('r2c4') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css pos-rel" ><input id="r2c5" onClick={() => {hlighted('r2c5')}} onInput={() => { isValid('r2c5') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css pos-rel thickBorder" ><input id="r2c6" onClick={() => {hlighted('r2c6')}} onInput={() => { isValid('r2c6') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css pos-rel" ><input id="r2c7" onClick={() => {hlighted('r2c7')}} onInput={() => { isValid('r2c7') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css pos-rel" ><input id="r2c8" onClick={() => {hlighted('r2c8')}} onInput={() => { isValid('r2c8') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css pos-rel " ><input id="r2c9" onClick={() => {hlighted('r2c9')}} onInput={() => { isValid('r2c9') }} type="number" className="inp" autoComplete="off" /></div>
            </div>
            <div className="row row-css" id="r3">
                <div className="col col-css pos-rel" ><input id="r3c1" onClick={() => {hlighted('r3c1')}} onInput={() => { isValid('r3c1') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css pos-rel" ><input id="r3c2" onClick={() => {hlighted('r3c2')}} onInput={() => { isValid('r3c2') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css pos-rel thickBorder" ><input id="r3c3" onClick={() => {hlighted('r3c3')}} onInput={() => { isValid('r3c3') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css pos-rel" ><input id="r3c4" onClick={() => {hlighted('r3c4')}} onInput={() => { isValid('r3c4') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css pos-rel" ><input id="r3c5" onClick={() => {hlighted('r3c5')}} onInput={() => { isValid('r3c5') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css pos-rel thickBorder" ><input id="r3c6" onClick={() => {hlighted('r3c6')}} onInput={() => { isValid('r3c6') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css pos-rel" ><input id="r3c7" onClick={() => {hlighted('r3c7')}} onInput={() => { isValid('r3c7') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css pos-rel" ><input id="r3c8" onClick={() => {hlighted('r3c8')}} onInput={() => { isValid('r3c8') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css pos-rel " ><input id="r3c9" onClick={() => {hlighted('r3c9')}} onInput={() => { isValid('r3c9') }} type="number" className="inp" autoComplete="off" /></div>
            </div>
            <div className="row row-css" id="r4">
                <div className="col col-css pos-rel" ><input id="r4c1" onClick={() => {hlighted('r4c1')}} onInput={() => { isValid('r4c1') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css pos-rel" ><input id="r4c2" onClick={() => {hlighted('r4c2')}} onInput={() => { isValid('r4c2') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css pos-rel thickBorder" ><input id="r4c3" onClick={() => {hlighted('r4c3')}} onInput={() => { isValid('r4c3') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css pos-rel" ><input id="r4c4" onClick={() => {hlighted('r4c4')}} onInput={() => { isValid('r4c4') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css pos-rel" ><input id="r4c5" onClick={() => {hlighted('r4c5')}} onInput={() => { isValid('r4c5') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css pos-rel thickBorder" ><input id="r4c6" onClick={() => {hlighted('r4c6')}} onInput={() => { isValid('r4c6') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css pos-rel" ><input id="r4c7" onClick={() => {hlighted('r4c7')}} onInput={() => { isValid('r4c7') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css pos-rel" ><input id="r4c8" onClick={() => {hlighted('r4c8')}} onInput={() => { isValid('r4c8') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css pos-rel " ><input id="r4c9" onClick={() => {hlighted('r4c9')}} onInput={() => { isValid('r4c9') }} type="number" className="inp" autoComplete="off" /></div>
            </div>
            <div className="row row-css" id="r5">
                <div className="col col-css pos-rel" ><input id="r5c1" onClick={() => {hlighted('r5c1')}} onInput={() => { isValid('r5c1') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css pos-rel" ><input id="r5c2" onClick={() => {hlighted('r5c2')}} onInput={() => { isValid('r5c2') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css pos-rel thickBorder" ><input id="r5c3" onClick={() => {hlighted('r5c3')}} onInput={() => { isValid('r5c3') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css pos-rel" ><input id="r5c4" onClick={() => {hlighted('r5c4')}} onInput={() => { isValid('r5c4') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css pos-rel" ><input id="r5c5" onClick={() => {hlighted('r5c5')}} onInput={() => { isValid('r5c5') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css pos-rel thickBorder" ><input id="r5c6" onClick={() => {hlighted('r5c6')}} onInput={() => { isValid('r5c6') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css pos-rel" ><input id="r5c7" onClick={() => {hlighted('r5c7')}} onInput={() => { isValid('r5c7') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css pos-rel" ><input id="r5c8" onClick={() => {hlighted('r5c8')}} onInput={() => { isValid('r5c8') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css pos-rel " ><input id="r5c9" onClick={() => {hlighted('r5c9')}} onInput={() => { isValid('r5c9') }} type="number" className="inp" autoComplete="off" /></div>
            </div>
            <div className="row row-css" id="r6">
                <div className="col col-css pos-rel" ><input id="r6c1" onClick={() => {hlighted('r6c1')}} onInput={() => { isValid('r6c1') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css pos-rel" ><input id="r6c2" onClick={() => {hlighted('r6c2')}} onInput={() => { isValid('r6c2') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css pos-rel thickBorder" ><input id="r6c3" onClick={() => {hlighted('r6c3')}} onInput={() => { isValid('r6c3') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css pos-rel" ><input id="r6c4" onClick={() => {hlighted('r6c4')}} onInput={() => { isValid('r6c4') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css pos-rel" ><input id="r6c5" onClick={() => {hlighted('r6c5')}} onInput={() => { isValid('r6c5') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css pos-rel thickBorder" ><input id="r6c6" onClick={() => {hlighted('r6c6')}} onInput={() => { isValid('r6c6') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css pos-rel" ><input id="r6c7" onClick={() => {hlighted('r6c7')}} onInput={() => { isValid('r6c7') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css pos-rel" ><input id="r6c8" onClick={() => {hlighted('r6c8')}} onInput={() => { isValid('r6c8') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css pos-rel " ><input id="r6c9" onClick={() => {hlighted('r6c9')}} onInput={() => { isValid('r6c9') }} type="number" className="inp" autoComplete="off" /></div>
            </div>
            <div className="row row-css" id="r7">
                <div className="col col-css pos-rel" ><input id="r7c1" onClick={() => {hlighted('r7c1')}} onInput={() => { isValid('r7c1') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css pos-rel" ><input id="r7c2" onClick={() => {hlighted('r7c2')}} onInput={() => { isValid('r7c2') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css pos-rel thickBorder" ><input id="r7c3" onClick={() => {hlighted('r7c3')}} onInput={() => { isValid('r7c3') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css pos-rel" ><input id="r7c4" onClick={() => {hlighted('r7c4')}} onInput={() => { isValid('r7c4') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css pos-rel" ><input id="r7c5" onClick={() => {hlighted('r7c5')}} onInput={() => { isValid('r7c5') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css pos-rel thickBorder" ><input id="r7c6" onClick={() => {hlighted('r7c6')}} onInput={() => { isValid('r7c6') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css pos-rel" ><input id="r7c7" onClick={() => {hlighted('r7c7')}} onInput={() => { isValid('r7c7') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css pos-rel" ><input id="r7c8" onClick={() => {hlighted('r7c8')}} onInput={() => { isValid('r7c8') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css pos-rel " ><input id="r7c9" onClick={() => {hlighted('r7c9')}} onInput={() => { isValid('r7c9') }} type="number" className="inp" autoComplete="off" /></div>
            </div>
            <div className="row row-css" id="r8">
                <div className="col col-css pos-rel" ><input id="r8c1" onClick={() => {hlighted('r8c1')}} onInput={() => { isValid('r8c1') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css pos-rel" ><input id="r8c2" onClick={() => {hlighted('r8c2')}} onInput={() => { isValid('r8c2') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css pos-rel thickBorder" ><input id="r8c3" onClick={() => {hlighted('r8c3')}} onInput={() => { isValid('r8c3') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css pos-rel" ><input id="r8c4" onClick={() => {hlighted('r8c4')}} onInput={() => { isValid('r8c4') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css pos-rel" ><input id="r8c5" onClick={() => {hlighted('r8c5')}} onInput={() => { isValid('r8c5') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css pos-rel thickBorder" ><input id="r8c6" onClick={() => {hlighted('r8c6')}} onInput={() => { isValid('r8c6') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css pos-rel" ><input id="r8c7" onClick={() => {hlighted('r8c7')}} onInput={() => { isValid('r8c7') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css pos-rel" ><input id="r8c8" onClick={() => {hlighted('r8c8')}} onInput={() => { isValid('r8c8') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css pos-rel " ><input id="r8c9" onClick={() => {hlighted('r8c9')}} onInput={() => { isValid('r8c9') }} type="number" className="inp" autoComplete="off" /></div>
            </div>
            <div className="row row-css" id="r9">
                <div className="col col-css pos-rel" ><input id="r9c1" onClick={() => {hlighted('r9c1')}} onInput={() => { isValid('r9c1') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css pos-rel" ><input id="r9c2" onClick={() => {hlighted('r9c2')}} onInput={() => { isValid('r9c2') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css pos-rel thickBorder" ><input id="r9c3" onClick={() => {hlighted('r9c3')}} onInput={() => { isValid('r9c3') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css pos-rel" ><input id="r9c4" onClick={() => {hlighted('r9c4')}} onInput={() => { isValid('r9c4') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css pos-rel" ><input id="r9c5" onClick={() => {hlighted('r9c5')}} onInput={() => { isValid('r9c5') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css pos-rel thickBorder" ><input id="r9c6" onClick={() => {hlighted('r9c6')}} onInput={() => { isValid('r9c6') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css pos-rel" ><input id="r9c7" onClick={() => {hlighted('r9c7')}} onInput={() => { isValid('r9c7') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css pos-rel" ><input id="r9c8" onClick={() => {hlighted('r9c8')}} onInput={() => { isValid('r9c8') }} type="number" className="inp" autoComplete="off" /></div>
                <div className="col col-css pos-rel" ><input id="r9c9" onClick={() => {hlighted('r9c9')}} onInput={() => { isValid('r9c9') }} type="number" className="inp" autoComplete="off" /></div>
            </div>
        </div>
        <div className="container" style={{ textAlign: 'center' }}>
            <button id="btn-lock" onClick={reset_no}>Reset</button>
            <button id="btn-lock" onClick={lock_no}>Lock</button>
        </div>
        <div className="container" style={{ textAlign: 'center' }}>
            <button id='btn_pencil' onClick={pencil_click}><i className="fa-solid fa-pencil" ></i></button>
            <button id='btn_highlight' onClick={hlight_click}><i className="fa-solid fa-highlighter"></i></button>
        </div>
    </>
    )
}
