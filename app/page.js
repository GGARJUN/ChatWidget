import Link from "next/link";
import { ArrowUpRight, MessageCircle } from 'lucide-react';


export default function Home() {
  return (
    <>
      <div className="flex min-h-screen flex-col ">
        {/* Hero Section */}
        <header className="bg-gradient-to-r from-blue-600 to-indigo-700 py-24 text-white">
          <div className="container mx-auto max-w-5xl px-4">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div>
                <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
                  Embed AI Chat on <br />
                  <span className="text-blue-200">Any Website</span>
                </h1>
                <p className="mb-8 text-lg leading-relaxed text-blue-100">
                  Add a powerful OpenAI-powered chat widget to your website in minutes.
                  Help your users find answers, generate content, and get assistance instantly.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/demo"
                    className="rounded-full bg-white px-6 py-3 font-medium text-blue-700 shadow-lg transition hover:bg-blue-50"
                  >
                    View Demo
                  </Link>
                  <a
                    href="https://github.com/your-repo/chat-widget"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center rounded-full border border-white px-6 py-3 font-medium text-white transition hover:bg-white/10"
                  >
                    GitHub <ArrowUpRight size={18} className="ml-2" />
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="relative mx-auto h-[500px] w-[300px] overflow-hidden rounded-xl border-8 border-blue-800 bg-white shadow-2xl">
                  <div className="h-8 bg-blue-800"></div>
                  <div className="p-4">
                    <div className="mb-4 h-6 w-3/4 rounded bg-gray-200"></div>
                    <div className="mb-2 h-4 w-full rounded bg-gray-200"></div>
                    <div className="mb-2 h-4 w-full rounded bg-gray-200"></div>
                    <div className="mb-6 h-4 w-3/4 rounded bg-gray-200"></div>

                    <div className="ml-auto mt-4 max-w-[80%] rounded-lg bg-blue-500 p-3">
                      <div className="h-3 w-full rounded bg-blue-300"></div>
                      <div className="mt-1 h-3 w-3/4 rounded bg-blue-300"></div>
                    </div>

                    <div className="mr-auto mt-4 max-w-[80%] rounded-lg bg-gray-100 p-3">
                      <div className="h-3 w-full rounded bg-gray-300"></div>
                      <div className="mt-1 h-3 w-full rounded bg-gray-300"></div>
                      <div className="mt-1 h-3 w-1/2 rounded bg-gray-300"></div>
                    </div>
                  </div>

                  <div className="absolute bottom-4 right-4 rounded-full bg-blue-600 p-3 text-white shadow-lg">
                    <MessageCircle size={24} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto max-w-5xl px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-800 md:text-4xl">
              Powerful Features, <span className="text-blue-600">Simple Integration</span>
            </h2>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-xl bg-white p-6 shadow-lg transition hover:shadow-xl">
                <div className="mb-4 rounded-full bg-blue-100 p-3 text-blue-600 inline-flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="m4.9 4.9 14.2 14.2" /></svg>
                </div>
                <h3 className="mb-3 text-xl font-semibold">No-Code Installation</h3>
                <p className="text-gray-600">
                  Add a single script tag to your site and the widget automatically appears. No complex setup required.
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-lg transition hover:shadow-xl">
                <div className="mb-4 rounded-full bg-green-100 p-3 text-green-600 inline-flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11.2V8.9a3 3 0 1 1 6 0v2.3M12 11.2v4M4 17.2c0 .5.3.8.8.8h14.4c.5 0 .8-.3.8-.8v-4c0-.5-.3-.8-.8-.8h-2.8v-1a3 3 0 1 0-6 0v1H4.8c-.5 0-.8.3-.8.8Z" /></svg>
                </div>
                <h3 className="mb-3 text-xl font-semibold">Fully Customizable</h3>
                <p className="text-gray-600">
                  Change colors, position, and behavior to match your brand with simple data attributes.
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-lg transition hover:shadow-xl">
                <div className="mb-4 rounded-full bg-purple-100 p-3 text-purple-600 inline-flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 22a5 5 0 0 1-2-4" /><path d="M7 16.93c.96.43 1.96.74 2.99.91" /><path d="M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2" /><path d="M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" /><path d="M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14v0z" /></svg>
                </div>
                <h3 className="mb-3 text-xl font-semibold">AI Powered</h3>
                <p className="text-gray-600">
                  Connects to OpenAI to provide intelligent, contextual responses to user queries instantly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto max-w-5xl px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-800 md:text-4xl">
              How It <span className="text-blue-600">Works</span>
            </h2>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white text-2xl font-bold">1</div>
                <h3 className="mb-3 text-xl font-semibold">Add the Script</h3>
                <p className="text-gray-600">
                  Add our embed script to your website's HTML with your configuration options.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white text-2xl font-bold">2</div>
                <h3 className="mb-3 text-xl font-semibold">Customize It</h3>
                <p className="text-gray-600">
                  Configure appearance and behavior through simple data attributes.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white text-2xl font-bold">3</div>
                <h3 className="mb-3 text-xl font-semibold">Start Chatting</h3>
                <p className="text-gray-600">
                  Your users can now get AI-powered assistance right on your website.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 py-20 text-white">
          <div className="container mx-auto max-w-5xl px-4 text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Ready to Add AI to Your Website?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-blue-100">
              Get started in minutes with our simple integration. See it in action first with our interactive demo.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/demo"
                className="rounded-full bg-white px-8 py-3 font-medium text-blue-700 shadow-lg transition hover:bg-blue-50"
              >
                View Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 py-12 text-gray-400">
          <div className="container mx-auto max-w-5xl px-4">
            <div className="mb-8 flex flex-col justify-between gap-8 md:flex-row md:items-center">
              <div>
                <h3 className="text-2xl font-bold text-white">OpenAI Chat Widget</h3>
                <p className="mt-2">Add AI chat to any website easily</p>
              </div>
              <div className="flex gap-6">
                <a href="#" className="transition hover:text-white">
                  Twitter
                </a>
                <a href="#" className="transition hover:text-white">
                  GitHub
                </a>
                <a href="#" className="transition hover:text-white">
                  Documentation
                </a>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-sm">
              <p>&copy; {new Date().getFullYear()} Chat Widget. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
      <script data-project-id="myProject" data-tags="chat,support" src="https://custom-chatbot-widget.netlify.app/inject.js"></script>
    </>
  );
}