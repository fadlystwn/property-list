const encryptPhone = (phone) => {
  const sgPhoneRegex = /[6|8|9]\d{7}|\+65[6|8|9]\d{7}|\+65\s[6|8|9]\d{7}/
  const inputNumb = phone.match(sgPhoneRegex).join("")
  const encryptNumber = `${inputNumb.substring(0,5)} ${inputNumb.substring(4).replace(/\d/g, "X")}`
  return encryptNumber;
}

export default encryptPhone
