import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="flex justify-center gap-10 mt-30 pb-6 text-2xl text-white">
      <FaGithub />
      <FaTwitter />
      <FaLinkedin />
      <FaYoutube />
    </footer>
  )
}
