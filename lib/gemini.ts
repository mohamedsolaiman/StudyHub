import { GoogleGenAI, Type } from '@google/genai';
import { Module } from '../types';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable not set. This is required to use AI features.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const responseSchema = {
    type: Type.ARRAY,
    items: {
      type: Type.OBJECT,
      properties: {
        title: {
          type: Type.STRING,
          description: "The title of the course module.",
        },
        lessons: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
                title: {
                    type: Type.STRING,
                    description: "The title of the lesson."
                },
                type: {
                    type: Type.STRING,
                    description: "The type of lesson. Can be 'video', 'text', 'quiz', or 'code'.",
                    enum: ['video', 'text', 'quiz', 'code']
                },
                duration: {
                    type: Type.NUMBER,
                    description: "Estimated duration of the lesson in minutes."
                }
            },
            required: ["title", "type", "duration"],
          },
          description: 'A list of lessons within this module.',
        },
      },
      required: ["title", "lessons"],
    },
};

export const generateCourseOutline = async (courseTitle: string): Promise<Module[]> => {
    try {
        const prompt = `Create a detailed course outline for a course titled "${courseTitle}". The outline should include modules and lessons. For each lesson, suggest a title, a lesson type (from 'video', 'text', 'quiz', 'code'), and an estimated duration in minutes. The response must be a JSON array of modules.`;

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: responseSchema,
            },
        });

        const jsonText = response.text.trim();
        const generatedModules = JSON.parse(jsonText);

        return generatedModules.map((module: any, moduleIndex: number) => ({
            id: `m-gen-${moduleIndex + 1}`,
            title: module.title,
            lessons: module.lessons.map((lesson: any, lessonIndex: number) => ({
                ...lesson,
                id: `l-gen-${moduleIndex + 1}-${lessonIndex + 1}`,
                content: '', // Content will be added later by the creator
            })),
        }));

    } catch (error) {
        console.error("Error generating course outline:", error);
        throw new Error("Failed to generate course outline. Please check your API key and try again.");
    }
};
