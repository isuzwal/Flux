import Groq from "groq-sdk";

interface ButtonData {
  id: string;
  type: string;
  position: { x: number; y: number };
  props: { text: string; variant: string };
}
// AI  Call

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY as string });
export async function getGroqChatCompletion(prompt:string) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content:prompt
      },
    ],
    model: "llama-3.1-8b-instant",
  });
}

// Prompt  
export function createFullPagePrompt(buttons: ButtonData[]): string {
  const buttonList = buttons.map(btn => 
    `- Button with text "${btn.props.text}", variant: ${btn.props.variant}, at position (${btn.position.x}px, ${btn.position.y}px)`
  ).join('\n');

  return `Generate a complete, self-contained HTML page with these buttons:

${buttonList}

Requirements:
- Complete HTML with <!DOCTYPE html>, <head>, and <body>
- Use Tailwind CSS via CDN: <script src="https://cdn.tailwindcss.com"></script>
- Position buttons using absolute positioning at the exact coordinates specified
- Primary variant: black background , white text (text-white)
- Secondary variant: blue background , white text (text-white)
- Add padding, rounded corners, and hover effects
- Make it look professional and modern
- Return ONLY the complete HTML code, no explanations or markdown`;
}