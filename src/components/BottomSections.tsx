import Icon from "@/components/ui/icon";
import { PORTFOLIO, REVIEWS } from "@/components/data";

const BottomSections = () => {
  return (
    <>
      {/* PROCESS */}
      <section className="py-24 px-6" style={{ backgroundColor: "#0c0b09" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs font-light tracking-[0.4em] uppercase text-gold/70 mb-4">Как я работаю</div>
            <h2 className="font-cormorant text-5xl md:text-6xl font-light text-white">Процесс работы</h2>
            <div className="flex items-center justify-center gap-3 mt-6">
              <div className="h-px w-8 bg-gold/40" />
              <div className="w-1 h-1 rotate-45 bg-gold/40" />
              <div className="h-px w-8 bg-gold/40" />
            </div>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Знакомство", desc: "Обсуждаем ваше мероприятие, пожелания и формат. Бесплатная консультация." },
              { num: "02", title: "Программа", desc: "Разрабатываю индивидуальный сценарий специально под вас и ваших гостей." },
              { num: "03", title: "Подготовка", desc: "Координирую все детали, репетиции, работаю с командой." },
              { num: "04", title: "День события", desc: "Вы отдыхаете и наслаждаетесь. Я забочусь обо всём остальном." },
            ].map((p) => (
              <div key={p.num} className="text-center">
                <div className="font-cormorant text-6xl font-light text-gold/20 mb-4">{p.num}</div>
                <h3 className="font-cormorant text-xl font-light text-white/80 mb-3">{p.title}</h3>
                <p className="text-xs font-light text-white/35 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="отзывы" className="py-24 px-6 bg-dark-pattern">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs font-light tracking-[0.4em] uppercase text-gold/70 mb-4">Говорят клиенты</div>
            <h2 className="font-cormorant text-5xl md:text-6xl font-light text-white">Отзывы</h2>
            <div className="flex items-center justify-center gap-3 mt-6">
              <div className="h-px w-8 bg-gold/40" />
              <div className="w-1 h-1 rotate-45 bg-gold/40" />
              <div className="h-px w-8 bg-gold/40" />
            </div>
          </div>

          {/* Big review */}
          <div className="border border-gold/20 p-10 mb-8" style={{ backgroundColor: "rgba(255,255,255,0.03)" }}>
            <div className="flex gap-1 mb-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon key={i} name="Star" size={14} className="text-gold fill-gold" />
              ))}
            </div>
            <p className="font-cormorant text-xl md:text-2xl font-light italic text-white/70 leading-relaxed mb-8 whitespace-pre-line">
              "{REVIEWS[0].text}"
            </p>
            <div className="border-t border-gold/15 pt-5 flex items-center justify-between">
              <div>
                <div className="text-xs font-medium tracking-wider text-gold/70">{REVIEWS[0].name}</div>
                <div className="text-xs font-light text-white/30 mt-1">{REVIEWS[0].event}</div>
              </div>
              <div className="font-cormorant text-5xl text-gold/10 font-light leading-none">"</div>
            </div>
          </div>

          {/* Other reviews */}
          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.slice(1).map((t, i) => (
              <div key={i} className="border border-gold/15 p-7" style={{ backgroundColor: "rgba(255,255,255,0.025)" }}>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Icon key={j} name="Star" size={11} className="text-gold fill-gold" />
                  ))}
                </div>
                <p className="font-cormorant text-base italic text-white/60 leading-relaxed mb-5">
                  "{t.text}"
                </p>
                <div className="border-t border-gold/15 pt-4">
                  {t.name && <div className="text-xs font-medium tracking-wider text-gold/60">{t.name}</div>}
                  <div className="text-xs font-light text-white/30 mt-1">{t.event}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative py-28 overflow-hidden" style={{ backgroundColor: "#0c0b09" }}>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url('${PORTFOLIO[0].img}')` }}
        />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(201,169,110,0.08) 0%, transparent 70%)" }} />
        {/* золотая рамка */}
        <div className="absolute inset-8 border border-gold/10 pointer-events-none hidden md:block" />
        <div className="relative text-center text-white px-6 max-w-3xl mx-auto">
          <div className="text-xs font-light tracking-[0.4em] uppercase text-gold/70 mb-6">Давайте познакомимся</div>
          <h2 className="font-cormorant text-5xl md:text-6xl font-light mb-6 text-white">
            Готовы создать<br />
            <em className="italic text-gold/80">ваш идеальный праздник?</em>
          </h2>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold/50" />
            <div className="w-1.5 h-1.5 rotate-45 bg-gold/50" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold/50" />
          </div>
          <p className="text-sm font-light text-white/45 mb-10 leading-relaxed">
            Звоните или пишите — обсудим всё и найдём лучший формат для вашего события.
          </p>
          <a
            href="tel:+79870807645"
            className="inline-block px-12 py-4 bg-gold text-black text-xs font-medium tracking-[0.3em] uppercase hover:bg-gold-light transition-all duration-300"
          >
            Позвонить сейчас
          </a>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="контакты" className="py-24 px-6 bg-dark-pattern">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-xs font-light tracking-[0.4em] uppercase text-gold/70 mb-4">Связаться со мной</div>
          <h2 className="font-cormorant text-5xl font-light text-white mb-6 leading-tight">
            Давайте обсудим<br />
            <em className="italic text-gold/80">ваше мероприятие</em>
          </h2>
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-8 bg-gold/40" />
            <div className="w-1 h-1 rotate-45 bg-gold/40" />
            <div className="h-px w-8 bg-gold/40" />
          </div>
          <p className="text-sm font-light text-white/40 leading-relaxed mb-14 max-w-lg mx-auto">
            Я на связи и готова ответить на все вопросы. Выберите удобный способ — позвоните или напишите в ВКонтакте.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 max-w-xl mx-auto">
            <a
              href="tel:+79870807645"
              className="group flex flex-col items-center gap-5 p-10 border border-gold/20 hover:border-gold/60 transition-all duration-300"
              style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
            >
              <div className="w-16 h-16 flex items-center justify-center border border-gold/25 group-hover:bg-gold group-hover:border-gold transition-all duration-300">
                <Icon name="Phone" size={24} className="text-gold group-hover:text-black transition-colors duration-300" />
              </div>
              <div>
                <div className="text-xs font-light tracking-[0.3em] uppercase text-white/30 mb-2">Позвонить</div>
                <div className="font-cormorant text-2xl font-light text-white group-hover:text-gold transition-colors duration-300">
                  +7 987 080-76-45
                </div>
              </div>
            </a>

            <a
              href="https://vk.com/id45732270"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-5 p-10 border border-gold/20 hover:border-gold/60 transition-all duration-300"
              style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
            >
              <div className="w-16 h-16 flex items-center justify-center border border-gold/25 group-hover:bg-gold group-hover:border-gold transition-all duration-300">
                <Icon name="Users" size={24} className="text-gold group-hover:text-black transition-colors duration-300" />
              </div>
              <div>
                <div className="text-xs font-light tracking-[0.3em] uppercase text-white/30 mb-2">ВКонтакте</div>
                <div className="font-cormorant text-2xl font-light text-white group-hover:text-gold transition-colors duration-300">
                  Написать
                </div>
              </div>
            </a>
          </div>

          <p className="text-xs font-light text-white/20 mt-10 tracking-wide">
            Саров · работаю по всей России
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 border-t border-gold/15" style={{ backgroundColor: "#080807" }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
            <div className="font-cormorant text-3xl font-light text-gold tracking-[0.15em]">
              Наталья Алексашкина
            </div>
            <div className="flex items-center gap-8">
              {["Обо мне", "Услуги", "Портфолио", "Отзывы"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-xs font-light tracking-[0.2em] uppercase text-white/25 hover:text-gold transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <a
                href="tel:+79870807645"
                className="text-xs font-light text-white/25 hover:text-gold transition-colors tracking-wide"
              >
                +7 987 080-76-45
              </a>
              <span className="text-white/15">·</span>
              <a
                href="https://vk.com/id45732270"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-light text-white/25 hover:text-gold transition-colors tracking-wide"
              >
                ВКонтакте
              </a>
            </div>
          </div>
          <div className="border-t border-gold/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs font-light text-white/15 tracking-wide">
              © {new Date().getFullYear()} Наталья Алексашкина — Ведущая
            </p>
            <p className="text-xs font-light text-white/10">
              Саров · Россия
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default BottomSections;
