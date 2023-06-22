import Image from 'next/image'
import Code from 'assets/images/code.png'
import Code2 from 'assets/images/code2.png'
import Code3 from 'assets/images/code3.png'
import Code4 from 'assets/images/code4.png'
import Code5 from 'assets/images/code5.png'

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="animated-background px-10 py-10">
        <div className="flex justify-center items-center h-96">
          <div className="typewriter">
            <h1 className="font-bold">
              Próximo Lanzamiento de nuestra página web...
            </h1>
          </div>
        </div>

        <section>
          <section className='flex gap-4 flex-wrap'>

            
            <div className="border-white border-2 border-solid p-5">
              <h2 className="text-lg">Información del curso</h2>
              <article className="flex justify-center gap-4 py-5 flex-wrap">
                <article className="max-w-xs">
                  <Image src={Code} alt="computer with code"/>
                </article>
                <article className="max-w-xs">
                  <Image src={Code4} alt="computer with code"/>
                </article>
              </article>
            </div>

            <div className="border-white border-2 border-solid p-5">
              <h2 className="text-lg">Horarios</h2>
              <article className="flex justify-around py-5 gap-4 flex-wrap">
                <article className="max-w-xs">
                  <Image src={Code2} alt="computer with code"/>
                </article>
                <article className="max-w-xs">
                  <Image src={Code3} alt="computer with code"/>
                </article>
                <article className="max-w-xs">
                  <Image src={Code5} alt="computer with code"/>
                </article>
              </article>
            </div>
          </section>
        </section>
{/* 
        <section>
          <div className="flex justify-around">
            <article className="border-black border-solid border-2 rounded-2xl bg-white w-80 overflow-hidden pl-10">
              <Image src={Web} alt="computer with code"/>
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-violet-800 h-40 my-2 rounded-bl-lg cone-lb grow col-span-2"></div>
                <div className="bg-violet-800 h-40 my-2 rounded-bl-lg cone-rt grow col-span-1"></div>
              </div>
            </article>
            <article className="border-black border-solid border-2 rounded-2xl bg-white w-80 overflow-hidden pl-10">
              <Image src={Web} alt="computer with code"/>
            </article>
            <article className="border-black border-solid border-2 rounded-2xl bg-white w-80 overflow-hidden pl-10">
              <Image src={Web} alt="computer with code"/>
            </article>
            <article className="border-black border-solid border-2 rounded-2xl bg-white w-80 overflow-hidden pl-10">
              <Image src={Web} alt="computer with code"/>
            </article>
          </div>
        </section> */}
      </section>
    </main>
  )
}
