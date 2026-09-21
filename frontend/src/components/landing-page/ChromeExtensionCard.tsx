import ChromeLogo from "@/components/landing-page/ChromeLogo";

export default function ChromeExtensionCard() {
  return (
    <div className="card card-border bg-base-200 mx-auto max-w-xl">
      <div className="card-body items-center text-center">
        <ChromeLogo size={48} />
        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
          <h1 className="text-3xl font-bold">Chrome Extension</h1>
          <span className="badge badge-info">Coming soon</span>
        </div>
        <p className="text-base-content/70 mt-2 max-w-md text-lg leading-relaxed">
          Check if any service is down directly from your browser. The downDATA Chrome extension gives you instant access to real-time service status
          without leaving your current tab.
        </p>
        <button type="button" className="btn btn-primary mt-4" disabled>
          Install Extension
        </button>
      </div>
    </div>
  );
}
