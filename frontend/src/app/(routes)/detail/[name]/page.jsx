"use client"
import React, { useEffect } from 'react';

export default function detail({ params }) {

  useEffect(() => {
    console.log(params.name);
  },[]);

  return (
    <div>Страница деталей</div>
  )
}
