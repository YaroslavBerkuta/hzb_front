"use client";
import { LangIcon } from "@/shared/config";
import { Dropdown, MenuProps, Space } from "antd";
import { find } from "lodash";
import React, { useMemo } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { setStorage } from "@/shared/services";

export const LangSelect = () => {
  const { i18n } = useTranslation();
  const selectLang = (e: string) => {
    setStorage("lang", e);
    i18n.changeLanguage(e);
  };

  const items: MenuProps["items"] = [
    {
      key: "ua",
      onClick: (e) => selectLang(e.key),
      label: (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Image
            src="/ua.svg"
            alt="lang"
            width={18}
            height={12}
            style={{ marginRight: 5 }}
          />
          <p>Українська</p>
        </div>
      ),
    },
    {
      key: "en",
      onClick: (e) => selectLang(e.key),
      label: (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Image
            src="/en.svg"
            alt="lang"
            width={18}
            height={12}
            style={{ marginRight: 5 }}
          />
          <p>English</p>
        </div>
      ),
    },
  ];

  const current = useMemo(() => {
    return find(LangIcon, { key: i18n.language })?.image;
  }, [i18n.language]);

  return (
    <Dropdown menu={{ items }}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          <Image
            src={current || "/ua.svg"}
            alt="lang"
            width={18}
            height={12}
            loading="lazy"
          />
        </Space>
      </a>
    </Dropdown>
  );
};
