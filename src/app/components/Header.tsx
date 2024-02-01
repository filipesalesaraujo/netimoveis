import Image from "next/image";
import Link from "next/link";

import logoOrange from "../../../public/images/logo-orange.svg";

export default function Header() {
	return (
		<header className="flex justify-center items-center bg-white py-2.5 px-5">
			<div className="max-w-grid w-full flex justify-between items-center gap-12">

				<Link href="/" className="hover:opacity-80 transition-opacity">
					<Image width={169} height={42} src={logoOrange} alt="" />
				</Link>

				<nav className="flex justify-between items-center w-full">
					<ul className="flex justify-center items-center gap-10	">
						<li>
							<a className="text-[#555555] text-base hover:text-orange transition-colors">Imobiliárias</a>
						</li>
						<li>
							<a className="text-[#555555] text-base hover:text-orange transition-colors">Quero me Associar</a>
						</li>
						<li>
							<a className="text-[#555555] text-base hover:text-orange transition-colors">Sobre</a>
						</li>
						<li>
							<a className="text-[#555555] text-base hover:text-orange transition-colors">Blog</a>
						</li>
					</ul>

					<ul className="flex justify-center items-center gap-8">
						<li>
							<a className="text-[#652D91] text-base border border-[#652D91] py-1 px-4 rounded-[60px] hover:text-orange hover:border-orange  transition-colors">Anunciar Imóvel</a>
						</li>

						<li>
							<a className="text-[#555555] text-base hover:text-orange transition-colors">Entrar</a>
						</li>
					</ul>

				</nav>

			</div>




		</header>
	)
}