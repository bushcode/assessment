"use client";
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { useIconClick } from "@hooks/use-icon-click";
import { cn } from "@lib/utils";

const iconVariants = cva("", {
  variants: {
    intent: {
      default: "text-secondary hover:text-primary",
    },
    size: {
      sm: "w-4 h-4",
      md: "w-6 h-6",
      lg: "w-8 h-8",
    },
    clicked: {
      true: "text-purple-primary hover:purple-primary",
      false: "",
    },
    defaultVariants: {
      intent: "default",
      size: "md",
      clicked: false,
    },
  },
});

type IconVariantsProps = VariantProps<typeof iconVariants>;

interface IconProps extends IconVariantsProps {
  className?: string;
  onClick?: () => void;
  clicked?: boolean;
}

const Icon: React.FC<React.SVGProps<SVGSVGElement> & IconProps> = ({
  children,
  size,
  clicked,
  ...props
}) => {
  return (
    <svg
      viewBox="0 0 16 16"
      fill={clicked ? "hsla(250, 69%, 90%, 1)" : "none"}
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      className={iconVariants({ size, clicked })}
      {...props}
    >
      {children}
    </svg>
  );
};

interface IconWithTextProps extends IconProps {
  icon: React.ElementType<IconProps>;
  value: number | string;
}

const IconWithText: React.FC<IconWithTextProps> = ({
  onClick,
  value,
  icon: IconComponent,
  ...iconProps
}) => {
  const { isClicked, handleClick } = useIconClick(false, onClick);
  return (
    <div
      className={cn(
        iconVariants({ intent: iconProps.intent, clicked: isClicked }),
        "cursor-pointer flex items-center gap-1"
      )}
      onClick={handleClick}
    >
      <IconComponent
        className={cn(iconVariants({ size: iconProps.size }))}
        {...iconProps}
        clicked={isClicked}
      />
      <span className="text-sm">{value}</span>
    </div>
  );
};

//export default icons
export const LikeIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path
      d="M4.66683 14.6667H2.66683C2.31321 14.6667 1.97407 14.5262 1.72402 14.2762C1.47397 14.0261 1.3335 13.687 1.3335 13.3334V8.66671C1.3335 8.31309 1.47397 7.97395 1.72402 7.7239C1.97407 7.47385 2.31321 7.33337 2.66683 7.33337H4.66683M9.3335 6.00004V3.33337C9.3335 2.80294 9.12278 2.29423 8.74771 1.91916C8.37264 1.54409 7.86393 1.33337 7.3335 1.33337L4.66683 7.33337V14.6667H12.1868C12.5084 14.6703 12.8204 14.5576 13.0654 14.3494C13.3105 14.1411 13.4719 13.8513 13.5202 13.5334L14.4402 7.53337C14.4692 7.34228 14.4563 7.14716 14.4024 6.96154C14.3485 6.77592 14.2549 6.60424 14.1281 6.45838C14.0012 6.31253 13.8442 6.196 13.6679 6.11685C13.4915 6.03771 13.3001 5.99785 13.1068 6.00004H9.3335Z"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);

export const ShareIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path
      d="M14.6667 1.33325L7.33334 8.66659M14.6667 1.33325L10 14.6666L7.33334 8.66659M14.6667 1.33325L1.33334 5.99992L7.33334 8.66659"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);

export const DislikeIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path
      d="M11.3333 1.33349H13.1133C13.4906 1.32682 13.8573 1.45892 14.1436 1.70471C14.4299 1.95049 14.6161 2.29287 14.6667 2.66683V7.33349C14.6161 7.70745 14.4299 8.04982 14.1436 8.29561C13.8573 8.5414 13.4906 8.6735 13.1133 8.66683H11.3333M6.66666 10.0002V12.6668C6.66666 13.1973 6.87737 13.706 7.25244 14.081C7.62752 14.4561 8.13622 14.6668 8.66666 14.6668L11.3333 8.66683V1.33349H3.81332C3.49177 1.32986 3.17974 1.44256 2.93472 1.65082C2.6897 1.85909 2.52821 2.14889 2.47999 2.46683L1.55999 8.46683C1.53098 8.65792 1.54387 8.85304 1.59776 9.03866C1.65165 9.22428 1.74525 9.39596 1.87208 9.54182C1.99891 9.68767 2.15594 9.80421 2.33228 9.88335C2.50861 9.96249 2.70005 10.0023 2.89332 10.0002H6.66666Z"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);
