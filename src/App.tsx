import Threads from "./components/Threads"
import { FloatingNavbar } from "./components/FloatingNavbar"
import { Home, User, FolderGit2, Mail, LogIn } from "lucide-react"

const navItems = [
  { name: "Home", link: "#", icon: <Home className="size-4" /> },
  { name: "About", link: "#about", icon: <User className="size-4" /> },
  { name: "Projects", link: "#projects", icon: <FolderGit2 className="size-4" /> },
  { name: "Contact", link: "#contact", icon: <Mail className="size-4" /> },
  { name: "Login", link: "#login", icon: <LogIn className="size-4" /> },
]

function App() {
  return (
    <>
      <Threads
        className="fixed inset-0 w-full h-full -z-10"
        color={[1, 1, 1]}
        amplitude={1}
        distance={0}
        enableMouseInteraction
      />
      <FloatingNavbar navItems={navItems} />
    </>
  )
}

export default App
