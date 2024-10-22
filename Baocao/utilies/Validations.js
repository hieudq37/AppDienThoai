export const isValidUser = (stringUser) => stringUser.length>=5

export const isValidPassword = (stringPaswrod)=>stringPaswrod.length>=5

export const isValidPasswordconfirm = (stringPaswrordconfirm,stringPaswrod)=>
 stringPaswrod==stringPaswrordconfirm

