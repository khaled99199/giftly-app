'use client'
import React, { useState } from 'react'

const mockGifts = [
  { id: 1, name: 'سوار ذهبي بسيط', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'قلادة حجر كريم', image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'خاتم فضي أنيق', image: 'https://via.placeholder.com/150' }
]

export default function Home() {
  const [selectedGift, setSelectedGift] = useState(null)
  const [step, setStep] = useState<'select' | 'address' | 'done'>('select')
  const [address, setAddress] = useState('')

  const handleSubmit = () => {
    if (selectedGift && address) {
      setStep('done')
    }
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      {step === 'select' && (
        <div>
          <h2 className="text-2xl mb-4">🎁 اختر هديتك</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {mockGifts.map((gift) => (
              <div
                key={gift.id}
                className={`border p-2 rounded cursor-pointer ${
                  selectedGift?.id === gift.id ? 'border-blue-500' : ''
                }`}
                onClick={() => setSelectedGift(gift)}
              >
                <img src={gift.image} alt={gift.name} className="w-full h-24 object-cover mb-2" />
                <div className="text-center">{gift.name}</div>
              </div>
            ))}
          </div>
          <button
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-40"
            disabled={!selectedGift}
            onClick={() => setStep('address')}
          >
            التالي
          </button>
        </div>
      )}

      {step === 'address' && (
        <div>
          <h2 className="text-2xl mb-4">📦 أدخل عنوان التوصيل</h2>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="اكتب عنوانك هنا..."
            className="w-full p-2 border rounded mb-4"
          />
          <button
            onClick={handleSubmit}
            disabled={!address}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            تأكيد الطلب
          </button>
        </div>
      )}

      {step === 'done' && (
        <div className="text-center text-xl">✅ تم استلام طلبك وسيتم التوصيل قريباً</div>
      )}
    </div>
  )
}
