import { Chat } from "@/components/chat"
import { ThemeProvider } from "@/components/theme-provider"

export default function Home() {
  return (
    <ThemeProvider>
      <div className="flex min-h-screen flex-col bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
        <header className="sticky top-0 z-10 border-b bg-white/80 backdrop-blur-sm dark:bg-slate-950/80 dark:border-slate-800">
          <div className="container flex h-16 items-center px-4 sm:px-6">
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-orange-500 p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                  <line x1="12" x2="12" y1="19" y2="22"></line>
                </svg>
              </div>
              <h1 className="text-xl font-bold">NitiMitra AI</h1>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <a href="#about" className="text-sm font-medium hover:underline">
                About
              </a>
              <a href="#policies" className="text-sm font-medium hover:underline">
                Policies
              </a>
            </div>
          </div>
        </header>

        <main className="flex-1">
          <div className="container grid items-start gap-6 px-4 py-6 sm:px-6 md:grid-cols-5">
            <div className="md:col-span-2">
              <div className="rounded-lg border bg-white p-6 shadow-sm dark:bg-slate-900 dark:border-slate-800">
                <h2 className="text-lg font-semibold mb-4">About NitiMitra AI</h2>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  NitiMitra AI is your virtual Indian policy expert. Ask questions about:
                </p>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1 dark:bg-green-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-green-600 dark:text-green-400"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    Economic policies and reforms
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1 dark:bg-green-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-green-600 dark:text-green-400"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    Social welfare programs
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1 dark:bg-green-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-green-600 dark:text-green-400"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    Foreign policy and international relations
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1 dark:bg-green-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-green-600 dark:text-green-400"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    Education and healthcare initiatives
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1 dark:bg-green-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-green-600 dark:text-green-400"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    Infrastructure development
                  </li>
                </ul>

                <div className="mt-6 pt-6 border-t dark:border-slate-800">
                  <h3 className="text-md font-medium mb-2">Popular Topics</h3>
                  <div className="flex flex-wrap gap-2">
                    <button className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-800 dark:bg-orange-900/30 dark:text-orange-400">
                      Digital India
                    </button>
                    <button className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-800 dark:bg-orange-900/30 dark:text-orange-400">
                      Make in India
                    </button>
                    <button className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-800 dark:bg-orange-900/30 dark:text-orange-400">
                      GST
                    </button>
                    <button className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-800 dark:bg-orange-900/30 dark:text-orange-400">
                      Ayushman Bharat
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-3">
              <div className="rounded-lg border bg-white shadow-sm dark:bg-slate-900 dark:border-slate-800 h-[600px] flex flex-col">
                <div className="p-4 border-b dark:border-slate-800 bg-slate-50 dark:bg-slate-800 rounded-t-lg">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold">
                      NM
                    </div>
                    <div>
                      <h2 className="font-semibold">NitiMitra AI</h2>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Your Indian Policy Expert</p>
                    </div>
                    <div className="ml-auto flex items-center">
                      <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-400">
                        <span className="mr-1 h-1.5 w-1.5 rounded-full bg-green-500"></span>
                        Online
                      </span>
                    </div>
                  </div>
                </div>

                <Chat />
              </div>
            </div>
          </div>
        </main>

        <footer className="border-t py-6 md:py-0 dark:border-slate-800">
          <div className="container flex flex-col items-center justify-between gap-4 px-4 text-center md:h-16 md:flex-row md:px-6 md:text-left">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              © 2025 NitiMitra AI. This is a simulation for educational purposes.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-sm text-slate-500 hover:underline dark:text-slate-400">
                Privacy
              </a>
              <a href="#" className="text-sm text-slate-500 hover:underline dark:text-slate-400">
                Terms
              </a>
              <a href="#" className="text-sm text-slate-500 hover:underline dark:text-slate-400">
                Contact
              </a>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}
