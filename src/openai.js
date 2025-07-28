import OpenAI from "openai";
import { GITHUB_TOKEN } from "./apiKey.js";

const token = GITHUB_TOKEN;
const endpoint = "https://models.github.ai/inference";
const model = "openai/gpt-4.1";

export async function sendMsgToOpenAI(message) {

  const client = new OpenAI({ baseURL: endpoint, apiKey: token, dangerouslyAllowBrowser: true });

  const response = await client.chat.completions.create({
    messages: [
        { role:"system", content: "" },
        { role:"user", content: message }
      ],
      temperature: 0.7,
      top_p: 1,
      model: model
  });

  return response.choices[0].message.content;
}

sendMsgToOpenAI().catch((err) => {
  console.error("The sample encountered an error:", err);
});
