"use client";
import React, { useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Textarea,
} from "@nextui-org/react";
import useTranslate from "../../hooks/useTranslate";

interface TranslateData {
  text: string;
  sourceLang: string;
  targetLang: string;
}

export default function Ytranslate() {
  const [sourceLang, setSourceLang] = useState("en");
  const [destLang, setDestLang] = useState("es");
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const { translate } = useTranslate();

  const languageInputOptions = [
    { label: "Afrikaans", key: "af" },
    { label: "Albanian", key: "sq" },
    { label: "Amharic", key: "am" },
    { label: "Arabic", key: "ar" },
    { label: "Armenian", key: "hy" },
    { label: "Assamese", key: "as" },
    { label: "Aymara", key: "ay" },
    { label: "Azerbaijani", key: "az" },
    { label: "Bambara", key: "bm" },
    { label: "Basque", key: "eu" },
    { label: "Belarusian", key: "be" },
    { label: "Bengali", key: "bn" },
    { label: "Bhojpuri", key: "bho" },
    { label: "Bosnian", key: "bs" },
    { label: "Bulgarian", key: "bg" },
    { label: "Catalan", key: "ca" },
    { label: "Cebuano", key: "ceb" },
    { label: "Chinese (Simplified)", key: "zh-CN" },
    { label: "Chinese (Traditional)", key: "zh-TW" },
    { label: "Corsican", key: "co" },
    { label: "Croatian", key: "hr" },
    { label: "Czech", key: "cs" },
    { label: "Danish", key: "da" },
    { label: "Dhivehi", key: "dv" },
    { label: "Dogri", key: "doi" },
    { label: "Dutch", key: "nl" },
    { label: "English", key: "en" },
    { label: "Esperanto", key: "eo" },
    { label: "Estonian", key: "et" },
    { label: "Ewe", key: "ee" },
    { label: "Filipino (Tagalog)", key: "fil" },
    { label: "Finnish", key: "fi" },
    { label: "French", key: "fr" },
    { label: "Frisian", key: "fy" },
    { label: "Galician", key: "gl" },
    { label: "Georgian", key: "ka" },
    { label: "German", key: "de" },
    { label: "Greek", key: "el" },
    { label: "Guarani", key: "gn" },
    { label: "Gujarati", key: "gu" },
    { label: "Haitian Creole", key: "ht" },
    { label: "Hausa", key: "ha" },
    { label: "Hawaiian", key: "haw" },
    { label: "Hebrew", key: "he" },
    { label: "Hindi", key: "hi" },
    { label: "Hmong", key: "hmn" },
    { label: "Hungarian", key: "hu" },
    { label: "Icelandic", key: "is" },
    { label: "Igbo", key: "ig" },
    { label: "Ilocano", key: "ilo" },
    { label: "Indonesian", key: "id" },
    { label: "Irish", key: "ga" },
    { label: "Italian", key: "it" },
    { label: "Japanese", key: "ja" },
    { label: "Javanese", key: "jv" },
    { label: "Kannada", key: "kn" },
    { label: "Kazakh", key: "kk" },
    { label: "Khmer", key: "km" },
    { label: "Kinyarwanda", key: "rw" },
    { label: "Konkani", key: "gom" },
    { label: "Korean", key: "ko" },
    { label: "Krio", key: "kri" },
    { label: "Kurdish", key: "ku" },
    { label: "Kurdish (Sorani)", key: "ckb" },
    { label: "Kyrgyz", key: "ky" },
    { label: "Lao", key: "lo" },
    { label: "Latin", key: "la" },
    { label: "Latvian", key: "lv" },
    { label: "Lingala", key: "ln" },
    { label: "Lithuanian", key: "lt" },
    { label: "Luganda", key: "lg" },
    { label: "Luxembourgish", key: "lb" },
    { label: "Macedonian", key: "mk" },
    { label: "Maithili", key: "mai" },
    { label: "Malagasy", key: "mg" },
    { label: "Malay", key: "ms" },
    { label: "Malayalam", key: "ml" },
    { label: "Maltese", key: "mt" },
    { label: "Maori", key: "mi" },
    { label: "Marathi", key: "mr" },
    { label: "Meiteilon (Manipuri)", key: "mni-Mtei" },
    { label: "Mizo", key: "lus" },
    { label: "Mongolian", key: "mn" },
    { label: "Myanmar (Burmese)", key: "my" },
    { label: "Nepali", key: "ne" },
    { label: "Norwegian", key: "no" },
    { label: "Nyanja (Chichewa)", key: "ny" },
    { label: "Odia (Oriya)", key: "or" },
    { label: "Oromo", key: "om" },
    { label: "Pashto", key: "ps" },
    { label: "Persian", key: "fa" },
    { label: "Polish", key: "pl" },
    { label: "Portuguese (Portugal, Brazil)", key: "pt" },
    { label: "Punjabi", key: "pa" },
    { label: "Quechua", key: "qu" },
    { label: "Romanian", key: "ro" },
    { label: "Russian", key: "ru" },
    { label: "Samoan", key: "sm" },
    { label: "Sanskrit", key: "sa" },
    { label: "Scots Gaelic", key: "gd" },
    { label: "Sepedi", key: "nso" },
    { label: "Serbian", key: "sr" },
    { label: "Sesotho", key: "st" },
    { label: "Shona", key: "sn" },
    { label: "Sindhi", key: "sd" },
    { label: "Sinhala (Sinhalese)", key: "si" },
    { label: "Slovak", key: "sk" },
    { label: "Slovenian", key: "sl" },
    { label: "Somali", key: "so" },
    { label: "Spanish", key: "es" },
    { label: "Sundanese", key: "su" },
    { label: "Swahili", key: "sw" },
    { label: "Swedish", key: "sv" },
    { label: "Tagalog (Filipino)", key: "tl" },
    { label: "Tajik", key: "tg" },
    { label: "Tamil", key: "ta" },
    { label: "Tatar", key: "tt" },
    { label: "Telugu", key: "te" },
    { label: "Thai", key: "th" },
    { label: "Tigrinya", key: "ti" },
    { label: "Tsonga", key: "ts" },
    { label: "Turkish", key: "tr" },
    { label: "Turkmen", key: "tk" },
    { label: "Twi (Akan)", key: "ak" },
    { label: "Ukrainian", key: "uk" },
    { label: "Urdu", key: "ur" },
    { label: "Uyghur", key: "ug" },
    { label: "Uzbek", key: "uz" },
    { label: "Vietnamese", key: "vi" },
    { label: "Welsh", key: "cy" },
    { label: "Xhosa", key: "xh" },
    { label: "Yiddish", key: "yi" },
    { label: "Yoruba", key: "yo" },
    { label: "Zulu", key: "zu" },
  ];

  const languageOutputOptions = [
    { label: "Afrikaans", key: "af" },
    { label: "Albanian", key: "sq" },
    { label: "Amharic", key: "am" },
    { label: "Arabic", key: "ar" },
    { label: "Armenian", key: "hy" },
    { label: "Assamese", key: "as" },
    { label: "Aymara", key: "ay" },
    { label: "Azerbaijani", key: "az" },
    { label: "Bambara", key: "bm" },
    { label: "Basque", key: "eu" },
    { label: "Belarusian", key: "be" },
    { label: "Bengali", key: "bn" },
    { label: "Bhojpuri", key: "bho" },
    { label: "Bosnian", key: "bs" },
    { label: "Bulgarian", key: "bg" },
    { label: "Catalan", key: "ca" },
    { label: "Cebuano", key: "ceb" },
    { label: "Chinese (Simplified)", key: "zh-CN" },
    { label: "Chinese (Traditional)", key: "zh-TW" },
    { label: "Corsican", key: "co" },
    { label: "Croatian", key: "hr" },
    { label: "Czech", key: "cs" },
    { label: "Danish", key: "da" },
    { label: "Dhivehi", key: "dv" },
    { label: "Dogri", key: "doi" },
    { label: "Dutch", key: "nl" },
    { label: "English", key: "en" },
    { label: "Esperanto", key: "eo" },
    { label: "Estonian", key: "et" },
    { label: "Ewe", key: "ee" },
    { label: "Filipino (Tagalog)", key: "fil" },
    { label: "Finnish", key: "fi" },
    { label: "French", key: "fr" },
    { label: "Frisian", key: "fy" },
    { label: "Galician", key: "gl" },
    { label: "Georgian", key: "ka" },
    { label: "German", key: "de" },
    { label: "Greek", key: "el" },
    { label: "Guarani", key: "gn" },
    { label: "Gujarati", key: "gu" },
    { label: "Haitian Creole", key: "ht" },
    { label: "Hausa", key: "ha" },
    { label: "Hawaiian", key: "haw" },
    { label: "Hebrew", key: "he" },
    { label: "Hindi", key: "hi" },
    { label: "Hmong", key: "hmn" },
    { label: "Hungarian", key: "hu" },
    { label: "Icelandic", key: "is" },
    { label: "Igbo", key: "ig" },
    { label: "Ilocano", key: "ilo" },
    { label: "Indonesian", key: "id" },
    { label: "Irish", key: "ga" },
    { label: "Italian", key: "it" },
    { label: "Japanese", key: "ja" },
    { label: "Javanese", key: "jv" },
    { label: "Kannada", key: "kn" },
    { label: "Kazakh", key: "kk" },
    { label: "Khmer", key: "km" },
    { label: "Kinyarwanda", key: "rw" },
    { label: "Konkani", key: "gom" },
    { label: "Korean", key: "ko" },
    { label: "Krio", key: "kri" },
    { label: "Kurdish", key: "ku" },
    { label: "Kurdish (Sorani)", key: "ckb" },
    { label: "Kyrgyz", key: "ky" },
    { label: "Lao", key: "lo" },
    { label: "Latin", key: "la" },
    { label: "Latvian", key: "lv" },
    { label: "Lingala", key: "ln" },
    { label: "Lithuanian", key: "lt" },
    { label: "Luganda", key: "lg" },
    { label: "Luxembourgish", key: "lb" },
    { label: "Macedonian", key: "mk" },
    { label: "Maithili", key: "mai" },
    { label: "Malagasy", key: "mg" },
    { label: "Malay", key: "ms" },
    { label: "Malayalam", key: "ml" },
    { label: "Maltese", key: "mt" },
    { label: "Maori", key: "mi" },
    { label: "Marathi", key: "mr" },
    { label: "Meiteilon (Manipuri)", key: "mni-Mtei" },
    { label: "Mizo", key: "lus" },
    { label: "Mongolian", key: "mn" },
    { label: "Myanmar (Burmese)", key: "my" },
    { label: "Nepali", key: "ne" },
    { label: "Norwegian", key: "no" },
    { label: "Nyanja (Chichewa)", key: "ny" },
    { label: "Odia (Oriya)", key: "or" },
    { label: "Oromo", key: "om" },
    { label: "Pashto", key: "ps" },
    { label: "Persian", key: "fa" },
    { label: "Polish", key: "pl" },
    { label: "Portuguese (Portugal, Brazil)", key: "pt" },
    { label: "Punjabi", key: "pa" },
    { label: "Quechua", key: "qu" },
    { label: "Romanian", key: "ro" },
    { label: "Russian", key: "ru" },
    { label: "Samoan", key: "sm" },
    { label: "Sanskrit", key: "sa" },
    { label: "Scots Gaelic", key: "gd" },
    { label: "Sepedi", key: "nso" },
    { label: "Serbian", key: "sr" },
    { label: "Sesotho", key: "st" },
    { label: "Shona", key: "sn" },
    { label: "Sindhi", key: "sd" },
    { label: "Sinhala (Sinhalese)", key: "si" },
    { label: "Slovak", key: "sk" },
    { label: "Slovenian", key: "sl" },
    { label: "Somali", key: "so" },
    { label: "Spanish", key: "es" },
    { label: "Sundanese", key: "su" },
    { label: "Swahili", key: "sw" },
    { label: "Swedish", key: "sv" },
    { label: "Tagalog (Filipino)", key: "tl" },
    { label: "Tajik", key: "tg" },
    { label: "Tamil", key: "ta" },
    { label: "Tatar", key: "tt" },
    { label: "Telugu", key: "te" },
    { label: "Thai", key: "th" },
    { label: "Tigrinya", key: "ti" },
    { label: "Tsonga", key: "ts" },
    { label: "Turkish", key: "tr" },
    { label: "Turkmen", key: "tk" },
    { label: "Twi (Akan)", key: "ak" },
    { label: "Ukrainian", key: "uk" },
    { label: "Urdu", key: "ur" },
    { label: "Uyghur", key: "ug" },
    { label: "Uzbek", key: "uz" },
    { label: "Vietnamese", key: "vi" },
    { label: "Welsh", key: "cy" },
    { label: "Xhosa", key: "xh" },
    { label: "Yiddish", key: "yi" },
    { label: "Yoruba", key: "yo" },
    { label: "Zulu", key: "zu" },
  ];

  const [search, setSearch] = useState("");

  const onSubmit = async () => {
    try {
      const text: string = inputText;
      const source: string = sourceLang;
      const dest: string = destLang;
      console.log(text);
      console.log(source);
      console.log(dest);
      const translationResult = await translate(dest, source, text);
      setOutputText(translationResult.translated);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-wrap items-center my-10 w-full justify-around gap-y-10 xxs:gap-y-5">
      <Dropdown className="focus-visible:none">
        <DropdownTrigger className="">
          <Button
            color="primary"
            variant="bordered"
            className="capitalize bg-[#beffc5] btn-trans px-10 py-2 rounded-2xl -z-0 focus:border-blue-500 border-2"
          >
            {languageInputOptions.find((option) => option.key === sourceLang)
              ?.label || "Select Language"}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          className="cursor-pointer bg-white px-4 py-2 border-4 rounded-2xl max-h-40 overflow-y-auto"
          aria-label="Source Language selection"
          variant="flat"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={[sourceLang]}
          onSelectionChange={(newSelectedKeys) =>
            setSourceLang(Array.from(newSelectedKeys)[0].toString())
          }
        >
          {languageInputOptions.map((option) => (
            <DropdownItem key={option.key} className="">
              {option.label}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
      <Dropdown className="">
        <DropdownTrigger className="">
          <Button
            color="primary"
            variant="bordered"
            className="capitalize bg-[#beffc5] btn-trans px-10 py-2 rounded-2xl -z-0"
          >
            {languageOutputOptions.find((option) => option.key === destLang)
              ?.label || "Select Language"}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          className="cursor-pointer bg-white px-4 py-2 border-4 rounded-2xl max-h-40 overflow-y-auto"
          aria-label="Target Language selection"
          variant="flat"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={[destLang]}
          onSelectionChange={(newSelectedKeys) =>
            setDestLang(Array.from(newSelectedKeys)[0].toString())
          }
        >
          {languageOutputOptions.map((option) => (
            <DropdownItem key={option.key} className="">
              {option.label}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
      <Textarea
        className="py-2 justify-center items-center px-4 rounded-2xl border-4 border-gray-300"
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter text to translate"
        aria-multiline="true"
      />
      <div className="flex justify-center items-center w-full flex-col gap-y-3">
        <button
          onClick={onSubmit}
          className="bg-[#beffc5] px-6 py-2 rounded-xl"
        >
          Translate
        </button>
        <p>Translated Output:</p>
        <Textarea
          className="p-2 rounded-2xl border-4 border-gray-300 w-full"
          value={outputText}
        />
      </div>
    </div>
  );
}
