import Image from 'next/image'
import imageBePartOf from '../../../public/images/image-be-part-of.webp'

export default function BePartOf() {
    return (
        <section className="flex justify-center items-center bg-white pt-28 pb-16 px-5 flex-col">
            <article className="max-w-grid w-full flex bg-dark-blue rounded-[16px] overflow-hidden gap-5">

                <div className='my-10 ml-16 flex flex-col items-start'>
                    <p className='text-white text-sm py-1 px-4 rounded-[20px] border border-orange mb-4'>Para Empresas</p>
                    <h1 className='text-white font-bold leading-10 text-[34px] mb-6'>Faça parte da Netimóveis</h1>
                    <p className='text-light-gray text-xl leading-7 mb-10'>É uma empresa ou rede de imobiliárias? Associe-se e alcance um próximo patamar de eficiência e tecnologia.</p>
                    <div className='flex gap-10 items-center'>
                        <a href='' aria-label="Mais sobre se associar" className='font-semibold text-orange text-base leading-6	bg-white py-3 px-4 rounded-[10px] hover:opacity-80 transition-opacity'>Mais Sobre se Associar</a>
                        <a href='' aria-label="Conheça nossos produtos" className='text-white text-sm border-b border-light-gray leading-5 pb-0.5 hover:opacity-80 transition-opacity'>Conheça Nossos Produtos</a>
                    </div>
                </div>
                <Image  src={imageBePartOf} alt='Imagem representativa da Netimóveis' />
            </article>
            <div className="bg-gradiente-be-part-of h-[96px] w-full"></div>
        </section>
    )
}