import {
  CalendarIcon,
  GlobeIcon,
  HomeIcon,
  OfficeBuildingIcon,
  PresentationChartLineIcon,
  QuestionMarkCircleIcon,
  TagIcon,
  TicketIcon
} from '@heroicons/vue/outline/esm'

export default [
  { name: 'Str. główna', route: 'home', icon: HomeIcon, section: 'home' },
  { name: 'Kalendarz', route: 'calendar', icon: CalendarIcon, section: 'calendar' },
  { name: 'Odwiedzone państwa', route: 'countries', icon: GlobeIcon, section: 'countries' },
  { name: 'Miasta', route: 'cities', icon: OfficeBuildingIcon, section: 'cities' },
  { name: 'Wycieczki', route: 'trips', icon: TicketIcon, section: 'trips' },
  { name: 'Tagi browarów', route: 'tags', icon: TagIcon, section: 'tags' },
  { name: 'Statystyki', route: 'statistics', icon: PresentationChartLineIcon, section: 'statistics' },
  { name: 'O nas', route: 'about', icon: QuestionMarkCircleIcon, section: 'about' }
]
