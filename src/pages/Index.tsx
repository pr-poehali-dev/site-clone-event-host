import { useState } from "react";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    event: "",
    message: "",
  });
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="font-montserrat bg-cream text-charcoal overflow-x-hidden">

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
                className="font-montserrat text-xs font-light tracking-[0.2em] uppercase text-charcoal/70 hover:text-gold transition-colors duration-300"
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
          <button
            className="md:hidden text-charcoal"
            onClick={() => setMenuOpen(!menuOpen)}
          >
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
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1600&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/80" />
        <div className="relative text-center text-white px-6 max-w-4xl mx-auto animate-fade-in-slow">
          <div className="text-xs font-light tracking-[0.4em] uppercase text-gold mb-6">
            Организатор премиум мероприятий
          </div>
          <h1 className="font-cormorant text-6xl md:text-8xl font-light leading-none mb-6 tracking-wide">
            Наталья
          </h1>
          <div className="w-16 h-px bg-gold mx-auto mb-8" />
          <p className="font-montserrat text-sm md:text-base font-light tracking-[0.1em] text-white/80 max-w-xl mx-auto leading-relaxed">
            Свадьбы, корпоративы, юбилеи.<br />
            Изысканный подход к каждой детали.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#контакты"
              className="px-10 py-3 bg-gold text-white text-xs font-light tracking-[0.25em] uppercase hover:bg-gold-dark transition-all duration-300"
            >
              Обсудить мероприятие
            </a>
            <a
              href="#портфолио"
              className="px-10 py-3 border border-white/40 text-white text-xs font-light tracking-[0.25em] uppercase hover:border-gold hover:text-gold transition-all duration-300"
            >
              Смотреть работы
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
          <span className="text-xs tracking-[0.3em] uppercase font-light">Прокрутите</span>
          <Icon name="ChevronDown" size={16} className="animate-bounce" />
        </div>
      </section>

      {/* STATS */}
      <section className="bg-charcoal-light py-16">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: "12+", label: "Лет опыта" },
            { num: "350+", label: "Мероприятий" },
            { num: "98%", label: "Довольных клиентов" },
            { num: "50+", label: "Партнёров" },
          ].map((s) => (
            <div key={s.num} className="text-white">
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
            <div className="text-xs font-light tracking-[0.4em] uppercase text-gold mb-4">Что я организую</div>
            <h2 className="font-cormorant text-5xl md:text-6xl font-light text-charcoal">Услуги</h2>
            <div className="w-12 h-px bg-gold mx-auto mt-6" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "Heart",
                title: "Свадьбы",
                desc: "Волшебный день, который запомнится на всю жизнь. Полное сопровождение от концепции до последнего танца.",
                details: ["Разработка концепции", "Подбор площадки и поставщиков", "Координация в день события", "Флористика и декор"],
              },
              {
                icon: "Building2",
                title: "Корпоративы",
                desc: "Создаю события, которые объединяют команду и укрепляют корпоративный дух. От 20 до 2000 гостей.",
                details: ["Тимбилдинги и форумы", "Праздничные вечера", "Деловые конференции", "Выездные мероприятия"],
              },
              {
                icon: "Cake",
                title: "Юбилеи и праздники",
                desc: "Каждый важный момент жизни заслуживает особого торжества, наполненного теплом и элегантностью.",
                details: ["Юбилеи и дни рождения", "Детские праздники", "Выпускные вечера", "Семейные торжества"],
              },
            ].map((s) => (
              <div
                key={s.title}
                className="group bg-white border border-gold/15 p-8 hover:border-gold/50 hover:shadow-lg transition-all duration-400"
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
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80", label: "Свадьба в Подмосковье" },
              { img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80", label: "Корпоратив — 500 гостей" },
              { img: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80", label: "Юбилей 50 лет" },
              { img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80", label: "Зимняя свадьба" },
              { img: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600&q=80", label: "Детский праздник" },
              { img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&q=80", label: "Корпоративный форум" },
            ].map((p) => (
              <div key={p.label} className="group relative overflow-hidden aspect-square">
                <img
                  src={p.img}
                  alt={p.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/50 transition-all duration-400 flex items-end p-4">
                  <span className="text-white text-xs font-light tracking-[0.15em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                    {p.label}
                  </span>
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
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=700&q=80"
              alt="Наталья"
              className="relative w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              style={{ aspectRatio: "3/4" }}
            />
          </div>
          <div>
            <div className="text-xs font-light tracking-[0.4em] uppercase text-gold mb-4">Обо мне</div>
            <h2 className="font-cormorant text-5xl font-light text-charcoal mb-6 leading-tight">
              Я создаю события,<br />
              <em className="italic">которые живут в памяти</em>
            </h2>
            <div className="w-12 h-px bg-gold mb-8" />
            <p className="text-sm font-light text-charcoal/70 leading-relaxed mb-5">
              Более 12 лет я помогаю людям создавать незабываемые моменты. Каждое мероприятие для меня — это история, которую нужно рассказать с любовью и вниманием к деталям.
            </p>
            <p className="text-sm font-light text-charcoal/70 leading-relaxed mb-8">
              Я работаю только с проверенными партнёрами, которые разделяют мои ценности: качество, элегантность и безупречный сервис. Ваш праздник будет именно таким, каким вы его мечтали.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-10">
              {[
                { icon: "Award", text: "Лауреат премии\nWedding Awards 2023" },
                { icon: "Users", text: "Команда из 15\nпрофессионалов" },
                { icon: "MapPin", text: "Работаю по всей\nРоссии и СНГ" },
                { icon: "Star", text: "Средняя оценка\n4.98 из 5" },
              ].map((f) => (
                <div key={f.text} className="flex items-start gap-3">
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
              Познакомиться
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
              { num: "01", title: "Знакомство", desc: "Обсуждаем вашу мечту, пожелания и бюджет. Бесплатная консультация." },
              { num: "02", title: "Концепция", desc: "Разрабатываю уникальную концепцию мероприятия специально для вас." },
              { num: "03", title: "Подготовка", desc: "Подбираю площадку, подрядчиков, координирую все детали." },
              { num: "04", title: "День события", desc: "Полное сопровождение в день мероприятия. Вы наслаждаетесь." },
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
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs font-light tracking-[0.4em] uppercase text-gold mb-4">Говорят клиенты</div>
            <h2 className="font-cormorant text-5xl md:text-6xl font-light text-charcoal">Отзывы</h2>
            <div className="w-12 h-px bg-gold mx-auto mt-6" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Анна и Дмитрий",
                event: "Свадьба, август 2024",
                text: "Наталья превзошла все наши ожидания. Наша свадьба была именно такой, о которой мы мечтали — элегантной, тёплой и невероятно красивой. Спасибо за каждую деталь!",
                stars: 5,
              },
              {
                name: "Сергей Михайлов",
                event: "Корпоратив, 300 гостей",
                text: "Работаю с Натальей третий год подряд. Каждый раз — безупречная организация, никаких сюрпризов. Команда всё делает чётко и в срок. Рекомендую без сомнений.",
                stars: 5,
              },
              {
                name: "Елена Соколова",
                event: "Юбилей мамы, 60 лет",
                text: "Хотела устроить маме незабываемый праздник. Наталья поняла всё с полуслова и создала вечер, от которого у нас до сих пор мурашки. Бесценная работа!",
                stars: 5,
              },
            ].map((t) => (
              <div key={t.name} className="bg-white border border-gold/15 p-8">
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Icon key={i} name="Star" size={12} className="text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-sm font-light text-charcoal/70 leading-relaxed mb-6 italic font-cormorant text-lg">
                  "{t.text}"
                </p>
                <div className="border-t border-gold/15 pt-5">
                  <div className="font-montserrat text-xs font-medium tracking-wider text-charcoal">{t.name}</div>
                  <div className="text-xs font-light text-charcoal/40 mt-1">{t.event}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=1600&q=80')` }}
        />
        <div className="absolute inset-0 bg-charcoal/70" />
        <div className="relative text-center text-white px-6 max-w-3xl mx-auto">
          <div className="text-xs font-light tracking-[0.4em] uppercase text-gold mb-6">Начните прямо сейчас</div>
          <h2 className="font-cormorant text-5xl md:text-6xl font-light mb-6">
            Готовы создать<br />
            <em className="italic">ваш идеальный праздник?</em>
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mb-8" />
          <p className="text-sm font-light text-white/70 mb-10 leading-relaxed">
            Оставьте заявку, и я свяжусь с вами в течение 2 часов для бесплатной консультации.
          </p>
          <a
            href="#контакты"
            className="inline-block px-12 py-4 bg-gold text-white text-xs font-light tracking-[0.3em] uppercase hover:bg-gold-dark transition-all duration-300"
          >
            Оставить заявку
          </a>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="контакты" className="py-24 bg-cream px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <div className="text-xs font-light tracking-[0.4em] uppercase text-gold mb-4">Напишите мне</div>
            <h2 className="font-cormorant text-5xl font-light text-charcoal mb-6 leading-tight">
              Давайте обсудим<br />
              <em className="italic">ваше мероприятие</em>
            </h2>
            <div className="w-12 h-px bg-gold mb-8" />
            <p className="text-sm font-light text-charcoal/60 leading-relaxed mb-10">
              Расскажите мне о своём событии. Я отвечаю на все заявки лично и готова ответить на любые вопросы.
            </p>
            <div className="space-y-6">
              {[
                { icon: "Phone", label: "+7 (985) 123-45-67" },
                { icon: "Mail", label: "natalya@events.ru" },
                { icon: "Instagram", label: "@natalya.events" },
                { icon: "MapPin", label: "Москва и вся Россия" },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center border border-gold/30">
                    <Icon name={c.icon} size={16} className="text-gold" />
                  </div>
                  <span className="text-sm font-light text-charcoal/70">{c.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white border border-gold/20 p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-light tracking-[0.2em] uppercase text-charcoal/50 mb-2">
                  Ваше имя
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border border-gold/20 px-4 py-3 text-sm font-light text-charcoal bg-transparent focus:outline-none focus:border-gold transition-colors"
                  placeholder="Как вас зовут?"
                />
              </div>
              <div>
                <label className="block text-xs font-light tracking-[0.2em] uppercase text-charcoal/50 mb-2">
                  Телефон
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full border border-gold/20 px-4 py-3 text-sm font-light text-charcoal bg-transparent focus:outline-none focus:border-gold transition-colors"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>
              <div>
                <label className="block text-xs font-light tracking-[0.2em] uppercase text-charcoal/50 mb-2">
                  Тип мероприятия
                </label>
                <select
                  value={formData.event}
                  onChange={(e) => setFormData({ ...formData, event: e.target.value })}
                  className="w-full border border-gold/20 px-4 py-3 text-sm font-light text-charcoal bg-white focus:outline-none focus:border-gold transition-colors"
                >
                  <option value="">Выберите тип события</option>
                  <option value="wedding">Свадьба</option>
                  <option value="corporate">Корпоратив</option>
                  <option value="birthday">День рождения / Юбилей</option>
                  <option value="other">Другое мероприятие</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-light tracking-[0.2em] uppercase text-charcoal/50 mb-2">
                  Пожелания
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full border border-gold/20 px-4 py-3 text-sm font-light text-charcoal bg-transparent focus:outline-none focus:border-gold transition-colors resize-none"
                  placeholder="Расскажите о вашем мероприятии..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-charcoal text-white text-xs font-light tracking-[0.3em] uppercase hover:bg-gold transition-all duration-300"
              >
                Отправить заявку
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-charcoal py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
            <div className="font-cormorant text-3xl font-light text-white tracking-[0.15em]">
              Наталья
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
            <div className="flex items-center gap-4">
              {["Instagram", "MessageCircle", "Send"].map((icon) => (
                <div
                  key={icon}
                  className="w-9 h-9 flex items-center justify-center border border-white/20 hover:border-gold hover:text-gold text-white/40 transition-all duration-300 cursor-pointer"
                >
                  <Icon name={icon} size={14} />
                </div>
              ))}
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs font-light text-white/30 tracking-wide">
              © 2024 Наталья — Организатор премиум мероприятий
            </p>
            <p className="text-xs font-light text-white/20">
              Политика конфиденциальности
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
