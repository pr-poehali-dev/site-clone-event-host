import { useState } from "react";
import Icon from "@/components/ui/icon";

const PORTFOLIO = [
  { img: "https://sun1-21.userapi.com/s/v1/ig2/tCrocRirU6z-MhFsHNyZGgrUA449UqCJux5Q9eIhmhfFIJWefk6hCceCLmDcvhYlEOHAYs7H7a15H5f9ADzH3rVy.jpg?quality=95&as=32x28,48x41,72x62,108x93,160x138,240x207,360x310,480x413,540x465,640x551,720x620,1080x930,1280x1102,1440x1240,1983x1707&from=bu&cs=1983x0", label: "Свадьба" },
  { img: "https://sun9-47.userapi.com/s/v1/ig2/qUe9i2swxCZjTLtf3XfydJssUXT3W3R1s7glwhr_dxuKDsVQ3jXEiDz2rZflPaF2EJbbt_L1MvuZzWnH9C5g5koY.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1621,1280x1921,1440x2161,1706x2560&from=bu&u=1u4Lzi5cP_8lsEl2XAX7OAt-5pTO_KanZVsrvVEO5Y8&cs=1706x0", label: "Свадьба" },
  { img: "https://sun9-37.userapi.com/s/v1/ig2/h9PNfsb_0Zt0fmD7b1oeh65g7qgJpt1uuQnfcbTm0jeXr6ruf4bNqMp4PW1-hHasUUrcfwUeybqIqxTbr3hiFYwg.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160&from=bu&cs=1440x0", label: "Торжество" },
  { img: "https://sun9-47.userapi.com/s/v1/ig2/Q6ox7vWmMTvRNXk7whzkV6fcJ7GZGzK_nT8Jppq8KrEv1KzsxLBGX5V1okdDQZAgW1GRXShisGw-VaI4AguxYe42.jpg?quality=95&from=bu", label: "Праздник" },
  { img: "https://sun9-47.userapi.com/s/v1/ig2/dHQNYtbimR9UmmclSKQ1rM2aK4YjO2utvAg603PuBgWalMIZwt3ze1UEm_QA5yRM56j_gLpanCPbed4BW9hBZGF5.jpg?quality=95&from=bu", label: "Вечер" },
  { img: "https://sun9-47.userapi.com/s/v1/ig2/6mqpb7joTGHf_IYk37-3zy4fUBWdVHLvnWtPNmLZcX4QjCeV-SRsoZzXBf9KI7NTVRHl65a6OXpYzlWCtmJ46xsR.jpg?quality=95&from=bu", label: "Мероприятие" },
  { img: "https://sun9-47.userapi.com/s/v1/ig2/cn1IELm1n5NJHFrY_kWDh3u--UXrxOhdhs8WfgYPwgPsg2_1ybmtq9o9ooqiQRkd5msfQGTJrJiYOaM05rX3eSzg.jpg?quality=95&from=bu", label: "Свадьба" },
];

