"use client"
import Image from "next/image";
import Hero from "../components/Hero/Hero";
import CategorySearch from "@/components/CategorySearch/CategorySearch";
import DoctorList from "@/components/DoctorList/DoctorList";
import GlobalApi from "@/utils/GlobalApi";
import { useEffect, useState } from 'react';

export default function Home() {

  const [doctorsList, setDoctorsList] = useState([]);

  useEffect(() => {
    getDoctorsList();
  },[])

  const getDoctorsList = () => {
    GlobalApi.getDoctorsList().then(resp => {
      console.log(resp.data.data);
      setDoctorsList(resp.data.data);
    });
  }

  return (
    <>
      <Hero />
      <CategorySearch />
      <DoctorList doctorsList={doctorsList} />
    </>
  );
}
