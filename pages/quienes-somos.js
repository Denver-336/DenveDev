import { NextSeo } from "next-seo";
import Nosotros from "@/componentes/quienesSomos/Nosotros";
import Mision from "@/componentes/quienesSomos/Mision";
import Vision from "@/componentes/quienesSomos/Vision";

export default function quienesSomos() {
  return (
    <>
      <NextSeo
        title="DenveDev | Nosotros"
        description="Pagina sobre DenveDev"
      />
      <main className="main">
        <section className="about-us section-container">
          <h1>¿Quienes somos?</h1>
          <div className="content-wrapper">
            <Nosotros />
            <Mision />
            <Vision />
          </div>
        </section>
      </main>
    </>
  )
}