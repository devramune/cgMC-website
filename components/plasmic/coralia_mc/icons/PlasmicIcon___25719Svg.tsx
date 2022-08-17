// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _25719SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _25719SvgIcon(props: _25719SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      shapeRendering={"geometricPrecision"}
      textRendering={"geometricPrecision"}
      imageRendering={"optimizeQuality"}
      fillRule={"evenodd"}
      clipRule={"evenodd"}
      viewBox={"0 0 512 512"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M232.5-.5h30c32.985 4.812 55.485 22.812 67.5 54a222.054 222.054 0 015 16c-.85 32.18 3.817 63.513 14 94 9.866 21.736 23.2 41.069 40 58 23.909 34.054 37.743 71.887 41.5 113.5.315 9.507-1.852 18.34-6.5 26.5-6.612 3.945-11.945 9.278-16 16-10.568 13.197-24.068 17.697-40.5 13.5-8.413-4.421-13.913-11.254-16.5-20.5-2.212-4.578-5.712-7.078-10.5-7.5-4.131 3.08-6.631 7.247-7.5 12.5l-1.5 10.5a1965.677 1965.677 0 005.5 30.5c.667 9 .667 18 0 27a423.364 423.364 0 00-2.5 25c.097 16.59 8.263 26.256 24.5 29 8.702-.456 16.536-3.289 23.5-8.5a297.22 297.22 0 0126-20 2319.341 2319.341 0 0150-21c9.702-5.487 10.369-11.82 2-19a271.75 271.75 0 01-24-12c-9.09-11.78-11.923-24.946-8.5-39.5a8.905 8.905 0 013-4c1.309 11.264 4.643 21.93 10 32a118.685 118.685 0 0027.5 20.5c5.556 5.845 6.389 12.345 2.5 19.5a179.919 179.919 0 00-9.5 8.5 1587.386 1587.386 0 01-47 25 318.293 318.293 0 00-33 27c-4.061 2.735-8.394 4.568-13 5.5h-23c-11.52-2.604-19.854-9.27-25-20-3.68-3.285-8.013-5.118-13-5.5a1155.672 1155.672 0 00-68 0c-14.295-.426-27.629 2.907-40 10-7.529 6.765-16.196 11.431-26 14a30.485 30.485 0 01-11 0 2256.822 2256.822 0 01-51-16 1601.677 1601.677 0 00-60-13c-12.66-3.769-16.826-11.936-12.5-24.5a82.312 82.312 0 006.5-23 888.197 888.197 0 00-5-29c-.71-6.409 1.956-10.576 8-12.5a162.99 162.99 0 0029-5 82.205 82.205 0 0011.5-9.5 72.798 72.798 0 004-15c5.443 17.282-.39 28.782-17.5 34.5a233.029 233.029 0 01-25 2c-4.238 3.456-5.071 7.622-2.5 12.5a188.614 188.614 0 007 17c1.4 11.143-.933 21.476-7 31-1.525 8.164 1.975 12.664 10.5 13.5a3607.874 3607.874 0 0052 11 1178.366 1178.366 0 0046 13c11.807 2.432 22.473.099 32-7 6.233-8.597 7.733-18.097 4.5-28.5a111.438 111.438 0 00-11-26 2075.183 2075.183 0 00-34-51 178.917 178.917 0 00-20.5-24.5c-5.603-5.473-12.27-8.14-20-8a25.724 25.724 0 00-7.5 3.5c-1.585-.876-2.585-2.209-3-4-1.867-12.222-.2-23.888 5-35a118 118 0 0010-18 883.348 883.348 0 0121-54 169.27 169.27 0 019-15 752.104 752.104 0 0031-42 128.397 128.397 0 0010.5-21.5 1157.086 1157.086 0 01-5-89.5c-.268-14.824 2.232-29.157 7.5-43 10.668-18.07 26.168-29.404 46.5-34zm52 30c5.493 1.297 10.16 4.13 14 8.5-6.485 1.472-12.485 3.806-18 7l-1-1c3.225-4.282 4.892-9.115 5-14.5zm67 200c20.625 21.457 30.958 47.291 31 77.5a97.908 97.908 0 01-4 25l1 2.5c4.755 1.698 8.755 4.365 12 8-12.766-5.425-25.433-5.258-38 .5-4.596 3.36-6.929 7.86-7 13.5-11.506.005-18.34 5.671-20.5 17-1.167 14.686-.5 29.352 2 44 .553 20.686-1.947 41.019-7.5 61-4.348-.375-6.015-2.709-5-7a225.522 225.522 0 016.5-26c1.838-7.03 1.838-14.03 0-21-2.503-3.79-5.17-3.79-8 0-10.017 16.936-24.85 26.769-44.5 29.5-15.457 3.609-30.791 3.276-46-1a57.668 57.668 0 01-12-8c-2.803-.755-5.47-.422-8 1-1.017 1.049-1.184 2.216-.5 3.5 5.668 6.671 9.168 14.337 10.5 23 .006 4.32-1.827 7.653-5.5 10-.072-9.775-2.072-19.108-6-28a551.159 551.159 0 00-12.5-18.5c13.72-3.27 18.887-11.77 15.5-25.5a57.217 57.217 0 00-8.5-9.5 849.134 849.134 0 01-64.5-55.5c-7.078-12.553-9.411-25.886-7-40 .705-2.976 1.871-5.642 3.5-8-1.904 12.202-1.071 24.202 2.5 36 2.353 6.014 6.353 10.347 12 13 3.331-.95 4.998-3.283 5-7-1.784-21.849 1.549-42.849 10-63a363.338 363.338 0 0111-23 78.466 78.466 0 0111.5-14c-4.875-8.83-5.042-17.83-.5-27a375.335 375.335 0 0112-23c2.308-5.911 3.975-11.911 5-18l21.5 25.5c5.488 2.915 11.155 3.248 17 1a258.422 258.422 0 0031-21 256.871 256.871 0 0119-10c2.667-2.333 2.667-4.667 0-7-1.667-.667-3.333-.667-5 0l-30 15c-11.962 6.308-23.629 5.975-35-1l-5-5c10.781 1.324 21.447.657 32-2a1849.458 1849.458 0 0045-18c3.541-2.282 3.874-4.949 1-8-4.373-.986-7.373.681-9 5-16.973 8.578-34.973 13.745-54 15.5-10.093.814-17.76-3.019-23-11.5l-8.5-6.5c-.743-3.283-.076-6.283 2-9 4.08-2.957 8.247-5.79 12.5-8.5 3.167-4.5 7-8.333 11.5-11.5 1.499-7.873.166-15.206-4-22-5.645-4.084-10.978-3.75-16 1-4.611 8.806-3.778 17.139 2.5 25a28.931 28.931 0 004 1.5 23.65 23.65 0 00-3 3.5c-.951.826-1.951.992-3 .5-8.706-13.801-9.206-27.967-1.5-42.5 8.068-8.374 15.401-7.707 22 2 3.846 8.904 5.846 18.238 6 28a77.682 77.682 0 0117.5 1.5c1.566.608 2.9 1.442 4 2.5a601.395 601.395 0 012.5-27c4.636-9.91 12.47-15.243 23.5-16 13.902 3.073 21.736 11.74 23.5 26l.5 9.5c.206 4.523-.461 8.856-2 13-3.124 1.687-6.291 1.854-9.5.5a95.536 95.536 0 012.5-14c-.643-7.463-3.977-13.296-10-17.5-11.897-3.093-18.731 1.407-20.5 13.5-1.067 5.692-.234 11.025 2.5 16a135.919 135.919 0 0029 11.5c2.602.883 4.769 2.383 6.5 4.5a372.646 372.646 0 00-2 33l3 8c12.64 16.623 20.973 35.29 25 56 5.569 5.465 9.902 11.799 13 19 8.753 23.186 12.753 47.186 12 72-.02 12.911 6.147 17.411 18.5 13.5 4.923-2.327 8.09-6.16 9.5-11.5 4.171-19.484 2.504-38.484-5-57a266.12 266.12 0 00-19.5-39zm-77-133c1.101-1.098 2.434-1.265 4-.5 2.928 1.918 4.594 4.585 5 8l-1.5 1.5a55.208 55.208 0 01-3-7 9.175 9.175 0 00-4.5-2zm-65 0c4.532 3.265 5.865 7.599 4 13a42.769 42.769 0 01-1.5-9c-1.706-.808-2.539-2.141-2.5-4zm107 56a63.707 63.707 0 017 6.5c3.184 1.504 6.351 3.004 9.5 4.5 2.045 3.219 1.545 6.052-1.5 8.5-2.135.635-4.135.301-6-1-3.922-3.251-7.088-7.084-9.5-11.5-.703-2.429-.537-4.762.5-7zm-168 91c1.086.12 1.753.787 2 2-.75 5.181-3.25 9.181-7.5 12 2.476-4.234 4.309-8.9 5.5-14z"
        }
        opacity={".946"}
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M248.5 115.5c2.472 1.142 3.472 3.142 3 6a66.214 66.214 0 00-10-3.5 18.887 18.887 0 017-2.5z"
        }
        opacity={".585"}
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M219.5 116.5a18.453 18.453 0 016 .5 32.446 32.446 0 00-7 6.5c-1.22-.387-1.887-1.22-2-2.5a20.987 20.987 0 013-4.5z"
        }
        opacity={".542"}
      ></path>
    </svg>
  );
}

export default _25719SvgIcon;
/* prettier-ignore-end */
