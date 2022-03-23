/* eslint-disable prettier/prettier */
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Arena from './icons/svg/SVGArena'

export default function MyModal6() {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return(
    <>
      <div className="inset-0 flex flex-col items-center justify-center">
      <div className=" mx-auto -mt-[6vh] flex flex-col w-full items-center justify-start px-12 md:absolute md:-mt-40 md:w-4/12">
      <button
                typ1e="button"
                className="inline-flex flex-col items-center justify-center rounded-lg border border-transparent bg-orange-600 hover:bg-orange-500 px-4 py-2 font-sans text-xl font-medium text-gray-100 hover:bg-orange-700- focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 md:text-4xl lg:mb-6"
              >
                <svg className="w-16 h-16" fill="#ffffff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                <a className="ui btn" href="mailto:rettungsanker-freiburg@gmx.de?Subject=Enquiry">
                Reservationen</a>
              </button>
              <div className=''>
           
              </div>
                 </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-slate-500/75" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >

            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-7xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-gray-800 bg-opacity-100 border border-white shadow-xl rounded-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="#797979">
  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
</svg>
                <Dialog.Title
                  as="h3"
                  className="ml-3 headingA inline mt-16 lg:text-stroke-11 text-[2rem] text-center font-bold leading-6 text-yellow-600 md:text-6xl lg:mt-24 lg:text-5xl"
                >
                  Tisch - Reservation
                </Dialog.Title>

                <div className="mt-2 lg:mt-1 ">
                  <p className="newspaper text-lg text-white 2xl:text-4xl heading-0">
                    U1nsere Sportarena{' '}
                    <Arena className="inline h-36 w-36"></Arena> mit
                    regelmässigen Live-Übertragungen der Fussball-Bundesliga
                    erfreut sich immer grösserer Beliebtheit. Insbesondere zu den
                    Topspielen des SC Freiburg empfehlen wir eine
                    Tischreservation.
                    <br />
                    <br /> Mit unserem neuen Booking Tool sichern Sie sich die
                    besten Plätze in der "ersten Reihe" der Fussball-Arena Wir
                    freuen uns auf spannende, torreiche Spiele...!!!
                    <br />
                    <br />
                    Ihr Team Rettungsanker
                  </p>
                </div>
                <div className="mt-5 flex flex-row justify-evenly gap-5 ">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-xl md:text-5xl font-medium font-sans text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 lg:mb-6"
                    onClick={closeModal}
                  >
                    zurück
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-xl md:text-5xl font-medium font-sans text-blue-900 bg-orange-300 border border-transparent rounded-md hover:bg-orange-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 lg:mb-6"
                    onClick={closeModal}
                  >
                    Tischreservation
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
