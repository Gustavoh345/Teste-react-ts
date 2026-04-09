function PhonePreview() {
  const socialLinks = [0, 1];
  const customLinks = [0, 1];

  return (
    <section className="rounded-3xl border bg-white p-6">
      <h2 className="text-lg font-semibold">Prévia</h2>

      <div className="mt-6 flex justify-center">
        <div className="relative w-80 rounded-3xl border-slate-900 bg-slate-950 p-2">
          <div className="min-h-96 h-140 overflow-y-auto rounded-2xl bg-white px-6 pb-6 pt-10 text-center">
            <div className="mx-auto h-16 w-16 rounded-full bg-linear-to-br from-sky-200 via-white to-emerald-100" />
            <h3 className="mt-4 text-base font-semibold">Seu perfil</h3>
            <p className="text-xs text-slate-500">@seuuser</p>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                1.2k seguidores
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                48 repos
              </span>
            </div>

            <div className="mt-4 flex items-center justify-center gap-2">
              {socialLinks.length > 0 ? (
                socialLinks.map((key) => (
                  <span
                    key={key}
                    className="flex h-8 w-8 items-center justify-center rounded-full border text-xs font-semibold text-slate-500"
                  >
                    Link
                  </span>
                ))
              ) : (
                <span className="text-xs text-slate-400">
                  Sem redes cadastradas
                </span>
              )}
            </div>

            <div className="mt-6 space-y-2 text-left">
              {customLinks.length > 0 ? (
                customLinks.map((_, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border bg-slate-50 px-4 py-3 text-sm font-semibold"
                  >
                    Link personalizado {index + 1}
                  </div>
                ))
              ) : (
                <div className="rounded-2xl border border-dashed px-4 py-3 text-xs text-slate-400">
                  Seus links vão aparecer aqui
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PhonePreview;
