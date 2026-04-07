"use client";

import { useEffect } from "react";

const RETELL_WIDGET_SRC = "https://dashboard.retellai.com/retell-widget.js";

function removeScript() {
  document.getElementById("retell-widget")?.remove();
}

export default function RetellChatEmbed() {
  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_RETELL_PUBLIC_KEY;
    const agentId = process.env.NEXT_PUBLIC_RETELL_CHAT_AGENT_ID;
    if (!publicKey || !agentId) return;

    removeScript();

    const script = document.createElement("script");
    script.id = "retell-widget";
    script.src = RETELL_WIDGET_SRC;
    script.type = "module";
    script.dataset.publicKey = publicKey;
    script.dataset.agentId = agentId;

    const title = process.env.NEXT_PUBLIC_RETELL_CHAT_TITLE;
    const color = process.env.NEXT_PUBLIC_RETELL_CHAT_COLOR;
    const botName = process.env.NEXT_PUBLIC_RETELL_CHAT_BOT_NAME;
    const popupMessage = process.env.NEXT_PUBLIC_RETELL_CHAT_POPUP_MESSAGE;
    const showAiPopup = process.env.NEXT_PUBLIC_RETELL_CHAT_SHOW_AI_POPUP;
    const showAiPopupTime = process.env.NEXT_PUBLIC_RETELL_CHAT_SHOW_AI_POPUP_TIME;
    const logoUrl = process.env.NEXT_PUBLIC_RETELL_CHAT_LOGO_URL;
    const agentVersion = process.env.NEXT_PUBLIC_RETELL_CHAT_AGENT_VERSION;

    if (agentVersion) script.dataset.agentVersion = agentVersion;
    if (title) script.dataset.title = title;
    if (logoUrl) script.dataset.logoUrl = logoUrl;
    if (color) script.dataset.color = color;
    if (botName) script.dataset.botName = botName;
    if (popupMessage) script.dataset.popupMessage = popupMessage;
    if (showAiPopup) script.dataset.showAiPopup = showAiPopup;
    if (showAiPopupTime) script.dataset.showAiPopupTime = showAiPopupTime;

    document.head.appendChild(script);

    return () => removeScript();
  }, []);

  return null;
}
