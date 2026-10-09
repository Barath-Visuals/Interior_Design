import React from "react";

export default function Frame() {
  const projectData = {
    title: "Galgotias Project Board 3rd Sem 2028",
    invitationTitle: "You're Invited to Join the Team - Testing",
    inviterName: "Jaishaanth",
    inviterEmail: "jaishaanth.r@guvi.in",
    teamName: "Testing jai",
    organizationName: "GUVI - Galgotias Project Board 3rd Sem 2028",
    copyrightYear: "2025",
  };

  const handleRegisterClick = () => {
    console.log("Register & Join button clicked");
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#f8fbff] p-4 sm:p-6 md:p-10">
      <article className="flex flex-col items-start gap-6 bg-white shadow-md rounded-2xl p-5 sm:p-8 w-full max-w-[900px]">
        {/* HEADER */}
        <header className="flex flex-col items-start gap-5 w-full">
          <div className="flex flex-col items-start gap-8 w-full">
            <div className="flex flex-col items-start gap-5 w-full">
              {/* Title */}
              <div className="flex items-center justify-center w-full">
                <h1 className="text-[#2563ebcc] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center md:text-left">
                  {projectData.title}
                </h1>
              </div>

              {/* Invitation Title */}
              <div className="flex items-center w-full p-1 sm:py-2">
                <h2 className="text-[#2563ebcc] bg-[#e8f1ff] p-2 rounded-lg text-lg sm:text-2xl md:text-3xl font-normal text-left">
                  {projectData.invitationTitle}
                </h2>
              </div>
            </div>
          </div>

          {/* SECTION */}
          <section
            className="flex flex-col items-center sm:items-start gap-5 w-full mt-4"
            aria-labelledby="welcome-heading"
          >
            <h3
              id="welcome-heading"
              className="text-xl sm:text-2xl font-medium text-center sm:text-left"
            >
              <span className="text-black">Welcome, </span>
              <span className="text-[#2f80dc]">Participant!</span>
            </h3>

            {/* Invitation Details */}
            <div className="flex flex-col items-center sm:items-start gap-3 w-full">
              <p className="text-black text-base sm:text-lg md:text-xl font-light text-center sm:text-left leading-relaxed">
                You've been invited by{" "}
                <span className="font-medium">
                  {projectData.inviterName} ({projectData.inviterEmail})
                </span>{" "}
                to join the team <strong>{projectData.teamName}</strong> for the{" "}
                <strong>{projectData.organizationName}</strong>.
              </p>

              <p className="text-black text-base sm:text-lg md:text-xl font-light text-center sm:text-left leading-relaxed">
                Click the button below to Register and Join the team:
              </p>
            </div>

            {/* Button */}
            <button
              type="button"
              onClick={handleRegisterClick}
              className="mt-3 px-6 py-3 bg-[#007bff] hover:bg-[#0069d9] text-white font-medium rounded-lg transition-colors text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#007bff] focus:ring-offset-2"
            >
              Register &amp; Join
            </button>
          </section>
        </header>

        {/* ASIDE */}
        <aside
          className="w-full bg-[#fff8dd] rounded-xl p-4 sm:p-5 text-center sm:text-left"
          role="note"
          aria-label="Important information"
        >
          <p className="text-black text-sm sm:text-base leading-relaxed">
            <span className="font-medium">Important:</span> If you have not set
            your password yet, you need to set your password before you can log
            in and join the team. Please check your onboarding email for
            instructions on setting your password if this is your first time
            using this platform.
          </p>
        </aside>

        {/* FOOTER */}
        <footer className="w-full flex justify-center mt-4">
          <p className="text-[#8993a1] text-xs sm:text-sm text-center">
            © {projectData.copyrightYear} {projectData.organizationName}. All
            rights reserved.
          </p>
        </footer>
      </article>
    </main>
  );
}
