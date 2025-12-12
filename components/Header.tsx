import Header2 from "./mvpblocks/header-2";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "Beranda", href: "/#beranda" },
  { name: "Tentang", href: "/#tentang" },
  { name: "Anggota", href: "/#anggota" },
  { name: "Galeri", href: "/#galeri" },
  { name: "Aktivitas", href: "/aktivitas" },
  { name: "Kontak", href: "/#kontak" },
];

export default function Header() {
  return <Header2 navItems={navItems} />;
}
