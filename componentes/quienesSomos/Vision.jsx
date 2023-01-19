import Image from "next/image";
import about3 from '../../public/imagenes/about-3.jpg'

export default function Vision() {
  return (
    <article className="about-item">
      <div className="image-container">
        <Image src={about3} alt="Sobre nosotros" priority />
      </div>
      <div>
        <h2>Visión</h2>
        <p>Neque id tempus consequat, mi nibh luctus nibh, sit amet auctor enim ligula nec arcu. Nulla efficitur elementum euismod. In hac habitasse platea dictumst. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
      </div>
    </article>
  )
}