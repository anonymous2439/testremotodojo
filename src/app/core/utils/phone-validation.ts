import { FormControl } from "@angular/forms";

export function phoneValidation(input: FormControl) {
  let val = input.value as string
  let code = input.root.get('countryCode')?.value

  return val.startsWith(code) || val.startsWith('+') || val.startsWith('-') ? input.setValue('') : null
}