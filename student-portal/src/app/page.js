import Image from "next/image";
import Header from "./header/page";
import Footer from "./footer/page";
import styles from "./page.module.css";
// <!--------import bootstrap---------->

export default function Home() {
  return (
    <main>
      <Header/>
     <h1>Welcome to Student portal page</h1>
      <Footer/>
    </main>
  );
}
