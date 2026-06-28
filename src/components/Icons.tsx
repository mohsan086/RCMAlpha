const iconProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  fill: '#1d951b',
  'aria-hidden': true,
}

export const ICONS = {
  trophy: (
    <svg {...iconProps}>
      <path d="M7 3h10v2H7V3zm-2 4v3a5 5 0 005 5h2a5 5 0 005-5V7h-2v3a3 3 0 01-3 3h-2a3 3 0 01-3-3V7H5z" />
      <path d="M6 17h12v2H6v-2z" />
    </svg>
  ),
  brain: (
    <svg {...iconProps}>
      <path d="M12 2a5 5 0 00-5 5v1H6a4 4 0 000 8h1v1a5 5 0 0010 0v-1h1a4 4 0 000-8h-1V7a5 5 0 00-5-5z" />
      <path d="M8 9H6a2 2 0 012-2v2zm4-4a3 3 0 013 3h-3V5zm0 4h4a2 2 0 01-2 2v-2zM8 13a3 3 0 01-3-3h3v3z" />
    </svg>
  ),
  laptop: (
    <svg {...iconProps}>
      <path d="M4 5h16v10H4V5zm0 12h16v2H4v-2z" />
    </svg>
  ),
  chart: (
    <svg {...iconProps}>
      <path d="M4 17h16v2H4v-2z" />
      <path d="M8 13h2v6H8v-6zm4-4h2v10h-2V9zm4 2h2v8h-2v-8z" />
    </svg>
  ),
  users: (
    <svg {...iconProps}>
      <path d="M7 10a3 3 0 016 0v1H7v-1zm8 0a2 2 0 114 0 2 2 0 01-4 0z" />
      <path d="M4 18v-1a3 3 0 013-3h6a3 3 0 013 3v1H4z" />
    </svg>
  ),
  rocket: (
    <svg {...iconProps}>
      <path d="M7 17l3-3 4 4-3 3-4-4zm8.5-5.5l2.5-2.5-1.5-1.5-2.5 2.5 1.5 1.5z" />
      <path d="M12 2c-1.1 0-2 .9-2 2v4.1L6.5 12.6c-.4.4-.4 1 0 1.4l2.9 2.9 4.9-4.9V4c0-1.1-.9-2-2-2z" />
    </svg>
  ),
  clock: (
    <svg {...iconProps}>
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 11h4v2h-6V7h2v6z" />
    </svg>
  ),
  globe: (
    <svg {...iconProps}>
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z" />
      <path d="M12 4a15.04 15.04 0 00-1.3 7.4h2.6A15.04 15.04 0 0012 4zm-7.3 8a15.16 15.16 0 0114.6 0 15.16 15.16 0 01-14.6 0z" />
    </svg>
  ),
  medal: (
    <svg {...iconProps}>
      <path d="M12 2a5 5 0 100 10 5 5 0 000-10zm3 12.5l2 5H9l2-5h4z" />
    </svg>
  ),
  briefcase: (
    <svg {...iconProps}>
      <path d="M6 7V6a2 2 0 012-2h8a2 2 0 012 2v1h2v12H4V7h2zm2 0h8V6H8v1z" />
    </svg>
  ),
  hospital: (
    <svg {...iconProps}>
      <path d="M6 4h12v16H6V4zm9 9h-2v2h-2v-2H9v-2h2V9h2v2h2v2z" />
    </svg>
  ),
  clipboard: (
    <svg {...iconProps}>
      <path d="M7 3h10a2 2 0 012 2v2H5V5a2 2 0 012-2z" />
      <path d="M6 7h12v14H6V7zm6 2a2 2 0 100 4 2 2 0 000-4z" />
    </svg>
  ),
  target: (
    <svg {...iconProps}>
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 4a6 6 0 110 12 6 6 0 010-12zm0 2a4 4 0 100 8 4 4 0 000-8z" />
    </svg>
  ),
  phone: (
    <svg {...iconProps}>
      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l1.77-1.77a1 1 0 011.11-.21c1.2.48 2.5.74 3.84.74a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h2.5a1 1 0 011 1c0 1.34.26 2.64.74 3.84a1 1 0 01-.21 1.11L6.62 10.8z" />
    </svg>
  ),
  mail: (
    <svg {...iconProps}>
      <path d="M4 6h16v12H4V6zm8 5l6-4H6l6 4zm0 2l-6-4v8h12v-8l-6 4z" />
    </svg>
  ),
  location: (
    <svg {...iconProps}>
      <path d="M12 2C8.13 2 5 5.13 5 9c0 4.66 5.15 11.2 6.24 12.46a1 1 0 001.52 0C13.85 20.2 19 13.66 19 9c0-3.87-3.13-7-7-7zm0 11.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
    </svg>
  ),
} as const

export type IconName = keyof typeof ICONS
