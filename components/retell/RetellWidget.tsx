"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

type RetellMode = "chat" | "callback";

const RETELL_WIDGET_SRC = "https://dashboard.retellai.com/retell-widget.js";

function getModeForPathname(pathname: string): RetellMode {
  // Per your requirement:
  // - Chat widget on /contact
  // - Callback (voice) widget everywhere else (including /)
  if (pathname.startsWith("/contact")) return "chat";

  // Callback widget requires a Retell phone number; if it's not configured,
  // fallback to chat so the site still has a working widget.
  const hasCallbackConfig = Boolean(
    process.env.NEXT_PUBLIC_RETELL_PUBLIC_KEY &&
      process.env.NEXT_PUBLIC_RETELL_VOICE_AGENT_ID &&
      process.env.NEXT_PUBLIC_RETELL_PHONE_NUMBER,
  );

  return hasCallbackConfig ? "callback" : "chat";
}

function removeExistingRetellArtifacts() {
  document.getElementById("retell-widget")?.remove();

  // Retell injects UI into DOM; clear it so we can re-init reliably.
  const candidates = Array.from(
    document.querySelectorAll<HTMLElement>(
      [
        '[id*="retell"]',
        '[class*="retell"]',
        '[data-retell]',
        '[data-retell-widget]',
        'iframe[src*="retell"]',
        'iframe[src*="retellai"]',
      ].join(","),
    ),
  );

  for (const el of candidates) {
    if (el === document.documentElement || el === document.body) continue;
    el.parentElement?.removeChild(el);
  }
}

function buildWidgetScript(mode: RetellMode) {
  const publicKey = process.env.NEXT_PUBLIC_RETELL_PUBLIC_KEY;
  if (!publicKey) return null;

  const script = document.createElement("script");
  script.id = "retell-widget";
  script.src = RETELL_WIDGET_SRC;
  script.type = "module";

  script.dataset.publicKey = publicKey;

  script.addEventListener("load", () => {
    console.info("[retell] widget script loaded", {
      mode,
      publicKeyPresent: Boolean(publicKey),
      agentId: script.dataset.agentId,
      widget: script.dataset.widget,
      phoneNumber: script.dataset.phoneNumber,
    });
  });
  script.addEventListener("error", () => {
    console.error("[retell] widget script failed to load", {
      mode,
      src: script.src,
    });
  });

  if (mode === "chat") {
    const chatAgentId = process.env.NEXT_PUBLIC_RETELL_CHAT_AGENT_ID;
    if (!chatAgentId) return null;
    script.dataset.agentId = chatAgentId;

    const chatAgentVersion = process.env.NEXT_PUBLIC_RETELL_CHAT_AGENT_VERSION;
    const chatTitle = process.env.NEXT_PUBLIC_RETELL_CHAT_TITLE;
    const chatColor = process.env.NEXT_PUBLIC_RETELL_CHAT_COLOR;
    const chatBotName = process.env.NEXT_PUBLIC_RETELL_CHAT_BOT_NAME;
    const chatPopupMessage = process.env.NEXT_PUBLIC_RETELL_CHAT_POPUP_MESSAGE;
    const chatShowAiPopup = process.env.NEXT_PUBLIC_RETELL_CHAT_SHOW_AI_POPUP;
    const chatShowAiPopupTime =
      process.env.NEXT_PUBLIC_RETELL_CHAT_SHOW_AI_POPUP_TIME;
    const chatLogoUrl = process.env.NEXT_PUBLIC_RETELL_CHAT_LOGO_URL;

    if (chatAgentVersion) script.dataset.agentVersion = chatAgentVersion;
    if (chatTitle) script.dataset.title = chatTitle;
    if (chatLogoUrl) script.dataset.logoUrl = chatLogoUrl;
    if (chatColor) script.dataset.color = chatColor;
    if (chatBotName) script.dataset.botName = chatBotName;
    if (chatPopupMessage) script.dataset.popupMessage = chatPopupMessage;
    if (chatShowAiPopup) script.dataset.showAiPopup = chatShowAiPopup;
    if (chatShowAiPopupTime)
      script.dataset.showAiPopupTime = chatShowAiPopupTime;
  } else {
    const voiceAgentId = process.env.NEXT_PUBLIC_RETELL_VOICE_AGENT_ID;
    const phoneNumber = process.env.NEXT_PUBLIC_RETELL_PHONE_NUMBER;
    if (!voiceAgentId || !phoneNumber) return null;

    script.dataset.agentId = voiceAgentId;
    script.dataset.widget = "callback";
    script.dataset.phoneNumber = phoneNumber;

    const callbackTitle = process.env.NEXT_PUBLIC_RETELL_CALLBACK_TITLE;
    const callbackColor = process.env.NEXT_PUBLIC_RETELL_CALLBACK_COLOR;
    const callbackCountries = process.env.NEXT_PUBLIC_RETELL_CALLBACK_COUNTRIES;
    const callbackTcUrl = process.env.NEXT_PUBLIC_RETELL_CALLBACK_TC_URL;

    if (callbackTitle) script.dataset.title = callbackTitle;
    if (callbackColor) script.dataset.color = callbackColor;
    if (callbackCountries) script.dataset.countries = callbackCountries;
    if (callbackTcUrl) script.dataset.tc = callbackTcUrl;
  }

  return script;
}

export default function RetellWidget() {
  const pathname = usePathname() || "/";

  useEffect(() => {
    const mode = getModeForPathname(pathname);
    const script = buildWidgetScript(mode);
    removeExistingRetellArtifacts();
    if (script) document.head.appendChild(script);

    return () => {
      removeExistingRetellArtifacts();
    };
  }, [pathname]);

  return null;
}

