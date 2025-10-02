// 🔑 Replace with your actual Gemini API Key
const API_KEY = "AIzaSyCSqMdW4giADOg8Veo3JLsWRVHthalZDnY";


// Show/Hide AI Div
document.getElementById("ask-ai-btn").addEventListener("click", () => {
  const aiDiv = document.getElementById("ai-div");
  aiDiv.style.display = "";
});


// Send message to Gemini
document.getElementById("send-btn").addEventListener("click", async () => {
  const query = document.getElementById("user-input").value;
  const responseDiv = document.getElementById("ai-response");

  if (!query) return;

  let tableData = [];
  
  document.querySelectorAll(".expensetable tbody tr").forEach((newRow) => {
    const cells = newRow.querySelectorAll("td");
    tableData.push({
      date: cells[0].innerText,
      category: cells[1].innerText,
      amount: cells[2].innerText,
      notes: cells[3].innerText,
    });
  });
  let incometabledata = [];
  document.querySelectorAll(".incometable tbody tr").forEach((newIncomeRow) => {
    const cellsdata = newIncomeRow.querySelectorAll("td");
    incometabledata.push({
      amount: cellsdata[0].innerText,
      sources: cellsdata[1].innerText,
    });
  });

  const prompt = `You are an expense tracker expert. Here is my expense data and income data in rupees respectively: ${JSON.stringify(
    tableData)} ${JSON.stringify(incometabledata)}. Now answer this: ${query}`;

  responseDiv.innerHTML = "⏳ Thinking...";

  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
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
    const html=marked.parse(reply)
    responseDiv.innerHTML = "🤖 " + html;
  } catch (error) {
    responseDiv.innerHTML = "❌ Error: " + error.message;
  }
});
