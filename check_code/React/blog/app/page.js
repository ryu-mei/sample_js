import { redirect } from "next/dist/server/api-utils";
import Image from "next/image";

export default function Home() {
  const subtitle = 'アウトプットしていくサイト'
  return  (
    <div className="hero">
      <h1 style={{color: 'red', fontSize: '80px'}}>CUBE</h1>
      <p>{subtitle}</p>
    </div>
  )
}
