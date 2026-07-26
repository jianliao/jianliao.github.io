import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

/** @type {import('eslint').Linter.Config[]} */
const eslintConfig = [
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
  {
    // The mounted-guard pattern (useEffect(() => setMounted(true), [])) is the
    // standard, correct way to avoid hydration mismatches for browser-only APIs
    // (next-themes, window.ai). react-hooks/set-state-in-effect (a React
    // Compiler performance heuristic) false-positives on it here.
    files: ["app/theme-switcher.tsx", "app/playground/page.tsx"],
    rules: {
      "react-hooks/set-state-in-effect": "off",
    },
  },
];

export default eslintConfig;
