"use client"
import React, { useEffect, useState } from 'react'
import GlobalApi from '@/utils/GlobalApi';

export default function doctors({params}) { 

  const [doctorsList, setDoctorList] = useState([]);

  useEffect(() => {
    getDoctors();
  },[]);

  const getDoctors = () => {
    GlobalApi.getDoctorsByCategory(params.name).then(resp => {
      console.log(resp.data.data);
      setDoctorList(resp.data.data);
    });
  }

  return (
    <div>
      {doctorsList.map((item, index) => (
        <div key={index}>
          <h1>{item.attributes.Name}</h1>
        </div>
      ))}
    </div>
  )
}
