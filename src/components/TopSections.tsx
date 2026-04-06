import { useState } from "react";
import Icon from "@/components/ui/icon";
import { PORTFOLIO } from "@/components/data";

interface TopSectionsProps {
  openLightbox: (i: number) => void;
}

const TopSections = ({ openLightbox }: TopSectionsProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-gold/20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-cormorant text-2xl font-light tracking-[0.15em] text-charcoal">
            Наталья
          </div>
          <div className="hidden md:flex items-center gap-10">
            {["Услуги", "Портфолио", "Обо мне", "Отзывы", "Контакты"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs font-light tracking-[0.2em] uppercase text-charcoal/70 hover:text-gold transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
          <a
            href="#контакты"
            className="hidden md:block px-6 py-2 border border-gold text-gold text-xs font-light tracking-[0.2em] uppercase hover:bg-gold hover:text-white transition-all duration-300"
          >
            Связаться
          </a>
          <button className="md:hidden text-charcoal" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-cream border-t border-gold/20 px-6 py-6 flex flex-col gap-5">
            {["Услуги", "Портфолио", "Обо мне", "Отзывы", "Контакты"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-xs font-light tracking-[0.2em] uppercase text-charcoal/70 hover:text-gold transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url('${PORTFOLIO[1].img}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/90" />
        <div className="relative text-center text-white px-6 max-w-4xl mx-auto animate-fade-in-slow">
          <div className="text-xs font-light tracking-[0.4em] uppercase text-gold mb-6">
            Ведущая · Тамада · Саров
          </div>
          <h1 className="font-cormorant text-6xl md:text-9xl font-light leading-none mb-6 tracking-wide">
            Наталья
          </h1>
          <div className="font-cormorant text-xl md:text-2xl italic text-white/60 mb-6">
            Алексашкина
          </div>
          <div className="w-16 h-px bg-gold mx-auto mb-8" />
          <p className="text-sm md:text-base font-light tracking-[0.08em] text-white/75 max-w-xl mx-auto leading-relaxed">
            Свадьбы, юбилеи, корпоративы, выпускные.<br />
            Каждый праздник — как первый и единственный.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+79870807645"
              className="px-10 py-3 bg-gold text-white text-xs font-light tracking-[0.25em] uppercase hover:bg-gold-dark transition-all duration-300"
            >
              Позвонить
            </a>
            <a
              href="#портфолио"
              className="px-10 py-3 border border-white/30 text-white text-xs font-light tracking-[0.25em] uppercase hover:border-gold hover:text-gold transition-all duration-300"
            >
              Смотреть работы
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
          <span className="text-xs tracking-[0.3em] uppercase font-light">Прокрутите</span>
          <Icon name="ChevronDown" size={16} className="animate-bounce" />
        </div>
      </section>

      {/* STATS */}
      <section className="bg-charcoal-light py-14">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: "10+", label: "Лет опыта" },
            { num: "300+", label: "Мероприятий" },
            { num: "100%", label: "Отдачи" },
            { num: "❤️", label: "С душой" },
          ].map((s) => (
            <div key={s.label} className="text-white">
              <div className="font-cormorant text-5xl font-light text-gold mb-2">{s.num}</div>
              <div className="text-xs font-light tracking-[0.2em] uppercase text-white/50">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="услуги" className="py-24 bg-cream px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs font-light tracking-[0.4em] uppercase text-gold mb-4">Что я веду</div>
            <h2 className="font-cormorant text-5xl md:text-6xl font-light text-charcoal">Услуги</h2>
            <div className="w-12 h-px bg-gold mx-auto mt-6" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "Heart",
                title: "Свадьбы",
                desc: "Самый важный день в жизни. Создаю тёплую и незабываемую атмосферу, которая сближает гостей и оставляет воспоминания на всю жизнь.",
                details: ["Классические и тематические", "Весёлые конкурсы и игры", "Живая музыка и DJ", "Координация всего вечера"],
              },
              {
                icon: "Cake",
                title: "Юбилеи",
                desc: "Каждый юбилей — особенный. Программа подбирается индивидуально под именинника и компанию гостей.",
                details: ["Юбилеи любого возраста", "Тематические вечеринки", "Корпоративные банкеты", "Семейные торжества"],
              },
              {
                icon: "GraduationCap",
                title: "Выпускные",
                desc: "Проводы во взрослую жизнь должны быть яркими. Профессиональная программа для выпускников и их родителей.",
                details: ["Выпускные 9 и 11 классов", "Чествование выпускников", "Танцевальная программа", "Слаженная работа с командой"],
              },
            ].map((s) => (
              <div
                key={s.title}
                className="group bg-white border border-gold/15 p-8 hover:border-gold/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center border border-gold/30 mb-6 group-hover:bg-gold group-hover:border-gold transition-all duration-300">
                  <Icon name={s.icon} size={20} className="text-gold group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-cormorant text-2xl font-light mb-3 text-charcoal">{s.title}</h3>
                <p className="text-sm font-light text-charcoal/60 leading-relaxed mb-6">{s.desc}</p>
                <ul className="space-y-2">
                  {s.details.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-xs font-light text-charcoal/50 tracking-wide">
                      <div className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* event tags */}
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {["Свадьбы", "Юбилеи", "Корпоративы", "Выпускные 2025", "Вечеринки", "День рождения", "Семейные праздники"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 border border-gold/30 text-xs font-light tracking-[0.15em] uppercase text-charcoal/60 hover:border-gold hover:text-gold transition-all duration-200 cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="портфолио" className="py-24 bg-cream-dark px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs font-light tracking-[0.4em] uppercase text-gold mb-4">Мои работы</div>
            <h2 className="font-cormorant text-5xl md:text-6xl font-light text-charcoal">Портфолио</h2>
            <div className="w-12 h-px bg-gold mx-auto mt-6" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {PORTFOLIO.map((p, i) => (
              <div
                key={i}
                className="group relative overflow-hidden aspect-square cursor-pointer"
                onClick={() => openLightbox(i)}
              >
                <img
                  src={p.img}
                  alt={p.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-all duration-300 flex items-center justify-center">
                  <Icon name="ZoomIn" size={28} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TopSections;
