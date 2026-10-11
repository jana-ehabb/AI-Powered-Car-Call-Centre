
from dotenv import load_dotenv

from livekit.agents import AgentServer, AgentSession, JobContext, cli
from livekit.plugins import google
from api import AssistantFnc
from prompts import INSTRUCTIONS, WELCOME_MESSAGE

load_dotenv()

server = AgentServer()


@server.rtc_session()
async def entrypoint(ctx: JobContext):
    session = AgentSession(
        llm=google.realtime.RealtimeModel(
    voice="Puck",
    instructions=INSTRUCTIONS,
)
    )

    assistant = AssistantFnc(instructions=INSTRUCTIONS)

    await session.start(
        agent=assistant,
        room=ctx.room,
    )

    # Start the conversation with the welcome message.
    await session.generate_reply(
        instructions=WELCOME_MESSAGE
    )


if __name__ == "__main__":
    cli.run_app(server)
