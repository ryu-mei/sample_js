import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="titleContainer">
        <div className="title">PHOTO BOOK</div>
        <img src="#" alt="yellowwall"/>
      </div>
      <div className="section1">
        <div className="index">INDEX</div>
        <ul>
          <li>タイトルタイトルタイトルタイトルタイトルタイトル</li>
          <li>タイトルタイトルタイトルタイトルタイトルタイトル</li>
          <li>タイトルタイトルタイトルタイトルタイトルタイトル</li>
          <li>タイトルタイトルタイトルタイトルタイトルタイトル</li>
          <li>タイトルタイトルタイトルタイトルタイトルタイトル</li>
        </ul>
      </div>
      <div className="section2">
        <img src="#" alt="green"/>
        <img src="#" alt="blue"/>
        <img src="#" alt="red"/>
        <img src="#" alt="black"/>
      </div>
      <div className="section3">
        <div className="detali">DETAIL</div>
        <div className="detailContainer">
          <div className="auther">著者</div>
          <div className="publisher">出版社</div>
          <div className="publication">発行年</div>
        </div>
        <div className="dec">テキストテキストテキストテキストテキストテキストテキストテキスト</div>
        <div className="dec">テキストテキストテキストテキストテキストテキストテキストテキスト</div>
        
      </div>
    </>
  )
}
