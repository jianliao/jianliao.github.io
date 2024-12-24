function isSummarizerServiceSupported(): boolean {
  if (
    typeof window !== "undefined" &&
    "ai" in window &&
    "summarizer" in window.ai
  ) {
    return true;
  } else {
    return false;
  }
}

async function capableToRunSummarizerService(): Promise<
  "no" | "readily" | "after-download"
> {
  if (isSummarizerServiceSupported()) {
    const capabilities = await window.ai.summarizer.capabilities();
    return capabilities.available;
  } else {
    return "no";
  }
}

async function getSummarizer(options: any) {
  let summarizer = null;
  if (!isSummarizerServiceSupported()) return summarizer;

  const available = await capableToRunSummarizerService();

  if (available === "readily") {
    summarizer = await window.ai.summarizer.create(options);
  } else {
    summarizer = await self.ai.summarizer.create(options);
    summarizer.addEventListener("downloadprogress", (e: any) => {
      console.log(e.loaded, e.total);
    });
    await summarizer.ready;
  }
  return summarizer;
}

export {
  isSummarizerServiceSupported,
  capableToRunSummarizerService,
  getSummarizer,
};
