import "../assets/css/App.scss";


const AIGradingAssistant = () => {
    return <>
        <p><img src="/images/ai-grading-assistant.jpg" style={{ paddingRight: "20px", float: "right", width: "200px" }} />This is a project I was tasked with during my employment at Perfection Learning.</p>

        <p>Certain assignments include questions whose answers are processed by the OpenAI /v1/chat/completions API. The assignment question and the student's response are passed to the API, along with grading instructions and a rubric, and the API returns feedback, including suggested points to award and an assessment of the strengths and weaknesses of the student's response.</p>

        <p>When the teacher navigates to the assignment to grade it, the AI-generated feedback is displayed for the teacher to review, and the teacher is given the ability to use the strengths and weaknesses analysis as a basis for human-generated feedback.</p>

        <p>The AI Grading Assistant processing is triggered by a cronjob.</p>

        <p><a href="https://github.com/ricktoews/openai-grading-assistant" target="_blank">OpenAI Grading Assistant Code</a></p>

        <p><img className="screenshot" src="/images/grading_assistant_pending.png" width="500" /></p>
        <p><img className="screenshot" src="/images/grading_assistant_rubric.png" width="500" /></p>
        <p><img className="screenshot" src="/images/grading_assistant_processed.png" width="500" /></p>

    </>
};

export default AIGradingAssistant;
