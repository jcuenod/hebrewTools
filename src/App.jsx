import React, { useState } from 'react'
import { remove, transliterate } from "hebrew-transliteration"
import Header from "./components/Header"
import SettingsBar from "./components/SettingsBar"
import InputText from "./components/InputText"
import CopyButton from "./components/CopyButton"
import Footer from "./components/Footer"

import TransformationTypes from "./transformationTypes"

const getOutputValue = ({ text, transformationType, handleQametzQatan }) => {
  switch (transformationType) {
    case TransformationTypes.REMOVE_ACCENTS:
      return remove(text, { removeVowels: false, removeShinDot: false, removeSinDot: false })
      break
    case TransformationTypes.REMOVE_ALL_POINTING:
      return remove(text, { removeVowels: true, removeShinDot: true, removeSinDot: true })
      break
    case TransformationTypes.TRANSLITERATE:
      if (handleQametzQatan) {
        return transliterate(text, { qametsQatan: true })
      }
      return transliterate(text)
      break
    default:
      console.error("Unhandled case:", transformationType)
      throw ("we don't handle all cases")
  }
}
const App = () => {
  const [textState, setTextState] = useState("")
  const [transformationType, setTransformationType] = useState(TransformationTypes.REMOVE_ACCENTS)
  const [handleQametzQatan, setHandleQametzQatan] = useState(true)

  const output = getOutputValue({ text: textState, transformationType, handleQametzQatan })

  const outputStyles = transformationType !== TransformationTypes.TRANSLITERATE
    ? { direction: "rtl", fontFamily: "SBL BibLit", fontSize: "1.875rem", lineHeight: "2.25rem" }
    : { fontSize: "1.5rem", lineHeight: "2rem" }

  return <div className="flex flex-col min-h-screen">
    <Header />
    <div className="flex flex-col m-4 rounded shadow-lg bg-gray-100 md:mx-8 lg:mx-16">
      <SettingsBar
        transformationType={transformationType}
        setTransformationType={setTransformationType}
        handleQametzQatan={handleQametzQatan}
        setHandleQametzQatan={setHandleQametzQatan} />
      <div className="flex flex-row rounded-b p-2">
        <div className="w-1/2 m-3">
          <InputText onChange={setTextState} />
        </div>
        <div className="flex flex-col w-1/2 border-l-2 border-gray-200">
          {textState
            ? <div className="flex-1 m-3" style={outputStyles}>
              {output}
            </div>
            : <div className="flex-1 m-4 text-gray-400 text-xl" style={{ direction: "ltr" }}>
              Output
              </div>}
          <div className="flex-0-1 flex justify-end">
            <CopyButton onClick={() => {
              navigator.clipboard.writeText(output)
            }} />
          </div>
        </div>
      </div>
    </div>
    <div className="flex-auto" />
    <Footer />
  </div>
}
export default App
