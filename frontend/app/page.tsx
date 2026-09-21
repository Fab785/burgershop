import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#174C3A] text-[#F7E9C8]">
      {/* Navbar */}
      <nav className="relative z-30 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <a
          href="#"
          className="text-xl font-black tracking-[-0.06em] sm:text-2xl"
        >
          FAB<span className="text-[#F5B83D]">.</span>BURGER
        </a>

        <div className="hidden items-center gap-8 text-sm font-bold lg:flex">
          <a href="#" className="transition hover:text-[#F5B83D]">
            HOME
          </a>
          <a href="#menu" className="transition hover:text-[#F5B83D]">
            MENU
          </a>
          <a href="#fab4" className="transition hover:text-[#F5B83D]">
            FAB 4
          </a>
          <a href="#about" className="transition hover:text-[#F5B83D]">
            OUR STORY
          </a>
        </div>

        <button className="rounded-full bg-[#F5B83D] px-5 py-3 text-xs font-black uppercase tracking-wider text-[#174C3A] transition hover:scale-105 sm:px-7">
          Order Now
        </button>
      </nav>

      {/* Hero */}
      <section className="relative mx-auto grid min-h-[calc(100vh-88px)] max-w-7xl items-center px-6 pb-16 pt-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
        {/* Background decoration */}
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full border border-[#F7E9C8]/10" />

        <div className="absolute left-[8%] top-[20%] h-3 w-3 rounded-full bg-[#F5B83D]" />
        <div className="absolute left-[45%] top-[12%] h-2 w-2 rounded-full bg-[#F5B83D]/70" />
        <div className="absolute bottom-[20%] left-[8%] h-2 w-2 rounded-full bg-[#F5B83D]/60" />

        {/* LEFT CONTENT */}
        <div className="relative z-10 pt-8 lg:pt-0">
          <p className="mb-6 text-xs font-black uppercase tracking-[0.35em] text-[#F5B83D] sm:text-sm">
            Fresh • Juicy • Made to order
          </p>

          <h1 className="max-w-3xl text-6xl font-black uppercase leading-[0.84] tracking-[-0.07em] sm:text-7xl md:text-8xl xl:text-9xl">
            BURGERS
            <br />
            WITH
            <br />
            <span className="text-[#F5B83D]">ATTITUDE.</span>
          </h1>

          <p className="mt-7 max-w-md text-base leading-relaxed text-[#F7E9C8]/70 sm:text-lg">
            No boring burgers here. Just juicy patties, melted cheese,
            ridiculously fresh ingredients and the kind of flavor you think
            about tomorrow.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <button className="rounded-full bg-[#F5B83D] px-7 py-4 text-sm font-black uppercase tracking-wide text-[#174C3A] transition hover:scale-105">
              Order a Fab Burger →
            </button>

            <a
              href="#menu"
              className="rounded-full border border-[#F7E9C8]/25 px-7 py-4 text-sm font-black uppercase tracking-wide transition hover:border-[#F5B83D] hover:text-[#F5B83D]"
            >
              See the Menu
            </a>
          </div>

          {/* Bottom info */}
          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-5 border-t border-[#F7E9C8]/15 pt-7">
            <div>
              <p className="text-2xl font-black text-[#F5B83D]">100%</p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.15em] text-[#F7E9C8]/50">
                Fresh ingredients
              </p>
            </div>

            <div>
              <p className="text-2xl font-black text-[#F5B83D]">0%</p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.15em] text-[#F7E9C8]/50">
                Boring flavor
              </p>
            </div>

            <div>
              <p className="text-2xl font-black text-[#F5B83D]">100%</p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.15em] text-[#F7E9C8]/50">
                Seriously fab
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - REAL BURGER IMAGE */}
        <div className="relative mt-10 flex min-h-[430px] items-center justify-center lg:mt-0 lg:min-h-[650px]">
          {/* Cream background shape */}
          <div className="absolute h-[300px] w-[300px] rounded-full bg-[#F7E9C8] sm:h-[420px] sm:w-[420px] lg:h-[540px] lg:w-[540px]" />

          {/* Decorative rings */}
          <div className="absolute h-[340px] w-[340px] rounded-full border border-[#F7E9C8]/20 sm:h-[470px] sm:w-[470px] lg:h-[610px] lg:w-[610px]" />

          {/* Real burger */}
          <div className="relative z-10 w-full max-w-[620px]">
            <Image
              src="/hero-burger.png"
              alt="Fab Burger signature burger"
              width={700}
              height={700}
              priority
              className="h-auto w-full object-contain drop-shadow-2xl"
            />
          </div>

          {/* Floating badge */}
          <div className="absolute right-[4%] top-[7%] z-20 flex h-24 w-24 rotate-12 flex-col items-center justify-center rounded-full bg-[#F5B83D] text-center text-xs font-black uppercase leading-tight text-[#174C3A] shadow-xl sm:h-28 sm:w-28">
            <span>100%</span>
            <span>FAB</span>
            <span>FLAVOR</span>
          </div>

          {/* Small label */}
          <div className="absolute bottom-[8%] left-[4%] z-20 rounded-full border border-[#F7E9C8]/25 bg-[#174C3A]/90 px-5 py-3 text-xs font-black uppercase tracking-[0.15em] backdrop-blur-sm">
            ★ The Original Fab
          </div>
        </div>
      </section>

      {/* Bottom marquee */}
      <div className="border-y border-[#174C3A]/20 bg-[#F5B83D] py-4 text-[#174C3A]">
        <div className="flex min-w-max items-center justify-center gap-7 px-6 text-xs font-black uppercase tracking-[0.15em] sm:text-sm">
          <span>✦ Big Bites</span>
          <span>✦ Big Flavor</span>
          <span>✦ No Boring Burgers</span>
          <span>✦ Made Fresh</span>
          <span>✦ 100% Fab</span>
          <span>✦ Big Bites</span>
          <span>✦ Big Flavor</span>
        </div>
      </div>
    </main>
  );
}