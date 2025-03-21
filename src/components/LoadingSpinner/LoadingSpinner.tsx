import { PropsWithChildren } from "react";
import "./LoadingSpinner.css";

export function LoadingSpinner({ children }: PropsWithChildren) {
  return (
    <div className="loading-spinner">
      <div>
        <span>
          <svg viewBox="22 22 44 44">
            <circle cx="44" cy="44" r="20.2" fill="none" strokeWidth="3.6"></circle>
          </svg>
        </span>
      </div>
      {children !== null ? <div>{children}</div> : null}
    </div>
  );
}

export default LoadingSpinner;
