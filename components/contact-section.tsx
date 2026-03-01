export function ContactSection() {
  return (
    <section id="contact" className="section-anchor">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="rounded-3xl border border-line bg-white p-6 shadow-panel sm:p-10">
          <h2 className="font-[var(--font-heading)] text-3xl text-slate-900 sm:text-4xl">联系我</h2>
          <div className="mt-6 grid gap-3 text-sm text-electric sm:text-base">
            <p>
              邮箱：<a className="text-electric hover:underline" href="mailto:15005077363@163.com">15005077363@163.com</a>
            </p>
            <p>
              电话：<a className="text-electric hover:underline" href="tel:19065470136">19065470136</a>
            </p>
          </div>

          <div className="mt-8">
            <a
              href="/resume.pdf"
              className="inline-flex rounded-xl border border-electric bg-electric px-5 py-3 text-sm font-medium text-white transition hover:bg-[#506248] hover:shadow-[0_10px_22px_rgba(95,114,87,0.24)]"
            >
              查看简历
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
