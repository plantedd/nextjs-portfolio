import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero-container">
      <Image src='/images/profile.jpeg' className="profile-img" width={300} height={300} alt="Joe's personal headshot" />
      <div className="hero-text">
        <h1>Hey, I&apos;m JB 👋</h1>
        <p>
          I&apos;m a software developer based in Waxhaw, North Carolina. I specialize in building (and occasionally designing)
          exceptional websites, applications, and everything in between.
        </p>
        <div className="social-icons">
          <a
            href="https://twitter.com/bakerj417"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            href="https://github.com/bakerj417"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/josephkbaker/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero;