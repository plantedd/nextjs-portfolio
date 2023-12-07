import Link from "next/link";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/">
          Christian&apos;s Portfolio
        </Link>
      </div>
      <a target="_blank" href="https://drive.google.com/file/d/17wz2eOXSyDekWbBDNdTjnEtUN3w3o4BV/view?usp=sharing" className="cta-btn">Resume</a>
    </div>
  )
}

export default Navbar;