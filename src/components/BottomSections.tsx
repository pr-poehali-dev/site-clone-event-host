import Icon from "@/components/ui/icon";
import { PORTFOLIO, REVIEWS } from "@/components/data";

const BottomSections = () => {
  return (
    <>
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
    </>
  );
};

export default BottomSections;
