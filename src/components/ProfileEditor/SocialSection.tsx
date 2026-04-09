import { SOCIAL_FIELDS } from "../../resources/SocialFields";
import { Input } from "../Fields/Input";

function SocialSection() {
  return (
    <section className="rounded-3xl border bg-white p-6">
      <h2 className="text-lg font-semibold">Redes Sociais</h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {SOCIAL_FIELDS.map((field) => (
          <Input
            name={field.label}
            id={field.key}
            type="url"
            value={""}
            placeholder={field.placeholder}
          />
        ))}
      </div>
    </section>
  );
}

export default SocialSection;
