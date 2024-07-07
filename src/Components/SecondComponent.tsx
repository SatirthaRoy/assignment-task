import { Checkbox, FormControlLabel } from "@mui/material";
import React, { useEffect, useState } from "react"


const Department = ({department}:any) => {
  const [show, setShow] = useState(false);

  const [checkedSub, setCheckedSub] = useState<string[]>([]);

  const handleDeptChecked = () => {
    if(checkedSub === department?.sub_departments) {
      setCheckedSub([]);
    } else {
      setCheckedSub(department?.sub_departments);
    }
  }

  const handleSubChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(checkedSub.includes(e.target.value)) {
      setCheckedSub(checkedSub.filter(c => c !== e.target.value));
    } else {
      setCheckedSub([...checkedSub, e.target.value]);
    }
  }

  const isChecked = (str: string) => {
    return checkedSub.includes(str);
  }

  const isDeptChecked = () => {
    return checkedSub.length === department?.sub_departments.length;
  }

  console.log(checkedSub);

  return (
    <ul className="p-1">
      <li>
        <button className="px-4 py-2 font-semibold text-lg border rounded-lg mr-10" onClick={() => setShow(!show)}>{show ? '-' : '+'}</button>
        <FormControlLabel control={<Checkbox checked={isDeptChecked()} onChange={handleDeptChecked}/>} label={department?.department} />
        <ul className={`border-l ml-24 ${show ? undefined : 'hidden'}`}>
          {department?.sub_departments.map((sd:any,i:number) => {
            return (
              <li key={i}>
                <FormControlLabel control={<Checkbox checked={isChecked(sd)} value={sd} onChange={handleSubChecked} inputProps={{ 'aria-label': 'controlled' }}/>} label={sd} />
              </li>
            )
          })}
        </ul>
      </li>
    </ul>
  )
}

const SecondComponent = () => {

  const [deparments, setDepartments] = useState([])


  useEffect(() => {
    fetch('/deparments.json')
    .then(res => res.json())
    .then(data => setDepartments(data));
  }, [])

  return (
    <div className="mt-12 pb-40">
      <h1 className="text-6xl text-center font-semibold">Second Component</h1>
      <div>
        {deparments.map((d, i) => <Department department={d} key={i}/>)}
      </div>
    </div>
  )
}

export default SecondComponent