'use client'

import Image from 'next/image'
import {
  Gamepad2, Monitor, Users, Clock, Star, MapPin, Phone,
  Check, Zap, Trophy, Coffee, Wifi, Snowflake, Armchair,
  Headphones, ChevronDown, CircleDot, Crown, Target,
  Swords, ArrowRight, Flame
} from 'lucide-react'
import { motion } from 'framer-motion'
import { BlurFade } from '@/components/magicui/blur-fade'
import { Marquee } from '@/components/magicui/marquee'
import { SparklesText } from '@/components/magicui/sparkles-text'
import { ShineBorder } from '@/components/magicui/shine-border'
import { Badge } from '@/components/ui/badge'

const WA = 'https://wa.me/923069296934?text=Hi!%20I%20want%20to%20book%20a%20gaming%20session'
const IG = 'https://instagram.com/cafegameria'
const IMG = '/images/cafe-gameria'

function IgIcon({ size = 18, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

/* ── Animations ── */
const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.06 } } }
const up = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } } }

/* ── Data ── */
const zones = [
  { name: 'PS5 Zone', icon: Crown, price: 'Rs 400–500', per: '/hr', desc: '4K HDR · DualSense · Haptic Feedback', tag: 'ELITE', featured: true, img: `${IMG}/zone-ps5-premium.jpg` },
  { name: 'PS4 Zone', icon: Gamepad2, price: 'Rs 200–300', per: '/hr', desc: 'Full HD · DualShock 4 · Multiplayer', tag: 'POPULAR', featured: false, img: `${IMG}/ps5-setup.jpg` },
  { name: 'Xbox Zone', icon: Target, price: 'Rs 200–300', per: '/hr', desc: 'Xbox Controllers · Game Pass · Groups', tag: 'VALUE', featured: false, img: `${IMG}/xbox-setup.jpg` },
  { name: 'Squad Zone', icon: Users, price: 'Rs 1,000', per: '/session', desc: '4–6 Players · Private Room · Custom Setup', tag: 'SQUAD', featured: true, img: `${IMG}/zone-squad-premium.jpg` },
  { name: 'Foosball', icon: CircleDot, price: 'Rs 150', per: '/hr', desc: 'Tournament Table · 2v2 · Chill Zone', tag: 'FUN', featured: false, img: `${IMG}/foosball.jpg` },
]

const games = [
  { n: 'EA FC 25', c: 'Sports' }, { n: 'Call of Duty', c: 'FPS' }, { n: 'GTA V', c: 'Open World' },
  { n: 'Fortnite', c: 'Battle Royale' }, { n: 'God of War', c: 'Action' }, { n: 'Spider-Man 2', c: 'Action' },
  { n: 'Tekken 8', c: 'Fighting' }, { n: 'Mortal Kombat', c: 'Fighting' }, { n: 'FIFA 24', c: 'Sports' },
  { n: 'Hogwarts Legacy', c: 'RPG' }, { n: 'Helldivers 2', c: 'Co-op' }, { n: 'It Takes Two', c: 'Co-op' },
]

const specs = [
  { icon: Monitor, t: 'RTX 4070 Rigs', d: '144Hz · Tournament Ready' },
  { icon: Wifi, t: '200Mbps Fiber', d: 'Sub-15ms Ping · Zero Lag' },
  { icon: Snowflake, t: 'Climate Controlled', d: 'Always Cool · Peak Comfort' },
  { icon: Armchair, t: 'Pro Gaming Chairs', d: 'Ergonomic · Marathon Sessions' },
  { icon: Zap, t: 'RGB Atmosphere', d: 'Immersive Ambient Lighting' },
  { icon: Headphones, t: 'Surround Audio', d: 'Pro Headsets & Speakers' },
  { icon: Coffee, t: 'Snacks & Drinks', d: 'Fuel For Your Sessions' },
  { icon: Trophy, t: 'Weekly Tournaments', d: 'Compete · Win · Repeat' },
]

