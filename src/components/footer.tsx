import { Github, Twitter, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">TaskSocial</h3>
            <p className="text-zinc-400 mb-4 max-w-md">
              The next generation productivity platform that rewards you for completing tasks while connecting you with
              like-minded people.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                  Press
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-12 pt-8 text-center text-zinc-500 text-sm">
          <p>© {new Date().getFullYear()} TaskSocial. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
