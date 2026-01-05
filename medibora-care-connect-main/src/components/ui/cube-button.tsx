import * as React from "react";
import { cn } from "@/lib/utils";

export interface CubeButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: "primary" | "outline" | "nav";
}

const CubeButton = React.forwardRef<HTMLButtonElement, CubeButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    const baseColors = {
      primary: {
        accent: "hsl(var(--primary))",
        inner: "hsl(var(--background))",
        text: "hsl(var(--primary))",
        hoverInner: "hsl(var(--primary))",
        hoverText: "hsl(var(--primary-foreground))",
        hoverAccent: "hsl(var(--background))",
      },
      outline: {
        accent: "hsl(var(--secondary))",
        inner: "hsl(var(--background))",
        text: "hsl(var(--secondary))",
        hoverInner: "hsl(var(--secondary))",
        hoverText: "hsl(var(--secondary-foreground))",
        hoverAccent: "hsl(var(--background))",
      },
      nav: {
        accent: "hsl(var(--primary))",
        inner: "transparent",
        text: "hsl(var(--foreground))",
        hoverInner: "hsl(var(--primary))",
        hoverText: "hsl(var(--primary-foreground))",
        hoverAccent: "hsl(var(--muted))",
      },
    };

    const colors = baseColors[variant];

    return (
      <button
        ref={ref}
        className={cn(
          "cube-btn group relative inline-block cursor-pointer border-0 bg-transparent px-5 py-3 font-semibold tracking-wide transition-all duration-500 z-[1]",
          className
        )}
        {...props}
      >
        {/* Top face */}
        <span
          className="absolute bottom-full left-[5px] right-[-5px] h-[8px] skew-x-[-45deg] transition-all duration-400 group-hover:opacity-80"
          style={{ background: colors.accent }}
        >
          <span
            className="absolute inset-[2px] transition-all duration-400"
            style={{ background: colors.inner }}
          />
        </span>

        {/* Main background */}
        <span
          className="absolute inset-0 transition-all duration-400"
          style={{ background: colors.accent }}
        >
          <span
            className="absolute inset-[2px] transition-all duration-400 group-hover:inset-0"
            style={{ background: colors.inner }}
          />
        </span>

        {/* Right face */}
        <span
          className="absolute left-full top-[-5px] bottom-[5px] w-[8px] skew-y-[-45deg] transition-all duration-400 group-hover:opacity-80"
          style={{ background: colors.accent }}
        >
          <span
            className="absolute inset-[2px] transition-all duration-400"
            style={{ background: colors.inner }}
          />
        </span>

        {/* Text */}
        <span
          className="relative z-10 transition-all duration-400"
          style={{ color: colors.text }}
        >
          <span className="group-hover:hidden">{children}</span>
          <span 
            className="hidden group-hover:inline"
            style={{ color: colors.hoverText }}
          >
            {children}
          </span>
        </span>

        <style>{`
          .cube-btn:hover > span:first-child,
          .cube-btn:hover > span:nth-child(2),
          .cube-btn:hover > span:nth-child(3) {
            background: ${colors.hoverAccent} !important;
          }
          .cube-btn:hover > span:first-child > span,
          .cube-btn:hover > span:nth-child(2) > span,
          .cube-btn:hover > span:nth-child(3) > span {
            background: ${colors.hoverInner} !important;
          }
          .cube-btn:active {
            animation: cube-bounce 0.1s linear;
          }
          @keyframes cube-bounce {
            50% { transform: scale(0.95); }
          }
        `}</style>
      </button>
    );
  }
);

CubeButton.displayName = "CubeButton";

// Link version
export interface CubeLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "outline" | "nav";
}

const CubeLink = React.forwardRef<HTMLAnchorElement, CubeLinkProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    const baseColors = {
      primary: {
        accent: "hsl(var(--primary))",
        inner: "hsl(var(--background))",
        text: "hsl(var(--primary))",
        hoverInner: "hsl(var(--primary))",
        hoverText: "hsl(var(--primary-foreground))",
        hoverAccent: "hsl(var(--background))",
      },
      outline: {
        accent: "hsl(var(--secondary))",
        inner: "hsl(var(--background))",
        text: "hsl(var(--secondary))",
        hoverInner: "hsl(var(--secondary))",
        hoverText: "hsl(var(--secondary-foreground))",
        hoverAccent: "hsl(var(--background))",
      },
      nav: {
        accent: "hsl(var(--primary))",
        inner: "transparent",
        text: "hsl(var(--foreground))",
        hoverInner: "hsl(var(--primary))",
        hoverText: "hsl(var(--primary-foreground))",
        hoverAccent: "hsl(var(--muted))",
      },
    };

    const colors = baseColors[variant];

    return (
      <a
        ref={ref}
        className={cn(
          "cube-btn group relative inline-block cursor-pointer border-0 bg-transparent px-5 py-3 font-semibold tracking-wide transition-all duration-500 z-[1]",
          className
        )}
        {...props}
      >
        {/* Top face */}
        <span
          className="absolute bottom-full left-[5px] right-[-5px] h-[8px] skew-x-[-45deg] transition-all duration-400 group-hover:opacity-80"
          style={{ background: colors.accent }}
        >
          <span
            className="absolute inset-[2px] transition-all duration-400"
            style={{ background: colors.inner }}
          />
        </span>

        {/* Main background */}
        <span
          className="absolute inset-0 transition-all duration-400"
          style={{ background: colors.accent }}
        >
          <span
            className="absolute inset-[2px] transition-all duration-400 group-hover:inset-0"
            style={{ background: colors.inner }}
          />
        </span>

        {/* Right face */}
        <span
          className="absolute left-full top-[-5px] bottom-[5px] w-[8px] skew-y-[-45deg] transition-all duration-400 group-hover:opacity-80"
          style={{ background: colors.accent }}
        >
          <span
            className="absolute inset-[2px] transition-all duration-400"
            style={{ background: colors.inner }}
          />
        </span>

        {/* Text */}
        <span
          className="relative z-10 transition-all duration-400"
          style={{ color: colors.text }}
        >
          <span className="group-hover:hidden">{children}</span>
          <span 
            className="hidden group-hover:inline"
            style={{ color: colors.hoverText }}
          >
            {children}
          </span>
        </span>

        <style>{`
          .cube-btn:hover > span:first-child,
          .cube-btn:hover > span:nth-child(2),
          .cube-btn:hover > span:nth-child(3) {
            background: ${colors.hoverAccent} !important;
          }
          .cube-btn:hover > span:first-child > span,
          .cube-btn:hover > span:nth-child(2) > span,
          .cube-btn:hover > span:nth-child(3) > span {
            background: ${colors.hoverInner} !important;
          }
          .cube-btn:active {
            animation: cube-bounce 0.1s linear;
          }
          @keyframes cube-bounce {
            50% { transform: scale(0.95); }
          }
        `}</style>
      </a>
    );
  }
);

CubeLink.displayName = "CubeLink";

export { CubeButton, CubeLink };
