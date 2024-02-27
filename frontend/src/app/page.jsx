import Image from "next/image";
import Hero from "../components/Hero/Hero";
import CategorySearch from "@/components/CategorySearch/CategorySearch";

export default function Home() {
  return (
    <>
      <Hero/>
      <CategorySearch/>
    </>
  );
}
