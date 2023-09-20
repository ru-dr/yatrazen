"use client";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { useState, useMemo } from "react";

export default function Ytranslate() {
  const [sourceLang, setSourceLang] = useState("en");
  const [destLang, setDestLang] = useState("es");
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

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

  return (
    <div className="flex justify-center items-center my-10 gap-x-10">
      <Dropdown className="">
        <DropdownTrigger className="">
          <Button
            color="primary"
            variant="bordered"
            className="capitalize bg-[#beffc5] btn-trans px-10 py-2 rounded-2xl"
          >
            {languageInputOptions.find((option) => option.key === sourceLang)?.label || "Select Language"}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          className="cursor-pointer d"
          aria-label="Source Language selection"
          variant="flat"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={[sourceLang]}
          onSelectionChange={(newSelectedKeys) => setSourceLang(Array.from(newSelectedKeys).map((key) => String(key))[0])}
        >
          {languageInputOptions.map((option) => (
            <DropdownItem key={option.key} className="">{option.label}</DropdownItem>
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
            {languageOutputOptions.find((option) => option.key === destLang)?.label || "Select Language"}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          className="cursor-pointer"
          aria-label="Target Language selection"
          variant="flat"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={[destLang]}
          onSelectionChange={(newSelectedKeys) => setDestLang(Array.from(newSelectedKeys).map((key) => String(key))[0])}
        >
          {languageOutputOptions.map((option) => (
            <DropdownItem key={option.key} className="">{option.label}</DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
