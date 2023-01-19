import Image from "next/image";
import Link from "next/link";
import banner from '../../public/imagenes/computer.svg'

export default function Banner() {
  return (
    <section className="main-banner section-container">
      <div className="content-wrapper content">
        <div className="container">
          <h1 className="title">Bienvenidos a EDsoft</h1>
          <p className="subtitle">Necesitas acesoramiento urgente!!! Nosotros te podemos ayudar en la construcción de tu sitio web.</p>
          <div>
            <Link className="button white" href="/contacto.html">Escríbenos ya mismo!</Link>
          </div>
        </div>
        <div className="container">
          <Image className="image" src={banner} alt="Computadora EDsoft" priority />
        </div>
      </div>
    </section>
  )
}