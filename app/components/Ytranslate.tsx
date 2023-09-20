'use client'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { useState, useMemo } from "react";

export default function Ytranslate() {
  const [selectedKeys, setSelectedKeys] = useState(["text"]); // Initialize with an array

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button color="primary"
          variant="bordered"
          className="capitalize bg-gray-700 px-6 py-2 rounded-2xl">
          {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Single selection example"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={(newSelectedKeys) => setSelectedKeys(Array.from(newSelectedKeys))}
      >
        <DropdownItem key="text">Text</DropdownItem>
        <DropdownItem key="number">Number</DropdownItem>
        <DropdownItem key="date">Date</DropdownItem>
        <DropdownItem key="single_date">Single Date</DropdownItem>
        <DropdownItem key="iteration">Iteration</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
