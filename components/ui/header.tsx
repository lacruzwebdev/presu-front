import { getSiteSettings } from '@/app/lib/getData'
import { getImageUrl } from '@/app/lib/utils'

export default async function Header() {
  const { logo } = await getSiteSettings()
  const logoUrl = getImageUrl(logo.formats.thumbnail.url)
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-xl lg:max-w-[calc(50%+theme(maxWidth.xl))] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4 lg:fixed">
            {/* Logo */}

            <img
              width={logo.formats.thumbnail.width}
              height={logo.formats.thumbnail.height}
              alt="Logo"
              src={logoUrl}
              className="max-h-16 w-auto"
            />
          </div>

          {/* Right side */}
          <div className="flex grow justify-end">
            {/* Light switch */}
            {/* <ThemeToggle /> */}
          </div>
        </div>
      </div>
    </header>
  )
}
