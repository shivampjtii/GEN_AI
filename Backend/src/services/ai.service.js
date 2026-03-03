const { GoogleGenAI} = require("@google/genai");
const { z } = require("zod");
const { zodToJsonSchema } = require("zod-to-json-schema");
const { resume, selfDescription, jobDescription } = require("./text");

const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_GENAI_API_KEY
})

const interviewReportSchema = z.object({
    technicalQuestions: z.array(z.object({
        question: z.string().description("The technical question can be asked in the interview."),
        intention: z.string().description("The intention of the interviewer behind asking the question."),
        answer: z.string().description("How to answer this question, what points to cover, what approach to take etc."),
    })).description("Technical questions that can be asked in the interview along with their intention and how to answer them"),
    behavioralQuestions: z.array(z.object({
        question: z.string().description("The technical question can be asked in the interview."),
        intention: z.string().description("The intention of the interviewer behind asking the question."),
        answer: z.string().description("How to answer this question, what points to cover, what approach to take etc."),
    })).description("Behavioral questions that can be asked in the interview along with their intention and how to answer them"),
    skillGaps: z.array(z.object({
        skill: z.string().description("The skill which the candidate is lacking"),
        severity: z.enum(["low", "medium", "high"]).description("The severity of this skill gap, i.e. how important is it")
    })).description("List of skill gaps in the candidate's profile along with their severity"),
    preparationPlan: z.array(z.object({
        day: z.number().description("The day number in the preparation plan, starting from 1"),
        focus: z.string()
    }))
})

async function generateInterviewReport({resume, selfDescription, jobDescription }){

}

module.exports = invokeGeminiAi;