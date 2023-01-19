import { NextSeo } from "next-seo";
import Banner from "@/componentes/main/Banner";
import Nosotros from "@/componentes/main/Nosotros";
import Servicios from "@/componentes/main/servicios/Servicios";
import TrabajaConNosotros from "@/componentes/main/TrabajoConNosotros";
import UltimosProyectos from "@/componentes/main/UltimosProyectos";

export default function Home() {
  return (
    <>
      <NextSeo
        title="DenveDev | Inicio"
        description="Pagina de inicio de DenveDev"
      />
      <main>
        <Banner />
        <Servicios />
        <Nosotros />
        <UltimosProyectos />
        <TrabajaConNosotros />
      </main>
    </>
  )
}
