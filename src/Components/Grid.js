import React, { useState } from 'react'


export default function Grid() {
    let values = [  [0,0,0, 0,0,0, 0,0,0],
                    [0,0,0, 0,0,0, 0,0,0],
                    [0,0,0, 0,0,0, 0,0,0],
                    [0,0,0, 0,0,0, 0,0,0],
                    [0,0,0, 0,0,0, 0,0,0],
                    [0,0,0, 0,0,0, 0,0,0],
                    [0,0,0, 0,0,0, 0,0,0],
                    [0,0,0, 0,0,0, 0,0,0],
                    [0,0,0, 0,0,0, 0,0,0],
                ]
    let [disable, setDisable] = useState(false);
    let set_value = async ()=>{
        if (disable){
            setDisable(false)}
        else{
            setDisable(true)
        }
        let i = 0
        let j = 0
        let grid = await document.getElementsByClassName("inp");
        for (let k = 0; k < 81; k++) {
            values[i][j] =(grid[k].value === "")? 0: grid[k].value;
            j++;
            if (j === 9){
                j = 0;
                i++
            }
        }
        console.log(values)
    }


    return (<>
        <div className="container text-center" style={{width: '359px', border:'4px solid black'}}>
            <div className="row row-css" id="r1">
                <div className="col col-css" ><input disabled={disable} id="r1c1" type="number" className="inp" autoComplete="off"/></div>
                <div className="col col-css" ><input disabled={disable} id="r1c2" type="number" className="inp" autoComplete="off"/></div>
                <div className="col col-css" ><input disabled={disable} id="r1c3" type="number" className="inp" autoComplete="off"/></div>
                <div className="col col-css" ><input disabled={disable} id="r1c4" type="number" className="inp" autoComplete="off"/></div>
                <div className="col col-css" ><input disabled={disable} id="r1c5" type="number" className="inp" autoComplete="off"/></div>
                <div className="col col-css" ><input disabled={disable} id="r1c6" type="number" className="inp" autoComplete="off"/></div>
                <div className="col col-css" ><input disabled={disable} id="r1c7" type="number" className="inp" autoComplete="off"/></div>
                <div className="col col-css" ><input disabled={disable} id="r1c8" type="number" className="inp" autoComplete="off"/></div>
                <div className="col col-css" ><input disabled={disable} id="r1c9" type="number" className="inp" autoComplete="off"/></div>
            </div>
            <div className="row row-css" id="r2">
                <div className="col col-css" ><input disabled={disable} type="number" id="r2c1" className="inp" autoComplete="off"/></div>
                <div className="col col-css" ><input disabled={disable} type="number" id="r2c2" className="inp" autoComplete="off"/></div>
                <div className="col col-css" ><input disabled={disable} type="number" id="r2c3" className="inp" autoComplete="off"/></div>
                <div className="col col-css" ><input disabled={disable} type="number" id="r2c4" className="inp" autoComplete="off"/></div>
                <div className="col col-css" ><input disabled={disable} type="number" id="r2c5" className="inp" autoComplete="off"/></div>
                <div className="col col-css" ><input disabled={disable} type="number" id="r2c6" className="inp" autoComplete="off"/></div>
                <div className="col col-css" ><input disabled={disable} type="number" id="r2c7" className="inp" autoComplete="off"/></div>
                <div className="col col-css" ><input disabled={disable} type="number" id="r2c8" className="inp" autoComplete="off"/></div>
                <div className="col col-css" ><input disabled={disable} type="number" id="r2c9" className="inp" autoComplete="off"/></div>
            </div>
            <div className="row row-css" id="r3">
                <div className="col col-css" ><input disabled={disable} id="r3c1" type="number" className="inp" autoComplete="off"/></div>
                <div className="col col-css" ><input disabled={disable} id="r3c2" type="number" className="inp" autoComplete="off"/></div>
                <div className="col col-css" ><input disabled={disable} id="r3c3" type="number" className="inp" autoComplete="off"/></div>
                <div className="col col-css" ><input disabled={disable} id="r3c4" type="number" className="inp" autoComplete="off"/></div>
                <div className="col col-css" ><input disabled={disable} id="r3c5" type="number" className="inp" autoComplete="off"/></div>
                <div className="col col-css" ><input disabled={disable} id="r3c6" type="number" className="inp" autoComplete="off"/></div>
                <div className="col col-css" ><input disabled={disable} id="r3c7" type="number" className="inp" autoComplete="off"/></div>
                <div className="col col-css" ><input disabled={disable} id="r3c8" type="number" className="inp" autoComplete="off"/></div>
                <div className="col col-css" ><input disabled={disable} id="r3c9" type="number" className="inp" autoComplete="off"/></div>
            </div>
            <div className="row row-css" id="r4">
                <div className="col col-css" ><input disabled={disable} id="r4c1" type="number" className="inp" autoComplete="off"/></div>
                <div className="col col-css" ><input disabled={disable} id="r4c2" type="number" className="inp" autoComplete="off"/></div>
                <div className="col col-css" ><input disabled={disable} id="r4c3" type="number" className="inp" autoComplete="off"/></div>
                <div className="col col-css" ><input disabled={disable} id="r4c4" type="number" className="inp" autoComplete="off"/></div>
                <div className="col col-css" ><input disabled={disable} id="r4c5" type="number" className="inp" autoComplete="off"/></div>
                <div className="col col-css" ><input disabled={disable} id="r4c6" type="number" className="inp" autoComplete="off"/></div>
                <div className="col col-css" ><input disabled={disable} id="r4c7" type="number" className="inp" autoComplete="off"/></div>
                <div className="col col-css" ><input disabled={disable} id="r4c8" type="number" className="inp" autoComplete="off"/></div>
                <div className="col col-css" ><input disabled={disable} id="r4c9" type="number" className="inp" autoComplete="off"/></div>
            </div>
            <div className="row row-css" id="r5">
                <div className="col col-css" ><input disabled={disable} id="r5c1" type="number" className="inp" autoComplete="off"/></div>
                <div className="col col-css" ><input disabled={disable} id="r5c2" type="number" className="inp" autoComplete="off"/></div>
                <div className="col col-css" ><input disabled={disable} id="r5c3" type="number" className="inp" autoComplete="off"/></div>
                <div className="col col-css" ><input disabled={disable} id="r5c4" type="number" className="inp" autoComplete="off"/></div>
                <div className="col col-css" ><input disabled={disable} id="r5c5" type="number" className="inp" autoComplete="off"/></div>
                <div className="col col-css" ><input disabled={disable} id="r5c6" type="number" className="inp" autoComplete="off"/></div>
                <div className="col col-css" ><input disabled={disable} id="r5c7" type="number" className="inp" autoComplete="off"/></div>
                <div className="col col-css" ><input disabled={disable} id="r5c8" type="number" className="inp" autoComplete="off"/></div>
                <div className="col col-css" ><input disabled={disable} id="r5c9" type="number" className="inp" autoComplete="off"/></div>
            </div>
            <div className="row row-css" id="r6">
                <div className="col col-css" ><input disabled={disable} id="r6c1" type="number" className="inp" autoComplete="off"/></div>
                <div className="col col-css" ><input disabled={disable} id="r6c2" type="number" className="inp" autoComplete="off"/></div>
                <div className="col col-css" ><input disabled={disable} id="r6c3" type="number" className="inp" autoComplete="off"/></div>
                <div className="col col-css" ><input disabled={disable} id="r6c4" type="number" className="inp" autoComplete="off"/></div>
                <div className="col col-css" ><input disabled={disable} id="r6c5" type="number" className="inp" autoComplete="off"/></div>
                <div className="col col-css" ><input disabled={disable} id="r6c6" type="number" className="inp" autoComplete="off"/></div>
                <div className="col col-css" ><input disabled={disable} id="r6c7" type="number" className="inp" autoComplete="off"/></div>
                <div className="col col-css" ><input disabled={disable} id="r6c8" type="number" className="inp" autoComplete="off"/></div>
                <div className="col col-css" ><input disabled={disable} id="r6c9" type="number" className="inp" autoComplete="off"/></div>
            </div>
            <div className="row row-css" id="r7">
                <div className="col col-css" ><input disabled={disable} id="r7c1" type="number" className="inp" autoComplete="off"/></div>
                <div className="col col-css" ><input disabled={disable} id="r7c2" type="number" className="inp" autoComplete="off"/></div>
                <div className="col col-css" ><input disabled={disable} id="r7c3" type="number" className="inp" autoComplete="off"/></div>
                <div className="col col-css" ><input disabled={disable} id="r7c4" type="number" className="inp" autoComplete="off"/></div>
                <div className="col col-css" ><input disabled={disable} id="r7c5" type="number" className="inp" autoComplete="off"/></div>
                <div className="col col-css" ><input disabled={disable} id="r7c6" type="number" className="inp" autoComplete="off"/></div>
                <div className="col col-css" ><input disabled={disable} id="r7c7" type="number" className="inp" autoComplete="off"/></div>
                <div className="col col-css" ><input disabled={disable} id="r7c8" type="number" className="inp" autoComplete="off"/></div>
                <div className="col col-css" ><input disabled={disable} id="r7c9" type="number" className="inp" autoComplete="off"/></div>
            </div>
            <div className="row row-css" id="r8">
                <div className="col col-css" ><input disabled={disable} id="r8c1" type="number" className="inp" autoComplete="off"/></div>
                <div className="col col-css" ><input disabled={disable} id="r8c2" type="number" className="inp" autoComplete="off"/></div>
                <div className="col col-css" ><input disabled={disable} id="r8c3" type="number" className="inp" autoComplete="off"/></div>
                <div className="col col-css" ><input disabled={disable} id="r8c4" type="number" className="inp" autoComplete="off"/></div>
                <div className="col col-css" ><input disabled={disable} id="r8c5" type="number" className="inp" autoComplete="off"/></div>
                <div className="col col-css" ><input disabled={disable} id="r8c6" type="number" className="inp" autoComplete="off"/></div>
                <div className="col col-css" ><input disabled={disable} id="r8c7" type="number" className="inp" autoComplete="off"/></div>
                <div className="col col-css" ><input disabled={disable} id="r8c8" type="number" className="inp" autoComplete="off"/></div>
                <div className="col col-css" ><input disabled={disable} id="r8c9" type="number" className="inp" autoComplete="off"/></div>
            </div>
            <div className="row row-css" id="r9">
                <div className="col col-css" ><input disabled={disable} id="r9c1" type="number" className="inp" autoComplete="off"/></div>
                <div className="col col-css" ><input disabled={disable} id="r9c2" type="number" className="inp" autoComplete="off"/></div>
                <div className="col col-css" ><input disabled={disable} id="r9c3" type="number" className="inp" autoComplete="off"/></div>
                <div className="col col-css" ><input disabled={disable} id="r9c4" type="number" className="inp" autoComplete="off"/></div>
                <div className="col col-css" ><input disabled={disable} id="r9c5" type="number" className="inp" autoComplete="off"/></div>
                <div className="col col-css" ><input disabled={disable} id="r9c6" type="number" className="inp" autoComplete="off"/></div>
                <div className="col col-css" ><input disabled={disable} id="r9c7" type="number" className="inp" autoComplete="off"/></div>
                <div className="col col-css" ><input disabled={disable} id="r9c8" type="number" className="inp" autoComplete="off"/></div>
                <div className="col col-css" ><input disabled={disable} id="r9c9" type="number" className="inp" autoComplete="off"/></div>
            </div>
        </div>
            <button id="btn-lock" onClick={set_value}>Lock</button>
        </>
    )
}
