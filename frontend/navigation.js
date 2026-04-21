import {
  IconCalendarWeek,
  IconBuildings,
  IconChartPie3,
  IconWorldMap,
  IconInfoCircle,
  IconHome,
  IconTag,
  IconPlane
} from '@tabler/icons-vue'

export default [
  { name: 'Str. główna', route: 'home', icon: IconHome, section: 'home' },
  { name: 'Kalendarz', route: 'calendar', icon: IconCalendarWeek, section: 'calendar' },
  { name: 'Państwa', route: 'countries', icon: IconWorldMap, section: 'countries' },
  { name: 'Miasta', route: 'cities', icon: IconBuildings, section: 'cities' },
  { name: 'Wycieczki', route: 'trips', icon: IconPlane, section: 'trips' },
  { name: 'Tagi', route: 'tags', icon: IconTag, section: 'tags' },
  { name: 'Statystyki', route: 'statistics', icon: IconChartPie3, section: 'statistics' },
  { name: 'O nas', route: 'about', icon: IconInfoCircle, section: 'about' }
]
