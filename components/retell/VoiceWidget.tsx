"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { RetellWebClient } from "retell-client-js-sdk";
import { PhoneIcon, PhoneOffIcon, Loader2Icon } from "lucide-react";

type CallStatus = "idle" | "connecting" | "active" | "error";

export default function VoiceWidget() {
  const clientRef = useRef<RetellWebClient | null>(null);
  const [status, setStatus] = useState<CallStatus>("idle");
  const [agentTalking, setAgentTalking] = useState(false);

  useEffect(() => {
    clientRef.current = new RetellWebClient();
    const client = clientRef.current;

    client.on("call_started", () => setStatus("active"));
    client.on("call_ended", () => {
      setStatus("idle");
      setAgentTalking(false);
    });
    client.on("agent_start_talking", () => setAgentTalking(true));
    client.on("agent_stop_talking", () => setAgentTalking(false));
    client.on("error", () => {
      setStatus("error");
      setAgentTalking(false);
    });

    return () => {
      client.stopCall();
    };
  }, []);

  const startCall = useCallback(async () => {
    if (!clientRef.current) return;
    setStatus("connecting");

    try {
      const res = await fetch("/api/retell/create-call", { method: "POST" });
      if (!res.ok) throw new Error("Failed to create call session.");
      const { access_token } = await res.json();
      await clientRef.current.startCall({ accessToken: access_token });
    } catch {
      setStatus("error");
    }
  }, []);

  const stopCall = useCallback(() => {
    clientRef.current?.stopCall();
    setStatus("idle");
    setAgentTalking(false);
  }, []);

  const isActive = status === "active";
  const isConnecting = status === "connecting";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-2">
      {status === "error" && (
        <span className="rounded-lg bg-destructive px-3 py-1 text-xs text-destructive-foreground shadow">
          Connection failed — try again
        </span>
      )}

      {/* Ripple ring when agent is talking */}
      {agentTalking && (
        <span className="absolute inset-0 rounded-full animate-ping bg-primary/40" />
      )}

      <button
        type="button"
        onClick={isActive ? stopCall : startCall}
        disabled={isConnecting}
        aria-label={isActive ? "End voice call" : "Start voice call"}
        className={[
          "relative flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          isActive
            ? "bg-destructive text-destructive-foreground hover:bg-destructive/90"
            : "bg-foreground text-background hover:bg-foreground/90",
          isConnecting ? "cursor-not-allowed opacity-70" : "",
        ].join(" ")}
      >
        {isConnecting ? (
          <Loader2Icon className="size-6 animate-spin" />
        ) : isActive ? (
          <PhoneOffIcon className="size-6" />
        ) : (
          <PhoneIcon className="size-6" />
        )}
      </button>

      <span className="text-xs font-medium text-muted-foreground">
        {isConnecting ? "Connecting…" : isActive ? "Tap to end" : "Talk to AI"}
      </span>
    </div>
  );
}