export const ViewIcon: React.FC<IconProps> = (props) => (
  <Icon {...props} viewBox="0 0 16 12">
    <path
      d="M0.666656 6.00008C0.666656 6.00008 3.33332 0.666748 7.99999 0.666748C12.6667 0.666748 15.3333 6.00008 15.3333 6.00008C15.3333 6.00008 12.6667 11.3334 7.99999 11.3334C3.33332 11.3334 0.666656 6.00008 0.666656 6.00008Z"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.99999 8.00008C9.10456 8.00008 9.99999 7.10465 9.99999 6.00008C9.99999 4.89551 9.10456 4.00008 7.99999 4.00008C6.89542 4.00008 5.99999 4.89551 5.99999 6.00008C5.99999 7.10465 6.89542 8.00008 7.99999 8.00008Z"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);

export const CommentIcon: React.FC<IconProps> = (props) => (
  <Icon {...props} viewBox="0 0 14 14">
    <path
      d="M13 9C13 9.35362 12.8595 9.69276 12.6095 9.94281C12.3594 10.1929 12.0203 10.3333 11.6667 10.3333H3.66667L1 13V2.33333C1 1.97971 1.14048 1.64057 1.39052 1.39052C1.64057 1.14048 1.97971 1 2.33333 1H11.6667C12.0203 1 12.3594 1.14048 12.6095 1.39052C12.8595 1.64057 13 1.97971 13 2.33333V9Z"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);

export const LoadingIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <Icon {...props} viewBox="0 0 20 20">
      <path
        d="M6.39344 18.2458C4.86218 17.576 3.54766 16.4931 2.59717 15.1184C1.64667 13.7437 1.09774 12.1314 1.01188 10.4623C0.926027 8.79322 1.30664 7.13317 2.11106 5.66818C2.91549 4.20318 4.11196 2.99113 5.56642 2.1678C7.02088 1.34447 8.67586 0.942409 10.3459 1.00665C12.016 1.07089 13.6352 1.59891 15.0221 2.53153C16.4091 3.46415 17.5089 4.76454 18.1984 6.287C18.8879 7.80946 19.1399 9.49384 18.926 11.1514"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <defs>
        <radialGradient
          id="paint0_angular_6454_2217"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(10 10) rotate(5.49907) scale(11.4254)"
        >
          <stop />
          <stop offset="0.258813" stop-opacity="0" />
          <stop offset="0.354064" stop-opacity="0" />
        </radialGradient>
      </defs>
    </Icon>
  </Icon>
);

export const WarningIcon: React.FC<IconProps> = (props) => (
  <Icon {...props} viewBox="0 0 50 50">
    <path
      d="M21.4375 8.04185L3.79165 37.5002C3.42783 38.1302 3.23533 38.8446 3.23329 39.5721C3.23126 40.2996 3.41975 41.015 3.78004 41.6471C4.14032 42.2792 4.65983 42.8059 5.28687 43.1749C5.91392 43.5438 6.62665 43.7422 7.35415 43.7502H42.6458C43.3733 43.7422 44.086 43.5438 44.7131 43.1749C45.3401 42.8059 45.8596 42.2792 46.2199 41.6471C46.5802 41.015 46.7687 40.2996 46.7667 39.5721C46.7646 38.8446 46.5721 38.1302 46.2083 37.5002L28.5625 8.04185C28.1911 7.42957 27.6682 6.92335 27.0441 6.57202C26.4201 6.2207 25.7161 6.03613 25 6.03613C24.2839 6.03613 23.5798 6.2207 22.9558 6.57202C22.3318 6.92335 21.8089 7.42957 21.4375 8.04185V8.04185Z"
      strokeWidth="4.16667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M25 18.75L25 29.1667"
      strokeWidth="4.16667"
      strokeLinecap="round"
    />
    <path
      d="M25 35.4165L25 37.4998"
      strokeWidth="4.16667"
      strokeLinecap="round"
    />
  </Icon>
);
export const MapPinIcon: React.FC<IconProps> = (props) => (
  <Icon {...props} viewBox="0 0 16 17">
    <g clipPath="url(#clip0_6412_3939)">
      <path
        d="M14 7.16669C14 11.8334 8 15.8334 8 15.8334C8 15.8334 2 11.8334 2 7.16669C2 5.57539 2.63214 4.04926 3.75736 2.92405C4.88258 1.79883 6.4087 1.16669 8 1.16669C9.5913 1.16669 11.1174 1.79883 12.2426 2.92405C13.3679 4.04926 14 5.57539 14 7.16669Z"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 9.16669C9.10457 9.16669 10 8.27126 10 7.16669C10 6.06212 9.10457 5.16669 8 5.16669C6.89543 5.16669 6 6.06212 6 7.16669C6 8.27126 6.89543 9.16669 8 9.16669Z"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_6412_3939">
        <rect
          width="16"
          height="16"
          fill="white"
          transform="translate(0 0.5)"
        />
      </clipPath>
    </defs>
  </Icon>
);

export const BackIcon: React.FC<IconProps> = (props) => (
  <Icon {...props} viewBox="0 0 8 14">
    <path
      d="M7 13L1 7L7 1"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);

//Export Icons With Text

export const LikeIconWithText: React.FC<Omit<IconWithTextProps, "icon">> = (
  props
) => <IconWithText {...props} icon={LikeIcon} />;

export const ShareIconWithText: React.FC<Omit<IconWithTextProps, "icon">> = (
  props
) => <IconWithText {...props} icon={ShareIcon} />;

export const ViewIconWithText: React.FC<Omit<IconWithTextProps, "icon">> = (
  props
) => <IconWithText {...props} icon={ViewIcon} />;
