import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default async function Home({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);

  return (
    <>
      <Nav locale={locale} nav={dict.nav} />
      <main>
        <Hero hero={dict.hero} />
        <About about={dict.about} />
        <Skills skills={dict.skills} />
        <Work work={dict.work} />
        <Contact contact={dict.contact} />
      </main>
      <Footer footer={dict.footer} />
    </>
  );
}
