import { formatAmount } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BankCard = ({
    account,
    showBalance=true,
    userName,
}: CreditCardProps) => {
  return (
    <div className="flex flex-col">
      <Link href="/" className="bank-card">
        <div className="bank-card_content">
          <div>
            <h1 className="text-16 text-white font-semibold">
              {account.name || userName}
            </h1>
            <p className="font-ibm-plex-serif text-white font-black">
              {formatAmount(account.currentBalance)}
            </p>
          </div>
          <article className="flex flex-col gap-2">
            <div className="flex justify-between">
              <h1 className="text-12 text-white font-semibold">
                {userName}
              </h1>
              <h1 className="text-12 text-white font-semibold">
              &#9679;&#9679; / &#9679;&#9679;
              </h1>
            </div>
            <p className="text-14 font-semibold tracking-[1.1px] text-white">
              &#9679;&#9679;&#9679;&#9679; &#9679;&#9679;&#9679;&#9679; &#9679;&#9679;&#9679;&#9679; <span className="text-16">1234</span>
            </p>
          </article>
        </div>

        <div className="bank-card_icon">
          <Image 
            src="/icons/Paypass.svg"
            height={24}
            width={20}
            alt="Paypass icon"
            />
          <Image
            src="/icons/mastercard.svg"
            height={32}
            width={45}
            alt="mastercard icon"
            className="ml-5"
             />
        </div>
        <Image 
          src="/icons/lines.png"
          width={316}
          height={190}
          alt="lines"
          className="absolute top-0 left-0"
        />
      </Link>
    </div>
  )
}

export default BankCard