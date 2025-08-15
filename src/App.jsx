import React from 'react'
import "./i18n"
import { useTranslation } from 'react-i18next'
const App = () => {
  const { t, i18n } = useTranslation()
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }
  return (
    <div>
      <select name="language" id="" onClick={(e) => changeLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="mm"> Myanmar</option>
      </select>
      <p>{t("hello")}</p> <p>{t("goodbye")}</p> <p>{t("welcome")}</p>
    </div>
  )
}

export default App