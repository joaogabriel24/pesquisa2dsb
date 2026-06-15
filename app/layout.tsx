import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Softwares de Comunicação Alternativa",
  description:
    "Pesquisa sobre softwares de comunicação aumentativa e alternativa para pessoas com deficiência.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <main className="min-h-screen w-full bg-slate-100">
          {/* Navbar */}
          <header className="flex h-16 w-full items-center justify-between bg-slate-900 px-6 text-white shadow-md">
            <h1 className="text-xl font-bold">
              Softwares de Comunicação Alternativa
            </h1>

            <div className="rounded-md bg-neutral-800 px-4 py-2 text-sm font-semibold text-green-500">
              Admin
            </div>
          </header>

          {/* Layout principal */}
          <div className="grid min-h-[calc(100vh-4rem)] w-full grid-cols-[18rem_1fr]">
            {/* Sidebar */}
            <aside className="bg-white border-r border-slate-200 shadow-lg">
              <div className="flex h-full flex-col p-6">
                <h2 className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-400">
                  Estudantes
                </h2>

                <nav className="flex flex-col gap-1">
                  <Link
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900"
                  >
                    Wesley Gabriel Pereira da Silva Santos
                  </Link>

                  <Link
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900"
                  >
                    João Gabriel Alves Barbosa
                  </Link>
                </nav>
              </div>
            </aside>

            {/* Conteúdo Principal */}
            <section className="p-6">
              <div className="max-w-5xl rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-800">
                  Softwares de Comunicação Alternativa
                </h2>

                <p className="mt-3 text-slate-600">
                  Esta pesquisa apresenta alguns dos principais softwares
                  utilizados na Comunicação Aumentativa e Alternativa (CAA),
                  auxiliando pessoas com deficiência na comunicação,
                  aprendizagem e interação social.
                </p>

                <hr className="my-6 border-slate-200" />

                <div className="grid gap-4">
                  {/* Livox */}
                  <div className="rounded-lg border border-slate-200 p-5">
                    <h3 className="text-lg font-semibold text-slate-800">
                      Livox <a
  href="https://livox.com.br"
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-600 hover:underline"
>
  https://livox.com.br/br/
</a>
                    </h3>

                    <p className="mt-2 text-sm text-slate-600">
                      Aplicativo brasileiro de comunicação alternativa que
                      utiliza símbolos, imagens e voz sintetizada para auxiliar
                      pessoas com dificuldades na fala. É amplamente utilizado
                      por pessoas com autismo, paralisia cerebral e outras
                      condições que afetam a comunicação.
                    </p>
                  </div>

                  {/* Proloquo2Go */}
                  <div className="rounded-lg border border-slate-200 p-5">
                    <h3 className="text-lg font-semibold text-slate-800">
                      Proloquo2Go
                    </h3>  <a
  href="https://www.assistiveware.com/products/proloquo2go"
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-600 hover:underline"
>https://www.assistiveware.com/products/proloquo2go
  
</a>

                    <p className="mt-2 text-sm text-slate-600">
                      Software internacional de Comunicação Aumentativa e
                      Alternativa (CAA) que permite a criação de frases por meio
                      de símbolos, imagens e texto, transformando-as em voz.
                    </p>
                  </div>

                  {/* Scala */}
                  <div className="rounded-lg border border-slate-200 p-5">
                    <h3 className="text-lg font-semibold text-slate-800">
                      Scala
                    </h3>

                    <a
  href="https://videos.ufrgs.br/lume/arquivos/scala-sistema-de-comunicacao-alternativa-para-letramento-de-pessoas-com-autismo/view"
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-600 hover:underline"
>https://videos.ufrgs.br/lume/arquivos/scala-sistema-de-comunicacao-alternativa-para-letramento-de-pessoas-com-autismo/view
  
</a>


                    <p className="mt-2 text-sm text-slate-600">
                      Ferramenta desenvolvida para apoiar a comunicação de
                      pessoas com necessidades complexas de comunicação por meio
                      de pranchas digitais, imagens e recursos multimídia.
                    </p>
                  </div>

                  {/* LetMeTalk */}
                  <div className="rounded-lg border border-slate-200 p-5">
                    <h3 className="text-lg font-semibold text-slate-800">
                      LetMeTalk
                    </h3>
                                        <a
  href="https://www.youtube.com/watch?v=pLIzvZAs2HY"
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-600 hover:underline"
>https://www.youtube.com/watch?v=pLIzvZAs2HY
  
</a>


                    <p className="mt-2 text-sm text-slate-600">
                      Aplicativo gratuito que utiliza pictogramas para auxiliar
                      pessoas que possuem dificuldades de comunicação verbal,
                      permitindo a construção de frases de forma simples e
                      intuitiva.
                    </p>
                  </div>

                  {/* Cboard */}
                  <div className="rounded-lg border border-slate-200 p-5">
                    <h3 className="text-lg font-semibold text-slate-800">
                      Cboard
                    </h3>

                    <p className="mt-2 text-sm text-slate-600">
                      Plataforma online de comunicação alternativa baseada em
                      símbolos e síntese de voz, acessível por navegadores e
                      dispositivos móveis.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>

        {children}
      </body>
    </html>
  );
}
