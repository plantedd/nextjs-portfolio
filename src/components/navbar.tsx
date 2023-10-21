import Link from "next/link";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/">
          JB&apos;s Portfolio
        </Link>
      </div>
      <a href="https://drive.google.com/file/d/1O_eSpWxERbRYhFvE9IQSlzKvYQb4TtdG/view?fbclid=IwAR01kt_wIC_MBdOKX5rkuSDVfGsKZS3ccoVy0y631JjtLRzcbZdOivTUa14" className="cta-btn">Resume</a>
    </div>
  )
}

export default Navbar;