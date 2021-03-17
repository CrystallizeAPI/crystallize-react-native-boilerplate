import React, { createContext, useContext } from "react"
import i18n from "i18next"
import en from "../locales/en-US"
import gr from "../locales/el-GR"

const I18NextContext = createContext({})

export const useT = () => {
  const c = useContext(I18NextContext)

  return (val, options) => c?.i18n?.t(val, options)
}

export const useLocale = () => {
  const c = useContext(I18NextContext)

  return c?.locale
}

export const useLocales = () => {
  const c = useContext(I18NextContext)

  return c?.locales
}

export function I18nextProvider({ locale = {}, locales = [], children }) {
  const lng = locale.appLanguage || "en-US"

  i18n.init({
    resources: {
      [lng]: locale.resources || {},
    },
    lng,

    interpolation: {
      escapeValue: false, // react already safe from xss
      format: function (value, format, _, { currency }) {
        if (format === "uppercase") {
          return value.toUpperCase()
        }

        if (format === "currency" && currency) {
          return new Intl.NumberFormat(locale, {
            style: "currency",
            currency,
          }).format(value)
        }

        return value
      },
    },
  })

  return (
    <I18NextContext.Provider value={{ i18n, locale, locales }}>{children}</I18NextContext.Provider>
  )
}
