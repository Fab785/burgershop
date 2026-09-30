const fab4Items = [
    {
      name: "MR. FANTASTIC",
      subtitle: "THE LONG ONE",
      description: "Ridiculously long. Seriously. We had to shorten the picture.",
      image: "/mr-fantastic.png",
      imageAlt: "Mr. Fantastic loaded long hot dog",
      layout: "left",
    },
    {
      name: "THE THING",
      subtitle: "THE CRISPY ONE",
      description: "Crunchy, crispy and seriously over the top.",
      image: "/the-thing.png",
      imageAlt: "The Thing crispy chicken burger",
      layout: "right",
    },
    {
      name: "THE TORCH",
      subtitle: "THE HOT ONE",
      description: "Warning: this burger comes with its own fire.",
      image: "/the-torch.png",
      imageAlt: "The Torch spicy burger",
      layout: "left",
    },
    {
      name: "THE INVISIBLE",
      subtitle: "THE ONE YOU CAN'T SEE",
      description: "Trust us. It's there.",
      image: "/the-invisible.png",
      imageAlt: "The Invisible transparent burger",
      layout: "right",
    },
  ];
  
  export default function Fab4() {
    return (
      <section
        id="fab4"
        className="relative overflow-hidden bg-[#F7E9C8] px-6 py-24 text-[#174C3A] lg:px-10 lg:py-32"
      >
        {/* Decorative circles */}
        <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full border border-[#174C3A]/10" />
        <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full border border-[#174C3A]/10" />
  
        {/* Section heading */}
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-black uppercase tracking-[0.35em] text-[#F5B83D]">
              Meet the legends
            </p>
  
            <h2 className="text-5xl font-black uppercase leading-[0.85] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
              FAB 4
              <br />
              <span className="text-[#174C3A]">FAVORITES.</span>
            </h2>
  
            <p className="mt-7 max-w-xl text-base leading-relaxed text-[#174C3A]/65 sm:text-lg">
              Four seriously over-the-top creations. Each one has its own
              personality, its own attitude, and absolutely no interest in
              being boring.
            </p>
          </div>
  
          {/* FAB 4 cards */}
          <div className="mt-20 grid gap-8 md:grid-cols-2">
            {fab4Items.map((item, index) => (
              <article
                key={item.name}
                className={`group relative min-h-[520px] overflow-hidden rounded-[2rem] bg-[#174C3A] p-7 text-[#F7E9C8] sm:p-10 ${
                  index % 2 === 1 ? "md:translate-y-16" : ""
                }`}
              >
                {/* Number */}
                <div className="absolute right-7 top-6 text-7xl font-black leading-none text-[#F7E9C8]/5 sm:right-10 sm:text-8xl">
                  0{index + 1}
                </div>
  
                {/* Text */}
                <div className="relative z-20 max-w-sm">
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-[#F5B83D]">
                    {item.subtitle}
                  </p>
  
                  <h3 className="mt-3 text-4xl font-black uppercase leading-[0.9] tracking-[-0.05em] sm:text-5xl">
                    {item.name}
                  </h3>
  
                  <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#F7E9C8]/60">
                    {item.description}
                  </p>
                </div>
  
                {/* Food image */}
                <div className="absolute inset-x-0 bottom-0 flex h-[65%] items-end justify-center">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className={`max-h-full w-auto max-w-[110%] object-contain transition duration-500 group-hover:scale-105 ${
                      item.layout === "left"
                        ? "translate-x-2"
                        : "-translate-x-2"
                    }`}
                  />
                </div>
  
                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 h-2 w-full bg-[#F5B83D] transition-all duration-500 group-hover:h-4" />
              </article>
            ))}
          </div>
  
          {/* Bottom statement */}
          <div className="mt-28 flex flex-col gap-6 border-t border-[#174C3A]/15 pt-8 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-xl text-2xl font-black uppercase leading-tight tracking-[-0.03em] sm:text-3xl">
              Four legends.
              <br />
              <span className="text-[#F5B83D]">One FAB menu.</span>
            </p>
  
            <a
              href="#menu"
              className="w-fit rounded-full bg-[#174C3A] px-7 py-4 text-sm font-black uppercase tracking-wide text-[#F7E9C8] transition hover:scale-105 hover:bg-[#F5B83D] hover:text-[#174C3A]"
            >
              See the full menu →
            </a>
          </div>
        </div>
      </section>
    );
  }