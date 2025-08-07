import { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.VITE_PROJECT_URL_SUPABASE!,
  process.env.VITE_SUPABASE_API_KEY!
);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const { message } = req.body || {};
    if (!message) {
      return res.status(400).json({ error: 'No message provided' });
    }

    let productSummary = '';
    if (message.toLowerCase().includes('producto')) {
      const { data: products, error } = await supabase
        .from('products')
        .select('name, description, brand, images')
        .limit(10);

      if (error) {
        console.error('Error consultando productos:', error);
      } else if (products && products.length > 0) {
        productSummary = products
          .map((p) => `- ${p.name}: ${p.description} (Marca: ${p.brand}) - Imagen: ${p.images}`)
          .join('\n');
      }
    }

    const messages = [
      { role: 'system', content: 'Eres un asistente amable y útil.' },
    ];

    if (productSummary) {
      messages.push({
        role: 'system',
        content: `Estos son algunos productos disponibles:\n${productSummary}`,
      });
      messages.push({
        role: 'system',
        content: 'Responde tomando en cuenta esta información.',
      });
    }

    messages.push({ role: 'user', content: message });

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || 'Error en la API de Groq');
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "No se pudo generar una respuesta.";

    return res.status(200).json({ reply });
  } catch (error) {
    console.error('Error en openai-chat:', error);
    return res.status(500).json({ error: error.message || 'Error desconocido' });
  }
}
