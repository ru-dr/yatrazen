"use client";
import React, { useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Input,
} from "@nextui-org/react";
import useTranslate from "../../api/route";

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
    { key: "en", label: "English" },
    { key: "es", label: "Spanish" },
    { key: "fr", label: "French" },
    { key: "gu", label: "Gujarati" },
    { key: "hi", label: "Hindi" },
  ];

  const languageOutputOptions = [
    { key: "en", label: "English" },
    { key: "es", label: "Spanish" },
    { key: "fr", label: "French" },
    { key: "gu", label: "Gujarati" },
    { key: "hi", label: "Hindi" },
  ];

  const onSubmit = async () => {
    try {
      const text:string = inputText;
      const source:string = sourceLang;
      const dest:string = destLang;
      console.log(text)
      console.log(source)
      console.log(dest)
      const translationResult = await translate(dest, source, text );
      setOutputText(translationResult.translated);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center flex-wrap items-center my-10 gap-x-10">
      <Dropdown className="">
        <DropdownTrigger className="">
          <Button
            color="primary"
            variant="bordered"
            className="capitalize bg-[#beffc5] btn-trans px-10 py-2 rounded-2xl"
          >
            {languageInputOptions.find((option) => option.key === sourceLang)
              ?.label || "Select Language"}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          className="cursor-pointer"
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
            className="capitalize bg-[#beffc5] btn-trans px-10 py-2 rounded-2xl"
          >
            {languageOutputOptions.find((option) => option.key === destLang)
              ?.label || "Select Language"}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          className="cursor-pointer"
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
      <Input
        className="bg-gray-50"
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={onSubmit}>Translate</button>
      <div>
        <p>Translated Output:</p>
        <p>{outputText}</p>
      </div>
    </div>
  );
}
