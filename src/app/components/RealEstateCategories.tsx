'use client';

import { useState } from "react";

export default function RealEstateCategories() {

	const [activeSection, setActiveSection] = useState('Tipos de Propriedades');

	return (
		<section className="flex justify-center items-center bg-white pt-8 pb-16 px-5">
			<div className="max-w-grid w-full flex justify-between flex-col  gap-12">

				<nav>
					<ul className="flex">
						<li><button onClick={() => setActiveSection('Tipos de Propriedades')} aria-label="Tipos de Propriedades" className={`py-3.5 px-4 text-gray z-10 relative cursor-pointer ${activeSection === 'Tipos de Propriedades' ? 'border-b-2 border-orange text-orange' : 'border-light-gray'}`}>Tipos de Propriedades</button></li>
						<li><button onClick={() => setActiveSection('Populares para Venda')} aria-label="Populares para Venda" className={`py-3.5 px-4 text-gray z-10 relative cursor-pointer ${activeSection === 'Populares para Venda' ? 'border-b-2 border-orange text-orange' : 'border-light-gray'}`}>Populares para Venda</button></li>
						<li><button onClick={() => setActiveSection('Populares para Locação')} aria-label="Populares para Locação" className={`py-3.5 px-4 text-gray z-10 relative cursor-pointer ${activeSection === 'Populares para Locação' ? 'border-b-2 border-orange text-orange' : 'border-light-gray'}`}>Populares para Locação</button></li>
					</ul>
					<hr className="border-light-gray -top-[1px] relative " />
				</nav>

				{activeSection === 'Tipos de Propriedades' && (
					<nav className="grid grid-cols-4 gap-12">
						<ul>
							<p className="font-bold text-gray font-sans text-base gap-4 leading-6 mb-4	">Alugar</p>
							<li><a className="text-sm text-gray leading-5 mb-3 hover:text-orange transition-colors flex" aria-label="Apartamentos">Apartamentos</a></li>
							<li><a className="text-sm text-gray leading-5 mb-3 hover:text-orange transition-colors flex" aria-label="Casas">Casas</a></li>
							<li><a className="text-sm text-gray leading-5 mb-3 hover:text-orange transition-colors flex" aria-label="Terrenos">Terrenos</a></li>
							<li><a className="text-sm text-gray leading-5 mb-3 hover:text-orange transition-colors flex" aria-label="Lojas">Lojas</a></li>
						</ul>
						<ul>
							<p className="font-bold text-gray font-sans text-base gap-4 leading-6 mb-4	">Comprar</p>
							<li><a className="text-sm text-gray leading-5 mb-3 hover:text-orange transition-colors flex" aria-label="Casas à venda">Casas à venda</a></li>
							<li><a className="text-sm text-gray leading-5 mb-3 hover:text-orange transition-colors flex" aria-label="Imóv. em Condomínios">Imóv. em Condomínios</a></li>
							<li><a className="text-sm text-gray leading-5 mb-3 hover:text-orange transition-colors flex" aria-label="Comprar terrenos">Comprar terrenos</a></li>
							<li><a className="text-sm text-gray leading-5 mb-3 hover:text-orange transition-colors flex" aria-label="Lançamentos">Lançamentos</a></li>
						</ul>
						<ul>
							<p className="font-bold text-gray font-sans text-base gap-4 leading-6 mb-4	">Comercial</p>
							<li><a className="text-sm text-gray leading-5 mb-3 hover:text-orange transition-colors flex" aria-label="imóveis com escritório">imóveis com escritório</a></li>
							<li><a className="text-sm text-gray leading-5 mb-3 hover:text-orange transition-colors flex" aria-label="Imóv. em Condomínios">Imóv. em Condomínios</a></li>
							<li><a className="text-sm text-gray leading-5 mb-3 hover:text-orange transition-colors flex" aria-label="Comprar terrenos">Comprar terrenos</a></li>
							<li><a className="text-sm text-gray leading-5 mb-3 hover:text-orange transition-colors flex" aria-label="Lançamentos">Lançamentos</a></li>
						</ul>
					</nav>
				)}

				{activeSection === 'Populares para Venda' && (
					<nav className="grid grid-cols-4 gap-12">
						<ul>
							<p className="font-bold text-gray font-sans text-base gap-4 leading-6 mb-4	">Comprar</p>
							<li><a className="text-sm text-gray leading-5 mb-3 hover:text-orange transition-colors flex" aria-label="Casas à venda">Casas à venda</a></li>
							<li><a className="text-sm text-gray leading-5 mb-3 hover:text-orange transition-colors flex" aria-label="Imóv. em Condomínios">Imóv. em Condomínios</a></li>
							<li><a className="text-sm text-gray leading-5 mb-3 hover:text-orange transition-colors flex" aria-label="Comprar terrenos">Comprar terrenos</a></li>
							<li><a className="text-sm text-gray leading-5 mb-3 hover:text-orange transition-colors flex" aria-label="Lançamentos">Lançamentos</a></li>
						</ul>
						<ul>
							<p className="font-bold text-gray font-sans text-base gap-4 leading-6 mb-4	">Alugar</p>
							<li><a className="text-sm text-gray leading-5 mb-3 hover:text-orange transition-colors flex" aria-label="Apartamentos">Apartamentos</a></li>
							<li><a className="text-sm text-gray leading-5 mb-3 hover:text-orange transition-colors flex" aria-label="Casas">Casas</a></li>
							<li><a className="text-sm text-gray leading-5 mb-3 hover:text-orange transition-colors flex" aria-label="Terrenos">Terrenos</a></li>
							<li><a className="text-sm text-gray leading-5 mb-3 hover:text-orange transition-colors flex" aria-label="Lojas">Lojas</a></li>
						</ul>

						<ul>
							<p className="font-bold text-gray font-sans text-base gap-4 leading-6 mb-4	">Comercial</p>
							<li><a className="text-sm text-gray leading-5 mb-3 hover:text-orange transition-colors flex" aria-label="Imóveis com escritório">Imóveis com escritório</a></li>
							<li><a className="text-sm text-gray leading-5 mb-3 hover:text-orange transition-colors flex" aria-label="Imóv. em Condomínios">Imóv. em Condomínios</a></li>
							<li><a className="text-sm text-gray leading-5 mb-3 hover:text-orange transition-colors flex" aria-label="Comprar terrenos">Comprar terrenos</a></li>
							<li><a className="text-sm text-gray leading-5 mb-3 hover:text-orange transition-colors flex" aria-label="Lançamentos">Lançamentos</a></li>
						</ul>
					</nav>
				)}

				{activeSection === 'Populares para Locação' && (
					<nav className="grid grid-cols-4 gap-12">
						<ul>
							<p className="font-bold text-gray font-sans text-base gap-4 leading-6 mb-4">Comercial</p>
							<li><a className="text-sm text-gray leading-5 mb-3 hover:text-orange transition-colors flex" aria-label="Imóveis com escritório">Imóveis com escritório</a></li>
							<li><a className="text-sm text-gray leading-5 mb-3 hover:text-orange transition-colors flex" aria-label="Imóv. em Condomínios">Imóv. em Condomínios</a></li>
							<li><a className="text-sm text-gray leading-5 mb-3 hover:text-orange transition-colors flex" aria-label="Comprar terrenos">Comprar terrenos</a></li>
							<li><a className="text-sm text-gray leading-5 mb-3 hover:text-orange transition-colors flex" aria-label="Lançamentos">Lançamentos</a></li>
						</ul>
						<ul>
							<p className="font-bold text-gray font-sans text-base gap-4 leading-6 mb-4">Comprar</p>
							<li><a className="text-sm text-gray leading-5 mb-3 hover:text-orange transition-colors flex" aria-label="Casas à venda">Casas à venda</a></li>
							<li><a className="text-sm text-gray leading-5 mb-3 hover:text-orange transition-colors flex" aria-label="Imóv. em Condomínios">Imóv. em Condomínios</a></li>
							<li><a className="text-sm text-gray leading-5 mb-3 hover:text-orange transition-colors flex" aria-label="Comprar terrenos">Comprar terrenos</a></li>
							<li><a className="text-sm text-gray leading-5 mb-3 hover:text-orange transition-colors flex" aria-label="Lançamentos">Lançamentos</a></li>
						</ul>
						<ul>
							<p className="font-bold text-gray font-sans text-base gap-4 leading-6 mb-4">Alugar</p>
							<li><a className="text-sm text-gray leading-5 mb-3 hover:text-orange transition-colors flex" aria-label="Apartamentos">Apartamentos</a></li>
							<li><a className="text-sm text-gray leading-5 mb-3 hover:text-orange transition-colors flex" aria-label="Casas">Casas</a></li>
							<li><a className="text-sm text-gray leading-5 mb-3 hover:text-orange transition-colors flex" aria-label="Terrenos">Terrenos</a></li>
							<li><a className="text-sm text-gray leading-5 mb-3 hover:text-orange transition-colors flex" aria-label="Lojas">Lojas</a></li>
						</ul>
					</nav>
				)}

			</div>
		</section>
	)
}