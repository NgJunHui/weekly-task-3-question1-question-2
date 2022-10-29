import React from "react";
import _ from "lodash";

const Lodash = () => {
    //Question 2a.
    const arrOne = [{
        id: 20,
        name: 'alex'

    }, {
        id: 30,
        name: 'alina'
    }]

    const arrTwo = [{
        id: 40,
        name: 'hello'
    }, {
        id: 30,
        name: 'world'
    }]

    const result = _.xorBy(arrOne, arrTwo, 'id');
    console.log(result);

    const res = _.xorBy(arrOne, arrTwo, result);
    console.log(res);

    //Question 2b.
    const str = ['u', 'ec']
    const arr = [{
        storageVal: 'u', table: ['E', 'F']
    },
    { storageVal: 'data', id: 3 },
    {
        storageVal: 'ec', table: ['E']
    }]

    const findArr = _.map(arr, 'table');
    const compactArr = _.compact(findArr)
    console.log(compactArr)

    //Question 2c.
    const a = [['E'], ['F']];

    const flattenArr = _.flatten(a)
    console.log(flattenArr)

    //Question 2d.
    const t = [['E', 'F'], [['F'], ['G']]];
    const deepFlattenArr = _.flattenDeep(t)
    console.log(deepFlattenArr)

    return (
        <div>
        </div>
    )
};


export default Lodash;