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
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gold/20" style={{ backgroundColor: "rgba(15,14,11,0.96)", backdropFilter: "blur(12px)" }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-cormorant text-2xl font-light tracking-[0.15em] text-gold">
            Наталья
          </div>
          <div className="hidden md:flex items-center gap-10">
            {["Обо мне", "Услуги", "Портфолио", "Отзывы", "Контакты"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-xs font-light tracking-[0.2em] uppercase text-white/50 hover:text-gold transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
          <a
            href="#контакты"
            className="hidden md:block px-6 py-2 border border-gold/60 text-gold text-xs font-light tracking-[0.2em] uppercase hover:bg-gold hover:text-black transition-all duration-300"
          >
            Связаться
          </a>
          <button className="md:hidden text-gold" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-gold/20 px-6 py-6 flex flex-col gap-5" style={{ backgroundColor: "rgba(15,14,11,0.99)" }}>
            {["Обо мне", "Услуги", "Портфолио", "Отзывы", "Контакты"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                onClick={() => setMenuOpen(false)}
                className="text-xs font-light tracking-[0.2em] uppercase text-white/50 hover:text-gold transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-pattern">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url('${PORTFOLIO[1].img}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />

        {/* Декоративные золотые линии */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent -translate-y-36" />
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent translate-y-36" />
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-gold/10 to-transparent -translate-x-56 hidden md:block" />
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-gold/10 to-transparent translate-x-56 hidden md:block" />
        </div>

        <div className="relative text-center text-white px-6 max-w-4xl mx-auto animate-fade-in-slow">
          <div className="text-xs font-light tracking-[0.5em] uppercase text-gold/70 mb-8">
            Ведущая · Саров
          </div>
          <h1 className="font-cormorant text-7xl md:text-[9rem] font-light leading-none mb-4 tracking-wide text-white">
            Наталья
          </h1>
          <div className="font-cormorant text-2xl md:text-3xl italic text-gold/60 mb-8">
            Алексашкина
          </div>
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/50" />
            <div className="w-1.5 h-1.5 rotate-45 bg-gold/50" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/50" />
          </div>
          <p className="text-sm md:text-base font-light tracking-[0.08em] text-white/55 max-w-xl mx-auto leading-relaxed">
            Свадьбы, юбилеи, корпоративы, выпускные.<br />
            Каждый праздник — как первый и единственный.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+79870807645"
              className="px-10 py-3 bg-gold text-black text-xs font-medium tracking-[0.25em] uppercase hover:bg-gold-light transition-all duration-300"
            >
              Позвонить
            </a>
            <a
              href="#портфолио"
              className="px-10 py-3 border border-white/20 text-white/60 text-xs font-light tracking-[0.25em] uppercase hover:border-gold hover:text-gold transition-all duration-300"
            >
              Смотреть работы
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gold/30">
          <span className="text-xs tracking-[0.3em] uppercase font-light">Прокрутите</span>
          <Icon name="ChevronDown" size={16} className="animate-bounce" />
        </div>
      </section>

      {/* STATS */}
      <section className="py-14 border-y border-gold/15" style={{ backgroundColor: "#0c0b09" }}>
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: "10+", label: "Лет опыта" },
            { num: "300+", label: "Мероприятий" },
            { num: "100%", label: "Отдачи" },
            { num: "❤️", label: "С душой" },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-cormorant text-5xl font-light text-gold mb-2">{s.num}</div>
              <div className="text-xs font-light tracking-[0.2em] uppercase text-white/35">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="обо-мне" className="py-24 px-6 bg-dark-pattern">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border border-gold/20" />
            <img
              src="https://sun9-47.userapi.com/s/v1/ig2/oemW3IZImXp6XwqpYmBmE4lZqBrLrSff1kTUkvFJdWaA_cxZWFtedSkg1CAJnFieKnUQXhNLNOCnJZ__VK0ynhiN.jpg?quality=95&from=bu"
              alt="Наталья Алексашкина"
              className="relative w-full object-cover object-top"
              style={{ aspectRatio: "3/4" }}
            />
          </div>
          <div>
            <div className="text-xs font-light tracking-[0.4em] uppercase text-gold/70 mb-4">Обо мне</div>
            <h2 className="font-cormorant text-5xl font-light text-white mb-6 leading-tight">
              Наталья Алексашкина —<br />
              <em className="italic text-gold/80">ведущая с душой</em>
            </h2>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-gold/50" />
              <div className="w-1 h-1 rotate-45 bg-gold/50" />
              <div className="h-px w-8 bg-gold/50" />
            </div>
            <p className="text-sm font-light text-white/55 leading-relaxed mb-5">
              Более 10 лет я провожу праздники в Сарове и по всей России. Для меня каждое мероприятие — не просто работа, а возможность подарить людям настоящие эмоции и тепло.
            </p>
            <p className="text-sm font-light text-white/55 leading-relaxed mb-8">
              Я умею найти подход к каждому гостю, создать лёгкую и весёлую атмосферу и сделать так, чтобы ваш праздник остался в памяти навсегда. Никакой суеты — только профессионализм и искренность.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-10">
              {[
                { icon: "MapPin", text: "Саров и\nвся Россия" },
                { icon: "Mic", text: "Свадьбы, юбилеи,\nкорпоративы, выпускные" },
                { icon: "Users", text: "Работаю с проверенной\nкомандой профессионалов" },
                { icon: "Star", text: "Высший рейтинг\nна Горько.ру" },
              ].map((f) => (
                <div key={f.icon} className="flex items-start gap-3">
                  <div className="w-8 h-8 flex items-center justify-center border border-gold/25 flex-shrink-0 mt-0.5">
                    <Icon name={f.icon} size={14} className="text-gold" />
                  </div>
                  <span className="text-xs font-light text-white/45 leading-relaxed whitespace-pre-line">{f.text}</span>
                </div>
              ))}
            </div>
            <a
              href="#контакты"
              className="inline-block px-8 py-3 border border-gold/50 text-gold text-xs font-light tracking-[0.25em] uppercase hover:bg-gold hover:text-black transition-all duration-300"
            >
              Написать мне
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="услуги" className="py-24 px-6" style={{ backgroundColor: "#0c0b09" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs font-light tracking-[0.4em] uppercase text-gold/70 mb-4">Что я веду</div>
            <h2 className="font-cormorant text-5xl md:text-6xl font-light text-white">Услуги</h2>
            <div className="flex items-center justify-center gap-3 mt-6">
              <div className="h-px w-8 bg-gold/40" />
              <div className="w-1 h-1 rotate-45 bg-gold/40" />
              <div className="h-px w-8 bg-gold/40" />
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
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
                className="group border border-gold/15 p-8 hover:border-gold/45 transition-all duration-300"
                style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
              >
                <div className="w-12 h-12 flex items-center justify-center border border-gold/25 mb-6 group-hover:bg-gold group-hover:border-gold transition-all duration-300">
                  <Icon name={s.icon} size={20} className="text-gold group-hover:text-black transition-colors duration-300" />
                </div>
                <h3 className="font-cormorant text-2xl font-light mb-3 text-white">{s.title}</h3>
                <p className="text-sm font-light text-white/45 leading-relaxed mb-6">{s.desc}</p>
                <ul className="space-y-2">
                  {s.details.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-xs font-light text-white/35 tracking-wide">
                      <div className="w-1 h-1 rotate-45 bg-gold/50 flex-shrink-0" />
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
                className="px-4 py-2 border border-gold/20 text-xs font-light tracking-[0.15em] uppercase text-white/35 hover:border-gold/50 hover:text-gold transition-all duration-200 cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="портфолио" className="py-24 px-6 bg-dark-pattern">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs font-light tracking-[0.4em] uppercase text-gold/70 mb-4">Мои работы</div>
            <h2 className="font-cormorant text-5xl md:text-6xl font-light text-white">Портфолио</h2>
            <div className="flex items-center justify-center gap-3 mt-6">
              <div className="h-px w-8 bg-gold/40" />
              <div className="w-1 h-1 rotate-45 bg-gold/40" />
              <div className="h-px w-8 bg-gold/40" />
            </div>
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
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-75 group-hover:brightness-90"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center border border-transparent group-hover:border-gold/30">
                  <Icon name="ZoomIn" size={28} className="text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