const REVIEWS = [
  {
    name: "Рома и Катя",
    event: "Свадьба",
    text: "Наташа, хотели бы тебя еще раз поблагодарить за такое огненное мероприятие!! Все гости просто в нереальном восторге, видео- и фотограф обе о тебе тоже очень хорошо отозвались, мы не пожалели ни на секунду, что у нас была такая крутая ведущая!! Эмоции до сих пор переполняют!!\n\nГости до сих пор в восторге, пишут, поздравляют, восхищаются. Надеюсь, это не первое наше совместное мероприятие.",
    stars: 5,
    big: true,
  },
  {
    name: "Полина",
    event: "Свадьба",
    text: "Дорогая Наташа! Спасибо тебе огромное за наш свадебный день. Ты сделала его таким волшебным и запоминающимся! Все было именно так, как мы мечтали — с первых же минут ты создала легкую и веселую атмосферу. Конкурсы были очень классными, гости просто «согласны на всё»! Ты смогла найти подход к каждому гостю — это было очень ценно. Ты была не просто ведущей, а настоящим помощником и душой нашего праздника!",
    stars: 5,
    big: false,
  },
  {
    name: "",
    event: "Вечеринка в стиле 90-х",
    text: "Хочу сказать огромное спасибо за проведение нашего праздника. Гости сказали: «было просто бомба, пушка, петарда!» Спасибо за поддержку в минуты моей паники! Вообще спасибо за всё!",
    stars: 5,
    big: false,
  },
  {
    name: "Выпускники школы №17, выпуск 2025",
    event: "Выпускной, 11 классов",
    text: "Наташа, огромное спасибо за праздник! Особенно благодарим за порядочность, ответственность и мягкое сопровождение как на всех этапах подготовки вечера, так и в течение самого вечера! Никакой суеты и нервозности! Всё чётко, всё в меру, своевременно и не клишированно! И технически тоже всё сложилось прекрасно благодаря вашей слаженной работе!",
    stars: 5,
    big: false,
  },
];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightbox(i);
  const closeLightbox = () => setLightbox(null);
  const prevPhoto = () => setLightbox((p) => (p !== null ? (p - 1 + PORTFOLIO.length) % PORTFOLIO.length : 0));
  const nextPhoto = () => setLightbox((p) => (p !== null ? (p + 1) % PORTFOLIO.length : 0));

  return (
    <div className="font-montserrat bg-cream text-charcoal overflow-x-hidden">

      {/* LIGHTBOX */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors z-10"
            onClick={closeLightbox}
          >
            <Icon name="X" size={28} />
          </button>
          <button
            className="absolute left-4 md:left-10 text-white/60 hover:text-white transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
          >
            <Icon name="ChevronLeft" size={36} />
          </button>
          <img
            src={PORTFOLIO[lightbox].img}
            alt={PORTFOLIO[lightbox].label}
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-4 md:right-10 text-white/60 hover:text-white transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
          >
            <Icon name="ChevronRight" size={36} />
          </button>
          <div className="absolute bottom-6 flex gap-2">
            {PORTFOLIO.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setLightbox(i); }}
                className={`w-2 h-2 rounded-full transition-all ${i === lightbox ? "bg-gold scale-125" : "bg-white/30"}`}
              />
            ))}
          </div>
        </div>
      )}

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

      {/* ABOUT */}
      <section id="обо мне" className="py-24 bg-cream px-6">
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
            <div className="text-xs font-light tracking-[0.4em] uppercase text-gold mb-4">Обо мне</div>
            <h2 className="font-cormorant text-5xl font-light text-charcoal mb-6 leading-tight">
              Наталья Алексашкина —<br />
              <em className="italic">ведущая с душой</em>
            </h2>
            <div className="w-12 h-px bg-gold mb-8" />
            <p className="text-sm font-light text-charcoal/70 leading-relaxed mb-5">
              Более 10 лет я провожу праздники в Сарове и по всей России. Для меня каждое мероприятие — не просто работа, а возможность подарить людям настоящие эмоции и тепло.
            </p>
            <p className="text-sm font-light text-charcoal/70 leading-relaxed mb-8">
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
                  <div className="w-8 h-8 flex items-center justify-center border border-gold/30 flex-shrink-0 mt-0.5">
                    <Icon name={f.icon} size={14} className="text-gold" />
                  </div>
                  <span className="text-xs font-light text-charcoal/60 leading-relaxed whitespace-pre-line">{f.text}</span>
                </div>
              ))}
            </div>
            <a
              href="#контакты"
              className="inline-block px-8 py-3 bg-charcoal text-white text-xs font-light tracking-[0.25em] uppercase hover:bg-gold transition-all duration-300"
            >
              Написать мне
            </a>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 bg-charcoal px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs font-light tracking-[0.4em] uppercase text-gold mb-4">Как я работаю</div>
            <h2 className="font-cormorant text-5xl md:text-6xl font-light text-white">Процесс работы</h2>
            <div className="w-12 h-px bg-gold mx-auto mt-6" />
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Знакомство", desc: "Обсуждаем ваше мероприятие, пожелания и формат. Бесплатная консультация." },
              { num: "02", title: "Программа", desc: "Разрабатываю индивидуальный сценарий специально под вас и ваших гостей." },
              { num: "03", title: "Подготовка", desc: "Координирую все детали, репетиции, работаю с командой." },
              { num: "04", title: "День события", desc: "Вы отдыхаете и наслаждаетесь. Я забочусь обо всём остальном." },
            ].map((p) => (
              <div key={p.num} className="text-center">
                <div className="font-cormorant text-6xl font-light text-gold/30 mb-4">{p.num}</div>
                <h3 className="font-cormorant text-xl font-light text-white mb-3">{p.title}</h3>
                <p className="text-xs font-light text-white/50 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="отзывы" className="py-24 bg-cream px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs font-light tracking-[0.4em] uppercase text-gold mb-4">Говорят клиенты</div>
            <h2 className="font-cormorant text-5xl md:text-6xl font-light text-charcoal">Отзывы</h2>
            <div className="w-12 h-px bg-gold mx-auto mt-6" />
          </div>

          {/* Big review */}
          <div className="bg-white border border-gold/20 p-10 mb-8">
            <div className="flex gap-1 mb-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon key={i} name="Star" size={14} className="text-gold fill-gold" />
              ))}
            </div>
            <p className="font-cormorant text-xl md:text-2xl font-light italic text-charcoal/80 leading-relaxed mb-8 whitespace-pre-line">
              "{REVIEWS[0].text}"
            </p>
            <div className="border-t border-gold/15 pt-5 flex items-center justify-between">
              <div>
                <div className="text-xs font-medium tracking-wider text-charcoal">{REVIEWS[0].name}</div>
                <div className="text-xs font-light text-charcoal/40 mt-1">{REVIEWS[0].event}</div>
              </div>
              <div className="font-cormorant text-5xl text-gold/15 font-light leading-none">"</div>
            </div>
          </div>

          {/* Other reviews */}
          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.slice(1).map((t, i) => (
              <div key={i} className="bg-white border border-gold/15 p-7">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Icon key={j} name="Star" size={11} className="text-gold fill-gold" />
                  ))}
                </div>
                <p className="font-cormorant text-base italic text-charcoal/75 leading-relaxed mb-5">
                  "{t.text}"
                </p>
                <div className="border-t border-gold/15 pt-4">
                  {t.name && <div className="text-xs font-medium tracking-wider text-charcoal">{t.name}</div>}
                  <div className="text-xs font-light text-charcoal/40 mt-1">{t.event}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${PORTFOLIO[0].img}')` }}
        />
        <div className="absolute inset-0 bg-charcoal/75" />
        <div className="relative text-center text-white px-6 max-w-3xl mx-auto">
          <div className="text-xs font-light tracking-[0.4em] uppercase text-gold mb-6">Давайте познакомимся</div>
          <h2 className="font-cormorant text-5xl md:text-6xl font-light mb-6">
            Готовы создать<br />
            <em className="italic">ваш идеальный праздник?</em>
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mb-8" />
          <p className="text-sm font-light text-white/65 mb-10 leading-relaxed">
            Звоните или пишите — обсудим всё и найдём лучший формат для вашего события.
          </p>
          <a
            href="tel:+79870807645"
            className="inline-block px-12 py-4 bg-gold text-white text-xs font-light tracking-[0.3em] uppercase hover:bg-gold-dark transition-all duration-300"
          >
            Позвонить сейчас
          </a>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="контакты" className="py-24 bg-cream px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-xs font-light tracking-[0.4em] uppercase text-gold mb-4">Связаться со мной</div>
          <h2 className="font-cormorant text-5xl font-light text-charcoal mb-6 leading-tight">
            Давайте обсудим<br />
            <em className="italic">ваше мероприятие</em>
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mb-8" />
          <p className="text-sm font-light text-charcoal/60 leading-relaxed mb-14 max-w-lg mx-auto">
            Я на связи и готова ответить на все вопросы. Выберите удобный способ — позвоните или напишите в ВКонтакте.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 max-w-xl mx-auto">
            <a
              href="tel:+79870807645"
              className="group flex flex-col items-center gap-5 p-10 bg-white border border-gold/20 hover:border-gold hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 flex items-center justify-center border border-gold/30 group-hover:bg-gold group-hover:border-gold transition-all duration-300">
                <Icon name="Phone" size={24} className="text-gold group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <div className="text-xs font-light tracking-[0.3em] uppercase text-charcoal/40 mb-2">Позвонить</div>
                <div className="font-cormorant text-2xl font-light text-charcoal group-hover:text-gold transition-colors duration-300">
                  +7 987 080-76-45
                </div>
              </div>
            </a>

            <a
              href="https://vk.com/id45732270"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-5 p-10 bg-white border border-gold/20 hover:border-gold hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 flex items-center justify-center border border-gold/30 group-hover:bg-gold group-hover:border-gold transition-all duration-300">
                <Icon name="Users" size={24} className="text-gold group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <div className="text-xs font-light tracking-[0.3em] uppercase text-charcoal/40 mb-2">ВКонтакте</div>
                <div className="font-cormorant text-2xl font-light text-charcoal group-hover:text-gold transition-colors duration-300">
                  Написать
                </div>
              </div>
            </a>
          </div>

          <p className="text-xs font-light text-charcoal/35 mt-10 tracking-wide">
            Саров · работаю по всей России
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-charcoal py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
            <div className="font-cormorant text-3xl font-light text-white tracking-[0.15em]">
              Наталья Алексашкина
            </div>
            <div className="flex items-center gap-8">
              {["Услуги", "Портфолио", "Обо мне", "Отзывы"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-xs font-light tracking-[0.2em] uppercase text-white/40 hover:text-gold transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <a
                href="tel:+79870807645"
                className="text-xs font-light text-white/40 hover:text-gold transition-colors tracking-wide"
              >
                +7 987 080-76-45
              </a>
              <span className="text-white/20">·</span>
              <a
                href="https://vk.com/id45732270"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-light text-white/40 hover:text-gold transition-colors tracking-wide"
              >
                ВКонтакте
              </a>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs font-light text-white/25 tracking-wide">
              © {new Date().getFullYear()} Наталья Алексашкина — Ведущая · Тамада
            </p>
            <p className="text-xs font-light text-white/15">
              Саров · Россия
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