const gallery = [
  { src: `${IMG}/hero-cinematic.jpg`, alt: 'Cafe Gameria Interior', big: true },
  { src: `${IMG}/zone-ps5-premium.jpg`, alt: 'Gaming Stations', big: false },
  { src: `${IMG}/zone-squad-premium.jpg`, alt: 'Squad Gaming', big: false },
  { src: `${IMG}/zone-interior.jpg`, alt: 'Lounge Area', big: false },
  { src: `${IMG}/foosball.jpg`, alt: 'Foosball Zone', big: false },
]

const reviews = [
  { name: 'Ahmed R.', text: 'Best gaming cafe in Lahore. The PS5 zone is insane — 4K and the vibe is unmatched. Coming back every weekend.', s: 5 },
  { name: 'Saad M.', text: 'Squad sessions here are legendary. Private rooms, great snacks, and the internet speed is no joke.', s: 5 },
  { name: 'Zain K.', text: 'Open till 6AM is a game changer. AC and comfortable chairs make long sessions so easy.', s: 4 },
  { name: 'Hassan A.', text: 'Came for the FIFA tournaments, stayed for the atmosphere. The setups are incredible and the staff is super friendly.', s: 5 },
]

/* ═══════════════════════════════════════════════════════
   ███  PAGE  ███████████████████████████████████████████
   ═══════════════════════════════════════════════════════ */

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-[#09090B] text-[#FAFAFA] overflow-x-hidden">

      {/* ═══ NAV ═══ */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-[#09090B]/70 backdrop-blur-xl border-b border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 h-14 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded bg-[#FF2D55] flex items-center justify-center"><Gamepad2 size={13} className="text-white" /></div>
            <span className="text-sm font-extrabold tracking-wide">CAFE<span className="text-[#FF2D55]">GAMERIA</span></span>
          </a>
          <div className="hidden md:flex items-center gap-7 text-[13px] text-[#71717A] font-medium">
            {['Zones', 'Games', 'Specs', 'Gallery', 'Contact'].map(s => (
              <a key={s} href={`#${s.toLowerCase()}`} className="hover:text-white transition-colors">{s}</a>
            ))}
          </div>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary px-4 py-1.5 rounded text-xs inline-flex items-center gap-1.5"><Phone size={11}/>Book Now</a>
        </div>
      </nav>

      {/* ═══ HERO ═══ */}
      <section className="relative h-screen min-h-[650px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src={`${IMG}/hero-cinematic.jpg`} alt="Cafe Gameria — Premium Gaming Lounge" fill className="object-cover" sizes="100vw" priority />
          <div className="hero-gradient absolute inset-0" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 lg:px-8 pt-20">
          <BlurFade delay={0.15} inView>
            <div className="flex items-center gap-3 mb-5">
              <div className="accent-line" />
              <span className="mono text-[#71717A]">DHA Phase 1, Lahore</span>
            </div>
          </BlurFade>

          <BlurFade delay={0.3} inView>
            <h1 className="heading-display mb-5">
              <span className="text-white">CAFE</span><br/>
              <span className="gradient-text">GAMERIA</span>
            </h1>
          </BlurFade>

          <BlurFade delay={0.45} inView>
            <p className="text-lg sm:text-xl text-[#A1A1AA] max-w-lg leading-relaxed mb-8 font-light">
              Premium gaming lounge where friends come to compete and hang out.
            </p>
          </BlurFade>

          <BlurFade delay={0.6} inView>
            <div className="flex flex-wrap items-center gap-3">
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary px-8 py-4 rounded-lg text-sm inline-flex items-center gap-2">
                Book Your Session <ArrowRight size={15} />
              </a>
              <a href="#zones" className="btn-ghost px-8 py-4 rounded-lg text-sm inline-flex items-center gap-2">
                View Pricing
              </a>
            </div>
          </BlurFade>

          <BlurFade delay={0.8} inView>
            <div className="flex items-center gap-8 mt-12">
              {[
                { icon: Clock, label: '5PM–6AM', value: 'Hours' },
                { icon: Monitor, label: 'RTX 4070', value: 'GPUs' },
                { icon: Wifi, label: '200Mbps', value: 'Speed' },
              ].map(s => (
                <div key={s.label} className="flex items-center gap-2">
                  <s.icon size={14} className="text-[#FF2D55]" />
                  <div>
                    <div className="text-xs font-bold text-white">{s.label}</div>
                    <div className="text-[10px] text-[#52525B]">{s.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ═══ ZONES ═══ */}
      <section id="zones" className="section-elevated py-24 md:py-32 px-5 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <BlurFade inView>
            <div className="flex items-center gap-3 mb-3">
              <div className="accent-line" />
              <span className="mono text-[#FF2D55]">Zones & Pricing</span>
            </div>
            <h2 className="heading-section text-white mb-3">Choose Your Arena</h2>
            <p className="text-[#71717A] max-w-md mb-14">Premium setups for every type of gamer. From casual sessions to competitive play.</p>
          </BlurFade>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {zones.map((z) => (
              <motion.div key={z.name} variants={up}
                className={`${z.featured ? 'card-featured' : 'card-surface'} rounded-xl overflow-hidden group`}
              >
                {z.tag === 'ELITE' && <div className="absolute top-0 right-0 z-10"><ShineBorder borderWidth={1} duration={5} className="!rounded-none !rounded-tr-xl" color={['#FF2D55','#FF6B35','#FFB800']} /></div>}
                <div className="relative h-48 overflow-hidden">
                  <Image src={z.img} alt={z.name} fill className="object-cover transition-transform duration-600 group-hover:scale-105" sizes="(max-width:640px)100vw,(max-width:1024px)50vw,33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131316] via-[#131316]/20 to-transparent" />
                  <span className="absolute top-3 left-3 mono text-[9px] px-2 py-1 rounded bg-black/60 text-[#FF2D55] backdrop-blur-sm border border-[#FF2D55]/20">{z.tag}</span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2.5 mb-2">
                    <z.icon size={16} className={z.featured ? 'text-[#FF2D55]' : 'text-[#71717A]'} />
                    <h3 className="font-bold text-white text-base">{z.name}</h3>
                  </div>
                  <p className="text-xs text-[#71717A] mb-4 leading-relaxed">{z.desc}</p>
                  <div className="flex items-end justify-between">
                    <div>
                      <span className="text-2xl font-black text-white">{z.price}</span>
                      <span className="text-xs text-[#52525B] ml-1">{z.per}</span>
                    </div>
                    <a href={WA} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-[#FF2D55] hover:text-[#FF6B35] transition-colors inline-flex items-center gap-1">
                      Book <ArrowRight size={11} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ FULL-WIDTH CINEMATIC BREAK ═══ */}
      <section className="relative h-[50vh] min-h-[300px] overflow-hidden">
        <Image src={`${IMG}/zone-interior.jpg`} alt="Cafe Gameria Interior" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-[#09090B]/60" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <BlurFade inView>
            <p className="mono text-[#FF2D55] mb-3">Open Every Day</p>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white">5PM — 6AM</h2>
            <p className="text-[#71717A] mt-3 text-sm">Late night gaming. No excuses.</p>
          </BlurFade>
        </div>
      </section>

      {/* ═══ GAMES ═══ */}
      <section id="games" className="section-dark py-24 md:py-32 px-5 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <BlurFade inView>
            <div className="flex items-center gap-3 mb-3">
              <div className="accent-line" />
              <span className="mono text-[#FFB800]">Game Library</span>
            </div>
            <h2 className="heading-section text-white mb-3">Play Anything</h2>
            <p className="text-[#71717A] max-w-md mb-14">100+ titles across every genre. From FIFA to Fortnite.</p>
          </BlurFade>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5"
          >
            {games.map(g => (
              <motion.div key={g.n} variants={up}
                className="card-surface rounded-lg px-4 py-3 flex items-center justify-between"
              >
                <span className="text-sm font-semibold text-white">{g.n}</span>
                <span className="mono text-[8px] text-[#52525B]">{g.c}</span>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-8 card-surface rounded-lg overflow-hidden">
            <Marquee pauseOnHover className="py-2.5">
              {['EA FC 25','Call of Duty','GTA V','Fortnite','God of War','Spider-Man 2','Tekken 8','Mortal Kombat','Hogwarts Legacy','Helldivers 2','Uncharted','The Last of Us'].map(g => (
                <span key={g} className="mx-5 text-[11px] text-[#52525B] flex items-center gap-2"><Swords size={9} className="text-[#FF2D55]/30" />{g}</span>
              ))}
            </Marquee>
          </div>
        </div>
      </section>

      {/* ═══ SPECS ═══ */}
      <section id="specs" className="section-elevated py-24 md:py-32 px-5 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <BlurFade inView>
            <div className="flex items-center gap-3 mb-3">
              <div className="accent-line" />
              <span className="mono text-[#A1A1AA]">Specs</span>
            </div>
            <h2 className="heading-section text-white mb-3">Pro-Level Setup</h2>
            <p className="text-[#71717A] max-w-md mb-14">Everything a gamer needs. Nothing they don&apos;t.</p>
          </BlurFade>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
          >
            {specs.map(s => (
              <motion.div key={s.t} variants={up} className="card-surface rounded-xl p-6">
                <s.icon size={20} className="text-[#FF2D55] mb-4" />
                <h3 className="text-sm font-bold text-white mb-1">{s.t}</h3>
                <p className="text-xs text-[#71717A]">{s.d}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ GALLERY ═══ */}
      <section id="gallery" className="section-dark py-24 md:py-32 px-5 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <BlurFade inView>
            <div className="flex items-center gap-3 mb-3">
              <div className="accent-line" />
              <span className="mono text-[#FF2D55]">Gallery</span>
            </div>
            <h2 className="heading-section text-white mb-3">Inside The Arena</h2>
            <p className="text-[#71717A] max-w-md mb-14">See where the magic happens.</p>
          </BlurFade>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
          >
            {gallery.map((img) => (
              <motion.div key={img.alt} variants={up} className={`gallery-item ${img.big ? 'sm:col-span-2 lg:col-span-2' : ''}`}>
                <div className="relative aspect-video overflow-hidden">
                  <Image src={img.src} alt={img.alt} fill className="object-cover" sizes={img.big ? '(max-width:640px)100vw,66vw' : '(max-width:640px)100vw,33vw'} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ REVIEWS ═══ */}
      <section className="section-elevated py-24 md:py-32 px-5 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <BlurFade inView>
            <div className="flex items-center gap-3 mb-3">
              <div className="accent-line" />
              <span className="mono text-[#FFB800]">Reviews</span>
            </div>
            <h2 className="heading-section text-white mb-3">What Gamers Say</h2>
            <p className="text-[#71717A] max-w-md mb-14">Real feedback from the community.</p>
          </BlurFade>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {reviews.map((r, i) => (
              <motion.div key={r.name} variants={up} className="card-surface rounded-xl p-6">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={12} className={j < r.s ? 'fill-[#FFB800] text-[#FFB800]' : 'text-[#27272A]'} />
                  ))}
                </div>
                <p className="text-sm text-[#A1A1AA] leading-relaxed mb-4">&ldquo;{r.text}&rdquo;</p>
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#FF2D55]/10 flex items-center justify-center text-[10px] font-bold text-[#FF2D55]">{r.name[0]}</div>
                  <span className="text-xs font-bold text-white">{r.name}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ CONTACT ═══ */}
      <section id="contact" className="section-dark py-24 md:py-32 px-5 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <BlurFade inView>
            <div className="flex items-center gap-3 mb-3">
              <div className="accent-line" />
              <span className="mono text-[#A1A1AA]">Location</span>
            </div>
            <h2 className="heading-section text-white mb-3">Find Your Zone</h2>
            <p className="text-[#71717A] max-w-md mb-14">Visit us or reach out anytime.</p>
          </BlurFade>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            <BlurFade delay={0.1} inView>
              <div className="lg:col-span-3 card-surface rounded-xl overflow-hidden h-80 lg:h-[420px]">
                <div className="map-frame relative w-full h-full">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.123456789!2d74.35!3d31.47!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sDHA+Phase+1+Lahore!5e0!3m2!1sen!2s!4v1234567890" width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Cafe Gameria Location" />
                </div>
              </div>
            </BlurFade>

            <BlurFade delay={0.2} inView>
              <div className="lg:col-span-2 card-surface rounded-xl p-6 flex flex-col">
                <div className="space-y-5 flex-1">
                  {[
                    { icon: MapPin, t: 'Location', d: 'DHA Phase 1, Lahore' },
                    { icon: Clock, t: 'Hours', d: 'Every Day: 5:00 PM – 6:00 AM' },
                    { icon: Phone, t: 'WhatsApp', d: '+92 306 929 6934' },
                  ].map(c => (
                    <div key={c.t} className="flex items-start gap-3">
                      <c.icon size={15} className="text-[#FF2D55] mt-0.5 flex-shrink-0" />
                      <div><div className="text-xs font-bold text-white">{c.t}</div><div className="text-xs text-[#71717A] mt-0.5">{c.d}</div></div>
                    </div>
                  ))}
                  <div className="flex items-start gap-3">
                    <IgIcon size={15} className="text-[#FF2D55] mt-0.5 flex-shrink-0" />
                    <div><div className="text-xs font-bold text-white">Instagram</div><div className="text-xs text-[#71717A] mt-0.5">@cafegameria</div></div>
                  </div>
                </div>
                <div className="mt-8 space-y-2.5">
                  <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full flex items-center justify-center gap-2 py-3.5 rounded-lg text-sm">Book on WhatsApp</a>
                  <a href={IG} target="_blank" rel="noopener noreferrer" className="btn-ghost w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-medium"><IgIcon size={13}/>Follow @cafegameria</a>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="mt-auto border-t border-white/[0.04] bg-[#09090B]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-[#FF2D55] flex items-center justify-center"><Gamepad2 size={10} className="text-white" /></div>
              <span className="text-xs font-extrabold tracking-wide">CAFE<span className="text-[#FF2D55]">GAMERIA</span></span>
            </div>
            <div className="flex items-center gap-5 text-[11px] text-[#52525B]">
              <a href="#zones" className="hover:text-white transition-colors">Zones</a>
              <a href="#games" className="hover:text-white transition-colors">Games</a>
              <a href="#specs" className="hover:text-white transition-colors">Specs</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>
            <div className="flex items-center gap-2">
              <a href={IG} target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded bg-white/[0.04] flex items-center justify-center text-[#52525B] hover:text-[#FF2D55] hover:bg-[#FF2D55]/10 transition-all"><IgIcon size={12}/></a>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded bg-white/[0.04] flex items-center justify-center text-[#52525B] hover:text-[#25D366] hover:bg-[#25D366]/10 transition-all"><Phone size={12}/></a>
            </div>
          </div>
          <div className="divider mt-6 mb-4" />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-1 mono text-[9px] text-[#27272A]">
            <span>© {new Date().getFullYear()} CAFE GAMERIA</span>
            <span>DHA PHASE 1, LAHORE</span>
          </div>
        </div>
      </footer>

      {/* ═══ WHATSAPP FLOAT ═══ */}
      <a href={WA} target="_blank" rel="noopener noreferrer" className="whatsapp-float w-12 h-12 rounded-full btn-whatsapp flex items-center justify-center shadow-xl" aria-label="WhatsApp"><Phone size={20}/></a>
    </div>
  )
}
