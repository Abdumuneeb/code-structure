let user: any = null;
function initFreshChat() {
  try {
    (window as any)?.fcWidget?.init({
      token: "e37804d5-8519-47e0-87bf-2409ce2ce28f",
      host: "https://nowsoftware.freshchat.com",
      widgetUuid: "004a0394-9488-4379-9e2e-c8ea4e438838",
    });
  } catch (error) {
    console.error(error);
  }
}

function initialize(i: any, t: any) {
  var e;
  i?.getElementById(t)
    ? initFreshChat()
    : (((e = i?.createElement("script")).id = t),
      (e.async = !0),
      (e.src = "https://nowsoftware.freshchat.com/js/widget.js"),
      (e.onload = initFreshChat),
      i.head.appendChild(e));
}

if (typeof window !== "undefined") {
  if (window.addEventListener) {
    window.addEventListener("load", initiateCall, false);
  } else if ((window as any).attachEvent) {
    (window as any).attachEvent("onload", initiateCall);
  }
}

function initiateCall() {
  initialize(document, "Freshchat-js-sdk");
}

export const startChat = () => {
  // if (process.env.NEXT_PUBLIC_ENABLE_FRESHCHAT && process.env.NODE_ENV === "production") {
  //   user = token;
  initiateCall();
  // }
};
