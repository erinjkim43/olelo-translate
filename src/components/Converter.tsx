import { useState, useCallback } from "react";
import { convertText } from "../utils/convert";

export default function Converter() {
  const [input, setInput] = useState("Hawai\u02BBi\nO\u02BBahu");
  const [copied, setCopied] = useState(false);

  const output = convertText(input);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = output;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    }
  }, [output]);

  return (
    <main className="max-w-5xl mx-auto px-4 py-10 flex-1 flex flex-col w-full">
      <h1 className="text-2xl font-bold text-uhwo-heading mb-2">
        Hawaiian Language HTML Conversion Tool
      </h1>
      <p className="text-uhwo-text mb-6">
        Copy and paste your Hawaiian language text in the input below, then copy
        the text in the output box. The output code can then be used in your
        webpage.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1 min-h-0">
        <div className="flex flex-col">
          <label
            htmlFor="input"
            className="block text-sm font-semibold text-uhwo-heading mb-1"
          >
            Input
          </label>
          <textarea
            id="input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full flex-1 min-h-48 p-3 border border-uhwo-border rounded-md resize-none bg-white focus:outline-none focus:ring-2 focus:ring-uhwo-red/25 focus:border-uhwo-red"
            placeholder="Enter Hawaiian text here…"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="output"
            className="block text-sm font-semibold text-uhwo-heading mb-1"
          >
            Output
          </label>
          <textarea
            id="output"
            value={output}
            readOnly
            className="w-full flex-1 min-h-48 p-3 border border-uhwo-border rounded-md resize-none bg-white font-mono text-sm focus:outline-none focus:ring-2 focus:ring-uhwo-red/25 focus:border-uhwo-red"
          />
        </div>
      </div>

      <div className="mt-4 flex justify-end">
        <button
          onClick={handleCopy}
          className={`px-5 py-2 rounded-md text-white font-semibold transition-colors cursor-pointer ${
            copied
              ? "bg-uhwo-green hover:bg-uhwo-green-hover"
              : "bg-uhwo-red hover:bg-uhwo-red-hover active:bg-uhwo-red-active"
          }`}
        >
          {copied ? "Copied!" : "Copy to clipboard"}
        </button>
      </div>
    </main>
  );
}
