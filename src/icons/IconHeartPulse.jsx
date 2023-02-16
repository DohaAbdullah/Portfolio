// icon:heart-pulse | Bootstrap https://icons.getbootstrap.com/ | Bootstrap
import * as React from "react";

function HeartPulseIcon(props) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053.918 3.995.78 5.323 1.508 7H.43c-2.128-5.697 4.165-8.83 7.394-5.857.06.055.119.112.176.171a3.12 3.12 0 01.176-.17c3.23-2.974 9.522.159 7.394 5.856h-1.078c.728-1.677.59-3.005.108-3.947C13.486.878 10.4.28 8.717 2.01L8 2.748zM2.212 10h1.315C4.593 11.183 6.05 12.458 8 13.795c1.949-1.337 3.407-2.612 4.473-3.795h1.315c-1.265 1.566-3.14 3.25-5.788 5-2.648-1.75-4.523-3.434-5.788-5zm8.252-6.686a.5.5 0 00-.945.049L7.921 8.956 6.464 5.314a.5.5 0 00-.88-.091L3.732 8H.5a.5.5 0 000 1H4a.5.5 0 00.416-.223l1.473-2.209 1.647 4.118a.5.5 0 00.945-.049l1.598-5.593 1.457 3.642A.5.5 0 0012 9h3.5a.5.5 0 000-1h-3.162l-1.874-4.686z"
      />
    </svg>
  );
}

export default HeartPulseIcon;