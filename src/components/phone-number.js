import {useState} from 'react'
import encryptPhone from '../helpers/encrypt-phone'

const PhoneNumber = () => {
  const phoneNumber = '+65 88887541'
  const [showPhone, setShowPhone] = useState(false)

  const handleShowPhoneNumber = () => {
    setShowPhone (!showPhone)
  }

  return (
   <>
    <span>{showPhone ? phoneNumber : encryptPhone(phoneNumber)}</span>
    <span
      className="text-xs ml-2 text-green-500"
      role="button"
      onClick={handleShowPhoneNumber}
      >{showPhone ? '' : 'Show'}</span>
    </>
  )
}

export default PhoneNumber
