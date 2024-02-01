import Image from "next/image";
import Link from "next/link";

import logoWhite from "../../../public/images/logo-white.svg";

import iconInstagram from "../../../public/images/icon-instagram.svg";
import iconFacebook from "../../../public/images/icon-facebook.svg";
import iconYoutube from "../../../public/images/icon-youtube.svg";
import iconLinkedin from "../../../public/images/icon-linkedin.svg";

import downloadAppStore from "../../../public/images/download-app-store.svg";
import downloadGooglePlay from "../../../public/images/download-google-play.svg";

export default function Footer() {
	return (
		<footer>
			<div className="flex justify-center items-center bg-[#EDF1F4] py-12 px-5">
				<div className="max-w-grid w-full ">
					<nav className="grid grid-cols-4 gap-12">
						<ul>
							<p className="font-bold text-base text-blue mb-6">A Netimóveis</p>
							<li><a aria-label="Quem somos" className="text-gray text-base mb-3 leading-6 flex hover:text-orange transition-colors">Quem somos</a></li>
							<li><a aria-label="Como funciona" className="text-gray text-base mb-3 leading-6 flex hover:text-orange transition-colors">Como funciona</a></li>
							<li><a aria-label="Seja um parceiro" className="text-gray text-base mb-3 leading-6 flex hover:text-orange transition-colors">Seja um parceiro</a></li>
							<li><a aria-label="Quero me associar" className="text-gray text-base mb-3 leading-6 flex hover:text-orange transition-colors">Quero me associar</a></li>
							<li><a aria-label="Acessoria de imprensa" className="text-gray text-base mb-3 leading-6 flex hover:text-orange transition-colors">Acessoria de imprensa</a></li>
							<li><a aria-label="Soluções Corporativas" className="text-gray text-base mb-3 leading-6 flex hover:text-orange transition-colors">Soluções Corporativas</a></li>
							<li><a aria-label="Covid-19" className="text-gray text-base mb-3 leading-6 flex hover:text-orange transition-colors">Covid-19</a></li>
						</ul>

						<ul>
							<p className="font-bold text-base text-blue mb-6">Recursos</p>
							<li><a aria-label="Comprar" className="text-gray text-base mb-3 leading-6 flex hover:text-orange transition-colors">Comprar</a></li>
							<li><a aria-label="Alugar" className="text-gray text-base mb-3 leading-6 flex hover:text-orange transition-colors">Alugar</a></li>
							<li><a aria-label="Lançamentos" className="text-gray text-base mb-3 leading-6 flex hover:text-orange transition-colors">Lançamentos</a></li>
							<li><a aria-label="Anunciar Imóvel" className="text-gray text-base mb-3 leading-6 flex hover:text-orange transition-colors">Anunciar Imóvel</a></li>
							<li><a aria-label="Simular Financiamento" className="text-gray text-base mb-3 leading-6 flex hover:text-orange transition-colors">Simular Financiamento</a></li>
							<li><a aria-label="Imobiliárias" className="text-gray text-base mb-3 leading-6 flex hover:text-orange transition-colors">Imobiliárias</a></li>
							<li><a aria-label="Blog" className="text-gray text-base mb-3 leading-6 flex hover:text-orange transition-colors">Blog</a></li>
						</ul>

						<ul>
							<p className="font-bold text-base text-blue mb-6">Contato</p>
							<li><a aria-label="Fale Conosco" className="text-gray text-base mb-3 leading-6 flex hover:text-orange transition-colors">Fale Conosco</a></li>
							<li><a aria-label="Perguntas Frequentes" className="text-gray text-base mb-3 leading-6 flex hover:text-orange transition-colors">Perguntas Frequentes</a></li>
							<li><a aria-label="Suporte" className="text-gray text-base mb-3 leading-6 flex hover:text-orange transition-colors">Suporte</a></li>
						</ul>

						<ul>
							<p className="font-bold text-base text-blue mb-6">Nossos Aplicativos</p>
							<li><a aria-label="Loc Fácil Netimóveis" className="text-gray text-base mb-3 leading-6 flex hover:text-orange transition-colors">Loc Fácil Netimóveis</a></li>
							<li><a aria-label="Pro Imob Netimóveis" className="text-gray text-base mb-6 leading-6 flex hover:text-orange transition-colors">Pro Imob Netimóveis</a></li>
							<div className="flex gap-2">
								<a href="/" aria-label="Download na App Store" className="hover:opacity-80 transition-opacity">
									<Image src={downloadAppStore} alt="Download na App Store" />
								</a>
								<a href="/" aria-label="Download no Google Play" className="hover:opacity-80 transition-opacity">
									<Image src={downloadGooglePlay} alt="Download no Google Play" />
								</a>
							</div>
						</ul>
					</nav>
				</div>
			</div>
			<div className="flex justify-center items-center bg-orange py-2.5 px-5">
				<div className="max-w-grid w-full flex justify-between items-center gap-12">
					<Link href="/" aria-label="Home" className="hover:opacity-80 transition-opacity">
						<Image src={logoWhite} alt="Logo da Netimóveis" />
					</Link>
					<div className="flex flex-col gap-2 justify-center items-center">
						<p className="text-xs text-white">© Copyright 2021 Netimóveis Brasil SA. Todos os direitos reservados.</p>
						<nav>

							<ul className="flex justify-center items-center gap-6">
								<li>
									<a href="https://www.netimoveis.com/politica-privacidade" target="_blank" aria-label="Política de privacidade" className="text-xs text-white hover:opacity-80 transition-opacity">Política de privacidade </a>
								</li>
								<li>
									<a href="https://www.netimoveis.com/termos-de-uso" target="_blank" aria-label="Termos de uso" className="text-xs text-white hover:opacity-80 transition-opacity">Termos de uso</a>
								</li>
								<li>
									<a href="https://www.netimoveis.com/lei-geral-de-protecao-de-dados" target="_blank" aria-label="LGPD" className="text-xs text-white hover:opacity-80 transition-opacity">LGPD</a>
								</li>
								<li><span className="text-xs text-white">Versão: 25/10/2021</span></li>
							</ul>
						</nav>
					</div>
					<nav>
						<ul className="flex gap-8">
							<li>
								<a href="https://www.instagram.com/netimoveis/" target="_blank" aria-label="Instagram" className="hover:opacity-80 transition-opacity">
									<Image width={32} height={32} src={iconInstagram} alt="Instagram" />
								</a>
							</li>
							<li>
								<a href="https://www.facebook.com/privacy/consent/inline/?flow=acv_fb_consent_debut_blocking&source=fb_1st_time_3pd_consent_flow" target="_blank" aria-label="Facebook" className="hover:opacity-80 transition-opacity">
									<Image width={32} height={32} src={iconFacebook} alt="Facebook" />
								</a>
							</li>
							<li>
								<a href="https://www.linkedin.com/company/netimoveis/" target="_blank" aria-label="LinkedIn" className="hover:opacity-80 transition-opacity">
									<Image width={32} height={32} src={iconLinkedin} alt="LinkedIn" />
								</a>
							</li>
							<li>
								<a href="https://www.youtube.com/user/redenetimoveisbr" target="_blank" aria-label="YouTube" className="hover:opacity-80 transition-opacity">
									<Image width={32} height={32} src={iconYoutube} alt="YouTube" />
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</footer>
	)
}