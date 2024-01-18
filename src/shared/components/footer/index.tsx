"use client";
import React from "react";
import stylse from "./index.module.scss";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className={stylse.footer}>
      <div className="container">
        <div className="sectionTitle">
          <h2>{t("shared.sectionTitle.contact")}</h2>
        </div>
        <ul className={stylse.contact}>
          <li>
            <span>{t("shared.element.adress")}:</span>
            <p>Україна, 29010, м. Хмельницький, вул. Чорновола, 31</p>
          </li>
          <li>
            <span>{t("shared.element.phone")}:</span>
            <p>+380977262832</p>
          </li>
          <li>
            <span>{t("shared.element.email")}:</span>
            <p>ula-hzb@ukr.net</p>
          </li>
        </ul>
        <ul className={stylse.social}>
          <Link href={'https://www.instagram.com/hzb.ukraine/'} target="_blank">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.4928 15H2.50719C1.12731 15 0 13.8727 0 12.4928V2.50719C0 1.12731 1.12731 0 2.50719 0H12.4928C13.8727 0 15 1.12731 15 2.50719V12.4928C15 13.8789 13.8788 15 12.4928 15Z"
                fill="#FD7A19"
              />
              <path
                d="M7.50245 11.353C6.4737 11.353 5.50655 10.9526 4.77965 10.2257C4.05275 9.49883 3.65234 8.53168 3.65234 7.50293C3.65234 6.47419 4.05275 5.50704 4.77965 4.78014C5.50655 4.05324 6.4737 3.65283 7.50245 3.65283C8.53119 3.65283 9.49834 4.05324 10.2252 4.78014C10.9521 5.50704 11.3525 6.47419 11.3525 7.50293C11.3525 8.53168 10.9521 9.49883 10.2252 10.2257C9.49218 10.9526 8.53119 11.353 7.50245 11.353ZM7.50245 4.47213C5.83304 4.47213 4.47164 5.82737 4.47164 7.50293C4.47164 9.17234 5.82688 10.5337 7.50245 10.5337C9.17185 10.5337 10.5332 9.1785 10.5332 7.50293C10.5271 5.83353 9.17185 4.47213 7.50245 4.47213Z"
                fill="white"
              />
              <path
                d="M12.104 3.52633C12.5123 3.52633 12.8432 3.19536 12.8432 2.78709C12.8432 2.37882 12.5123 2.04785 12.104 2.04785C11.6957 2.04785 11.3647 2.37882 11.3647 2.78709C11.3647 3.19536 11.6957 3.52633 12.104 3.52633Z"
                fill="white"
              />
            </svg>
          </Link>
          <Link href={'https://www.instagram.com/hzb.ukraine/'} target="_blank">
            <svg
              width="8"
              height="15"
              viewBox="0 0 8 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1548_1897)">
                <path
                  d="M2.36789 14.9987C2.36556 14.9664 2.36137 14.9336 2.36137 14.9013C2.36137 12.6992 2.36137 10.4972 2.36137 8.29511C2.36137 8.2769 2.36137 8.25868 2.36137 8.24047C2.36137 8.15942 2.35112 8.14894 2.26818 8.14894C1.75006 8.14894 1.23194 8.14894 0.713815 8.14894C0.501348 8.14894 0.288881 8.14894 0.0764142 8.14894C6.8319e-07 8.14894 0 8.14849 0 8.07244C0 7.23643 0 6.40042 0 5.5644C0 5.51037 0.0284229 5.48335 0.0852671 5.48335C0.812128 5.48335 1.53899 5.48335 2.26585 5.48335C2.32922 5.48335 2.36106 5.45163 2.36137 5.38818C2.36323 4.65416 2.36277 3.92015 2.36975 3.18613C2.37115 3.0518 2.40144 2.91748 2.41961 2.78315C2.43079 2.70255 2.43964 2.6215 2.45781 2.54273C2.48064 2.44392 2.51233 2.34738 2.54075 2.24994C2.56032 2.18346 2.57943 2.11652 2.60226 2.05095C2.62462 1.98584 2.64792 1.92072 2.67587 1.85743C2.70849 1.78367 2.74204 1.70944 2.78304 1.64023C2.85526 1.5182 2.92701 1.3948 3.01135 1.28096C3.10081 1.15984 3.19912 1.04373 3.30442 0.935356C3.39621 0.840644 3.50011 0.75686 3.60309 0.673988C3.67997 0.612516 3.76104 0.554232 3.84631 0.504599C3.9558 0.44085 4.06856 0.380745 4.18551 0.330201C4.30246 0.279658 4.42593 0.24323 4.54661 0.200428C4.62349 0.173107 4.69943 0.143054 4.77725 0.119376C4.82244 0.105716 4.8709 0.102073 4.91796 0.093877C4.99065 0.0815827 5.06287 0.0670116 5.13555 0.056994C5.25949 0.0396909 5.3839 0.0205664 5.5083 0.0105488C5.62898 0.000986506 5.75012 -0.000379532 5.87126 7.5814e-05C6.1005 7.5814e-05 6.32975 0.0018972 6.55899 0.006906C6.77099 0.0119148 6.98299 0.017379 7.19406 0.0310393C7.43075 0.0465211 7.66652 0.0715651 7.90275 0.093877C7.92418 0.0956984 7.94468 0.106171 7.96751 0.113457V2.48763C7.94282 2.48763 7.91952 2.48763 7.89576 2.48763C7.41491 2.48763 6.93406 2.48626 6.45322 2.49036C6.32322 2.49127 6.19183 2.50083 6.06416 2.52269C5.91832 2.54774 5.77528 2.59236 5.64529 2.66521C5.51762 2.7367 5.41884 2.84098 5.33777 2.95891C5.30562 3.00627 5.28978 3.06546 5.27347 3.12147C5.24318 3.22529 5.21709 3.33047 5.19053 3.43566C5.18494 3.45843 5.18401 3.48256 5.18401 3.50624C5.18168 4.14554 5.18075 4.78485 5.17702 5.42415C5.17702 5.48107 5.20498 5.48335 5.24924 5.48335C6.09165 5.48244 6.93406 5.48244 7.77648 5.48335C7.80956 5.48335 7.84217 5.49428 7.8664 5.49838C7.85895 5.57715 7.85522 5.64318 7.84544 5.70875C7.83053 5.81211 7.81049 5.91502 7.79512 6.01838C7.78254 6.1008 7.77275 6.18367 7.76297 6.26654C7.75039 6.37446 7.74107 6.48238 7.72662 6.59029C7.71171 6.70504 7.69308 6.81933 7.67584 6.93363C7.6749 6.94091 7.67304 6.94774 7.67211 6.95503C7.65999 7.07023 7.64881 7.18543 7.6353 7.30063C7.61573 7.46365 7.5957 7.62666 7.57333 7.78922C7.55842 7.89623 7.54025 8.00323 7.52021 8.10933C7.51742 8.12344 7.49924 8.14075 7.48433 8.14576C7.46616 8.15213 7.4438 8.14803 7.4233 8.14803C6.70762 8.14803 5.99194 8.14803 5.27627 8.14803C5.21041 8.14803 5.17748 8.17991 5.17748 8.24366C5.17748 10.4639 5.17749 12.6842 5.17655 14.9045C5.17655 14.9354 5.15978 14.9668 5.15139 14.9978H2.36696L2.36789 14.9987Z"
                  fill="#FD7A19"
                />
              </g>
              <defs>
                <clipPath id="clip0_1548_1897">
                  <rect width="7.96751" height="14.9987" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Link>
        </ul>
      </div>
    </footer>
  );
};
