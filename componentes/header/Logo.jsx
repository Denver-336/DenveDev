import Image from "next/image"
import Link from "next/link"
import logo from '../../public/imagenes/logo.svg'

export default function Logo() {
  return (
    <Link href="/">
      <Image src={logo} alt="Logo EDsoft" priority />
    </Link>
  )
}