import Image from 'next/image'

import { Button } from '@/components/button'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import { ArrowRight, Mail, Radio, User } from 'lucide-react'
import logo from '../assets/logo.svg'

export default function Home() {
  return (
    <main className="max-w-[1240px] mx-auto px-5 py-8 md:py-0">
      <div className="min-h-dvh flex flex-col justify-center gap-16">
        <div className="flex flex-col gap-8 items-center md:items-start">
          <Image src={logo} alt="Suggestify" width={108.5} height={30} />

          <h1 className="text-4xl text-center leading-none font-heading font-medium flex flex-col md:text-7xl md:text-left">
            <span className="text-blue"> CodeCraft</span> Summit 2025
          </h1>
        </div>

        <div className="flex gap-5 items-stretch flex-col md:flex-row">
          <div className="flex-1 bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="font-heading font-semibold text-gray-200 text-xl">
                About the event
              </h2>
              <span className="text-purple font-semibold text-xs flex items-center gap-2">
                <Radio className="size-5" />
                LIVE
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              An event made by and for developers passionate about creating
              innovative solutions and sharing knowledge. Let's dive into the
              latest trends in software development, system architecture, and
              emerging technologies with talks, workshops, and hackathons.
              <br />
              <br />
              March 15 to 17 | 6 PM to 9 PM | Online and Free
            </p>
          </div>
          <form className="bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full md:max-w-[440px]">
            <h2 className="font-heading font-semibold text-gray-200 text-xl">
              Sign Up
            </h2>

            <div className="space-y-3">
              <InputRoot>
                <InputIcon>
                  <User />
                </InputIcon>
                <InputField type="text" placeholder="Full Name" />
              </InputRoot>

              <InputRoot>
                <InputIcon>
                  <Mail />
                </InputIcon>
                <InputField type="email" placeholder="E-mail" />
              </InputRoot>
            </div>

            <Button type="submit">
              Confirm
              <ArrowRight />
            </Button>
          </form>
        </div>
      </div>
    </main>
  )
}
