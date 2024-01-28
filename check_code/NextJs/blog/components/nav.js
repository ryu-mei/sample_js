import Link from "next/link";

export default function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link href="/about">About</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link href="/blog">Blog</Link>
                </li>
            </ul>
        </nav>
    )
}