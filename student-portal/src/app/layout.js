
import { Inter } from 'next/font/google'
// import './globals.css'
import "bootstrap/dist/css/bootstrap.css"
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

// const team = (props) => {
//   const img = require("../../assets/images/security-team.jpg");
//   const styling = {
//       backgroundImage: `url('${img}')`,
//       width:"100%",
//       height:"100%"
//   }
// }

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className="bg-white">
        {/*------------ start navbar area -------------*/}
      <nav class="navbar navbar-dark bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand">
            <img
              src="https://shivshankar9.github.io/Student-portal/images/logo.png"
              alt=""
              width="40"
              height="40"
              // class="d-inline-block align-text-top"
            />
            Student Portal
          </a>
          <Link href="/login" class="nav-link active text-white">Login</Link>
          <Link href="/registration" class="nav-link active text-white">Registration</Link>
          <Link href="/contact" class="nav-link active text-white">Contact Us</Link>
        </div>
      </nav>
      <br></br>
      <br></br>
      <br></br>
      {/* <div class="card-footer bg-primary fix  navbar-fixed-bottom" >
    2 days ago
  </div> */}
      {/*------------ end navbar area -------------*/}
      {children}</body>
    </html>
  )
}
