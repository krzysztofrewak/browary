import {
  CalendarIcon,
  GlobeIcon,
  HomeIcon, PresentationChartLineIcon,
  QuestionMarkCircleIcon,
  TagIcon,
  TicketIcon
} from '@heroicons/vue/outline/esm'

export default [
  { name: 'Str. główna', route: 'home', icon: HomeIcon, section: 'home' },
  { name: 'Kalendarz', route: 'calendar', icon: CalendarIcon, section: 'calendar' },
  { name: 'Odwiedzone państwa', route: 'countries', icon: GlobeIcon, section: 'countries' },
  { name: 'Wycieczki', route: 'trips', icon: TicketIcon, section: 'trips' },
  { name: 'Tagi browarów', route: 'home', icon: TagIcon, section: 'tags' },
  { name: 'O nas', route: 'about', icon: QuestionMarkCircleIcon, section: 'about' },
  { name: 'Statystyki', route: 'home', icon: PresentationChartLineIcon, section: 'statistics' }
]
