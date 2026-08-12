export default function Home() {
  return (
    <main className="min-h-screen bg-[#174C3A] text-[#F7E9C8]">
      {/* Navbar */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <div className="text-2xl font-black tracking-tight">
          BUN<span className="text-[#F5B83D]">&</span>BITE
        </div>

        <div className="hidden items-center gap-10 text-sm font-semibold md:flex">
          <a href="#" className="transition hover:text-[#F5B83D]">
            Home
          </a>
          <a href="#menu" className="transition hover:text-[#F5B83D]">
            Menu
          </a>
          <a href="#about" className="transition hover:text-[#F5B83D]">
            About
          </a>
          <a href="#contact" className="transition hover:text-[#F5B83D]">
            Contact
          </a>
        </div>

        <button className="rounded-full bg-[#F5B83D] px-6 py-3 text-sm font-bold text-[#174C3A] transition hover:scale-105">
          Order Now
        </button>
      </nav>

      {/* Hero */}
      <section className="relative mx-auto flex min-h-[calc(100vh-96px)] max-w-7xl items-center overflow-hidden px-6 py-16 lg:px-10">
        
        {/* Decorative shapes */}
        <div className="absolute -left-24 top-32 h-64 w-64 rounded-full border border-[#F7E9C8]/10" />
        <div className="absolute right-0 top-10 h-96 w-96 rounded-full bg-[#F5B83D]/10 blur-3xl" />

        {/* Hero content */}
        <div className="relative z-10 w-full lg:w-[55%]">
          <p className="mb-6 text-sm font-bold uppercase tracking-[0.3em] text-[#F5B83D]">
            Fresh • Juicy • Made to order
          </p>

          <h1 className="max-w-4xl text-6xl font-black leading-[0.88] tracking-[-0.05em] sm:text-7xl lg:text-8xl">
            THE BURGER
            <br />
            YOU&apos;VE BEEN
            <br />
            <span className="text-[#F5B83D]">CRAVING.</span>
          </h1>

          <p className="mt-8 max-w-lg text-lg leading-relaxed text-[#F7E9C8]/75">
            Big flavors, crispy edges, melted cheese and perfectly toasted
            buns. Made fresh, exactly the way a great burger should be.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-full bg-[#F5B83D] px-8 py-4 font-bold text-[#174C3A] transition hover:scale-105">
              Order Now →
            </button>

            <button className="rounded-full border border-[#F7E9C8]/30 px-8 py-4 font-bold transition hover:border-[#F5B83D] hover:text-[#F5B83D]">
              Explore Menu
            </button>
          </div>

          {/* Small stats */}
          <div className="mt-14 flex flex-wrap gap-10 border-t border-[#F7E9C8]/15 pt-8">
            <div>
              <p className="text-2xl font-black">100%</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-[#F7E9C8]/50">
                Fresh ingredients
              </p>
            </div>

            <div>
              <p className="text-2xl font-black">15 min</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-[#F7E9C8]/50">
                Average prep
              </p>
            </div>

            <div>
              <p className="text-2xl font-black">4.9 ★</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-[#F7E9C8]/50">
                Customer rating
              </p>
            </div>
          </div>
        </div>

        {/* Burger visual */}
        <div className="relative mt-16 flex flex-1 items-center justify-center lg:mt-0">
          <div className="absolute h-[420px] w-[420px] rounded-full bg-[#F7E9C8] lg:h-[560px] lg:w-[560px]" />

          <div className="relative z-10 text-[180px] drop-shadow-2xl sm:text-[240px] lg:text-[320px]">
            🍔
          </div>

          {/* Floating badge */}
          <div className="absolute right-2 top-4 z-20 flex h-28 w-28 rotate-12 items-center justify-center rounded-full bg-[#F5B83D] text-center text-xs font-black uppercase leading-tight text-[#174C3A] shadow-xl sm:right-10 sm:top-10">
            Big
            <br />
            Flavor
            <br />
            Only
          </div>
        </div>
      </section>

      {/* Marquee strip */}
      <div className="overflow-hidden bg-[#F5B83D] py-4 text-[#174C3A]">
        <div className="flex min-w-max justify-center gap-8 text-sm font-black uppercase tracking-widest">
          <span>✦ Fresh ingredients</span>
          <span>✦ Big flavor</span>
          <span>✦ Crispy edges</span>
          <span>✦ Happy bites</span>
          <span>✦ Made fresh</span>
        </div>
      </div>
    </main>
  );
}