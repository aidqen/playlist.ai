import Link from 'next/link'

export function NavLink({
  href,
  children,
  cb,
  className,
}: {
  href: string
  children: React.ReactNode
  cb?: any
  className?: string
}) {
  return (
    <div onClick={cb}>
      <Link href={href} className={className}>
        {children}
      </Link>
    </div>
  )
}
