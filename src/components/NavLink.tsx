import Link from "next/link";

export function NavLink({ href, children, cb, className }: { href: string; children: React.ReactNode, cb?: () => void, className?: string }) {
console.log('href:', href)

    return (
        <Link onClick={cb} href={href} className={className}>
            {children}
        </Link>
    )
}