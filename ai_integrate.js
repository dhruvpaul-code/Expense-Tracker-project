// 🔑 Replace with your actual Gemini API Key
const API_KEY = "AIzaSyA3_nxBo_bHM4-VbHEfQeIsuUx13XTvBYA";

// Show/Hide AI Div
document.getElementById("ask-ai-btn").addEventListener("click", () => {
  const aiDiv = document.getElementById("ai-div");
  aiDiv.style.display = "";
});

// Send message to Gemini
document.getElementById("send-btn").addEventListener("click", async () => {
  const prompt = document.getElementById("user-input").value;
  const responseDiv = document.getElementById("ai-response");

  if (!prompt) return;

  responseDiv.innerHTML = "⏳ Thinking...";

  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      }
    );

    const data = await res.json();
    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text || "⚠️ No reply";
    responseDiv.innerHTML = "🤖 " + reply;
  } catch (error) {
    responseDiv.innerHTML = "❌ Error: " + error.message;
  }
});
