import { redirect } from "next/dist/server/api-utils";
import Image from "next/image";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import { Main } from "next/document";

// function EachPost() {
//   return (
//     <article>
//       <a href="post.html">
//         <h3>記事のタイトル</h3>
//       </a>
//     </article>
//   )
// }

function EachPost(props) {
  return (
    <article>
      <a href={props.url}>
        <h3>{props.title}</h3>
      </a>
    </article>  
  )
}

function Decoration(props) {
  return (
    <div style={{ color: "red" }}>
      {props.children}
    </div>
  )
}


export default function Home() {
  const props1 = { title: "タイトル1", url: "post1.html"}
  const props2 = { title: "タイトル2", url: "post2.html"}
  return  (
    <> 
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  )
}
