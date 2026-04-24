import { Button } from "../Button";
import { Checkbox } from "../Fields/Checkbox";
import { Input } from "../Fields/Input";

interface ProfileSectionProps {
  githubUsername: string;
  setGithubUsername: (value: string) => void;
  showFollowers: boolean;
  setShowFollowers: (value: boolean) => void;
  showRepositories: boolean;
  setShowRepositories: (value: boolean) => void;
}

function ProfileSection({
  githubUsername,
  setGithubUsername,
  showFollowers,
  setShowFollowers,
  showRepositories,
  setShowRepositories,
}: ProfileSectionProps) {
  return (
    <section className="rounded-3xl border bg-white p-6">
      <h2 className="text-lg font-semibold">Configuração do Perfil</h2>

      <div className="mt-6">
        <div className="mb-4 flex items-end gap-2 sm:flex-row">
          <Input
            name="Usuário do GitHub"
            id="github-username"
            type="text"
            value={githubUsername}
            onChange={(e) => setGithubUsername(e.target.value)}
            placeholder="seu-usuario"
            className="flex-1"
          />
          <Button>Buscar</Button>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          <Checkbox
            id="show-followers"
            checked={showFollowers}
            onChange={setShowFollowers}
            name="Mostrar seguidores"
            description="Exibe contagem no perfil."
          />

          <Checkbox
            id="show-repositories"
            checked={showRepositories}
            onChange={setShowRepositories}
            name="Mostrar repositórios"
            description="Exibe numero de repos."
          />
        </div>
      </div>
    </section>
  );
}

export default ProfileSection;
