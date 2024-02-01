import Image from "next/image";
import Link from "next/link";

import logoWhite from "../../../public/images/logo-white.svg";

import iconInstagram from "../../../public/images/icon-instagram.svg";
import iconFacebook from "../../../public/images/icon-facebook.svg";
import iconYoutube from "../../../public/images/icon-youtube.svg";
import iconLinkedin from "../../../public/images/icon-linkedin.svg";

export default function Footer() {
	return (
		<footer className="flex justify-center items-center bg-orange py-2.5 px-5">
			<div className="max-w-grid w-full flex justify-between items-center gap-12">
				<Link href="/">
					<Image src={logoWhite} alt="" />
				</Link>

				<div className="flex flex-col gap-2 justify-center items-center">
					<p className="text-xs text-white">© Copyright 2021 Netimóveis Brasil SA. Todos os direitos reservados.</p>
					<ul className="flex justify-center items-center gap-6">
						<li>
							<a href="https://www.netimoveis.com/politica-privacidade" target="_blank" className="text-xs text-white hover:opacity-80 transition-opacity">Política de privacidade </a>
						</li>

						<li>
							<a href="https://www.netimoveis.com/termos-de-uso" target="_blank" className="text-xs text-white hover:opacity-80 transition-opacity">Termos de uso</a>
						</li>

						<li>
							<a href="https://www.netimoveis.com/lei-geral-de-protecao-de-dados" target="_blank" className="text-xs text-white hover:opacity-80 transition-opacity">LGPD</a>
						</li>

						<li><span className="text-xs text-white">Versão: 25/10/2021</span></li>

					</ul>
				</div>

				<ul className="flex gap-8	">
					<li>
						<a href="https://www.instagram.com/netimoveis/" target="_blank" className="hover:opacity-80 transition-opacity">
							<Image width={32} height={32} src={iconInstagram} alt="" />
						</a>
					</li>
					<li>
						<a href="https://www.facebook.com/privacy/consent/inline/?flow=acv_fb_consent_debut_blocking&source=fb_1st_time_3pd_consent_flow" target="_blank" className="hover:opacity-80 transition-opacity">
							<Image width={32} height={32} src={iconFacebook} alt="" />
						</a>
					</li>
					<li>
						<a href="https://www.linkedin.com/company/netimoveis/" target="_blank" className="hover:opacity-80 transition-opacity">
							<Image width={32} height={32} src={iconLinkedin} alt="" />
						</a>
					</li>
					<li>
						<a href="https://www.youtube.com/user/redenetimoveisbr" target="_blank" className="hover:opacity-80 transition-opacity" >
							<Image width={32} height={32} src={iconYoutube} alt="" />
						</a>
					</li>

				</ul>

			</div>
		</footer>
	)
}