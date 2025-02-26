import React from 'react'

function InputBox({label,amount,className="",onAmountChange,onCurrencyChange,
currencyOptions=[],selectCurrency="usd",amountDisable=false,currencyDisable=false
}) {
 
  return (
    <div className={`bg-zinc-500 p-3 rounded-lg text-sm flex ${className}`}>
      <div className='w-1/2'>
        <label className='text-black/60 mb-2 inline-block'>{label}</label>
        <input type="number" 
          className='outline-none w-full rounded-lg py-2 dark:bg-gray-300/75 '
          placeholder='Amount'
          disabled={amountDisable} 
          value={amount}
          onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
          />
      </div>
      <div className='w-1/2 flex flex-wrap justify-end text-right'>
        <p className='text-black/60 mb-2 w-full'>Currency Type</p>
        <select 
          className='rounded-lg px-1 py-1 bg-gray-200 cursor-pointer outline-none'
          value={selectCurrency}
          onChange={(e)=>onCurrencyChange && onCurrencyChangee.target.value}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency)=>(
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>

      </div>
    </div>
  )
}

export default InputBox;