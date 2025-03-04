import { IconButton } from '@/components/icon-button'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import {
  BadgeCheck,
  Copy,
  Icon,
  Link,
  Medal,
  MousePointerClick,
} from 'lucide-react'
import Image from 'next/image'

import logo from '../../assets/logo.svg'
import cooper from '../../assets/medal-cooper.svg'
import gold from '../../assets/medal-gold.svg'
import silver from '../../assets/medal-silver.svg'

export default function InvitePage() {
  return (
    <div className="min-h-dvh flex items-center justify-between gap-16 md:flex">
      <div className="flex flex-col gap-10 w-full max-w-[550px]">
        <Image src={logo} alt="Suggestify" width={108.5} height={30} />

        <div className="space-y-2">
          <h1 className="text-4xl font-semibold font-heading text-gray-100 leading-none">
            Subscription confirmed !
          </h1>
          <p className="text-gray-300">
            To enter the event, access the link sent to your email.
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
              Invite and earn rewards.
            </h2>
            <p className="text-gray-300">
              Invite more people to the event and enter to win exclusive prizes!
              Just share the link!
            </p>
          </div>

          <InputRoot>
            <InputIcon>
              <Link className="size-5" />
            </InputIcon>

            <InputField
              readOnly
              defaultValue="http://localhost:3000/invite/122324352342334"
            />

            <IconButton className="-mr-2">
              <Copy className="size-5" />
            </IconButton>
          </InputRoot>

          <div className="grid gap-3 md:grid-cols-3">
            <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl">
              <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                1042
              </span>
              <span className="text-sm text-gray-300 leading-none text-center">
                Link Access
              </span>

              <MousePointerClick className="size-5 text-purple absolute top-3 left-3" />
            </div>

            <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl">
              <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                1042
              </span>
              <span className="text-sm text-gray-300 leading-none text-center">
                Subscriptions
              </span>

              <BadgeCheck className="size-5 text-purple absolute top-3 left-3" />
            </div>

            <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl">
              <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                3rd
              </span>
              <span className="text-sm text-gray-300 leading-none text-center">
                Ranking Position
              </span>

              <Medal className="size-5 text-purple absolute top-3 left-3" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[440px] space-y-5">
        <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
          Referral Ranking
        </h2>

        <div className="space-y-4">
          <div className="relative rounded-xl bg-gray-700 border-gray-600 p-6 flex flex-col justify-center gap-3">
            <span className="text-sm text-gray-300 leading-none">
              <span className="font-semibold">1st</span> | John Connor
            </span>

            <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
              1030
            </span>

            <Image src={gold} alt="" className="absolute top-0 right-8" />
          </div>

          <div className="relative rounded-xl bg-gray-700 border-gray-600 p-6 flex flex-col justify-center gap-3">
            <span className="text-sm text-gray-300 leading-none">
              <span className="font-semibold">2nd</span> | John Connor
            </span>
            <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
              1030
            </span>
            <Image src={silver} alt="" className="absolute top-0 right-8" />
          </div>

          <div className="relative rounded-xl bg-gray-700 border-gray-600 p-6 flex flex-col justify-center gap-3">
            <span className="text-sm text-gray-300 leading-none">
              <span className="font-semibold">3rd</span> | John Connor
            </span>
            <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
              1030
            </span>
            <Image src={cooper} alt="" className="absolute top-0 right-8" />
          </div>
        </div>
      </div>
    </div>
  )
}
