import { useState } from "react";
import CustomLinksSection from "./components/ProfileEditor/CustomLinksSection";
import ProfileSection from "./components/ProfileEditor/ProfileSection";
import SocialSection from "./components/ProfileEditor/SocialSection";
import PhonePreview from "./components/ProfilePreview/PhonePreview";
import type { SocialLinks } from "./types/SocialMedia";
import type { CustomLink } from "./types/Profile";

function App() {
  const [githubUsername, setGithubUsername] = useState("");
  const [showFollowers, setShowFollowers] = useState(false);
  const [showRepositories, setShowRepositories] = useState(false);
  const [socialLinks, setSocialLinks] = useState<SocialLinks>({
    instagram: "",
    youtube: "",
    linkedin: "",
    x: "",
  });
  const [customLinks, setCustomLinks] = useState<CustomLink[]>([]);

  function setSocialLink(key: keyof SocialLinks, value: string) {
    setSocialLinks((prev) => ({ ...prev, [key]: value }));
  }

  function addCustomLink() {
    setCustomLinks((prev) => [
      ...prev,
      { id: crypto.randomUUID(), title: "", url: "" },
    ]);
  }

  function removeCustomLink(id: string) {
    setCustomLinks((prev) => prev.filter((link) => link.id !== id));
  }

  function updateCustomLink(id: string, field: "title" | "url", value: string) {
    setCustomLinks((prev) =>
      prev.map((link) => (link.id === id ? { ...link, [field]: value } : link)),
    );
  }

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <div className="mx-auto flex max-w-400 flex-col gap-8 px-6 py-10 lg:flex-row">
        <div className="flex-1 space-y-6">
          <ProfileSection
            githubUsername={githubUsername}
            setGithubUsername={setGithubUsername}
            showFollowers={showFollowers}
            setShowFollowers={setShowFollowers}
            showRepositories={showRepositories}
            setShowRepositories={setShowRepositories}
          />
          <SocialSection
            socialLinks={socialLinks}
            setSocialLink={setSocialLink}
          />
          <CustomLinksSection
            customLinks={customLinks}
            addCustomLink={addCustomLink}
            removeCustomLink={removeCustomLink}
            updateCustomLink={updateCustomLink}
          />
        </div>
        <aside className="w-full lg:w-170">
          <PhonePreview
            githubUsername={githubUsername}
            showFollowers={showFollowers}
            showRepositories={showRepositories}
            socialLinks={socialLinks}
            customLinks={customLinks}
          />
        </aside>
      </div>
    </main>
  );
}

export default App;
